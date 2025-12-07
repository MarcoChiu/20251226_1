import { useState, useRef } from 'react';

const UseRefExample = () => {
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);
    const renderCount = useRef(0);
    renderCount.current++;

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.style.backgroundColor = '#e7f1ff'; // Light blue
        }
    };

    return (
        <div className="container py-5">
            {/* 標題區塊 */}
            <div
                className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)'
                }}
            >
                <div className="position-relative" style={{ zIndex: 1 }}>
                    <h1 className="display-4 fw-bold mb-3">
                        <i className="bi bi-bookmark-fill me-3"></i>
                        useRef Hook
                    </h1>
                    <p className="lead mb-0">引用管理 - 訪問 DOM 和保存可變值</p>
                </div>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        zIndex: 0
                    }}
                ></div>
            </div>

            {/* 功能說明 */}
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h2 className="h4 mb-4">
                                <i className="bi bi-info-circle me-2 text-primary"></i>
                                Hook 說明
                            </h2>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-check2-circle text-primary fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">主要用途</h5>
                                            <ul className="text-muted mb-0">
                                                <li>訪問 DOM 元素進行操作</li>
                                                <li>保存不觸發渲染的可變值</li>
                                                <li>儲存 timer ID 等實例值</li>
                                                <li>追蹤前一次的狀態值</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-warning bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-exclamation-triangle text-warning fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">注意事項</h5>
                                            <ul className="text-muted mb-0">
                                                <li>修改 .current 不觸發重渲染</li>
                                                <li>避免在渲染期間讀寫 ref</li>
                                                <li>ref 值在整個生命週期保持</li>
                                                <li>與 useState 的主要區別</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 範例展示 */}
            <div className="row g-4 mb-5">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-play-circle me-2"></i>
                                互動範例
                            </h3>
                            <div className="bg-light p-4 rounded-3">
                                <div className="mb-4">
                                    <label className="form-label">控制 DOM 元素:</label>
                                    <div className="input-group">
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            placeholder="點擊按鈕聚焦此處"
                                            className="form-control"
                                        />
                                        <button
                                            onClick={focusInput}
                                            className="btn btn-outline-primary"
                                        >
                                            聚焦 Input
                                        </button>
                                    </div>
                                </div>

                                <hr />

                                <div className="pt-2">
                                    <p className="mb-2">State Count: <span className="fw-bold">{count}</span></p>
                                    <p className="mb-2">Render Count (useRef): <span className="fw-bold text-danger">{renderCount.current}</span></p>
                                    <p className="text-secondary small mb-2">
                                        (注意: 更新 Ref 不會觸發渲染，畫面上 Render Count 只有在 state 跟著更新時才會變)
                                    </p>
                                    <button
                                        onClick={() => setCount(c => c + 1)}
                                        className="btn btn-success"
                                    >
                                        增加 State (觸發渲染)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 程式碼範例 */}
            <div className="row">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-code-slash me-2"></i>
                                程式碼範例
                            </h3>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`// 📌 訪問 DOM 元素
const inputRef = useRef(null);
inputRef.current.focus();

// 📌 保存不觸發渲染的值
const countRef = useRef(0);
countRef.current += 1;

// 📌 追蹤渲染次數
const renderCount = useRef(0);
useEffect(() => {
  renderCount.current += 1;
});`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* 最佳實踐 */}
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm bg-light">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-lightbulb me-2 text-warning"></i>
                                最佳實踐
                            </h3>
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>DOM 操作:</strong> 聚焦、滾動、測量
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>保存值:</strong> timer ID, previous value
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 在渲染期間讀寫 ref
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UseRefExample;
