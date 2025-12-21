import{j as e,c as s}from"./index-BEiEE2Na.js";function c(){return e.jsxs("div",{className:"container py-5",children:[e.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[e.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[e.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[e.jsx("i",{className:"bi bi-signpost-2 me-3"}),"React Router Dom - 基礎路由"]}),e.jsx("p",{className:"lead mb-0",children:"了解 React Router 的基本概念與使用方式"})]}),e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("h2",{className:"h4 mb-4",children:[e.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"什麼是 React Router?"]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-diagram-3 text-primary fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"核心功能"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsx("li",{children:"實現 SPA (Single Page Application) 路由"}),e.jsx("li",{children:"無需重新載入頁面即可切換視圖"}),e.jsx("li",{children:"支援瀏覽器的上一頁/下一頁功能"}),e.jsx("li",{children:"URL 與元件狀態同步"})]})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-success bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-puzzle text-success fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"主要元件"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsxs("li",{children:[e.jsx("code",{children:"BrowserRouter"}),": 路由容器"]}),e.jsxs("li",{children:[e.jsx("code",{children:"Routes"}),": 路由規則集合"]}),e.jsxs("li",{children:[e.jsx("code",{children:"Route"}),": 單一路由規則"]}),e.jsxs("li",{children:[e.jsx("code",{children:"Link"}),": 導航連結"]})]})]})]})})]})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-4",children:[e.jsx("i",{className:"bi bi-code-square me-2 text-primary"}),"基本路由結構"]}),e.jsxs("div",{className:"alert alert-info",children:[e.jsx("i",{className:"bi bi-info-circle me-2"}),"本專案使用集中式路由配置，所有路由定義在 ",e.jsx("code",{children:"routes.jsx"})," 檔案中"]}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:e.jsx("code",{children:`// main.jsx - 應用程式入口
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
}`})})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-4",children:[e.jsx("i",{className:"bi bi-link-45deg me-2 text-success"}),"Link 導航元件"]}),e.jsxs("p",{className:"text-muted",children:["使用 ",e.jsx("code",{children:"Link"})," 元件進行導航，不會重新載入頁面"]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("h5",{children:"試試看導航到其他頁面："}),e.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[e.jsxs(s,{to:"/reactrouterdom/02",className:"btn btn-primary",children:[e.jsx("i",{className:"bi bi-arrow-right-circle me-2"}),"進階路由"]}),e.jsxs(s,{to:"/reactrouterdom/03",className:"btn btn-success",children:[e.jsx("i",{className:"bi bi-arrow-right-circle me-2"}),"動態路由"]}),e.jsxs(s,{to:"/",className:"btn btn-secondary",children:[e.jsx("i",{className:"bi bi-house me-2"}),"回首頁"]})]})]}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto mt-3",children:e.jsx("code",{children:`import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      {/* 使用 Link 而非 <a> 標籤 */}
      <Link to="/">首頁</Link>
      <Link to="/about">關於我們</Link>
      <Link to="/contact">聯絡我們</Link>
    </nav>
  );
}`})})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-4",children:[e.jsx("i",{className:"bi bi-folder-tree me-2 text-warning"}),"本專案路由配置"]}),e.jsx("p",{className:"text-muted",children:"本專案採用巢狀路由結構，便於管理大型應用"}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:e.jsx("code",{children:`// routes.jsx
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
))}`})})]})})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm bg-light",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-3",children:[e.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"使用 Link:"})," 使用 ",e.jsx("code",{children:"Link"})," 而非 ",e.jsx("code",{children:"<a>"})," 標籤進行導航"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"巢狀路由:"})," 使用巢狀路由組織複雜的頁面結構"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"路由配置:"})," 集中管理路由配置，便於維護"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"避免:"})," 避免使用 ",e.jsx("code",{children:"<a>"})," 標籤，會導致頁面重新載入"]})]})})]})]})})})})]})}export{c as default};
