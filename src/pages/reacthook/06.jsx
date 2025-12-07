import { useState, useContext, createContext } from 'react';

const ThemeContext = createContext(null);
const UserContext = createContext(null);

const ThemedButton = () => {
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);

    // Using bootstrap classes based on theme context
    const btnClass = theme === 'dark' ? 'btn-dark' : 'btn-light';

    return (
        <button className={`btn ${btnClass} border`}>
            {user ? `${user.name} 的按鈕` : '未登入'}
        </button>
    );
};

const Toolbar = () => {
    return (
        <div className="border p-3 m-2 rounded bg-white">
            <p className="text-muted small mb-2">Toolbar (中間組件)</p>
            <ThemedButton />
        </div>
    );
};

const UseContextExample = () => {
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState({ name: 'Alice' });

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
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
                        <i className="bi bi-diagram-3-fill me-3"></i>
                        useContext Hook
                    </h1>
                    <p className="lead mb-0">上下文共享 - 跨組件數據傳遞</p>
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
                                                <li>訂閱 React Context 避免 Prop Drilling</li>
                                                <li>全域狀態管理的基礎</li>
                                                <li>祖先與深層子孫組件直接通信</li>
                                                <li>共享主題、語言、使用者等全域資料</li>
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
                                                <li>必須在 Provider 內部使用</li>
                                                <li>Context 值改變時所有消費者都會重渲染</li>
                                                <li>過度使用可能影響效能</li>
                                                <li>適用於不常變動的全域資料</li>
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
                                    <button
                                        onClick={toggleTheme}
                                        className="btn btn-outline-primary me-2"
                                    >
                                        切換主題 ({theme})
                                    </button>
                                    <button
                                        onClick={() => setUser({ name: user.name === 'Alice' ? 'Bob' : 'Alice' })}
                                        className="btn btn-outline-success"
                                    >
                                        切換使用者 ({user.name})
                                    </button>
                                </div>

                                <ThemeContext.Provider value={theme}>
                                    <UserContext.Provider value={user}>
                                        <Toolbar />
                                    </UserContext.Provider>
                                </ThemeContext.Provider>
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
                                <code>{`import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
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
                                            <strong>適用場景:</strong> 主題、語言、使用者認證等全域狀態
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>效能優化:</strong> 搭配 useMemo 避免不必要的重渲染
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>多個 Context:</strong> 可以巢狀使用多個 Provider
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 頻繁變動的資料應使用狀態管理庫
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

export default UseContextExample;
