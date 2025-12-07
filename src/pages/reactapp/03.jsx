import { useState, useRef, useEffect } from 'react';
import { Modal } from 'bootstrap';

function Counter() {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);

    renderCount.current += 1;

    return (
        <div className="card bg-light">
            <div className="card-body">
                <h6 className="card-subtitle mb-3">
                    <i className="bi bi-graph-up me-2"></i>
                    渲染次數追蹤示範
                </h6>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label small text-muted">計數值（觸發渲染）</label>
                            <div className="display-4 text-primary">{count}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label small text-muted">渲染次數（useRef 追蹤）</label>
                            <div className="display-4 text-success">{renderCount.current}</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <button
                            className="btn btn-primary btn-lg w-100"
                            onClick={() => setCount(count + 1)}
                        >
                            <i className="bi bi-plus-circle me-2"></i>
                            增加計數
                        </button>
                        <small className="text-muted d-block mt-2">
                            <i className="bi bi-info-circle me-1"></i>
                            開發模式下 StrictMode 會導致渲染兩次
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function UseRefPage() {
    const modalRef = useRef(null);
    const customerModal = useRef(null);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        customerModal.current = new Modal(modalRef.current);
    }, []);

    const modalOpen = (imageUrl = '') => {
        setSelectedImage(imageUrl);
        customerModal.current.show();
    }

    const modalClose = () => {
        customerModal.current.hide();
    }

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-box-arrow-up-right me-3"></i>useRef + Bootstrap Modal</h1><p className="lead mb-0">DOM 參照與不觸發渲染的狀態</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>

            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">useRef 特性</h5><ul className="text-muted mb-0"><li>建立可變的參照物件</li><li>.current 屬性可儲存任何值</li><li>值改變時不觸發渲染</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-lightning text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">常見應用</h5><ul className="text-muted mb-0"><li>存取 DOM 元素參照</li><li>儲存第三方函式庫實例</li><li>保存計時器 ID</li><li>追蹤前一個狀態值</li></ul></div></div></div></div></div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3>
                <div className="container mt-2">
                    {/* 圖片展示區 */}
                    <div className="mb-4">
                        <h5 className="mb-3">
                            <i className="bi bi-images me-2"></i>
                            🖼️ 圖片畫廊（點擊預覽）
                        </h5>
                        <div className="row g-3">
                            <div className="col-md-3 col-sm-6">
                                <div className="card h-100 border-0 shadow-sm"
                                    style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                                    onClick={() => modalOpen('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800')}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
                                        alt="Mountain"
                                        className="card-img-top"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body p-3">
                                        <h6 className="card-title mb-1"><i className="bi bi-image me-1"></i>山景</h6>
                                        <p className="card-text small text-muted mb-0">點擊查看大圖</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="card h-100 border-0 shadow-sm"
                                    style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                                    onClick={() => modalOpen('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800')}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400"
                                        alt="Nature"
                                        className="card-img-top"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body p-3">
                                        <h6 className="card-title mb-1"><i className="bi bi-image me-1"></i>自然風光</h6>
                                        <p className="card-text small text-muted mb-0">點擊查看大圖</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="card h-100 border-0 shadow-sm"
                                    style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                                    onClick={() => modalOpen('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800')}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400"
                                        alt="Sunset"
                                        className="card-img-top"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body p-3">
                                        <h6 className="card-title mb-1"><i className="bi bi-image me-1"></i>日落</h6>
                                        <p className="card-text small text-muted mb-0">點擊查看大圖</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="card h-100 border-0 shadow-sm"
                                    style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                                    onClick={() => modalOpen('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800')}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400"
                                        alt="Forest"
                                        className="card-img-top"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body p-3">
                                        <h6 className="card-title mb-1"><i className="bi bi-image me-1"></i>森林</h6>
                                        <p className="card-text small text-muted mb-0">點擊查看大圖</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-grid mb-4">
                        <button type="button" className="btn btn-outline-primary btn-lg" onClick={() => modalOpen()} >
                            <i className="bi bi-window me-2"></i>
                            開啟 Modal 測試（無圖片）
                        </button>
                    </div>

                    <hr className="my-4" />

                    <Counter />

                    <div className="modal fade" ref={modalRef} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">
                                <div className="modal-header bg-primary text-white">
                                    <h1 className="modal-title fs-5">{selectedImage ? '圖片預覽' : 'Modal 示範'}</h1>
                                    <button type="button" className="btn-close" onClick={modalClose} aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-center">
                                    {selectedImage ? (
                                        <>
                                            <img
                                                src={selectedImage}
                                                alt="Preview"
                                                className="img-fluid mb-3"
                                                style={{ maxHeight: '60vh', objectFit: 'contain', borderRadius: '8px' }}
                                            />
                                            <div className="alert alert-info mt-3">
                                                <small>
                                                    <i className="bi bi-info-circle me-1"></i>
                                                    使用 <code>useRef</code> 儲存 Modal 實例，透過 <code>selectedImage</code> state 控制顯示內容
                                                </small>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <h5 className="mb-4">
                                                <i className="bi bi-check2-circle me-2 text-success"></i>
                                                Bootstrap Modal 整合步驟
                                            </h5>
                                            <div className="text-start">
                                                <div className="list-group">
                                                    <div className="list-group-item">
                                                        <strong className="text-success">✅ 步驟 1：</strong> 修改 class 為 className
                                                    </div>
                                                    <div className="list-group-item">
                                                        <strong className="text-success">✅ 步驟 2：</strong> main.jsx 匯入 'bootstrap'
                                                    </div>
                                                    <div className="list-group-item">
                                                        <strong className="text-success">✅ 步驟 3：</strong> 使用 useRef 儲存 DOM 參照
                                                    </div>
                                                    <div className="list-group-item">
                                                        <strong className="text-success">✅ 步驟 4：</strong> 使用 useEffect 初始化 Modal 實例
                                                    </div>
                                                    <div className="list-group-item">
                                                        <strong className="text-success">✅ 步驟 5：</strong> 透過 state 動態控制 Modal 內容
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={modalClose}>關閉</button>
                                    {!selectedImage && <button type="button" className="btn btn-primary">存檔</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-slash me-2 text-success"></i>程式碼範例</h3>
                <div className="container mt-2">
                    <div className="card bg-dark text-white shadow">
                        <div className="card-body">
                            <pre className="mb-0" style={{ fontSize: '0.85rem' }}>
                                {`// 1️⃣ 建立 ref 儲存 DOM 和實例
const modalRef = useRef(null);
const customerModal = useRef(null);

// 2️⃣ 使用 useEffect 初始化 Modal
useEffect(() => {
  customerModal.current = new Modal(modalRef.current);
}, []);

// 3️⃣ 使用 ref 追蹤渲染次數（不觸發重渲染）
const renderCount = useRef(0);
renderCount.current += 1;

// 4️⃣ 控制 Modal 顯示/隱藏
const modalOpen = (imageUrl) => {
  setSelectedImage(imageUrl);
  customerModal.current.show();
};

const modalClose = () => {
  customerModal.current.hide();
};

// 5️⃣ JSX 中使用 ref
<div className="modal" ref={modalRef}>
  {/* Modal 內容 */}
</div>`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div></div></div></div>
        </div>
    )
};
