import { useState, useEffect, useDebugValue, useMemo } from 'react';

/**
 * useDebugValue Hook 範例
 * 
 * useDebugValue 是 React 提供的 Hook,用於在 React DevTools 中顯示自訂 Hook 的除錯資訊。
 * 主要用途:
 * - 在 React DevTools 中顯示自訂 Hook 的標籤
 * - 提供更好的開發者體驗
 * - 顯示 Hook 的內部狀態或計算值
 * - 僅在開發環境中有效
 * 
 * 語法:
 * useDebugValue(value)
 * useDebugValue(value, format)
 * 
 * 注意事項:
 * - 只應在自訂 Hook 內使用
 * - 在生產環境中不會有任何效果
 * - 可提供格式化函式來延遲計算顯示值
 */

// 自訂 Hook: 線上狀態
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

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

  // 在 DevTools 中顯示狀態
  useDebugValue(isOnline ? '線上 🟢' : '離線 🔴');

  return isOnline;
}

function OnlineStatusDemo() {
  const isOnline = useOnlineStatus();

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h3 className="card-title mb-3">
          <i className="bi bi-wifi me-2"></i>
          線上狀態監聽
        </h3>
        <div className={`alert ${isOnline ? 'alert-success' : 'alert-danger'}`}>
          <div className="d-flex align-items-center">
            <i className={`bi ${isOnline ? 'bi-wifi' : 'bi-wifi-off'} fs-1 me-3`}></i>
            <div>
              <h5 className="mb-1">
                {isOnline ? '線上' : '離線'}
              </h5>
              <p className="mb-0">
                開啟 React DevTools 查看 useOnlineStatus Hook 的除錯資訊
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 自訂 Hook: 使用者資料
function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // 模擬 API 呼叫
    const timer = setTimeout(() => {
      setUser({
        id: userId,
        name: `使用者 ${userId}`,
        email: `user${userId}@example.com`,
        role: userId % 2 === 0 ? 'admin' : 'user'
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [userId]);

  // 使用格式化函式,只在 DevTools 開啟時執行
  useDebugValue(user, (u) => {
    if (!u) return '載入中...';
    return `${u.name} (${u.role})`;
  });

  return { user, loading };
}

function UserDemo() {
  const [userId, setUserId] = useState(1);
  const { user, loading } = useUser(userId);

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h3 className="card-title mb-3">
          <i className="bi bi-person-circle me-2"></i>
          使用者資料 Hook
        </h3>
        <div className="mb-3">
          <label className="form-label fw-bold">選擇使用者 ID:</label>
          <div className="btn-group d-block" role="group">
            {[1, 2, 3, 4, 5].map(id => (
              <button
                key={id}
                type="button"
                className={`btn ${userId === id ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setUserId(id)}
              >
                {id}
              </button>
            ))}
          </div>
        </div>
        {loading ? (
          <div className="alert alert-info">
            <i className="bi bi-hourglass-split me-2"></i>
            載入中...
          </div>
        ) : user ? (
          <div className="alert alert-success">
            <h5 className="mb-2">
              <i className="bi bi-person-check me-2"></i>
              {user.name}
            </h5>
            <p className="mb-1">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="mb-0">
              <strong>角色:</strong> 
              <span className={`badge ms-2 ${user.role === 'admin' ? 'bg-danger' : 'bg-primary'}`}>
                {user.role}
              </span>
            </p>
          </div>
        ) : null}
        <p className="text-muted small mb-0">
          <i className="bi bi-info-circle me-2"></i>
          開啟 React DevTools 查看 useUser Hook 的除錯資訊
        </p>
      </div>
    </div>
  );
}

// 自訂 Hook: 本地儲存
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

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  // 顯示鍵名和值的資訊
  useDebugValue(`${key}: ${JSON.stringify(storedValue)}`);

  return [storedValue, setValue];
}

function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('userName', '');
  const [count, setCount] = useLocalStorage('userCount', 0);

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h3 className="card-title mb-3">
          <i className="bi bi-save me-2"></i>
          本地儲存 Hook
        </h3>
        <div className="mb-3">
          <label className="form-label fw-bold">姓名:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="請輸入姓名"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">計數器:</label>
          <div className="d-flex gap-2">
            <button 
              className="btn btn-primary"
              onClick={() => setCount(c => c + 1)}
            >
              <i className="bi bi-plus-circle me-2"></i>
              增加
            </button>
            <button 
              className="btn btn-danger"
              onClick={() => setCount(c => c - 1)}
            >
              <i className="bi bi-dash-circle me-2"></i>
              減少
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => setCount(0)}
            >
              <i className="bi bi-arrow-counterclockwise me-2"></i>
              重置
            </button>
            <div className="alert alert-info mb-0 flex-grow-1 d-flex align-items-center">
              計數: <strong className="ms-2">{count}</strong>
            </div>
          </div>
        </div>
        <div className="alert alert-warning mb-0">
          <i className="bi bi-info-circle me-2"></i>
          資料已儲存至 localStorage,重新整理頁面資料仍會保留
        </div>
      </div>
    </div>
  );
}

// 自訂 Hook: 視窗大小
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 使用格式化顯示寬度 x 高度
  useDebugValue(size, (s) => `${s.width} x ${s.height}`);

  return size;
}

function WindowSizeDemo() {
  const { width, height } = useWindowSize();

  const getSizeCategory = () => {
    if (width < 576) return { name: 'XS (超小)', color: 'danger' };
    if (width < 768) return { name: 'SM (小)', color: 'warning' };
    if (width < 992) return { name: 'MD (中)', color: 'info' };
    if (width < 1200) return { name: 'LG (大)', color: 'primary' };
    return { name: 'XL (超大)', color: 'success' };
  };

  const category = getSizeCategory();

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h3 className="card-title mb-3">
          <i className="bi bi-arrows-fullscreen me-2"></i>
          視窗大小 Hook
        </h3>
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <div className="alert alert-primary mb-0">
              <h6 className="mb-1">寬度</h6>
              <div className="fs-4 fw-bold">{width} px</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="alert alert-success mb-0">
              <h6 className="mb-1">高度</h6>
              <div className="fs-4 fw-bold">{height} px</div>
            </div>
          </div>
        </div>
        <div className={`alert alert-${category.color}`}>
          <h5 className="mb-0">
            <i className="bi bi-display me-2"></i>
            斷點分類: <strong>{category.name}</strong>
          </h5>
        </div>
        <p className="text-muted small mb-0">
          <i className="bi bi-info-circle me-2"></i>
          調整視窗大小查看即時更新
        </p>
      </div>
    </div>
  );
}

export default function UseDebugValueExample() {
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
            <i className="bi bi-bug-fill me-3"></i>
            useDebugValue Hook
          </h1>
          <p className="lead mb-0">在 React DevTools 中顯示自訂 Hook 的除錯資訊</p>
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
                        <li>在 React DevTools 中顯示標籤</li>
                        <li>顯示 Hook 的內部狀態</li>
                        <li>提供更好的開發體驗</li>
                        <li>方便除錯自訂 Hook</li>
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
                        <li>只在自訂 Hook 內使用</li>
                        <li>生產環境中無效果</li>
                        <li>可提供格式化函式</li>
                        <li>不會影響元件行為</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 如何使用 DevTools */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm bg-info bg-opacity-10">
            <div className="card-body">
              <h3 className="card-title mb-3">
                <i className="bi bi-tools me-2 text-info"></i>
                如何查看除錯資訊
              </h3>
              <ol className="mb-0">
                <li className="mb-2">
                  按下 <kbd>F12</kbd> 開啟瀏覽器開發者工具
                </li>
                <li className="mb-2">
                  切換到 <strong>Components</strong> 標籤頁 (需安裝 React DevTools 擴充功能)
                </li>
                <li className="mb-2">
                  選擇使用自訂 Hook 的元件
                </li>
                <li className="mb-0">
                  在右側面板的 <strong>hooks</strong> 區域查看 useDebugValue 顯示的資訊
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* 範例展示 */}
      <div className="row g-4 mb-5">
        <div className="col-lg-6">
          <OnlineStatusDemo />
        </div>
        <div className="col-lg-6">
          <UserDemo />
        </div>
        <div className="col-lg-6">
          <LocalStorageDemo />
        </div>
        <div className="col-lg-6">
          <WindowSizeDemo />
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
                <code>{`import { useState, useEffect, useDebugValue } from 'react';

// 基本使用
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
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
  
  // 在 DevTools 中顯示狀態
  useDebugValue(isOnline ? '線上' : '離線');
  
  return isOnline;
}

// 使用格式化函式 (延遲計算)
function useUser(userId) {
  const [user, setUser] = useState(null);
  
  // 只在 DevTools 開啟時執行格式化
  useDebugValue(user, (u) => {
    return u ? \`\${u.name} (\${u.role})\` : '載入中...';
  });
  
  return user;
}

// 在元件中使用
function App() {
  const isOnline = useOnlineStatus();
  const user = useUser(1);
  
  return <div>狀態: {isOnline ? '線上' : '離線'}</div>;
}`}</code>
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
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <div>
                      <strong>適用場景:</strong> 在自訂 Hook 中使用以改善除錯體驗
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <div>
                      <strong>格式化:</strong> 對於複雜物件使用格式化函式
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <div>
                      <strong>效能:</strong> 格式化函式只在需要時執行
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                    <div>
                      <strong>避免:</strong> 不要在一般元件中使用
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
}
