import{r as i,j as s}from"./index-DXvaqpMq.js";function o(){const t={name:"排骨飯",qty:1,price:10,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9Ib0OMzM_hz_-X_jYMgHV5_TkqObmX8wFQ&s"};i.useEffect(()=>{},[]);const[a,n]=i.useState(t),[l,c]=i.useState(!1),[r,d]=i.useState(null),m=()=>{try{c(!0),d(null),n(e=>({...e,price:e.price+1}))}catch(e){console.error("捕捉到錯誤：",e),d(e.message)}finally{c(!1)}};return s.jsxs("div",{className:"container py-5",children:[s.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[s.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[s.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[s.jsx("i",{className:"bi bi-file-earmark-text me-3"}),"單筆資料渲染"]}),s.jsx("p",{className:"lead mb-0",children:"useState 與非同步狀態管理"})]}),s.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),s.jsx("div",{className:"row mb-5",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body p-4",children:[s.jsxs("h2",{className:"h4 mb-4",children:[s.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"功能說明"]}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:s.jsx("i",{className:"bi bi-check2-circle text-primary fs-4"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("h5",{className:"mb-2",children:"狀態管理"}),s.jsxs("ul",{className:"text-muted mb-0",children:[s.jsx("li",{children:"useState 基本使用"}),s.jsx("li",{children:"物件狀態更新"}),s.jsx("li",{children:"非同步處理"}),s.jsx("li",{children:"Loading 狀態"})]})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("div",{className:"bg-success bg-opacity-10 rounded-circle p-3",children:s.jsx("i",{className:"bi bi-shield-check text-success fs-4"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("h5",{className:"mb-2",children:"錯誤處理"}),s.jsxs("ul",{className:"text-muted mb-0",children:[s.jsx("li",{children:"try-catch 機制"}),s.jsx("li",{children:"錯誤狀態管理"}),s.jsx("li",{children:"finally 清理"}),s.jsx("li",{children:"錯誤訊息顯示"})]})]})]})})]})]})})})}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-4",children:[s.jsx("i",{className:"bi bi-code-square me-2"}),"互動範例"]}),s.jsxs("div",{className:"container mt-2",children:[s.jsxs("div",{className:"card",style:{maxWidth:"400px"},children:[s.jsx("img",{src:a.image,className:"card-img-top",alt:a.name}),s.jsxs("div",{className:"card-body",children:[s.jsx("h5",{className:"card-title",children:a.name}),s.jsxs("p",{className:"card-text",children:["價格：$",a.price]}),s.jsx("button",{className:"btn btn-primary",onClick:m,disabled:l,children:l?"讀取中...":"點我加價 +1"})]})]}),r&&s.jsxs("div",{className:"alert alert-danger mt-3",children:["⚠️ ",r]})]})]})})})}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-4",children:[s.jsx("i",{className:"bi bi-code-slash me-2 text-primary"}),"程式碼範例"]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"1. useState 基本用法"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`import { useState } from 'react';

function Counter() {
  // [狀態變數, 更新函式] = useState(初始值)
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>計數: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"2. 物件狀態更新"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`const [user, setUser] = useState({
  name: 'Tom',
  age: 25,
  email: 'tom@example.com'
});

// ❌ 錯誤：直接修改
user.age = 26; // 不會觸發重新渲染

// ✅ 正確：使用 spread operator
setUser({
  ...user,
  age: 26
});

// ✅ 正確：函式式更新
setUser(prevUser => ({
  ...prevUser,
  age: prevUser.age + 1
}));`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"3. 非同步狀態更新"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`const [loading, setLoading] = useState(false);
const [data, setData] = useState(null);
const [error, setError] = useState(null);

const fetchData = async () => {
  try {
    setLoading(true);
    setError(null);
    
    const response = await fetch('/api/data');
    const result = await response.json();
    
    setData(result);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"4. Loading 與錯誤處理"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const handleSubmit = async () => {
  try {
    setIsLoading(true);
    setError(null); // 清除舊錯誤
    
    // 模擬 API 請求
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 處理成功邏輯
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false); // 無論成功失敗都關閉 loading
  }
};

// JSX 中顯示
{isLoading && <Spinner />}
{error && <Alert>{error}</Alert>}`})})]})]})})})}),s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm bg-light",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-3",children:[s.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),s.jsxs("div",{className:"row g-3",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"函式式更新:"})," 當新狀態依賴舊狀態時使用"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"不可變更新:"})," 使用 spread operator 複製物件"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"錯誤處理:"})," 使用 try-catch-finally 結構"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"避免:"})," 直接修改狀態物件 (mutation)"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Loading 狀態:"})," 提供視覺回饋給使用者"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"避免:"})," 在非同步操作中忘記清理 loading 狀態"]})]})})]})]})})})})]})}export{o as default};
