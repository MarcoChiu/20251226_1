import{r as t,j as e,g as c,h as a,d as r,c as l,O as d}from"./index-BEiEE2Na.js";function n(){return e.jsxs("div",{className:"alert alert-primary",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"bi bi-speedometer2 me-2"}),"儀表板"]}),e.jsx("p",{children:"這是儀表板首頁，顯示總覽資訊。"})]})}function m(){return e.jsxs("div",{className:"alert alert-success",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"bi bi-person me-2"}),"個人資料"]}),e.jsx("p",{children:"姓名: 張三"}),e.jsx("p",{children:"Email: zhang@example.com"})]})}function o(){return e.jsxs("div",{className:"alert alert-warning",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"bi bi-gear me-2"}),"設定"]}),e.jsx("p",{children:"系統設定與偏好設定。"})]})}function x(){const s=r().pathname.split("/").pop();return e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h5",{className:"card-title mb-3",children:"巢狀路由導航"}),e.jsxs("nav",{className:"nav nav-pills mb-4",children:[e.jsxs(l,{to:"dashboard",className:`nav-link ${s==="dashboard"?"active":""}`,children:[e.jsx("i",{className:"bi bi-speedometer2 me-2"}),"儀表板"]}),e.jsxs(l,{to:"profile",className:`nav-link ${s==="profile"?"active":""}`,children:[e.jsx("i",{className:"bi bi-person me-2"}),"個人資料"]}),e.jsxs(l,{to:"settings",className:`nav-link ${s==="settings"?"active":""}`,children:[e.jsx("i",{className:"bi bi-gear me-2"}),"設定"]})]}),e.jsx(d,{})]})})}function j(){const[i,s]=t.useState(!1);return e.jsxs("div",{className:"container py-5",children:[e.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[e.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[e.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[e.jsx("i",{className:"bi bi-diagram-3 me-3"}),"React Router Dom - 巢狀路由"]}),e.jsx("p",{className:"lead mb-0",children:"Outlet 與巢狀路由結構"})]}),e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("h3",{className:"mb-4",children:[e.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"什麼是巢狀路由?"]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-diagram-2 text-primary fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"巢狀結構"}),e.jsx("p",{className:"text-muted mb-0",children:"在父路由元件中渲染子路由元件，形成層級結構。 常用於儀表板、設定頁面等需要共用布局的場景。"})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-success bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-box-arrow-in-down-right text-success fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"Outlet 元件"}),e.jsxs("p",{className:"text-muted mb-0",children:[e.jsx("code",{children:"<Outlet />"})," 是一個佔位符， 用於渲染當前匹配的子路由元件。"]})]})]})})]})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-4",children:[e.jsx("i",{className:"bi bi-play-circle me-2 text-success"}),"互動範例"]}),e.jsxs("div",{className:"alert alert-info",children:[e.jsx("i",{className:"bi bi-info-circle me-2"}),"由於本專案採用數字編號路由結構，以下展示概念性範例。 實際專案中可以在路由配置中實現完整的巢狀路由。"]}),e.jsxs("button",{className:"btn btn-primary mb-3",onClick:()=>s(!i),children:[i?"隱藏":"顯示","巢狀路由範例"]}),i&&e.jsx(c,{children:e.jsxs(a,{path:"/",element:e.jsx(x,{}),children:[e.jsx(a,{path:"dashboard",element:e.jsx(n,{})}),e.jsx(a,{path:"profile",element:e.jsx(m,{})}),e.jsx(a,{path:"settings",element:e.jsx(o,{})}),e.jsx(a,{index:!0,element:e.jsx("div",{className:"alert alert-secondary",children:"請選擇上方的選項查看內容"})})]})})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-3",children:[e.jsx("i",{className:"bi bi-code-slash me-2 text-primary"}),"程式碼範例"]}),e.jsx("h5",{className:"mt-4 mb-3",children:"1. 路由配置"}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:e.jsx("code",{children:`// App.jsx
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
// /admin/settings -> Layout + Settings`})}),e.jsx("h5",{className:"mt-4 mb-3",children:"2. 布局元件 (使用 Outlet)"}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:e.jsx("code",{children:`// Layout.jsx
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
}`})}),e.jsx("h5",{className:"mt-4 mb-3",children:"3. 巢狀多層路由"}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:e.jsx("code",{children:`// 多層巢狀路由配置
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
// /admin/users/123/edit    -> RootLayout + AdminLayout + UsersLayout + UserEdit`})}),e.jsx("h5",{className:"mt-4 mb-3",children:"4. 條件渲染與 Outlet Context"}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:e.jsx("code",{children:`import { Outlet, useOutletContext } from 'react-router-dom';

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
}`})})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-3",children:[e.jsx("i",{className:"bi bi-briefcase me-2 text-info"}),"實際應用場景"]}),e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-md-6",children:e.jsx("div",{className:"card h-100 border-primary",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h5",{className:"card-title",children:[e.jsx("i",{className:"bi bi-layout-sidebar me-2"}),"後台管理系統"]}),e.jsx("p",{className:"card-text text-muted",children:"使用巢狀路由共用側邊欄、頂部導航等布局元件， 不同頁面只需替換主要內容區域。"})]})})}),e.jsx("div",{className:"col-md-6",children:e.jsx("div",{className:"card h-100 border-success",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h5",{className:"card-title",children:[e.jsx("i",{className:"bi bi-person-workspace me-2"}),"使用者設定頁面"]}),e.jsx("p",{className:"card-text text-muted",children:"個人資料、安全設定、通知偏好等子頁面， 共用相同的設定頁面布局和側邊選單。"})]})})}),e.jsx("div",{className:"col-md-6",children:e.jsx("div",{className:"card h-100 border-warning",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h5",{className:"card-title",children:[e.jsx("i",{className:"bi bi-cart me-2"}),"電商網站"]}),e.jsx("p",{className:"card-text text-muted",children:"商品列表、商品詳情、購物車等頁面， 共用頂部導航和頁尾，只替換中間內容。"})]})})}),e.jsx("div",{className:"col-md-6",children:e.jsx("div",{className:"card h-100 border-info",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h5",{className:"card-title",children:[e.jsx("i",{className:"bi bi-file-earmark-text me-2"}),"文件系統"]}),e.jsx("p",{className:"card-text text-muted",children:"資料夾結構的文件瀏覽器， 使用巢狀路由表示資料夾層級關係。"})]})})})]})]})})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm bg-light",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-3",children:[e.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"共用布局:"})," 使用巢狀路由共用導航列、側邊欄等布局"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"index 路由:"})," 使用 ",e.jsx("code",{children:"index"})," 屬性指定預設子路由"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"相對路徑:"})," 子路由使用相對路徑，更易維護"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"避免:"})," 避免巢狀層級過深，影響程式碼可讀性"]})]})})]})]})})})})]})}export{j as default};
