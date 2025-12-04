import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { Modal } from 'bootstrap';
import { Loading } from '../../components/Loading';

const { VITE_APP_Unsplash_AccessKey } = import.meta.env;

export const UseEffectPage = () => {
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

    //取得圖片
    const getPhoto = async (pageNum = 1, append = false) => {
        if (!searchData.trim() || searchData.trim().length < 3) {
            return;
        }

        // 檢查是否已達請求限制
        if (rateLimit !== null && parseInt(rateLimit) <= 30) {
            alert('⚠️ API 請求次數已用盡，請稍後再試');
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.get(`${api}?query=${searchData}&client_id=${accessKey}&page=${pageNum}&per_page=12`);
            console.log(response.data);

            // 取得剩餘請求次數
            const remaining = response.headers['x-ratelimit-remaining'];
            setRateLimit(remaining);

            // 如果剩餘次數為 0，提醒用戶
            if (parseInt(remaining) <= 0) {
                alert('⚠️ API 請求次數已用盡，這是最後一次請求的結果');
            }

            if (append) {
                setPhotos(prev => [...prev, ...response.data.results]);
            } else {
                setPhotos(response.data.results);
            }
        } catch (error) {
            console.error('Error fetching data from Unsplash API:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // 處理焦點離開 會抓query來使用
    const handleBlur = () => {
        if (query.trim().length >= 3) {
            setSearchData(query);
        }
    };

    // 使用 useEffect 在 searchData 改變時自動搜尋
    // 1.不加入預設時每次都會觸發 
    // 2.加入 searchData 時異動才會觸發
    // 3.不可放在內層例如if裡面
    // 4.useEffect(async() 不要這樣寫
    // 5.可以在裡面使用立即函式來用async
    // 6.預設[searchData,query]可以多個如果改變則會執行
    useEffect(() => {
        if (searchData) {
            setPage(1);
            getPhoto(1, false);
        }
    }, [searchData]);

    // 監聽頁碼變化,加載更多資料
    useEffect(() => {
        console.log('page changed:', page);
        if (page > 1 && searchData) {
            console.log('loading page:', page);
            getPhoto(page, true);
        }
    }, [page]);

    // 使用 Intersection Observer 實作無限捲動
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isLoadingRef.current && photosLengthRef.current > 0) {
                    console.log('觸發加載更多');
                    setPage(prev => prev + 1);
                }
            },
            { threshold: 0.5 }
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
        <>
            <div className="container mt-4">
                <h2 className="mb-4">🖼️ Unsplash 圖片搜尋</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="輸入關鍵字搜尋圖片 (至少 3 個字)"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onBlur={handleBlur}
                    />
                    {rateLimit !== null && (
                        <p className={`mt-2 ${parseInt(rateLimit) <= 10 ? 'text-danger fw-bold' : 'text-muted'}`}>
                            剩餘請求次數: {rateLimit}
                            {parseInt(rateLimit) <= 0 && ' ⚠️ 已用盡'}
                            {parseInt(rateLimit) > 0 && parseInt(rateLimit) <= 10 && ' ⚠️ 即將用盡'}
                        </p>
                    )}
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {photos.map(photo => (
                        <div key={photo.id} className="col">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={photo.urls.small}
                                    alt={photo.alt_description || 'Unsplash photo'}
                                    className="card-img-top"
                                    style={{ height: '250px', objectFit: 'cover', cursor: 'pointer' }}
                                    onClick={() => openImageModal(photo)}
                                />
                                <div className="card-body">
                                    <h6 className="card-title text-truncate">
                                        {photo.alt_description || '無描述'}
                                    </h6>
                                    <p className="card-text small text-muted mb-2">
                                        📸 by {photo.user.name}
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-muted">
                                            ❤️ {photo.likes.toLocaleString()}
                                        </small>
                                        <a
                                            href={photo.links.html}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            查看原圖
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {photos.length === 0 && !isLoading && (
                    <div className="text-center text-muted mt-5">
                        <p className="fs-5">沒有找到圖片,請嘗試其他關鍵字</p>
                    </div>
                )}

                {/* 滾動偵測點 */}
                <div ref={loadingSentinelRef} style={{ height: '20px', margin: '10px 0' }}></div>

                {isLoading && <Loading><b>載入中，請稍候...</b></Loading>}
            </div>

            {/* 圖片預覽 Modal */}
            <div className="modal fade" ref={modalRef} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {selectedImage?.alt_description || '圖片預覽'}
                            </h5>
                            <button type="button" className="btn-close" onClick={closeImageModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            {selectedImage && (
                                <>
                                    <img
                                        src={selectedImage.urls.regular}
                                        alt={selectedImage.alt_description || 'Unsplash photo'}
                                        className="img-fluid mb-3"
                                        style={{ maxHeight: '70vh', objectFit: 'contain' }}
                                    />
                                    <div className="text-start">
                                        <p className="mb-2">
                                            <strong>📸 攝影師:</strong> {selectedImage.user.name}
                                        </p>
                                        <p className="mb-2">
                                            <strong>❤️ 喜歡數:</strong> {selectedImage.likes.toLocaleString()}
                                        </p>
                                        {selectedImage.description && (
                                            <p className="mb-2">
                                                <strong>📝 描述:</strong> {selectedImage.description}
                                            </p>
                                        )}
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
                                    在 Unsplash 查看
                                </a>
                            )}
                            <button type="button" className="btn btn-secondary" onClick={closeImageModal}>關閉</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};