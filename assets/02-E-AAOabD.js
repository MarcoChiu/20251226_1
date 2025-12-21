import{u as o,d as m,r as h,j as s}from"./index-BEiEE2Na.js";function j(){const e=o(),a=m(),[c,t]=h.useState(""),l=i=>{e(i)},d=()=>{e(-1)},r=()=>{e(1)},n=()=>{c&&e(c)};return s.jsxs("div",{className:"container py-5",children:[s.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[s.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[s.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[s.jsx("i",{className:"bi bi-bezier2 me-3"}),"React Router Dom - 進階路由"]}),s.jsx("p",{className:"lead mb-0",children:"useNavigate 與 useLocation Hook"})]}),s.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm bg-info bg-opacity-10",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-3",children:[s.jsx("i",{className:"bi bi-geo-alt me-2 text-info"}),"useLocation - 當前位置資訊"]}),s.jsxs("div",{className:"row g-3",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"p-3 bg-white rounded",children:[s.jsx("strong",{children:"路徑名稱 (pathname):"}),s.jsx("code",{className:"d-block mt-2 text-primary",children:a.pathname})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"p-3 bg-white rounded",children:[s.jsx("strong",{children:"搜尋參數 (search):"}),s.jsx("code",{className:"d-block mt-2 text-primary",children:a.search||"(無)"})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"p-3 bg-white rounded",children:[s.jsx("strong",{children:"雜湊值 (hash):"}),s.jsx("code",{className:"d-block mt-2 text-primary",children:a.hash||"(無)"})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"p-3 bg-white rounded",children:[s.jsx("strong",{children:"狀態 (state):"}),s.jsx("code",{className:"d-block mt-2 text-primary",children:JSON.stringify(a.state)||"(無)"})]})})]})]})})})}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-4",children:[s.jsx("i",{className:"bi bi-compass me-2 text-primary"}),"useNavigate - 程式化導航"]}),s.jsxs("div",{className:"row g-3 mb-4",children:[s.jsx("div",{className:"col-md-6",children:s.jsx("div",{className:"card h-100",children:s.jsxs("div",{className:"card-body",children:[s.jsx("h5",{className:"card-title",children:"基本導航"}),s.jsx("p",{className:"text-muted small",children:"使用絕對路徑導航到指定頁面"}),s.jsxs("div",{className:"d-grid gap-2",children:[s.jsx("button",{className:"btn btn-primary",onClick:()=>l("/reactrouterdom/01"),children:"前往基礎路由"}),s.jsx("button",{className:"btn btn-success",onClick:()=>l("/reactrouterdom/03"),children:"前往動態路由"})]})]})})}),s.jsx("div",{className:"col-md-6",children:s.jsx("div",{className:"card h-100",children:s.jsxs("div",{className:"card-body",children:[s.jsx("h5",{className:"card-title",children:"歷史導航"}),s.jsx("p",{className:"text-muted small",children:"使用數字控制瀏覽器歷史記錄"}),s.jsxs("div",{className:"d-grid gap-2",children:[s.jsxs("button",{className:"btn btn-outline-primary",onClick:d,children:[s.jsx("i",{className:"bi bi-arrow-left me-2"}),"上一頁 navigate(-1)"]}),s.jsxs("button",{className:"btn btn-outline-primary",onClick:r,children:["下一頁 navigate(1)",s.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})]})})}),s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card",children:s.jsxs("div",{className:"card-body",children:[s.jsx("h5",{className:"card-title",children:"自訂路徑導航"}),s.jsx("p",{className:"text-muted small",children:"輸入路徑並導航"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",className:"form-control",placeholder:"輸入路徑，例如: /reactrouterdom/01",value:c,onChange:i=>t(i.target.value)}),s.jsx("button",{className:"btn btn-primary",onClick:n,children:"導航"})]})]})})}),s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card",children:s.jsxs("div",{className:"card-body",children:[s.jsx("h5",{className:"card-title",children:"帶狀態的導航"}),s.jsx("p",{className:"text-muted small",children:"導航時傳遞額外資料"}),s.jsx("button",{className:"btn btn-warning",onClick:()=>e("/reactrouterdom/03",{state:{from:"進階路由頁面",timestamp:new Date().toISOString()}}),children:"帶狀態導航到動態路由"})]})})})]}),s.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:s.jsx("code",{children:`import { useNavigate, useLocation } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  // 基本導航
  const goToAbout = () => {
    navigate('/about');
  };

  // 相對路徑導航
  const goToRelative = () => {
    navigate('../other');
  };

  // 歷史導航
  const goBack = () => {
    navigate(-1); // 返回上一頁
  };

  // 帶狀態的導航
  const goWithState = () => {
    navigate('/profile', { 
      state: { userId: 123 } 
    });
  };

  // 替換歷史記錄（不會增加新記錄）
  const replaceHistory = () => {
    navigate('/new-page', { replace: true });
  };

  // 讀取當前位置資訊
  console.log(location.pathname); // '/current/path'
  console.log(location.search);   // '?id=123'
  console.log(location.state);    // { userId: 123 }

  return (
    <div>
      <button onClick={goToAbout}>前往關於</button>
      <button onClick={goBack}>返回</button>
    </div>
  );
}`})})]})})})}),s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm bg-light",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-3",children:[s.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),s.jsxs("div",{className:"row g-3",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"使用情境:"})," 表單提交後使用 ",s.jsx("code",{children:"navigate"})," 進行重定向"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"傳遞狀態:"})," 使用 ",s.jsx("code",{children:"state"})," 傳遞臨時資料"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"replace 選項:"})," 登入後導航使用 ",s.jsx("code",{children:"replace: true"})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"避免:"})," 避免在渲染期間直接呼叫 ",s.jsx("code",{children:"navigate"})]})]})})]})]})})})})]})}export{j as default};
