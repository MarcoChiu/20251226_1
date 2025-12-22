import{r as i,j as e}from"./index-DXvaqpMq.js";function t(){const s=i.useRef(null),l=i.useRef(null),a=i.useRef(null),r=n=>{n.preventDefault();const c={name:s.current.value,email:l.current.value,fileName:a.current.files[0]?.name||"未選擇檔案"};alert(`提交資料:
姓名: ${c.name}
Email: ${c.email}
檔案: ${c.fileName}`),console.log("Form Data:",c)},d=()=>{s.current&&(s.current.value=""),l.current&&(l.current.value=""),a.current&&(a.current.value="")};return e.jsxs("div",{className:"container py-5",children:[e.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[e.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[e.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[e.jsx("i",{className:"bi bi-plugin me-3"}),"非受控元件"]}),e.jsx("p",{className:"lead mb-0",children:"使用 useRef 處理表單資料"})]}),e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("h2",{className:"h4 mb-4",children:[e.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"功能說明"]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-check2-circle text-primary fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"useRef 特性"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsx("li",{children:"直接操作 DOM"}),e.jsx("li",{children:"defaultValue 設定"}),e.jsx("li",{children:"減少重渲染"}),e.jsx("li",{children:"一次性讀取"})]})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-success bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-lightbulb text-success fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"適用場景"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsx("li",{children:"簡單表單"}),e.jsx("li",{children:"第三方整合"}),e.jsx("li",{children:"檔案上傳"}),e.jsx("li",{children:"效能優化"})]})]})]})})]})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-4",children:[e.jsx("i",{className:"bi bi-code-square me-2 text-primary"}),"互動範例"]}),e.jsxs("form",{onSubmit:r,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"姓名 (Default Value)"}),e.jsx("input",{type:"text",className:"form-control",ref:s,defaultValue:"預設訪客",placeholder:"請輸入姓名"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Email"}),e.jsx("input",{type:"email",className:"form-control",ref:l,placeholder:"name@example.com"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"上傳檔案 (Native HTML)"}),e.jsx("input",{type:"file",className:"form-control",ref:a})]}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx("button",{type:"submit",className:"btn btn-dark",children:"📤 提交 (Console Log)"}),e.jsx("button",{type:"button",className:"btn btn-outline-secondary",onClick:d,children:"🔄 重置 (Manual)"})]})]})]})})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("h3",{className:"h4 mb-4",children:[e.jsx("i",{className:"bi bi-code-slash me-2 text-success"}),"程式碼範例"]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"bg-light p-4 rounded-3",children:[e.jsx("h5",{className:"mb-3",children:"使用 useRef 處理表單"}),e.jsx("pre",{className:"bg-white p-3 rounded border mb-0",children:e.jsx("code",{children:`import { useRef } from 'react';

const nameRef = useRef(null);
const emailRef = useRef(null);

const handleSubmit = (e) => {
  e.preventDefault();
  
  const data = {
    name: nameRef.current.value,
    email: emailRef.current.value
  };
  
  console.log(data);
};

<input
  ref={nameRef}
  defaultValue="預設值"
  type="text"
/>`})})]})}),e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"bg-light p-4 rounded-3",children:[e.jsx("h5",{className:"mb-3",children:"手動重置表單"}),e.jsx("pre",{className:"bg-white p-3 rounded border mb-0",children:e.jsx("code",{children:`const handleReset = () => {
  if (nameRef.current) {
    nameRef.current.value = '';
  }
  if (emailRef.current) {
    emailRef.current.value = '';
  }
  if (fileRef.current) {
    fileRef.current.value = '';
  }
};

// 或使用原生 form reset
<form ref={formRef}>
  <button onClick={() => formRef.current.reset()}>
    重置
  </button>
</form>`})})]})})]})]})})})}),e.jsx("div",{className:"row mt-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("h3",{className:"h4 mb-4",children:[e.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6",children:e.jsx("div",{className:"card border-success",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h5",{className:"text-success mb-3",children:[e.jsx("i",{className:"bi bi-check-circle me-2"}),"建議作法"]}),e.jsxs("ul",{className:"mb-0",children:[e.jsx("li",{children:"簡單表單優先使用"}),e.jsx("li",{children:"檔案上傳必須使用 ref"}),e.jsx("li",{children:"第三方 DOM 套件整合"}),e.jsx("li",{children:"減少不必要的狀態"}),e.jsx("li",{children:"性能優化場景"})]})]})})}),e.jsx("div",{className:"col-md-6",children:e.jsx("div",{className:"card border-danger",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h5",{className:"text-danger mb-3",children:[e.jsx("i",{className:"bi bi-x-circle me-2"}),"避免錯誤"]}),e.jsxs("ul",{className:"mb-0",children:[e.jsx("li",{children:"不適合複雜驗證"}),e.jsx("li",{children:"無法即時顯示錯誤"}),e.jsx("li",{children:"不適合條件式渲染"}),e.jsx("li",{children:"混合受控/非受控會有問題"}),e.jsx("li",{children:"注意 defaultValue vs value"})]})]})})})]})]})})})})]})}export{t as default};
