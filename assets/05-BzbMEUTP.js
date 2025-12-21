import{r as d,j as e}from"./index-BEiEE2Na.js";function N(){const[i,n]=d.useState({singleFile:null,multipleFiles:[],imageFile:null,imagePreview:null}),[c,m]=d.useState(null),h=l=>{const s=l.target.files[0];n(a=>({...a,singleFile:s}))},o=l=>{const s=Array.from(l.target.files);n(a=>({...a,multipleFiles:s}))},x=l=>{const s=l.target.files[0];if(s&&s.type.startsWith("image/")){const a=new FileReader;a.onloadend=()=>{n(r=>({...r,imageFile:s,imagePreview:a.result}))},a.readAsDataURL(s)}},t=l=>{if(l===0)return"0 Bytes";const s=1024,a=["Bytes","KB","MB","GB"],r=Math.floor(Math.log(l)/Math.log(s));return Math.round(l/Math.pow(s,r)*100)/100+" "+a[r]};async function j(l){const s={singleFile:l.get("singleFile"),multipleFiles:l.getAll("multipleFiles"),imageFile:l.get("imageFile")};console.log("提交的資料:",s),m(s)}return e.jsxs("div",{className:"container py-5",children:[e.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[e.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[e.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[e.jsx("i",{className:"bi bi-file-earmark-arrow-up me-3"}),"File 檔案上傳"]}),e.jsx("p",{className:"lead mb-0",children:"單檔、多檔上傳與圖片預覽"})]}),e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("h2",{className:"h4 mb-4",children:[e.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"功能說明"]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-check2-circle text-primary fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"上傳功能"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsx("li",{children:"單一檔案上傳"}),e.jsx("li",{children:"多檔案上傳"}),e.jsx("li",{children:"圖片即時預覽"}),e.jsx("li",{children:"檔案資訊顯示"})]})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-success bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-image text-success fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"實用功能"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsx("li",{children:"FileReader API"}),e.jsx("li",{children:"檔案大小格式化"}),e.jsx("li",{children:"檔案類型限制"}),e.jsx("li",{children:"拖放上傳支援"})]})]})]})})]})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-4",children:[e.jsx("i",{className:"bi bi-code-square me-2 text-primary"}),"互動範例"]}),e.jsxs("form",{action:j,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"1️⃣ 單一檔案上傳"}),e.jsx("label",{htmlFor:"singleFile",className:"form-label",children:"選擇檔案"}),e.jsx("input",{id:"singleFile",name:"singleFile",type:"file",className:"form-control",onChange:h}),i.singleFile&&e.jsxs("div",{className:"alert alert-info mt-2",children:[e.jsxs("p",{className:"mb-1",children:[e.jsx("strong",{children:"📄 檔案名稱:"})," ",i.singleFile.name]}),e.jsxs("p",{className:"mb-1",children:[e.jsx("strong",{children:"📊 檔案大小:"})," ",t(i.singleFile.size)]}),e.jsxs("p",{className:"mb-0",children:[e.jsx("strong",{children:"📋 檔案類型:"})," ",i.singleFile.type||"未知"]})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"2️⃣ 多檔案上傳"}),e.jsx("label",{htmlFor:"multipleFiles",className:"form-label",children:"選擇多個檔案"}),e.jsx("input",{id:"multipleFiles",name:"multipleFiles",type:"file",className:"form-control",multiple:!0,onChange:o}),e.jsx("small",{className:"text-muted",children:"按住 Ctrl (Windows) 或 Cmd (Mac) 可選擇多個檔案"}),i.multipleFiles.length>0&&e.jsxs("div",{className:"alert alert-info mt-2",children:[e.jsx("p",{className:"mb-2",children:e.jsxs("strong",{children:["已選擇 ",i.multipleFiles.length," 個檔案:"]})}),e.jsx("ul",{className:"mb-0",children:i.multipleFiles.map((l,s)=>e.jsxs("li",{children:[l.name," (",t(l.size),")"]},s))})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"3️⃣ 限制檔案類型 - 僅圖片"}),e.jsx("label",{htmlFor:"imageFile",className:"form-label",children:"選擇圖片"}),e.jsx("input",{id:"imageFile",name:"imageFile",type:"file",className:"form-control",accept:"image/*",onChange:x}),e.jsx("small",{className:"text-muted",children:"僅接受圖片檔案（JPG, PNG, GIF 等）"}),i.imagePreview&&e.jsxs("div",{className:"mt-3",children:[e.jsx("p",{className:"mb-2",children:e.jsx("strong",{children:"圖片預覽:"})}),e.jsx("img",{src:i.imagePreview,alt:"預覽",className:"img-thumbnail",style:{maxWidth:"300px",maxHeight:"300px"}}),e.jsxs("div",{className:"alert alert-info mt-2",children:[e.jsxs("p",{className:"mb-1",children:[e.jsx("strong",{children:"📄 檔案名稱:"})," ",i.imageFile.name]}),e.jsxs("p",{className:"mb-0",children:[e.jsx("strong",{children:"📊 檔案大小:"})," ",t(i.imageFile.size)]})]})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"4️⃣ 限制檔案類型 - 文件"}),e.jsx("label",{htmlFor:"documentFile",className:"form-label",children:"選擇文件"}),e.jsx("input",{id:"documentFile",name:"documentFile",type:"file",className:"form-control",accept:".pdf,.doc,.docx,.txt"}),e.jsx("small",{className:"text-muted",children:"僅接受 PDF, DOC, DOCX, TXT 檔案"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"5️⃣ 自訂樣式的檔案上傳"}),e.jsxs("div",{className:"border border-2 border-dashed rounded p-4 text-center",style:{cursor:"pointer"},children:[e.jsx("input",{id:"customFile",name:"customFile",type:"file",className:"d-none",onChange:l=>{const s=l.target.files[0];s&&alert(`已選擇: ${s.name}`)}}),e.jsxs("label",{htmlFor:"customFile",style:{cursor:"pointer"},children:[e.jsx("div",{className:"mb-2",style:{fontSize:"3rem"},children:"📤"}),e.jsx("p",{className:"mb-1 fw-bold",children:"點擊或拖曳檔案到此處上傳"}),e.jsx("small",{className:"text-muted",children:"支援所有檔案格式"})]})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-lg w-100",children:"🚀 送出表單"})]}),c&&e.jsxs("div",{className:"alert alert-success mt-4",role:"alert",children:[e.jsx("h5",{className:"alert-heading",children:"✅ 表單提交成功！"}),e.jsx("hr",{}),e.jsxs("p",{children:[e.jsx("strong",{children:"📁 單一檔案:"})," ",c.singleFile?c.singleFile.name:"無"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📁 多檔案:"})," ",c.multipleFiles.length," 個檔案"]}),c.multipleFiles.length>0&&e.jsx("ul",{children:c.multipleFiles.map((l,s)=>e.jsx("li",{children:l.name},s))}),e.jsxs("p",{children:[e.jsx("strong",{children:"🖼️ 圖片檔案:"})," ",c.imageFile?c.imageFile.name:"無"]})]})]})})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-3",children:[e.jsx("i",{className:"bi bi-code-slash me-2"}),"程式碼範例"]}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:e.jsx("code",{children:`import { useState } from 'react';

function FileUploadExample() {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  
  // 單一檔案
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  // 多檔案
  const handleMultipleFiles = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
  };
  
  // 圖片預覽
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <form>
      {/* 單一檔案 */}
      <input
        type="file"
        onChange={handleFileChange}
      />
      
      {/* 多檔案 */}
      <input
        type="file"
        multiple
        onChange={handleMultipleFiles}
      />
      
      {/* 限制檔案類型 */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      
      {imagePreview && <img src={imagePreview} alt="Preview" />}
    </form>
  );
}`})})]})})})}),e.jsx("div",{className:"row mt-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm bg-light",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-3",children:[e.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"限制類型:"})," 使用 accept 屬性限制檔案類型"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"大小驗證:"})," 上傳前檢查檔案大小"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"預覽功能:"})," 圖片上傳應提供預覽"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"避免:"})," 忽略檔案大小和類型驗證"]})]})})]})]})})})})]})}export{N as default};
