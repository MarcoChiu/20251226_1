import { useState, useMemo } from 'react';

const UseMemoExample = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(1);

    const expensiveCalculation = (num) => {
        // console.log('Calculating...'); 
        for (let i = 0; i < 100000; i++) { } // Reduced loop for responsiveness in demo
        return num * 2;
    };

    const calculatedValue = useMemo(() => {
        return expensiveCalculation(number);
    }, [number]);

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
                        <i className="bi bi-cpu-fill me-3"></i>
                        useMemo Hook
                    </h1>
                    <p className="lead mb-0">計算快取 - 記憶昂貴計算結果</p>
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
                                                <li>快取昂貴的計算結果</li>
                                                <li>避免不必要的重複計算</li>
                                                <li>保持物件/陣列引用相等</li>
                                                <li>配合 React.memo 優化效能</li>
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
                                                <li>不要過早最佳化</li>
                                                <li>本身也有記憶體成本</li>
                                                <li>依賴陣列要完整正確</li>
                                                <li>簡單計算不需使用</li>
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
                                    <label className="form-label">輸入數字 (觸發計算):</label>
                                    <input
                                        type="number"
                                        value={number}
                                        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
                                        className="form-control"
                                        style={{ maxWidth: '200px' }}
                                    />
                                    <p className="mt-2 fs-5">計算結果 (number * 2): <span className="fw-bold text-danger">{calculatedValue}</span></p>
                                </div>

                                <hr />

                                <div className="pt-2">
                                    <p className="mb-2">無關的 Counter: {count}</p>
                                    <button
                                        onClick={() => setCount(c => c + 1)}
                                        className="btn btn-primary"
                                    >
                                        增加 Counter (不觸發重算)
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
                                <code>{`// 📌 基本用法：快取昂貴計算
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// 📌 過濾和排序大數據
const filteredData = useMemo(() => {
  return data.filter(item => 
    item.name.includes(searchTerm)
  ).sort((a, b) => a.price - b.price);
}, [data, searchTerm]);

// 📌 保持物件引用相等
const config = useMemo(() => ({
  apiUrl: '/api/data',
  timeout: 5000
}), []);`}</code>
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
                                            <strong>適用場景:</strong> 昂貴計算、大數據處理
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>保持引用:</strong> 配合 React.memo 使用
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 簡單計算也使用 useMemo
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

export default UseMemoExample;
