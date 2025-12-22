import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Modal } from 'bootstrap';
import Loading from '../../components/Loading';

const { VITE_APP_Unsplash_AccessKey } = import.meta.env;

export default function UseEffectPage() {
    const [query, setQuery] = useState('');
    const [searchData, setSearchData] = useState('');
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [rateLimit, setRateLimit] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const modalRef = useRef(null);
    const photoModal = useRef(null);
    const isLoadingRef = useRef(false);
    const photosLengthRef = useRef(0);
    const loadingSentinelRef = useRef(null);

    const api = 'https://api.unsplash.com/search/photos/';
    const accessKey = VITE_APP_Unsplash_AccessKey;

    // 更新 ref
    useEffect(() => {
        isLoadingRef.current = isLoading;
    }, [isLoading]);

    useEffect(() => {
        photosLengthRef.current = photos.length;
    }, [photos]);

    // 取得圖片
    const getPhoto = async (pageNum = 1, append = false) => {
        if (!searchData.trim() || searchData.trim().length < 3) {
            return;
        }

        if (rateLimit !== null && parseInt(rateLimit) <= 0) {
            alert('⚠️ API 請求次數已用盡，請稍後再試');
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.get(`${api}?query=${searchData}&client_id=${accessKey}&page=${pageNum}&per_page=12`);
            console.log('📸 API Response:', response.data);

            const remaining = response.headers['x-ratelimit-remaining'];
            setRateLimit(remaining);

            if (parseInt(remaining) <= 0) {
                alert('⚠️ API 請求次數已用盡，這是最後一次請求的結果');
            }

            if (append) {
                setPhotos(prev => [...prev, ...response.data.results]);
            } else {
                setPhotos(response.data.results);
            }
        } catch (error) {
            console.error('❌ Error fetching data from Unsplash API:', error);
            alert('發生錯誤，請稍後再試');
        } finally {
            setIsLoading(false);
        }
    };

    // 處理焦點離開
    const handleBlur = () => {
        if (query.trim().length >= 3) {
            setSearchData(query);
        }
    };

    // 搜尋資料改變時重新搜尋
    useEffect(() => {
        if (searchData) {
            setPage(1);
            setPhotos([]);
            getPhoto(1, false);
        }
    }, [searchData]);

    // 頁碼變化時載入更多
    useEffect(() => {
        if (page > 1 && searchData) {
            getPhoto(page, true);
        }
    }, [page]);

    // 無限滾動偵測
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !isLoadingRef.current && photosLengthRef.current > 0) {
                    console.log('🔄 Loading more photos...');
                    setPage(prev => prev + 1);
                }
            },
            { threshold: 0.1 }
        );

        if (loadingSentinelRef.current) {
            observer.observe(loadingSentinelRef.current);
        }

        return () => {
            if (loadingSentinelRef.current) {
                observer.unobserve(loadingSentinelRef.current);
            }
        };
    }, []);

    // 初始化 Modal
    useEffect(() => {
        photoModal.current = new Modal(modalRef.current);
    }, []);

    // 開啟圖片 Modal
    const openImageModal = (photo) => {
        setSelectedImage(photo);
        photoModal.current.show();
    };

    // 關閉 Modal
    const closeImageModal = () => {
        photoModal.current.hide();
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-images me-3"></i>useEffect + useRef + Unsplash API</h1><p className="lead mb-0">API 串階與滾動載入</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>

            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">useEffect</h5><ul className="text-muted mb-0"><li>處理副作用（API 呼叫、訂閱、DOM 操作）</li><li>依賴陣列控制執行時機</li><li>清除函式避免記憶體洩漏</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-lightning text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">useRef</h5><ul className="text-muted mb-0"><li>保存可變值不觸發渲染</li><li>存取 DOM 元素參照</li><li>儲存 Modal、Observer 實例</li></ul></div></div></div></div></div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3>
                <div className="container mt-2">
                    {/* API 狀態顯示 */}
                    {rateLimit !== null && (
                        <div className={`alert ${parseInt(rateLimit) > 30 ? 'alert-success' : parseInt(rateLimit) > 10 ? 'alert-warning' : 'alert-danger'} border-0 shadow-sm mb-4`}>
                            <div className="d-flex align-items-center justify-content-between">
                                <span>
                                    <i className="bi bi-speedometer2 me-2"></i>
                                    <strong>API 剩餘請求次數：</strong>
                                </span>
                                <span className="badge bg-dark fs-6">{rateLimit} / 50</span>
                            </div>
                            {parseInt(rateLimit) <= 10 && (
                                <small className="d-block mt-2">
                                    <i className="bi bi-exclamation-triangle me-1"></i>
                                    請求次數即將用盡，請謹慎使用
                                </small>
                            )}
                        </div>
                    )}

                    {/* 搜尋區域 */}
                    <div className="card mb-4 border-0 shadow-sm">
                        <div className="card-body bg-light">
                            <div className="row g-3">
                                <div className="col-md-8">
                                    <label className="form-label small text-muted mb-1">
                                        <i className="bi bi-search me-1"></i>
                                        搜尋關鍵字（至少 3 個字元）
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="例如: nature, technology, food, travel..."
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        onBlur={handleBlur}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter' && query.trim().length >= 3) {
                                                setSearchData(query);
                                            }
                                        }}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label small text-muted mb-1">&nbsp;</label>
                                    <button
                                        className="btn btn-primary btn-lg w-100"
                                        onClick={() => query.trim().length >= 3 && setSearchData(query)}
                                        disabled={query.trim().length < 3 || isLoading}
                                    >
                                        <i className="bi bi-search me-2"></i>
                                        {isLoading ? '搜尋中...' : '搜尋圖片'}
                                    </button>
                                </div>
                            </div>
                            {query.trim().length > 0 && query.trim().length < 3 && (
                                <small className="text-danger d-block mt-2">
                                    <i className="bi bi-exclamation-circle me-1"></i>
                                    請輸入至少 3 個字元
                                </small>
                            )}
                        </div>
                    </div>

                    {/* 搜尋結果資訊 */}
                    {searchData && photos.length > 0 && (
                        <div className="alert alert-info border-0 shadow-sm mb-4">
                            <i className="bi bi-info-circle me-2"></i>
                            搜尋「<strong>{searchData}</strong>」找到 <strong>{photos.length}</strong> 張圖片
                            <span className="text-muted ms-2 small">(滾動到底部自動載入更多)</span>
                        </div>
                    )}

                    {/* 圖片網格 */}
                    <div className="row g-4">
                        {photos.map((photo) => (
                            <div key={photo.id} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card h-100 border-0 shadow-sm"
                                    style={{
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => openImageModal(photo)}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '';
                                    }}
                                >
                                    <img
                                        src={photo.urls.small}
                                        alt={photo.alt_description || 'Unsplash photo'}
                                        className="card-img-top"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                        loading="lazy"
                                    />
                                    <div className="card-body p-3">
                                        <p className="card-text small text-muted mb-2 text-truncate" title={photo.alt_description}>
                                            {photo.alt_description || '無描述'}
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-muted">
                                                <i className="bi bi-heart-fill text-danger me-1"></i>
                                                {photo.likes.toLocaleString()}
                                            </small>
                                            <small className="text-muted text-truncate" style={{ maxWidth: '120px' }}>
                                                <i className="bi bi-person-circle me-1"></i>
                                                {photo.user.name}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 空狀態 */}
                    {photos.length === 0 && !isLoading && searchData && (
                        <div className="text-center text-muted mt-5 py-5">
                            <i className="bi bi-search display-1 mb-3 d-block"></i>
                            <p className="fs-5">沒有找到相關圖片</p>
                            <p className="small">請嘗試其他關鍵字，例如: nature, technology, food, travel</p>
                        </div>
                    )}

                    {/* 初始狀態 */}
                    {photos.length === 0 && !isLoading && !searchData && (
                        <div className="text-center text-muted mt-5 py-5">
                            <i className="bi bi-images display-1 mb-3 d-block"></i>
                            <p className="fs-5">開始搜尋美麗的圖片</p>
                            <p className="small">輸入關鍵字並點擊搜尋按鈕</p>
                        </div>
                    )}

                    {/* 滾動偵測點 */}
                    <div ref={loadingSentinelRef} style={{ height: '20px', margin: '20px 0' }}></div>

                    {/* 載入中 */}
                    {isLoading && <Loading />}
                </div>
            </div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-slash me-2 text-success"></i>程式碼範例</h3>
                <div className="container mt-2">
                    <div className="card bg-dark text-white shadow mt-3">
                        <div className="card-body">
                            <pre className="mb-0" style={{ fontSize: '0.85rem' }}>
                                {`// 1️⃣ useEffect 監聽搜尋資料改變
useEffect(() => {
  if (searchData) {
    setPage(1);
    setPhotos([]);
    getPhoto(1, false);
  }
}, [searchData]);

// 2️⃣ useRef 保存 Modal 實例
const photoModal = useRef(null);
useEffect(() => {
  photoModal.current = new Modal(modalRef.current);
}, []);

// 3️⃣ IntersectionObserver 無限滾動
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !isLoading) {
      setPage(prev => prev + 1);
    }
  });
  
  if (loadingSentinelRef.current) {
    observer.observe(loadingSentinelRef.current);
  }
  
  return () => observer.disconnect();
}, []);`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div></div></div></div>

            {/* 圖片預覽 Modal */}
            <div className="modal fade" ref={modalRef} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-white">
                            <h5 className="modal-title">
                                <i className="bi bi-image me-2"></i>
                                {selectedImage?.alt_description || '圖片預覽'}
                            </h5>
                            <button type="button" className="btn-close btn-close-white" onClick={closeImageModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center bg-dark">
                            {selectedImage && (
                                <>
                                    <img
                                        src={selectedImage.urls.regular}
                                        alt={selectedImage.alt_description || 'Unsplash photo'}
                                        className="img-fluid rounded mb-3"
                                        style={{ maxHeight: '70vh', objectFit: 'contain' }}
                                    />
                                    <div className="text-start bg-light p-3 rounded">
                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <p className="mb-1 small text-muted">攝影師</p>
                                                <p className="mb-0">
                                                    <i className="bi bi-person-circle me-1"></i>
                                                    <strong>{selectedImage.user.name}</strong>
                                                </p>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <p className="mb-1 small text-muted">喜歡數</p>
                                                <p className="mb-0">
                                                    <i className="bi bi-heart-fill text-danger me-1"></i>
                                                    <strong>{selectedImage.likes.toLocaleString()}</strong>
                                                </p>
                                            </div>
                                            {selectedImage.description && (
                                                <div className="col-12 mt-2">
                                                    <p className="mb-1 small text-muted">描述</p>
                                                    <p className="mb-0">{selectedImage.description}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="modal-footer">
                            {selectedImage && (
                                <a
                                    href={selectedImage.links.html}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    <i className="bi bi-box-arrow-up-right me-1"></i>
                                    在 Unsplash 查看
                                </a>
                            )}
                            <button type="button" className="btn btn-secondary" onClick={closeImageModal}>
                                關閉
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
