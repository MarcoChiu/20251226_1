import { Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

// 子頁面元件
function Dashboard() {
    return (
        <div className="alert alert-primary">
            <h4><i className="bi bi-speedometer2 me-2"></i>儀表板</h4>
            <p>這是儀表板首頁，顯示總覽資訊。</p>
        </div>
    );
}

function Profile() {
    return (
        <div className="alert alert-success">
            <h4><i className="bi bi-person me-2"></i>個人資料</h4>
            <p>姓名: 張三</p>
            <p>Email: zhang@example.com</p>
        </div>
    );
}

function Settings() {
    return (
        <div className="alert alert-warning">
            <h4><i className="bi bi-gear me-2"></i>設定</h4>
            <p>系統設定與偏好設定。</p>
        </div>
    );
}

// 巢狀路由布局元件
function NestedLayout() {
    const location = useLocation();
    const currentPath = location.pathname.split('/').pop();

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title mb-3">巢狀路由導航</h5>
                <nav className="nav nav-pills mb-4">
                    <Link 
                        to="dashboard" 
                        className={`nav-link ${currentPath === 'dashboard' ? 'active' : ''}`}
                    >
                        <i className="bi bi-speedometer2 me-2"></i>儀表板
                    </Link>
                    <Link 
                        to="profile" 
                        className={`nav-link ${currentPath === 'profile' ? 'active' : ''}`}
                    >
                        <i className="bi bi-person me-2"></i>個人資料
                    </Link>
                    <Link 
                        to="settings" 
                        className={`nav-link ${currentPath === 'settings' ? 'active' : ''}`}
                    >
                        <i className="bi bi-gear me-2"></i>設定
                    </Link>
                </nav>
                {/* Outlet 會渲染匹配的子路由元件 */}
                <Outlet />
            </div>
        </div>
    );
}

export default function NestedRoutingPage() {
    const [showExample, setShowExample] = useState(false);

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
                        <i className="bi bi-diagram-3 me-3"></i>
                        React Router Dom - 巢狀路由
                    </h1>
                    <p className="lead mb-0">Outlet 與巢狀路由結構</p>
                </div>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        zIndex: 0
                    }}
                ></div>
            </div>

            {/* 概念說明 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h3 className="mb-4">
                                <i className="bi bi-info-circle me-2 text-primary"></i>
                                什麼是巢狀路由?
                            </h3>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-diagram-2 text-primary fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">巢狀結構</h5>
                                            <p className="text-muted mb-0">
                                                在父路由元件中渲染子路由元件，形成層級結構。
                                                常用於儀表板、設定頁面等需要共用布局的場景。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-success bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-box-arrow-in-down-right text-success fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">Outlet 元件</h5>
                                            <p className="text-muted mb-0">
                                                <code>&lt;Outlet /&gt;</code> 是一個佔位符，
                                                用於渲染當前匹配的子路由元件。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 互動範例 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-play-circle me-2 text-success"></i>
                                互動範例
                            </h3>
                            
                            <div className="alert alert-info">
                                <i className="bi bi-info-circle me-2"></i>
                                由於本專案採用數字編號路由結構，以下展示概念性範例。
                                實際專案中可以在路由配置中實現完整的巢狀路由。
                            </div>

                            <button 
                                className="btn btn-primary mb-3"
                                onClick={() => setShowExample(!showExample)}
                            >
                                {showExample ? '隱藏' : '顯示'}巢狀路由範例
                            </button>

                            {showExample && (
                                <Routes>
                                    <Route path="/" element={<NestedLayout />}>
                                        <Route path="dashboard" element={<Dashboard />} />
                                        <Route path="profile" element={<Profile />} />
                                        <Route path="settings" element={<Settings />} />
                                        <Route index element={
                                            <div className="alert alert-secondary">
                                                請選擇上方的選項查看內容
                                            </div>
                                        } />
                                    </Route>
                                </Routes>
                            )}
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
                                <i className="bi bi-code-slash me-2 text-primary"></i>
                                程式碼範例
                            </h3>

                            <h5 className="mt-4 mb-3">1. 路由配置</h5>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`// App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Profile from './Profile';

function App() {
  return (
    <Routes>
      {/* 父路由 */}
      <Route path="/admin" element={<Layout />}>
        {/* 子路由 */}
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

