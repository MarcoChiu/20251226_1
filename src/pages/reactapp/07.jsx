import { createContext, useContext, useState } from 'react';

// 建立主題 Context
const ThemeContext = createContext();

// 建立使用者 Context
const UserContext = createContext();

// 建立購物車 Context
const CartContext = createContext();

// 建立設定 Context
const SettingsContext = createContext();

// 主題提供者元件
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// 使用者提供者元件
function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username) => {
        setUser({ username, loginTime: new Date().toLocaleString() });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

// 購物車提供者元件
function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeItem = (itemId) => {
        setItems(prev => prev.filter(i => i.id !== itemId));
    };

    const clearCart = () => {
        setItems([]);
    };

    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
}

// 設定提供者元件
function SettingsProvider({ children }) {
    const [settings, setSettings] = useState({
        language: 'zh-TW',
        fontSize: 'medium',
        notifications: true
    });

    const updateSetting = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    return (
        <SettingsContext.Provider value={{ settings, updateSetting }}>
            {children}
        </SettingsContext.Provider>
    );
}

// 自訂 Hook：使用主題
function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}

// 自訂 Hook：使用使用者
function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within UserProvider');
    }
    return context;
}

// 自訂 Hook：使用購物車
function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
}

// 自訂 Hook：使用設定
function useSettings() {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within SettingsProvider');
    }
    return context;
}

// 主題顯示元件
function ThemeDisplay() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-subtitle mb-3">主題控制</h6>
                <p className="mb-2">
                    <strong>當前主題：</strong>
                    <span className={`badge ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark'} ms-2`}>
                        {theme === 'light' ? '☀️ 淺色' : '🌙 深色'}
                    </span>
                </p>
                <button className="btn btn-sm btn-primary" onClick={toggleTheme}>
                    切換主題
                </button>
            </div>
        </div>
    );
}

