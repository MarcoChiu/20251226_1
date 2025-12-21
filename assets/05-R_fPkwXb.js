import{r as l,j as s}from"./index-BEiEE2Na.js";const c=l.memo(({onClick:a,label:e})=>(console.log(`ChildButton "${e}" rendered`),s.jsx("button",{onClick:a,className:"btn btn-outline-primary me-2 mb-2",children:e})));c.displayName="ChildButton";const m=()=>{const[a,e]=l.useState(0),[d,r]=l.useState(""),n=()=>{console.log("Clicked Normal Button")},t=l.useCallback(()=>{console.log("Clicked Memoized Button")},[]);return s.jsxs("div",{className:"container py-5",children:[s.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[s.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[s.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[s.jsx("i",{className:"bi bi-arrow-repeat me-3"}),"useCallback Hook"]}),s.jsx("p",{className:"lead mb-0",children:"函式快取 - 記憶回調函式"})]}),s.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),s.jsx("div",{className:"row mb-5",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body p-4",children:[s.jsxs("h2",{className:"h4 mb-4",children:[s.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"Hook 說明"]}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:s.jsx("i",{className:"bi bi-check2-circle text-primary fs-4"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("h5",{className:"mb-2",children:"主要用途"}),s.jsxs("ul",{className:"text-muted mb-0",children:[s.jsx("li",{children:"記憶回調函式避免重新建立"}),s.jsx("li",{children:"搭配 React.memo 優化子元件"}),s.jsx("li",{children:"作為 useEffect/useMemo 的相依項"}),s.jsx("li",{children:"保持函式引用的穩定性"})]})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("div",{className:"bg-warning bg-opacity-10 rounded-circle p-3",children:s.jsx("i",{className:"bi bi-exclamation-triangle text-warning fs-4"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("h5",{className:"mb-2",children:"注意事項"}),s.jsxs("ul",{className:"text-muted mb-0",children:[s.jsx("li",{children:"不要預設使用，有成本"}),s.jsx("li",{children:"必須搭配 React.memo 才有效"}),s.jsx("li",{children:"相依陣列必須包含所有外部值"}),s.jsx("li",{children:"返回函式而非執行結果"})]})]})]})})]})]})})})}),s.jsx("div",{className:"row mb-5",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body p-4",children:[s.jsxs("h3",{className:"card-title mb-4",children:[s.jsx("i",{className:"bi bi-code-square me-2 text-primary"}),"互動範例"]}),s.jsxs("div",{className:"mb-4",children:[s.jsxs("p",{className:"mb-2",children:["父組件 State: ",s.jsx("span",{className:"fw-bold",children:a})]}),s.jsxs("div",{className:"d-flex flex-wrap gap-3 align-items-center",children:[s.jsxs("button",{onClick:()=>e(i=>i+1),className:"btn btn-primary",children:[s.jsx("i",{className:"bi bi-plus-lg me-1"}),"增加 Count (觸發渲染)"]}),s.jsx("input",{value:d,onChange:i=>r(i.target.value),placeholder:"輸入文字也會觸發渲染",className:"form-control w-auto"})]})]}),s.jsxs("div",{className:"p-4 bg-light rounded-3",children:[s.jsx("p",{className:"mb-3 fw-bold border-bottom pb-2",children:"Child Components 渲染狀態:"}),s.jsxs("div",{className:"d-flex flex-wrap gap-2 mb-3",children:[s.jsx(c,{onClick:n,label:"普通函數 (會重繪)"}),s.jsx(c,{onClick:t,label:"useCallback (不重繪)"})]}),s.jsxs("div",{className:"alert alert-info py-2 mb-0 d-inline-flex align-items-center border-0 bg-white",children:[s.jsx("i",{className:"bi bi-info-circle-fill me-2 text-info"}),s.jsx("span",{className:"small text-muted",children:"請打開瀏覽器 Console (F12) 查看子組件的渲染紀錄"})]})]})]})})})}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-3",children:[s.jsx("i",{className:"bi bi-code-slash me-2"}),"程式碼範例"]}),s.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:s.jsx("code",{children:`import { useState, useCallback, memo } from 'react';

// 子元件使用 memo 包裹
const ChildButton = memo(({ onClick, label }) => {
  console.log(\`ChildButton "\${label}" rendered\`);
  return <button onClick={onClick}>{label}</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  
  // 不使用 useCallback - 每次渲染都會建立新函式
  const handleClickNormal = () => {
    console.log('Clicked Normal Button');
  };
  
  // 使用 useCallback - 函式引用保持不變
  const handleClickMemoized = useCallback(() => {
    console.log('Clicked Memoized Button');
  }, []); // 空陣列表示函式永不改變
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      
      {/* 每次都會重新渲染 */}
      <ChildButton onClick={handleClickNormal} label="普通函式" />
      
      {/* 不會重新渲染（除非 dependencies 改變）*/}
      <ChildButton onClick={handleClickMemoized} label="useCallback" />
    </div>
  );
}`})})]})})})}),s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm bg-light",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-3",children:[s.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),s.jsxs("div",{className:"row g-3",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"適用場景:"})," 傳遞給經 React.memo 優化的子元件"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"相依項:"})," 作為 useEffect/useMemo 的相依項時使用"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"高頻事件:"})," scroll, resize 等高頻率事件處理器"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"避免:"})," 不要預設使用，useCallback 本身也有成本"]})]})})]})]})})})})]})};export{m as default};
