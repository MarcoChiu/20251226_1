import { useState, useDebugValue, useEffect } from 'react';

// 自訂 Hook：使用者線上狀態
function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    // 使用 useDebugValue 在 React DevTools 中顯示狀態
    useDebugValue(isOnline ? '🟢 線上' : '🔴 離線');

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return isOnline;
}

// 自訂 Hook：格式化日期
function useFormattedDate(date) {
    // 使用格式化函式作為第二個參數，只在 DevTools 打開時才執行
    useDebugValue(date, (d) => {
        return d ? d.toLocaleString('zh-TW', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }) : '未設定';
    });

    return date;
}

// 自訂 Hook：本地儲存
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    // 在 DevTools 中顯示儲存的鍵和值
    useDebugValue(`${key}: ${JSON.stringify(storedValue)}`);

    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
}

// 自訂 Hook：計時器
function useTimer(initialSeconds = 0) {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(false);

    // 顯示計時器狀態和時間
    useDebugValue(
        { seconds, isRunning },
        ({ seconds, isRunning }) => {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            return `${isRunning ? '▶️ 執行中' : '⏸️ 暫停'} - ${timeStr}`;
        }
    );

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning]);

    const start = () => setIsRunning(true);
    const pause = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return { seconds, isRunning, start, pause, reset };
}

// 自訂 Hook：表單輸入
function useInput(initialValue = '', label = '') {
    const [value, setValue] = useState(initialValue);

    // 顯示欄位標籤和當前值
    useDebugValue(
        value,
        (val) => `${label}: "${val}" (${val.length} 字元)`
    );

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue(initialValue);
    };

    return { value, onChange, reset };
}

// 自訂 Hook：滑鼠位置
function useMousePosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useDebugValue(position, (pos) => `滑鼠: (${pos.x}, ${pos.y})`);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return position;
}

