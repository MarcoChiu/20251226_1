import { useSyncExternalStore, useState } from 'react';

/**
 * useSyncExternalStore Hook 範例
 * 
 * useSyncExternalStore 是 React 18 引入的 Hook,用於訂閱外部資料來源。
 * 主要用途:
 * - 訂閱瀏覽器 API (window size, online status 等)
 * - 整合第三方狀態管理函式庫 (Redux, MobX 等)
 * - 訂閱外部資料儲存
 * - 確保在並發渲染下的資料一致性
 * 
 * 語法:
 * const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
 * 
 * - subscribe: 訂閱函式,返回取消訂閱函式
 * - getSnapshot: 獲取當前快照的函式
 * - getServerSnapshot: (可選) 伺服器端渲染時的快照
 */

// 建立一個簡單的外部儲存
class SimpleStore {
  constructor(initialValue) {
    this.value = initialValue;
    this.listeners = new Set();
  }

  getValue() {
    return this.value;
  }

  setValue(newValue) {
    this.value = newValue;
    this.listeners.forEach(listener => listener());
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

// 建立計數器儲存
const counterStore = new SimpleStore(0);

function CounterDisplay() {
  // 訂閱外部儲存
  const count = useSyncExternalStore(
    (listener) => counterStore.subscribe(listener),
    () => counterStore.getValue()
  );

  return (
    <div className="alert alert-info">
      <h5 className="mb-2">
        <i className="bi bi-123 me-2"></i>
        計數器值: <strong>{count}</strong>
      </h5>
      <p className="mb-0 small">此元件訂閱了外部計數器儲存</p>
    </div>
  );
}

function CounterControls() {
  const increment = () => {
    counterStore.setValue(counterStore.getValue() + 1);
  };

  const decrement = () => {
    counterStore.setValue(counterStore.getValue() - 1);
  };

  const reset = () => {
    counterStore.setValue(0);
  };

  return (
    <div className="d-flex gap-2 mb-3">
      <button onClick={increment} className="btn btn-success">
        <i className="bi bi-plus-circle me-2"></i>
        增加
      </button>
      <button onClick={decrement} className="btn btn-danger">
        <i className="bi bi-dash-circle me-2"></i>
        減少
      </button>
      <button onClick={reset} className="btn btn-secondary">
        <i className="bi bi-arrow-counterclockwise me-2"></i>
        重置
      </button>
    </div>
  );
}

// 訂閱瀏覽器視窗大小
function useWindowWidth() {
  return useSyncExternalStore(
    (listener) => {
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
    },
    () => window.innerWidth,
    () => 0 // SSR 預設值
  );
}

function WindowWidthDisplay() {
  const width = useWindowWidth();

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h3 className="card-title mb-3">
          <i className="bi bi-arrows-expand me-2"></i>
          視窗寬度監聽
        </h3>
        <div className="alert alert-success mb-3">
          <h4 className="mb-2">當前視窗寬度</h4>
          <div className="display-6 fw-bold text-primary">
            {width} px
          </div>
        </div>
        <p className="text-muted mb-0">
          <i className="bi bi-info-circle me-2"></i>
          調整瀏覽器視窗大小查看即時更新
        </p>
      </div>
    </div>
  );
}

// 訂閱線上狀態
function useOnlineStatus() {
  return useSyncExternalStore(
    (listener) => {
      window.addEventListener('online', listener);
      window.addEventListener('offline', listener);
      return () => {
        window.removeEventListener('online', listener);
        window.removeEventListener('offline', listener);
      };
    },
    () => navigator.onLine,
    () => true // SSR 預設值
  );
}

function OnlineStatusDisplay() {
  const isOnline = useOnlineStatus();

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h3 className="card-title mb-3">
          <i className="bi bi-wifi me-2"></i>
          網路狀態監聽
        </h3>
        <div className={`alert ${isOnline ? 'alert-success' : 'alert-danger'}`}>
          <div className="d-flex align-items-center">
            <i className={`bi ${isOnline ? 'bi-wifi' : 'bi-wifi-off'} fs-1 me-3`}></i>
            <div>
              <h5 className="mb-1">
                {isOnline ? '線上' : '離線'}
              </h5>
              <p className="mb-0">
                {isOnline 
                  ? '您目前已連接至網路' 
                  : '您目前處於離線狀態'}
              </p>
            </div>
          </div>
        </div>
        <p className="text-muted small mb-0">
          <i className="bi bi-info-circle me-2"></i>
          開啟開發者工具 → Network → 切換 Offline 模式測試
        </p>
      </div>
    </div>
  );
}

