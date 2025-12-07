import { useState, useDeferredValue, useMemo } from 'react';

const SlowList = ({ text }) => {
    const items = useMemo(() => {
        const result = [];
        for (let i = 0; i < 2000; i++) {
            result.push(<li key={i} className="list-group-item text-muted small">Match for "{text}": Item #{i}</li>);
        }
        return result;
    }, [text]);

    return (
        <div className="card mt-3">
            <div className="card-header bg-light">Results for "{text}"</div>
            <ul className="list-group list-group-flush" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {items}
            </ul>
        </div>
    );
};

const UseDeferredValueExample = () => {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);

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
                        <i className="bi bi-clock-history me-3"></i>
                        useDeferredValue Hook
                    </h1>
                    <p className="lead mb-0">延遲值 - 智能延遲 UI 更新</p>
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
                                                <li>延遲更新 UI 的某個部分</li>
                                                <li>與 React 渲染機制深度整合</li>
                                                <li>保持輸入的即時回應性</li>
                                                <li>延遲昂貴的重渲染</li>
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
                                                <li>需要 React 18+ 並發模式</li>
                                                <li>類似 debounce 但更智能</li>
                                                <li>可能產生過時狀態</li>
                                                <li>適用於昂貴的組件渲染</li>
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
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-play-circle me-2"></i>
                                互動範例
                            </h3>
                            <div className="bg-light p-4 rounded-3">
                                <div className="mb-4">
                                    <label className="form-label">搜尋 (Type fast...):</label>
                                    <input
                                        type="text"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className="form-control"
                                    />
                                </div>

                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="p-3 border rounded bg-white">
                                            <p className="mb-1 fw-bold text-danger">Immediate Value:</p>
                                            <p className="text-break">{query || '(empty)'}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`p-3 border rounded bg-white transition-opacity ${query !== deferredQuery ? 'opacity-50' : 'opacity-100'}`}>
                                            <p className="mb-1 fw-bold text-primary">Deferred Value:</p>
                                            <p className="text-break">{deferredQuery || '(empty)'}</p>
                                        </div>
                                    </div>
                                </div>

                                <SlowList text={deferredQuery} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 程式碼範例 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-code-slash me-2"></i>
                                程式碼範例
                            </h3>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`import { useState, useDeferredValue } from 'react';

function SearchResults() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  
  return (
    <>
      <input 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
      />
      {/* 使用延遲值渲染昂貴的列表 */}
      <SlowList text={deferredQuery} />
    </>
  );
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* 最佳實踐 */}
            <div className="row">
                <div className="col-12">
                    <div className="card border-0 shadow-sm bg-light">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-lightbulb me-2 text-warning"></i>
                                最佳實踐
                            </h3>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>適用場景:</strong> 搜尋框配合大型列表
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>檢測過時:</strong> query !== deferredQuery 顯示載入
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>搭配 memo:</strong> 與 React.memo 配合效果更佳
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 不是 debounce 的替代品
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

export default UseDeferredValueExample;