export default function UseDebugValuePage() {
    // 使用各種自訂 Hook
    const isOnline = useOnlineStatus();
    const currentDate = useFormattedDate(new Date());
    const [username, setUsername] = useLocalStorage('demo-username', '');
    const timer = useTimer(0);
    const nameInput = useInput('', '姓名');
    const emailInput = useInput('', '電子郵件');
    const mousePos = useMousePosition();

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-bug-fill me-3"></i>useDebugValue - 除錯工具</h1><p className="lead mb-0">自訂 Hook 狀態視覺化</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>

            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">useDebugValue</h5><ul className="text-muted mb-0"><li>在 React DevTools 顯示自訂 Hook 狀態</li><li>輔助開發與除錯</li><li>可延遲格式化提升效能</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-lightning text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">使用場景</h5><ul className="text-muted mb-0"><li>複雜的自訂 Hook</li><li>需要監控內部狀態變化</li><li>提供更易讀的除錯資訊</li></ul></div></div></div></div></div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3>
                <div className="container mt-2">
                    {/* 提示訊息 */}
                    <div className="alert alert-warning mb-4">
                        <h6 className="alert-heading">🔍 如何查看 useDebugValue</h6>
                        <ol className="mb-0">
                            <li>打開瀏覽器開發者工具 (F12)</li>
                            <li>切換到「Components」標籤頁</li>
                            <li>選擇「UseDebugValuePage」元件</li>
                            <li>在右側面板查看「hooks」區域</li>
                            <li>你會看到每個自訂 Hook 的除錯資訊</li>
                        </ol>
                    </div>

                    {/* 範例 1: 線上狀態 */}
                    <div className="mb-4">
                        <h5>📡 範例 1: 線上狀態檢測</h5>
                        <div className="card">
                            <div className="card-body">
                                <p className="mb-2">
                                    <strong>網路狀態：</strong>
                                    <span className={`badge ${isOnline ? 'bg-success' : 'bg-danger'} ms-2`}>
                                        {isOnline ? '🟢 線上' : '🔴 離線'}
                                    </span>
                                </p>
                                <small className="text-muted">
                                    在 DevTools 中會顯示：useOnlineStatus: "🟢 線上" 或 "🔴 離線"
                                </small>
                            </div>
                        </div>
                    </div>

                    {/* 範例 2: 日期格式化 */}
                    <div className="mb-4">
                        <h5>📅 範例 2: 格式化日期</h5>
                        <div className="card">
                            <div className="card-body">
                                <p className="mb-2">
                                    <strong>當前時間：</strong> {currentDate.toLocaleString('zh-TW')}
                                </p>
                                <small className="text-muted">
                                    使用格式化函式作為第二個參數，只在 DevTools 打開時才執行格式化
                                </small>
                            </div>
                        </div>
                    </div>

                    {/* 範例 3: 本地儲存 */}
                    <div className="mb-4">
                        <h5>💾 範例 3: 本地儲存</h5>
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-3">
                                    <label className="form-label">使用者名稱</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="輸入使用者名稱..."
                                    />
                                </div>
                                <small className="text-muted">
                                    資料會儲存在 localStorage，重新整理頁面後仍會保留。
                                    在 DevTools 中顯示：demo-username: "你的輸入"
                                </small>
                            </div>
                        </div>
                    </div>

                    {/* 範例 4: 計時器 */}
                    <div className="mb-4">
                        <h5>⏱️ 範例 4: 計時器</h5>
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center mb-3">
                                    <h2 className="display-4 mb-3">
                                        {Math.floor(timer.seconds / 60).toString().padStart(2, '0')}:
                                        {(timer.seconds % 60).toString().padStart(2, '0')}
                                    </h2>
                                    <div className="btn-group" role="group">
                                        <button
                                            className="btn btn-success"
                                            onClick={timer.start}
                                            disabled={timer.isRunning}
                                        >
                                            ▶️ 開始
                                        </button>
                                        <button
                                            className="btn btn-warning"
                                            onClick={timer.pause}
                                            disabled={!timer.isRunning}
                                        >
                                            ⏸️ 暫停
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={timer.reset}
                                        >
                                            🔄 重置
                                        </button>
                                    </div>
                                </div>
                                <small className="text-muted">
                                    在 DevTools 中顯示計時器狀態和格式化時間
                                </small>
                            </div>
                        </div>
                    </div>

                    {/* 範例 5: 表單輸入 */}
                    <div className="mb-4">
                        <h5>📝 範例 5: 表單輸入追蹤</h5>
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-3">
                                    <label className="form-label">姓名</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...nameInput}
                                    />
                                    <small className="text-muted">
                                        {nameInput.value.length} 字元
                                    </small>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">電子郵件</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        {...emailInput}
                                    />
                                    <small className="text-muted">
                                        {emailInput.value.length} 字元
                                    </small>
                                </div>
                                <button
                                    className="btn btn-secondary btn-sm"
                                    onClick={() => {
                                        nameInput.reset();
                                        emailInput.reset();
                                    }}
                                >
                                    清除所有欄位
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 範例 6: 滑鼠位置 */}
                    <div className="mb-4">
                        <h5>🖱️ 範例 6: 滑鼠位置追蹤</h5>
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center">
                                    <p className="mb-2">
                                        <strong>滑鼠座標：</strong>
                                    </p>
                                    <h4 className="mb-0">
                                        X: <span className="badge bg-primary">{mousePos.x}</span>
                                        {' '}
                                        Y: <span className="badge bg-success">{mousePos.y}</span>
                                    </h4>
                                </div>
                                <small className="text-muted d-block mt-2">
                                    移動滑鼠來查看座標變化。在 DevTools 中會即時更新
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-slash me-2 text-success"></i>程式碼範例</h3>
                <div className="container mt-2">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <pre className="mb-0" style={{ fontSize: '0.85rem' }}>
                                {`function useCustomHook(value) {
  const [state, setState] = useState(value);
  
  // 基本用法
  useDebugValue(state);
  
  // 使用格式化函式（延遲執行）
  useDebugValue(state, (s) => \`格式化: \${s}\`);
  
  return [state, setState];
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div></div></div></div>
        </div>
    );
};
