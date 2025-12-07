import { useState, useInsertionEffect } from 'react';

const useCSS = (rule) => {
    useInsertionEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = rule;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, [rule]);
};

const UseInsertionEffectExample = () => {
    const [color, setColor] = useState('blue');

    const className = `dynamic-box-${color}`;
    useCSS(`.${className} { background-color: ${color}; color: white; padding: 20px; text-align: center; transition: all 0.5s; border-radius: 8px; }`);

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
                        <i className="bi bi-palette-fill me-3"></i>
                        useInsertionEffect Hook
                    </h1>
                    <p className="lead mb-0">CSS 插入 - CSS-in-JS 函式庫專用</p>
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
                                                <li>專為 CSS-in-JS 函式庫設計</li>
                                                <li>在 DOM 變更前插入樣式規則</li>
                                                <li>動態生成並注入 CSS</li>
                                                <li>確保樣式在佈局讀取前就位</li>
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
                                                <li>僅限函式庫作者使用</li>
                                                <li>一般應用開發不需要</li>
                                                <li>無法讀取 DOM 和 refs</li>
                                                <li>執行時機早於 useLayoutEffect</li>
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
                                <p className="mb-4">
                                    點擊下方按鈕切換顏色 (動態插入 <code>&lt;style&gt;</code>)。
                                </p>

                                <div className={className}>
                                    我是動態樣式的盒子
                                </div>

                                <div className="mt-4 d-flex gap-2">
                                    <button onClick={() => setColor('red')} className="btn btn-danger">Red</button>
                                    <button onClick={() => setColor('blue')} className="btn btn-primary">Blue</button>
                                    <button onClick={() => setColor('green')} className="btn btn-success">Green</button>
                                </div>
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
                                <code>{`import { useInsertionEffect } from 'react';

function useCSS(rule) {
  useInsertionEffect(() => {
    // 在佈局讀取前插入樣式
    const style = document.createElement('style');
    style.innerHTML = rule;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [rule]);
}

// 使用範例
function Component() {
  useCSS('.my-class { color: red; }');
  return <div className="my-class">Text</div>;
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
                                            <strong>適用場景:</strong> 開發 CSS-in-JS 函式庫
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>執行順序:</strong> Render → useInsertionEffect → DOM 更新
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 一般開發者不應使用
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 在此 Hook 中讀取 DOM 或 refs
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

export default UseInsertionEffectExample;