// 使用者顯示元件
function UserDisplay() {
    const { user, login, logout } = useUser();
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        if (username.trim()) {
            login(username);
            setUsername('');
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-subtitle mb-3">使用者資訊</h6>
                {user ? (
                    <>
                        <p className="mb-2">
                            <strong>使用者：</strong> {user.username}
                        </p>
                        <p className="mb-2">
                            <strong>登入時間：</strong> {user.loginTime}
                        </p>
                        <button className="btn btn-sm btn-danger" onClick={logout}>
                            登出
                        </button>
                    </>
                ) : (
                    <>
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="輸入使用者名稱"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                            />
                            <button className="btn btn-primary" onClick={handleLogin}>
                                登入
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

// 購物車顯示元件
function CartDisplay() {
    const { items, removeItem, clearCart, total } = useCart();

    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-subtitle mb-3">購物車</h6>
                {items.length === 0 ? (
                    <p className="text-muted">購物車是空的</p>
                ) : (
                    <>
                        <ul className="list-group mb-3">
                            {items.map(item => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <strong>{item.name}</strong>
                                        <br />
                                        <small className="text-muted">
                                            NT$ {item.price} × {item.quantity}
                                        </small>
                                    </div>
                                    <div>
                                        <span className="badge bg-primary me-2">
                                            NT$ {item.price * item.quantity}
                                        </span>
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">總計: NT$ {total}</h5>
                            <button className="btn btn-sm btn-danger" onClick={clearCart}>
                                清空購物車
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

// 商品列表元件（加入權限檢查）
function ProductList() {
    const { addItem } = useCart();
    const { user } = useUser();

    const products = [
        { id: 1, name: 'iPhone 15 Pro', price: 35900 },
        { id: 2, name: 'MacBook Pro', price: 72900 },
        { id: 3, name: 'iPad Air', price: 19900 },
        { id: 4, name: 'AirPods Pro', price: 7990 }
    ];

    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-subtitle mb-3">商品列表</h6>
                {!user && (
                    <div className="alert alert-warning">
                        <small>⚠️ 請先登入才能加入購物車</small>
                    </div>
                )}
                <div className="row g-2">
                    {products.map(product => (
                        <div key={product.id} className="col-md-6">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h6 className="card-title">{product.name}</h6>
                                    <p className="card-text">NT$ {product.price.toLocaleString()}</p>
                                    <button
                                        className="btn btn-sm btn-success"
                                        onClick={() => addItem(product)}
                                        disabled={!user}
                                    >
                                        {user ? '加入購物車' : '🔒 請先登入'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// 設定顯示元件
function SettingsDisplay() {
    const { settings, updateSetting } = useSettings();

    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-subtitle mb-3">應用程式設定</h6>

                <div className="mb-3">
                    <label className="form-label">語言</label>
                    <select
                        className="form-select form-select-sm"
                        value={settings.language}
                        onChange={(e) => updateSetting('language', e.target.value)}
                    >
                        <option value="zh-TW">繁體中文</option>
                        <option value="en-US">English</option>
                        <option value="ja-JP">日本語</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">字體大小</label>
                    <select
                        className="form-select form-select-sm"
                        value={settings.fontSize}
                        onChange={(e) => updateSetting('fontSize', e.target.value)}
                    >
                        <option value="small">小</option>
                        <option value="medium">中</option>
                        <option value="large">大</option>
                    </select>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={settings.notifications}
                        onChange={(e) => updateSetting('notifications', e.target.checked)}
                        id="notificationCheck"
                    />
                    <label className="form-check-label" htmlFor="notificationCheck">
                        啟用通知
                    </label>
                </div>

                <div className="alert alert-info mt-3 mb-0">
                    <small>
                        <strong>當前設定：</strong><br />
                        語言: {settings.language} |
                        字體: {settings.fontSize} |
                        通知: {settings.notifications ? '開啟' : '關閉'}
                    </small>
                </div>
            </div>
        </div>
    );
}

// 巢狀元件展示
function NestedComponent() {
    const { theme } = useTheme();
    const { user } = useUser();

    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-subtitle mb-3">深層巢狀元件</h6>
                <p className="mb-2">
                    這個元件在很深的層級，但仍可以直接存取 Context 資料，
                    不需要透過 props 層層傳遞。
                </p>
                <div className="alert alert-secondary mb-0">
                    <small>
                        <strong>主題：</strong> {theme}<br />
                        <strong>使用者：</strong> {user ? user.username : '未登入'}
                    </small>
                </div>
            </div>
        </div>
    );
}

// 會員專屬內容元件
function MemberOnlyContent() {
    const { user } = useUser();

    if (!user) {
        return (
            <div className="card border-warning">
                <div className="card-body text-center">
                    <h5 className="card-title">🔒 會員專屬內容</h5>
                    <p className="text-muted">此區域僅供登入會員瀏覽</p>
                    <p className="mb-0">
                        <small>請先登入以查看完整內容</small>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="card border-success">
            <div className="card-body">
                <h5 className="card-title">✅ 會員專屬內容</h5>
                <div className="alert alert-success">
                    <strong>歡迎，{user.username}！</strong>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <strong>🎁 專屬優惠：</strong>全站商品 9 折優惠
                    </li>
                    <li className="list-group-item">
                        <strong>📦 訂單紀錄：</strong>查看過去的購買記錄
                    </li>
                    <li className="list-group-item">
                        <strong>💳 儲值金：</strong>NT$ 1,000
                    </li>
                    <li className="list-group-item">
                        <strong>⭐ 會員等級：</strong>黃金會員
                    </li>
                </ul>
            </div>
        </div>
    );
}

// 個人化推薦元件
function PersonalizedRecommendations() {
    const { user } = useUser();

    const guestRecommendations = [
        '熱門商品推薦',
        '新品上市',
        '限時優惠'
    ];

    const memberRecommendations = [
        '根據您的購買記錄推薦',
        '為您量身打造的優惠',
        '猜您喜歡的商品',
        '會員專屬新品預購'
    ];

    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-subtitle mb-3">
                    {user ? '🎯 個人化推薦' : '📢 訪客推薦'}
                </h6>
                {user ? (
                    <div className="alert alert-info mb-3">
                        <small>
                            <strong>{user.username}</strong>，以下是根據您的喜好推薦的內容
                        </small>
                    </div>
                ) : (
                    <div className="alert alert-secondary mb-3">
                        <small>登入後可獲得個人化推薦</small>
                    </div>
                )}
                <ul className="list-group">
                    {(user ? memberRecommendations : guestRecommendations).map((item, index) => (
                        <li key={index} className="list-group-item">
                            {user ? '⭐' : '👀'} {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// 使用者狀態指示器
function UserStatusIndicator() {
    const { user } = useUser();

    return (
        <div className="alert alert-light border mb-3">
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    {user ? (
                        <>
                            <span className="badge bg-success me-2">已登入</span>
                            <strong>{user.username}</strong>
                            <small className="text-muted ms-2">
                                登入時間: {user.loginTime}
                            </small>
                        </>
                    ) : (
                        <>
                            <span className="badge bg-secondary me-2">訪客模式</span>
                            <small className="text-muted">
                                登入後可享有更多功能和優惠
                            </small>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

// 主要內容元件
function AppContent() {
    return (
        <div className="container mt-2">
            {/* 使用者狀態指示器 */}
            <UserStatusIndicator />

            {/* 範例 1: 主題切換 */}
            <div className="mb-4">
                <h5>🎨 範例 1: 主題切換</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <ThemeDisplay />
                    </div>
                    <div className="col-md-6">
                        <div className="alert alert-info">
                            <h6 className="alert-heading">技術說明</h6>
                            <small>
                                使用 ThemeContext 在整個應用程式中共享主題狀態，
                                任何元件都可以透過 useTheme() 取得和修改主題。
                            </small>
                        </div>
                    </div>
                </div>
            </div>

            {/* 範例 2: 使用者認證 */}
            <div className="mb-4">
                <h5>👤 範例 2: 使用者認證</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <UserDisplay />
                    </div>
                    <div className="col-md-6">
                        <div className="alert alert-info">
                            <h6 className="alert-heading">技術說明</h6>
                            <small>
                                使用 UserContext 管理使用者狀態，
                                包含登入、登出功能，所有元件都能存取使用者資訊。
                            </small>
                        </div>
                    </div>
                </div>
            </div>

            {/* 範例 3: 購物車 */}
            <div className="mb-4">
                <h5>🛒 範例 3: 購物車系統</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <ProductList />
                    </div>
                    <div className="col-md-6">
                        <CartDisplay />
                    </div>
                </div>
            </div>

            {/* 範例 4: 應用程式設定 */}
            <div className="mb-4">
                <h5>⚙️ 範例 4: 應用程式設定</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <SettingsDisplay />
                    </div>
                    <div className="col-md-6">
                        <NestedComponent />
                    </div>
                </div>
            </div>

            {/* 範例 5: 會員專屬內容 */}
            <div className="mb-4">
                <h5>🔐 範例 5: 登入狀態判斷</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <MemberOnlyContent />
                    </div>
                    <div className="col-md-6">
                        <PersonalizedRecommendations />
                    </div>
                </div>
                <div className="alert alert-info mt-3">
                    <h6 className="alert-heading">💡 技術重點</h6>
                    <small>
                        透過 useUser() 取得使用者狀態，根據是否登入顯示不同內容：
                        <ul className="mb-0 mt-2">
                            <li><strong>未登入：</strong>顯示提示訊息，引導使用者登入</li>
                            <li><strong>已登入：</strong>顯示會員專屬功能和個人化內容</li>
                            <li><strong>條件渲染：</strong>使用三元運算子或 if 判斷來切換顯示內容</li>
                            <li><strong>實際應用：</strong>會員系統、權限控制、個人化推薦等</li>
                        </ul>
                    </small>
                </div>
            </div>
        </div>
    );
}

// 主要元件（包含所有 Provider）
export default function UseContextPage() {
    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-diagram-3-fill me-3"></i>useContext - 跨元件狀態共享</h1><p className="lead mb-0">全域狀態管理與 Props Drilling 的解決方案</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>

            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">useContext</h5><ul className="text-muted mb-0"><li>跨層級傳遞資料</li><li>避免 Props Drilling</li><li>適合全域狀態（主題、使用者、設定）</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-lightning text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">使用步驟</h5><ul className="text-muted mb-0"><li>createContext 建立 Context</li><li>Provider 包裹元件樹</li><li>useContext 取用資料</li></ul></div></div></div></div></div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3>
                <ThemeProvider>
                    <UserProvider>
                        <CartProvider>
                            <SettingsProvider>
                                <AppContent />
                            </SettingsProvider>
                        </CartProvider>
                    </UserProvider>
                </ThemeProvider>
            </div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-slash me-2 text-success"></i>程式碼範例</h3>
                <div className="container mt-2">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <pre className="mb-0" style={{ fontSize: '0.85rem' }}>
                                {`// 1. 建立 Context
const ThemeContext = createContext();

// 2. 建立 Provider 元件
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. 建立自訂 Hook（推薦）
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// 4. 在元件中使用
function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <p>當前主題: {theme}</p>
      <button onClick={toggleTheme}>切換主題</button>
    </div>
  );
}

// 5. 包裹應用程式
function App() {
  return (
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  );
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div></div></div></div>
        </div>
    );
};
