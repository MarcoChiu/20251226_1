import{r as c,j as e}from"./index-D_x0jVGn.js";function j(){const[r,d]=c.useState(""),n=()=>e.jsx("h3",{children:"test function"}),t={__html:'<h3 style="color:red;">dangerous InnerHTML </h3>'},[i,m]=c.useState([{name:"排骨飯",qty:1,price:10,remark:"1"},{name:"陽春麵",qty:2,price:20,remark:"2"},{name:"蛋糕",qty:3,price:30,remark:"3"}]),o=c.useMemo(()=>(s,l)=>{console.log("Quantity changed:",s,l);const a=[...i];a[s].qty=parseInt(l),m(a)},[i]),h=c.useMemo(()=>[...Array(10)].map((s,l)=>l+1),[]);return e.jsxs("div",{className:"container py-5",children:[e.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[e.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[e.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[e.jsx("i",{className:"bi bi-filetype-jsx me-3"}),"JSX 語法"]}),e.jsx("p",{className:"lead mb-0",children:"模板語法、事件處理與渲染優化"})]}),e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("h2",{className:"h4 mb-4",children:[e.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"功能說明"]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-check2-circle text-primary fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"JSX 特性"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsx("li",{children:"dangerouslySetInnerHTML"}),e.jsx("li",{children:"className 與 htmlFor"}),e.jsx("li",{children:"行內樣式物件"}),e.jsx("li",{children:"事件處理"})]})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-success bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-lightning text-success fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"性能優化"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsx("li",{children:"useMemo 緩存"}),e.jsx("li",{children:"事件函式穩定性"}),e.jsx("li",{children:"減少重渲染"}),e.jsx("li",{children:"key 屬性優化"})]})]})]})})]})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-4",children:[e.jsx("i",{className:"bi bi-code-square me-2"}),"互動範例"]}),e.jsxs("div",{className:"container mt-2",children:[e.jsx("input",{type:"text",value:r,onChange:s=>d(s.target.value),placeholder:"輸入查詢字串",className:"form-control mb-3"}),n(),e.jsx("div",{dangerouslySetInnerHTML:t}),e.jsx("ul",{className:"myclass list-group",children:i.map((s,l)=>e.jsxs("li",{className:"list-group-item",children:[l+1,".",e.jsx("input",{type:"checkbox",defaultChecked:!0,className:"form-check-input mx-2"}),e.jsx("label",{htmlFor:`name-${l}`,className:"form-label me-2",children:"姓名"}),e.jsx("input",{type:"text",id:`name-${l}`,defaultValue:s.name,readOnly:!0,className:"form-control d-inline-block w-auto me-2"}),s.price,"x",e.jsx("select",{value:s.qty,onChange:a=>o(l,a.target.value),className:"form-select d-inline-block w-auto mx-2",children:h.map(a=>e.jsx("option",{value:a,children:a},a))})," = $",s.qty*s.price,e.jsx("br",{}),e.jsx("textarea",{cols:"30",rows:"1",style:{color:"red",fontSize:"20px"},defaultValue:s.remark,className:"form-control mt-2"})]},l))})]})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-4",children:[e.jsx("i",{className:"bi bi-code-slash me-2 text-primary"}),"程式碼範例"]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"1. JSX 基本語法"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`// JSX 允許在 JavaScript 中寫 HTML
const element = <h1>Hello, World!</h1>;

// 使用 {} 嵌入 JavaScript 表達式
const name = 'Tom';
const greeting = <h1>Hello, {name}!</h1>;

// className 而非 class
const styled = <div className="container">Content</div>;

// htmlFor 而非 for
const label = <label htmlFor="email">Email</label>;`})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"2. 行內樣式物件"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`// 樣式必須是物件，屬性名稱使用 camelCase
const divStyle = {
  color: 'blue',
  backgroundColor: 'lightgray',
  fontSize: '20px'
};

const StyledDiv = () => (
  <div style={divStyle}>樣式文字</div>
);

// 或直接寫在 JSX 中
<div style={{ color: 'red', fontSize: '20px' }}>
  直接樣式
</div>`})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"3. 條件渲染"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`// 使用三元運算子
const isLoggedIn = true;
<div>
  {isLoggedIn ? <p>歡迎回來</p> : <p>請登入</p>}
</div>

// 使用 && 短路運算
{error && <div className="alert">錯誤: {error}</div>}

// 使用變數
let content;
if (isLoading) {
  content = <Spinner />;
} else {
  content = <Content />;
}
return <div>{content}</div>;`})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"4. 事件處理"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`// 使用 camelCase (onClick 而非 onclick)
<button onClick={handleClick}>點擊</button>

// 傳遞參數
<button onClick={() => handleClick(id)}>刪除</button>

// 阻止預設行為
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('表單提交');
};
<form onSubmit={handleSubmit}>...</form>

// 取得事件物件
const handleChange = (e) => {
  console.log(e.target.value);
};
<input onChange={handleChange} />`})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"5. dangerouslySetInnerHTML"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`// ⚠️ 謹慎使用，可能有 XSS 風險
const htmlContent = {
  __html: '<h3 style="color:red;">HTML 內容</h3>'
};

<div dangerouslySetInnerHTML={htmlContent} />

// 只在信任的內容時使用
// 使用者輸入的內容應該進行清理`})})]})]})})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm bg-light",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-3",children:[e.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"使用 className:"})," 而非 class 屬性"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"自閉合標籤:"})," 如 <img />、<input /> 必須加 /"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"列表渲染:"})," 使用唯一的 key 屬性"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"避免:"})," 在 JSX 中寫複雜邏輯，應提取為函式"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"事件命名:"})," 使用 camelCase (onClick, onChange)"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"避免:"})," 濫用 dangerouslySetInnerHTML"]})]})})]})]})})})})]})}export{j as default};