// URL 對應關係:
// /admin          -> Layout + Dashboard (index)
// /admin/profile  -> Layout + Profile
// /admin/settings -> Layout + Settings`}</code>
                            </pre>

                            <h5 className="mt-4 mb-3">2. 布局元件 (使用 Outlet)</h5>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`// Layout.jsx
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      {/* 共用的導航列 */}
      <nav>
        <Link to="/admin">儀表板</Link>
        <Link to="/admin/profile">個人資料</Link>
        <Link to="/admin/settings">設定</Link>
      </nav>

      {/* 共用的側邊欄 */}
      <aside>
        <h3>側邊欄</h3>
      </aside>

      {/* 子路由會在這裡渲染 */}
      <main>
        <Outlet />
      </main>

      {/* 共用的頁尾 */}
      <footer>
        <p>© 2024 My App</p>
      </footer>
    </div>
  );
}`}</code>
                            </pre>

                            <h5 className="mt-4 mb-3">3. 巢狀多層路由</h5>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`// 多層巢狀路由配置
<Routes>
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    
    <Route path="admin" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      
      <Route path="users" element={<UsersLayout />}>
        <Route index element={<UsersList />} />
        <Route path=":userId" element={<UserDetail />} />
        <Route path=":userId/edit" element={<UserEdit />} />
      </Route>
      
      <Route path="settings" element={<Settings />} />
    </Route>
  </Route>
</Routes>

// URL 結構:
// /                        -> RootLayout + Home
// /admin                   -> RootLayout + AdminLayout + AdminDashboard
// /admin/users             -> RootLayout + AdminLayout + UsersLayout + UsersList
// /admin/users/123         -> RootLayout + AdminLayout + UsersLayout + UserDetail
// /admin/users/123/edit    -> RootLayout + AdminLayout + UsersLayout + UserEdit`}</code>
                            </pre>

                            <h5 className="mt-4 mb-3">4. 條件渲染與 Outlet Context</h5>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`import { Outlet, useOutletContext } from 'react-router-dom';

// 父元件傳遞 context
function ParentLayout() {
  const [user, setUser] = useState({ name: 'John' });
  
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      {/* 傳遞 context 給子路由 */}
      <Outlet context={{ user, setUser }} />
    </div>
  );
}

// 子元件接收 context
function ChildComponent() {
  const { user, setUser } = useOutletContext();
  
  return (
    <div>
      <p>User: {user.name}</p>
      <button onClick={() => setUser({ name: 'Jane' })}>
        Change User
      </button>
    </div>
  );
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* 實際應用場景 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-briefcase me-2 text-info"></i>
                                實際應用場景
                            </h3>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="card h-100 border-primary">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="bi bi-layout-sidebar me-2"></i>
                                                後台管理系統
                                            </h5>
                                            <p className="card-text text-muted">
                                                使用巢狀路由共用側邊欄、頂部導航等布局元件，
                                                不同頁面只需替換主要內容區域。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 border-success">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="bi bi-person-workspace me-2"></i>
                                                使用者設定頁面
                                            </h5>
                                            <p className="card-text text-muted">
                                                個人資料、安全設定、通知偏好等子頁面，
                                                共用相同的設定頁面布局和側邊選單。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 border-warning">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="bi bi-cart me-2"></i>
                                                電商網站
                                            </h5>
                                            <p className="card-text text-muted">
                                                商品列表、商品詳情、購物車等頁面，
                                                共用頂部導航和頁尾，只替換中間內容。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 border-info">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="bi bi-file-earmark-text me-2"></i>
                                                文件系統
                                            </h5>
                                            <p className="card-text text-muted">
                                                資料夾結構的文件瀏覽器，
                                                使用巢狀路由表示資料夾層級關係。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                            <strong>共用布局:</strong> 使用巢狀路由共用導航列、側邊欄等布局
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>index 路由:</strong> 使用 <code>index</code> 屬性指定預設子路由
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>相對路徑:</strong> 子路由使用相對路徑，更易維護
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 避免巢狀層級過深，影響程式碼可讀性
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
