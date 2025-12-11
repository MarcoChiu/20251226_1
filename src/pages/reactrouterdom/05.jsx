import { Routes, Route, Link, Outlet, useLocation, Navigate } from 'react-router-dom';

// 儀表板首頁
function DashboardHome() {
    return (
        <div className="card border-primary">
            <div className="card-body">
                <h4 className="card-title">
                    <i className="bi bi-house-door me-2"></i>
                    儀表板首頁
                </h4>
                <p className="text-muted">歡迎來到管理後台系統</p>
                <div className="row g-3 mt-2">
                    <div className="col-md-3">
                        <div className="card text-white bg-primary">
                            <div className="card-body">
                                <h6 className="card-title">總訂單</h6>
                                <h2>1,234</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-success">
                            <div className="card-body">
                                <h6 className="card-title">總使用者</h6>
                                <h2>567</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-warning">
                            <div className="card-body">
                                <h6 className="card-title">待處理</h6>
                                <h2>89</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-info">
                            <div className="card-body">
                                <h6 className="card-title">營收</h6>
                                <h2>$45K</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 使用者列表
function UsersList() {
    const users = [
        { id: 1, name: '張三', email: 'zhang@example.com', status: '啟用' },
        { id: 2, name: '李四', email: 'li@example.com', status: '啟用' },
        { id: 3, name: '王五', email: 'wang@example.com', status: '停用' },
    ];

    return (
        <div className="card border-success">
            <div className="card-body">
                <h4 className="card-title">
                    <i className="bi bi-people me-2"></i>
                    使用者列表
                </h4>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>姓名</th>
                                <th>Email</th>
                                <th>狀態</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <span className={`badge ${user.status === '啟用' ? 'bg-success' : 'bg-secondary'}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td>
                                        <Link 
                                            to={`detail/${user.id}`}
                                            className="btn btn-sm btn-primary"
                                        >
                                            查看詳情
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// 使用者詳情
function UserDetail() {
    const location = useLocation();
    const userId = location.pathname.split('/').pop();
    
    const users = {
        '1': { id: 1, name: '張三', email: 'zhang@example.com', phone: '0912-345-678', address: '台北市信義區', joinDate: '2024-01-15' },
        '2': { id: 2, name: '李四', email: 'li@example.com', phone: '0923-456-789', address: '新北市板橋區', joinDate: '2024-02-20' },
        '3': { id: 3, name: '王五', email: 'wang@example.com', phone: '0934-567-890', address: '桃園市中壢區', joinDate: '2024-03-10' },
    };

    const user = users[userId];

    if (!user) {
        return (
            <div className="alert alert-warning">
                <i className="bi bi-exclamation-triangle me-2"></i>
                找不到使用者資料
            </div>
        );
    }

    return (
        <div className="card border-info">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="card-title mb-0">
                        <i className="bi bi-person-circle me-2"></i>
                        使用者詳情 #{user.id}
                    </h4>
                    <Link to=".." className="btn btn-outline-secondary">
                        <i className="bi bi-arrow-left me-2"></i>
                        返回列表
                    </Link>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <p><strong>姓名:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>電話:</strong> {user.phone}</p>
                    </div>
                    <div className="col-md-6">
                        <p><strong>地址:</strong> {user.address}</p>
                        <p><strong>加入日期:</strong> {user.joinDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 系統設定
function Settings() {
    return (
        <div className="card border-warning">
            <div className="card-body">
                <h4 className="card-title">
                    <i className="bi bi-gear me-2"></i>
                    系統設定
                </h4>
                <form>
                    <div className="mb-3">
                        <label className="form-label">網站名稱</label>
                        <input type="text" className="form-control" defaultValue="我的網站" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">網站描述</label>
                        <textarea className="form-control" rows="3" defaultValue="這是一個很棒的網站"></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="maintenance" />
                        <label className="form-check-label" htmlFor="maintenance">
                            維護模式
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">儲存設定</button>
                </form>
            </div>
        </div>
    );
}

// 報表頁面
function Reports() {
    return (
        <div className="card border-danger">
            <div className="card-body">
                <h4 className="card-title">
                    <i className="bi bi-bar-chart me-2"></i>
                    報表分析
                </h4>
                <p className="text-muted">銷售與使用者數據分析</p>
                <div className="row g-3 mt-2">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">本月銷售趨勢</h6>
                                <div className="text-center py-4 bg-light rounded">
                                    <i className="bi bi-graph-up text-success" style={{ fontSize: '3rem' }}></i>
                                    <p className="mt-2 mb-0">成長 25%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">使用者增長</h6>
                                <div className="text-center py-4 bg-light rounded">
                                    <i className="bi bi-people text-primary" style={{ fontSize: '3rem' }}></i>
                                    <p className="mt-2 mb-0">新增 142 人</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 使用者管理布局 (巢狀路由的中間層)
function UsersLayout() {
    const location = useLocation();
    const isDetailPage = location.pathname.includes('detail');

    return (
        <div>
            {!isDetailPage && (
                <div className="alert alert-info mb-3">
                    <i className="bi bi-info-circle me-2"></i>
                    這是巢狀路由中的「使用者管理」區塊，可以查看列表或詳情
                </div>
            )}
            <Outlet />
        </div>
    );
}

// 管理後台主布局 (使用 Outlet)
function AdminLayout() {
    const location = useLocation();
    
    // 取得當前路徑的最後一段
    const currentPath = location.pathname.split('/').filter(Boolean).pop();
    
    return (
        <div className="container-fluid">
            <div className="row">
                {/* 側邊導航 */}
                <div className="col-md-3 col-lg-2 bg-light border-end" style={{ minHeight: '500px' }}>
                    <div className="p-3">
                        <h5 className="mb-3">
                            <i className="bi bi-speedometer2 me-2"></i>
                            管理選單
                        </h5>
                        <nav className="nav flex-column">
                            <Link 
                                to="home" 
                                className={`nav-link ${currentPath === 'home' ? 'active bg-primary text-white rounded' : 'text-dark'}`}
                            >
                                <i className="bi bi-house-door me-2"></i>
                                儀表板
                            </Link>
                            <Link 
                                to="users" 
                                className={`nav-link ${currentPath === 'users' || currentPath.match(/^\d+$/) ? 'active bg-primary text-white rounded' : 'text-dark'}`}
                            >
                                <i className="bi bi-people me-2"></i>
                                使用者管理
                            </Link>
                            <Link 
                                to="settings" 
                                className={`nav-link ${currentPath === 'settings' ? 'active bg-primary text-white rounded' : 'text-dark'}`}
                            >
                                <i className="bi bi-gear me-2"></i>
                                系統設定
                            </Link>
                            <Link 
                                to="reports" 
                                className={`nav-link ${currentPath === 'reports' ? 'active bg-primary text-white rounded' : 'text-dark'}`}
                            >
                                <i className="bi bi-bar-chart me-2"></i>
                                報表分析
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* 主要內容區 - 使用 Outlet 渲染子路由 */}
                <div className="col-md-9 col-lg-10 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

// 主要元件
export default function NestedRoutingDemoPage() {
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
                        巢狀路由 - 互動範例
                    </h1>
                    <p className="lead mb-0">完整的管理後台系統實作</p>
                </div>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        zIndex: 0
                    }}
                ></div>
            </div>

            {/* 路由結構說明 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-diagram-3 me-2 text-primary"></i>
                                巢狀路由結構
                            </h3>
                            <div className="alert alert-info">
                                <i className="bi bi-info-circle me-2"></i>
                                本範例展示了三層巢狀路由結構
                            </div>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`路由層級結構:
├─ /reactrouterdom/05 (本頁面)
   └─ admin (AdminLayout - 管理後台布局)
      ├─ home (儀表板首頁)
      ├─ users (UsersLayout - 使用者管理布局)
      │  ├─ (index) → UsersList
      │  └─ detail/:id → UserDetail
      ├─ settings (系統設定)
      └─ reports (報表分析)

實際 URL 範例:
- /reactrouterdom/05/admin/home
- /reactrouterdom/05/admin/users
- /reactrouterdom/05/admin/users/detail/1
- /reactrouterdom/05/admin/settings`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* 互動示範區 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-play-circle me-2 text-success"></i>
                                互動示範
                            </h3>
                            
                            {/* 巢狀路由實作 */}
                            <Routes>
                                <Route path="admin" element={<AdminLayout />}>
                                    <Route index element={<Navigate to="home" replace />} />
                                    <Route path="home" element={<DashboardHome />} />
                                    <Route path="users" element={<UsersLayout />}>
                                        <Route index element={<UsersList />} />
                                        <Route path="detail/:id" element={<UserDetail />} />
                                    </Route>
                                    <Route path="settings" element={<Settings />} />
                                    <Route path="reports" element={<Reports />} />
                                </Route>
                                <Route index element={
                                    <div className="text-center py-5">
                                        <i className="bi bi-arrow-down-circle text-primary" style={{ fontSize: '3rem' }}></i>
                                        <h4 className="mt-3">點擊下方按鈕進入管理後台</h4>
                                        <Link to="admin" className="btn btn-primary btn-lg mt-3">
                                            <i className="bi bi-box-arrow-in-right me-2"></i>
                                            進入管理後台
                                        </Link>
                                    </div>
                                } />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>

            {/* 程式碼實作 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-code-slash me-2 text-info"></i>
                                程式碼實作
                            </h3>

                            <h5 className="mt-4 mb-3">1. 路由配置</h5>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`<Routes>
  {/* 第一層：管理後台布局 */}
  <Route path="admin" element={<AdminLayout />}>
    <Route index element={<Navigate to="home" replace />} />
    <Route path="home" element={<DashboardHome />} />
    
    {/* 第二層：使用者管理巢狀路由 */}
    <Route path="users" element={<UsersLayout />}>
      <Route index element={<UsersList />} />
      <Route path="detail/:id" element={<UserDetail />} />
    </Route>
    
    <Route path="settings" element={<Settings />} />
    <Route path="reports" element={<Reports />} />
  </Route>
</Routes>`}</code>
                            </pre>

                            <h5 className="mt-4 mb-3">2. AdminLayout 元件 (使用 Outlet)</h5>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`function AdminLayout() {
  return (
    <div className="admin-layout">
      {/* 側邊導航 */}
      <nav>
        <Link to="home">儀表板</Link>
        <Link to="users">使用者管理</Link>
        <Link to="settings">系統設定</Link>
        <Link to="reports">報表分析</Link>
      </nav>

      {/* 主要內容區 - Outlet 渲染匹配的子路由 */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}`}</code>
                            </pre>

                            <h5 className="mt-4 mb-3">3. UsersLayout 元件 (第二層巢狀)</h5>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`function UsersLayout() {
  return (
    <div>
      <h2>使用者管理</h2>
      {/* 再次使用 Outlet 渲染子路由 */}
      <Outlet />
    </div>
  );
}

// 使用者列表 (users/index)
function UsersList() {
  return (
    <div>
      <h3>使用者列表</h3>
      <Link to="detail/1">查看使用者 1</Link>
      <Link to="detail/2">查看使用者 2</Link>
    </div>
  );
}

// 使用者詳情 (users/detail/:id)
function UserDetail() {
  const { id } = useParams();
  return (
    <div>
      <h3>使用者詳情 #{id}</h3>
      <Link to="..">返回列表</Link>
    </div>
  );
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* 關鍵概念 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm bg-light">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-key me-2 text-warning"></i>
                                關鍵概念
                            </h3>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="bi bi-1-circle text-primary me-2"></i>
                                                Outlet 元件
                                            </h5>
                                            <p className="card-text">
                                                <code>&lt;Outlet /&gt;</code> 是佔位符，用於渲染當前匹配的子路由元件。
                                                每一層需要渲染子路由的地方都要使用 Outlet。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="bi bi-2-circle text-success me-2"></i>
                                                相對路徑導航
                                            </h5>
                                            <p className="card-text">
                                                使用 <code>to=".."</code> 可以返回上一層路由。
                                                使用 <code>to="detail/1"</code> 為相對當前路徑的導航。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="bi bi-3-circle text-warning me-2"></i>
                                                index 路由
                                            </h5>
                                            <p className="card-text">
                                                <code>&lt;Route index /&gt;</code> 定義當路徑完全匹配父路由時顯示的預設元件。
                                                不需要指定 path 屬性。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="bi bi-4-circle text-info me-2"></i>
                                                多層巢狀
                                            </h5>
                                            <p className="card-text">
                                                可以無限層巢狀，每一層都使用 Outlet 渲染下一層。
                                                適合複雜的應用程式結構。
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
                    <div className="card border-0 shadow-sm">
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
                                            <strong>共用布局:</strong> 將共用的導航、側邊欄等放在父路由元件中
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>語意化結構:</strong> 路由結構應該反映應用程式的邏輯架構
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>預設路由:</strong> 使用 index 路由提供合理的預設頁面
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 避免過度巢狀，保持路由結構清晰簡單
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
