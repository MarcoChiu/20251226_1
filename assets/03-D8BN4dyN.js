import{e as j,f as b,d as u,r as N,j as s,c as i}from"./index-DXvaqpMq.js";const o=[{id:1,name:"張三",email:"zhang@example.com",role:"開發者"},{id:2,name:"李四",email:"li@example.com",role:"設計師"},{id:3,name:"王五",email:"wang@example.com",role:"專案經理"},{id:4,name:"趙六",email:"zhao@example.com",role:"測試工程師"}];function p(){j();const[t,n]=b(),r=u(),m=t.get("userId"),a=t.get("filter")||"all",[l,h]=N.useState(m||"1"),x=e=>{h(e),n({userId:e,filter:a})},d=e=>{n({userId:l,filter:e})},c=o.find(e=>e.id===parseInt(l));return s.jsxs("div",{className:"container py-5",children:[s.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[s.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[s.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[s.jsx("i",{className:"bi bi-link-45deg me-3"}),"React Router Dom - 動態路由"]}),s.jsx("p",{className:"lead mb-0",children:"URL 參數 (Params) 與查詢參數 (Search Params)"})]}),s.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),r.state&&s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsxs("div",{className:"alert alert-info",children:[s.jsxs("h5",{className:"alert-heading",children:[s.jsx("i",{className:"bi bi-info-circle me-2"}),"接收到的狀態資料"]}),s.jsxs("p",{className:"mb-0",children:[s.jsx("strong",{children:"來源:"})," ",r.state.from,s.jsx("br",{}),s.jsx("strong",{children:"時間:"})," ",r.state.timestamp]})]})})}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-4",children:[s.jsx("i",{className:"bi bi-diagram-3 me-2 text-primary"}),"useParams - URL 路徑參數"]}),s.jsxs("div",{className:"alert alert-warning",children:[s.jsx("i",{className:"bi bi-exclamation-triangle me-2"}),"本範例使用查詢參數模擬動態路由，因為當前路由結構採用數字編號。",s.jsx("br",{}),"實際應用中，URL 參數路由格式為: ",s.jsx("code",{children:"/users/:userId"})]}),s.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:s.jsx("code",{children:`// 路由配置
<Route path="/users/:userId" element={<UserProfile />} />
<Route path="/posts/:postId/comments/:commentId" element={<Comment />} />

// 元件中使用
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  // 訪問 /users/123，userId 會是 "123"
  
  return <div>使用者 ID: {userId}</div>;
}

// 多個參數
function Comment() {
  const { postId, commentId } = useParams();
  
  return (
    <div>
      文章 ID: {postId}
      評論 ID: {commentId}
    </div>
  );
}`})})]})})})}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-4",children:[s.jsx("i",{className:"bi bi-search me-2 text-success"}),"useSearchParams - 查詢參數"]}),s.jsxs("div",{className:"row mb-4",children:[s.jsx("div",{className:"col-md-6",children:s.jsx("div",{className:"card bg-light",children:s.jsxs("div",{className:"card-body",children:[s.jsx("h5",{children:"當前查詢參數"}),s.jsxs("div",{className:"mb-2",children:[s.jsx("strong",{children:"userId:"}),s.jsx("code",{className:"ms-2",children:m||"(未設定)"})]}),s.jsxs("div",{children:[s.jsx("strong",{children:"filter:"}),s.jsx("code",{className:"ms-2",children:a})]}),s.jsx("hr",{}),s.jsxs("small",{className:"text-muted",children:["完整 URL: ",r.pathname,r.search]})]})})}),s.jsx("div",{className:"col-md-6",children:s.jsx("div",{className:"card bg-light",children:s.jsxs("div",{className:"card-body",children:[s.jsx("h5",{children:"選擇使用者"}),s.jsx("select",{className:"form-select mb-3",value:l,onChange:e=>x(e.target.value),children:o.map(e=>s.jsx("option",{value:e.id,children:e.name},e.id))}),s.jsx("h5",{children:"篩選條件"}),s.jsxs("div",{className:"btn-group w-100",role:"group",children:[s.jsx("button",{className:`btn ${a==="all"?"btn-primary":"btn-outline-primary"}`,onClick:()=>d("all"),children:"全部"}),s.jsx("button",{className:`btn ${a==="active"?"btn-primary":"btn-outline-primary"}`,onClick:()=>d("active"),children:"啟用"}),s.jsx("button",{className:`btn ${a==="inactive"?"btn-primary":"btn-outline-primary"}`,onClick:()=>d("inactive"),children:"停用"})]})]})})})]}),c&&s.jsx("div",{className:"card border-primary",children:s.jsxs("div",{className:"card-body",children:[s.jsx("h5",{className:"card-title",children:"選中的使用者資訊"}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-md-6",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"姓名:"})," ",c.name]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Email:"})," ",c.email]})]}),s.jsxs("div",{className:"col-md-6",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"角色:"})," ",c.role]}),s.jsxs("p",{children:[s.jsx("strong",{children:"篩選狀態:"})," ",a]})]})]})]})}),s.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto mt-4",children:s.jsx("code",{children:`import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // 讀取查詢參數
  const query = searchParams.get('q');
  const page = searchParams.get('page') || '1';
  
  // 設定查詢參數
  const handleSearch = (searchTerm) => {
    setSearchParams({ q: searchTerm, page: '1' });
    // URL 變成: /search?q=searchTerm&page=1
  };
  
  // 更新特定參數
  const nextPage = () => {
    setSearchParams(prev => {
      prev.set('page', String(parseInt(page) + 1));
      return prev;
    });
  };
  
  // 刪除參數
  const clearFilter = () => {
    searchParams.delete('filter');
    setSearchParams(searchParams);
  };
  
  return (
    <div>
      <p>搜尋關鍵字: {query}</p>
      <p>當前頁碼: {page}</p>
    </div>
  );
}`})})]})})})}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-4",children:[s.jsx("i",{className:"bi bi-box-arrow-up-right me-2 text-info"}),"快速導航範例"]}),s.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[s.jsx(i,{to:"/reactrouterdom/03?userId=1&filter=all",className:"btn btn-outline-primary",children:"張三 - 全部"}),s.jsx(i,{to:"/reactrouterdom/03?userId=2&filter=active",className:"btn btn-outline-success",children:"李四 - 啟用"}),s.jsx(i,{to:"/reactrouterdom/03?userId=3&filter=inactive",className:"btn btn-outline-warning",children:"王五 - 停用"}),s.jsx(i,{to:"/reactrouterdom/03?userId=4",className:"btn btn-outline-info",children:"趙六 - 預設篩選"})]})]})})})}),s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm bg-light",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-3",children:[s.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),s.jsxs("div",{className:"row g-3",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"URL 參數:"})," 用於資源識別，如 ",s.jsx("code",{children:"/users/:userId"})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"查詢參數:"})," 用於篩選、排序、分頁等可選條件"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"型別轉換:"})," URL 參數永遠是字串，需要時要轉換型別"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"避免:"})," 不要將敏感資料放在 URL 參數中"]})]})})]})]})})})})]})}export{p as default};
