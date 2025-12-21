import{r as t,j as s}from"./index-BEiEE2Na.js";function N(){const[i,d]=t.useState([{name:"",email:""}]),[r,h]=t.useState(null),x=()=>{d([...i,{name:"",email:""}])},o=l=>{const e=i.filter((a,c)=>c!==l);d(e)},n=(l,e)=>{const{name:a,value:c}=e.target,m=[...i];m[l][a]=c,d(m)},j=l=>{l.preventDefault(),console.log("提交的資料:",i),h(i)};return s.jsxs("div",{className:"container py-5",children:[s.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[s.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[s.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[s.jsx("i",{className:"bi bi-plus-slash-minus me-3"}),"動態表單欄位"]}),s.jsx("p",{className:"lead mb-0",children:"動態新增與刪除表單欄位"})]}),s.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),s.jsx("div",{className:"row mb-5",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body p-4",children:[s.jsxs("h2",{className:"h4 mb-4",children:[s.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"功能說明"]}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:s.jsx("i",{className:"bi bi-check2-circle text-primary fs-4"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("h5",{className:"mb-2",children:"主要功能"}),s.jsxs("ul",{className:"text-muted mb-0",children:[s.jsx("li",{children:"動態新增欄位"}),s.jsx("li",{children:"動態刪除欄位"}),s.jsx("li",{children:"陣列狀態管理"}),s.jsx("li",{children:"表單資料收集"})]})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("div",{className:"bg-success bg-opacity-10 rounded-circle p-3",children:s.jsx("i",{className:"bi bi-list-ul text-success fs-4"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("h5",{className:"mb-2",children:"應用場景"}),s.jsxs("ul",{className:"text-muted mb-0",children:[s.jsx("li",{children:"多使用者資料"}),s.jsx("li",{children:"訂單明細"}),s.jsx("li",{children:"技能清單"}),s.jsx("li",{children:"聯絡人資訊"})]})]})]})})]})]})})})}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-4",children:[s.jsx("i",{className:"bi bi-code-square me-2 text-primary"}),"互動範例"]}),s.jsxs("form",{onSubmit:j,children:[i.map((l,e)=>s.jsxs("div",{className:"row mb-3 align-items-end",children:[s.jsxs("div",{className:"col-md-5",children:[s.jsxs("label",{className:"form-label",children:["姓名 ",e+1]}),s.jsx("input",{type:"text",name:"name",className:"form-control",placeholder:"輸入姓名",value:l.name,onChange:a=>n(e,a),required:!0})]}),s.jsxs("div",{className:"col-md-5",children:[s.jsxs("label",{className:"form-label",children:["Email ",e+1]}),s.jsx("input",{type:"email",name:"email",className:"form-control",placeholder:"輸入 Email",value:l.email,onChange:a=>n(e,a),required:!0})]}),s.jsx("div",{className:"col-md-2",children:i.length>1&&s.jsx("button",{type:"button",className:"btn btn-outline-danger w-100",onClick:()=>o(e),children:"🗑️ 刪除"})})]},e)),s.jsxs("div",{className:"d-flex gap-2 mt-4",children:[s.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:x,children:"➕ 新增欄位"}),s.jsx("button",{type:"submit",className:"btn btn-primary",children:"🚀 送出表單"})]})]}),r&&s.jsxs("div",{className:"alert alert-success mt-4",children:[s.jsx("h5",{className:"alert-heading",children:"✅ 提交資料預覽"}),s.jsx("hr",{}),s.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})})})}),s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body p-4",children:[s.jsxs("h3",{className:"h4 mb-4",children:[s.jsx("i",{className:"bi bi-code-slash me-2 text-success"}),"程式碼範例"]}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-12",children:s.jsxs("div",{className:"bg-light p-4 rounded-3",children:[s.jsx("h5",{className:"mb-3",children:"動態表單欄位管理"}),s.jsx("pre",{className:"bg-white p-3 rounded border mb-0",children:s.jsx("code",{children:`const [fields, setFields] = useState([{ id: 1, name: '', email: '' }]);

const addField = () => {
  setFields([...fields, {
    id: Date.now(),
    name: '',
    email: ''
  }]);
};

const removeField = (id) => {
  setFields(fields.filter(field => field.id !== id));
};

const handleChange = (id, fieldName, value) => {
  setFields(fields.map(field => 
    field.id === id
      ? { ...field, [fieldName]: value }
      : field
  ));
};`})})]})}),s.jsx("div",{className:"col-12",children:s.jsxs("div",{className:"bg-light p-4 rounded-3",children:[s.jsx("h5",{className:"mb-3",children:"表單提交與資料收集"}),s.jsx("pre",{className:"bg-white p-3 rounded border mb-0",children:s.jsx("code",{children:`const handleSubmit = (e) => {
  e.preventDefault();
  
  // 過濾空白欄位
  const validData = fields.filter(field => 
    field.name.trim() && field.email.trim()
  );
  
  console.log('Valid Fields:', validData);
  
  // 驗證每個欄位
  const hasErrors = validData.some(field => 
    !field.email.includes('@')
  );
  
  if (!hasErrors) {
    // 提交資料
  }
};`})})]})})]})]})})})}),s.jsx("div",{className:"row mt-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body p-4",children:[s.jsxs("h3",{className:"h4 mb-4",children:[s.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-md-6",children:s.jsx("div",{className:"card border-success",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h5",{className:"text-success mb-3",children:[s.jsx("i",{className:"bi bi-check-circle me-2"}),"建議作法"]}),s.jsxs("ul",{className:"mb-0",children:[s.jsx("li",{children:"使用唯一 ID 標識每個欄位"}),s.jsx("li",{children:"提供新增/刪除按鈕"}),s.jsx("li",{children:"驗證每個欄位資料"}),s.jsx("li",{children:"提供最少欄位數限制"}),s.jsx("li",{children:"顯示欄位編號或標題"})]})]})})}),s.jsx("div",{className:"col-md-6",children:s.jsx("div",{className:"card border-danger",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h5",{className:"text-danger mb-3",children:[s.jsx("i",{className:"bi bi-x-circle me-2"}),"避免錯誤"]}),s.jsxs("ul",{className:"mb-0",children:[s.jsx("li",{children:"不要使用 index 作為 key"}),s.jsx("li",{children:"避免刪除最後一個欄位"}),s.jsx("li",{children:"注意狀態不可變性"}),s.jsx("li",{children:"處理空陣列情況"}),s.jsx("li",{children:"提供適當的 UX 回饋"})]})]})})})]})]})})})})]})}export{N as default};