// 建立主題儲存
class ThemeStore {
  constructor() {
    this.theme = 'light';
    this.listeners = new Set();
  }

  getTheme() {
    return this.theme;
  }

  setTheme(newTheme) {
    this.theme = newTheme;
    this.listeners.forEach(listener => listener());
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

const themeStore = new ThemeStore();

function ThemeExample() {
  const theme = useSyncExternalStore(
    (listener) => themeStore.subscribe(listener),
    () => themeStore.getTheme()
  );

  const toggleTheme = () => {
    themeStore.setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h3 className="card-title mb-3">
          <i className="bi bi-palette me-2"></i>
          主題切換
        </h3>
        <div 
          className={`p-4 rounded-3 mb-3 ${
            theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-white'
          }`}
        >
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h5 className="mb-1">
                <i className={`bi ${theme === 'light' ? 'bi-sun-fill' : 'bi-moon-stars-fill'} me-2`}></i>
                當前主題: {theme === 'light' ? '淺色' : '深色'}
              </h5>
              <p className="mb-0 small opacity-75">
                點擊按鈕切換主題
              </p>
            </div>
            <button 
              onClick={toggleTheme}
              className={`btn ${theme === 'light' ? 'btn-dark' : 'btn-light'}`}
            >
              <i className={`bi ${theme === 'light' ? 'bi-moon-fill' : 'bi-sun-fill'} me-2`}></i>
              切換
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UseSyncExternalStoreExample() {
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
            <i className="bi bi-database-fill-gear me-3"></i>
            useSyncExternalStore Hook
          </h1>
          <p className="lead mb-0">訂閱外部資料來源並保持同步</p>
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
                        <li>訂閱瀏覽器 API (視窗大小、線上狀態)</li>
                        <li>整合外部狀態管理函式庫</li>
                        <li>確保並發渲染下的資料一致性</li>
                        <li>訂閱外部資料儲存</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-success bg-opacity-10 rounded-circle p-3">
                        <i className="bi bi-lightning-charge text-success fs-4"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-2">優點</h5>
                      <ul className="text-muted mb-0">
                        <li>自動處理訂閱和取消訂閱</li>
                        <li>支援伺服器端渲染</li>
                        <li>確保 tearing 問題不會發生</li>
                        <li>與 React 並發模式相容</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 外部儲存範例 */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h3 className="card-title mb-3">
                <i className="bi bi-box-seam me-2"></i>
                外部計數器儲存
              </h3>
              <p className="text-muted mb-4">
                多個元件訂閱同一個外部儲存,所有元件會同步更新
              </p>
              <CounterControls />
              <div className="row g-3">
                <div className="col-md-6">
                  <CounterDisplay />
                </div>
                <div className="col-md-6">
                  <CounterDisplay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 瀏覽器 API 範例 */}
      <div className="row g-4 mb-4">
        <div className="col-lg-6">
          <WindowWidthDisplay />
        </div>
        <div className="col-lg-6">
          <OnlineStatusDisplay />
        </div>
      </div>

      {/* 主題切換範例 */}
      <div className="row mb-5">
        <div className="col-12">
          <ThemeExample />
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
                <code>{`import { useSyncExternalStore } from 'react';

// 建立外部儲存
class Store {
  constructor() {
    this.value = 0;
    this.listeners = new Set();
  }
  
  getValue() {
    return this.value;
  }
  
  setValue(newValue) {
    this.value = newValue;
    this.listeners.forEach(listener => listener());
  }
  
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

const store = new Store();

// 使用 Hook
function Component() {
  const value = useSyncExternalStore(
    (listener) => store.subscribe(listener),
    () => store.getValue()
  );
  
  return <div>值: {value}</div>;
}

// 訂閱視窗寬度
function useWindowWidth() {
  return useSyncExternalStore(
    (listener) => {
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
    },
    () => window.innerWidth
  );
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
                      <strong>適用場景:</strong> 需要訂閱外部資料來源時使用
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <div>
                      <strong>效能:</strong> 確保 getSnapshot 函式是純函式
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <div>
                      <strong>SSR:</strong> 提供 getServerSnapshot 避免水合問題
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                    <div>
                      <strong>避免:</strong> 不要在訂閱函式中產生副作用
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
