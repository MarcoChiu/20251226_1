import { Link } from 'react-router-dom';

export default function BasicRoutingPage() {
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
                        <i className="bi bi-signpost-2 me-3"></i>
                        React Router Dom - 基礎路由
                    </h1>
                    <p className="lead mb-0">了解 React Router 的基本概念與使用方式</p>
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
                                什麼是 React Router?
                            </h2>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-diagram-3 text-primary fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">核心功能</h5>
                                            <ul className="text-muted mb-0">
                                                <li>實現 SPA (Single Page Application) 路由</li>
                                                <li>無需重新載入頁面即可切換視圖</li>
                                                <li>支援瀏覽器的上一頁/下一頁功能</li>
                                                <li>URL 與元件狀態同步</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-success bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-puzzle text-success fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">主要元件</h5>
                                            <ul className="text-muted mb-0">
                                                <li><code>BrowserRouter</code>: 路由容器</li>
                                                <li><code>Routes</code>: 路由規則集合</li>
                                                <li><code>Route</code>: 單一路由規則</li>
                                                <li><code>Link</code>: 導航連結</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 基本路由示範 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-code-square me-2 text-primary"></i>
                                基本路由結構
                            </h3>
                            <div className="alert alert-info">
                                <i className="bi bi-info-circle me-2"></i>
                                本專案使用集中式路由配置，所有路由定義在 <code>routes.jsx</code> 檔案中
                            </div>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`// main.jsx - 應用程式入口
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// App.jsx - 路由配置
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* Link 導航示範 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-link-45deg me-2 text-success"></i>
                                Link 導航元件
                            </h3>
                            <p className="text-muted">使用 <code>Link</code> 元件進行導航，不會重新載入頁面</p>
                            
                            <div className="mb-3">
                                <h5>試試看導航到其他頁面：</h5>
                                <div className="d-flex gap-2 flex-wrap">
                                    <Link to="/reactrouterdom/02" className="btn btn-primary">
                                        <i className="bi bi-arrow-right-circle me-2"></i>
                                        進階路由
                                    </Link>
                                    <Link to="/reactrouterdom/03" className="btn btn-success">
                                        <i className="bi bi-arrow-right-circle me-2"></i>
                                        動態路由
                                    </Link>
                                    <Link to="/" className="btn btn-secondary">
                                        <i className="bi bi-house me-2"></i>
                                        回首頁
                                    </Link>
                                </div>
                            </div>

                            <pre className="bg-light p-4 rounded-3 overflow-auto mt-3">
                                <code>{`import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      {/* 使用 Link 而非 <a> 標籤 */}
      <Link to="/">首頁</Link>
      <Link to="/about">關於我們</Link>
      <Link to="/contact">聯絡我們</Link>
    </nav>
  );
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* 本專案路由配置 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-folder-tree me-2 text-warning"></i>
                                本專案路由配置
                            </h3>
                            <p className="text-muted">本專案採用巢狀路由結構，便於管理大型應用</p>
                            
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`// routes.jsx
export const routes = [
  {
    path: 'reactrouterdom',
    title: 'React Router Dom',
    showInMenu: true,
    children: [
      { 
        path: '01', 
        element: <BasicRoutingPage />, 
        title: '01.Basic Routing', 
        showInMenu: true 
      },
      { 
        path: '02', 
        element: <AdvancedRoutingPage />, 
        title: '02.Advanced Routing', 
        showInMenu: true 
      }
    ]
  }
];

// Layout.jsx - 使用路由配置
{routes.map((route) => (
  <Route key={route.path} path={route.path}>
    {route.children.map((child) => (
      <Route 
        key={child.path} 
        path={child.path} 
        element={child.element} 
      />
    ))}
  </Route>
))}`}</code>
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
                                            <strong>使用 Link:</strong> 使用 <code>Link</code> 而非 <code>&lt;a&gt;</code> 標籤進行導航
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>巢狀路由:</strong> 使用巢狀路由組織複雜的頁面結構
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>路由配置:</strong> 集中管理路由配置，便於維護
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 避免使用 <code>&lt;a&gt;</code> 標籤，會導致頁面重新載入
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
