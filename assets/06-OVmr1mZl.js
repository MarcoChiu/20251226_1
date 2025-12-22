import{r,a as h,j as s,L}from"./index-DXvaqpMq.js";import{s as P}from"./06.module-DnV--02W.js";const G={VITE_APP_Email06:"marco79mo@gmail.com",VITE_APP_Password06:"7533967",VITE_APP_Path06:"marcochiu"},{VITE_APP_Path06:V,VITE_APP_Email06:J,VITE_APP_Password06:B}=G,H=({onDelete:c,product:e})=>{const i=Math.round((1-e.price/e.origin_price)*100);return s.jsx("div",{className:"col",children:s.jsxs("div",{className:"card h-100 shadow-sm product-card",children:[s.jsx("img",{src:e.imageUrl,alt:e.title,className:`card-img-top ${P["product-card"]}`,style:{height:"250px",objectFit:"cover"}}),s.jsxs("div",{className:"card-body",children:[s.jsx("h5",{className:"card-title",children:e.title}),s.jsx("span",{className:`badge ${e.is_enabled?"bg-success":"bg-secondary"} mb-2`,children:e.is_enabled?"✓ 販售中":"✗ 已下架"}),s.jsxs("p",{className:"text-muted small mb-2",children:["📁 ",e.category]}),e.description&&s.jsx("p",{className:"card-text small",children:e.description}),e.content&&s.jsx("p",{className:"card-text text-muted",style:{fontSize:"0.85rem"},children:e.content}),s.jsx("div",{className:"bg-light p-2 rounded mb-3",children:s.jsxs("span",{className:"text-muted small",children:["📦 ",e.unit," × ",e.num]})}),s.jsxs("div",{className:"bg-gradient p-3 rounded text-white mb-3",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[s.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-1",children:[s.jsxs("span",{className:"text-decoration-line-through opacity-75 small",children:["原價 NT$ ",e.origin_price?.toLocaleString()]}),i>0&&s.jsxs("span",{className:"badge bg-white bg-opacity-25 small",children:["省 ",i,"%"]})]}),s.jsxs("div",{className:"fs-4 fw-bold",children:["NT$ ",e.price?.toLocaleString()]})]}),e.imagesUrl&&e.imagesUrl.length>0&&s.jsxs("div",{className:"border-top pt-3 mb-3",children:[s.jsx("p",{className:"text-muted small fw-bold mb-2",children:"🖼️ 更多圖片"}),s.jsx("div",{className:"d-flex gap-2 flex-wrap",children:e.imagesUrl.map((n,d)=>s.jsx("img",{src:n,alt:`${e.title}-${d}`,className:`rounded ${P["gallery-image"]}`,style:{width:"80px",height:"80px",objectFit:"cover",cursor:"pointer"}},d))})]}),s.jsx("div",{className:"border-top pt-3",children:s.jsx("button",{className:"btn btn-danger w-100",onClick:()=>c(e.id,e.title),children:"🗑️ 刪除產品"})})]})]})})},O=({selectedFile:c,previewUrl:e,uploadedImageUrl:i,loading:n,onFileChange:d,onUpload:j})=>s.jsx("div",{className:"card mb-4 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsx("h3",{className:"card-title",children:"📤 上傳圖片"}),s.jsx("p",{className:"text-muted small mb-3",children:"支援格式：JPG、JPEG、PNG，檔案大小限制 3MB"}),s.jsxs("div",{className:"d-flex gap-3 align-items-center flex-wrap mb-3",children:[s.jsxs("div",{className:"file-input-wrapper",children:[s.jsx("input",{type:"file",className:"form-control d-none",id:"file-upload",accept:".jpg,.jpeg,.png",onChange:d}),s.jsx("label",{htmlFor:"file-upload",className:"btn btn-outline-secondary",children:"📁 選擇檔案"})]}),c&&s.jsxs("span",{className:"text-muted small",children:["已選擇：",c.name," (",(c.size/1024).toFixed(2)," KB)"]}),s.jsx("button",{className:"btn btn-success",onClick:j,disabled:!c||n,children:n?"上傳中...":"⬆️ 上傳"})]}),e&&s.jsxs("div",{className:"mt-3",children:[s.jsx("p",{className:"text-muted small",children:"預覽："}),s.jsx("img",{src:e,alt:"預覽",className:"img-thumbnail",style:{maxWidth:"200px",maxHeight:"200px"}})]}),i&&s.jsxs("div",{className:"alert alert-success mt-3",children:[s.jsx("p",{className:"small mb-2",children:"✅ 上傳成功！圖片網址："}),s.jsx("input",{type:"text",className:"form-control form-control-sm",value:i,readOnly:!0,onClick:p=>p.target.select()})]})]})}),q=({error:c})=>s.jsxs("div",{className:"alert alert-danger d-flex align-items-center",role:"alert",children:[s.jsx("span",{className:"fs-4 me-2",children:"⚠️"}),s.jsxs("span",{children:["錯誤：",c]})]});function Q(){const[c,e]=r.useState(!0),[i,n]=r.useState(null),[d,j]=r.useState([]),[p,f]=r.useState(null),[$,N]=r.useState(null),[A,_]=r.useState(""),m="https://vue3-course-api.hexschool.io/v2",u=V,D="mycook",w=r.useRef(""),x=()=>({headers:{Authorization:w.current}}),b=async()=>{const a=await h.get(`${m}/api/${u}/admin/products`,x());j(a.data.products)};r.useEffect(()=>{(async()=>{try{e(!0);const a=await h.post(`${m}/admin/signin`,{username:J,password:B}),{token:t,expired:o}=a.data;document.cookie=`${D}=${t};expires=${new Date(o)}`;const l=document.cookie.replace(/(?:(?:^|.*;\s*)mycook\s*\=\s*([^;]*).*$)|^.*$/,"$1");w.current=l;const v=await h.post(`${m}/api/user/check`,{},x());await b(),n(null)}catch(a){n(a.response.data.message||"未知錯誤")}finally{e(!1)}})()},[]);const C=a=>{const t=a.target.files[0];if(!t)return;if(!["image/jpeg","image/jpg","image/png"].includes(t.type)){alert("❌ 僅支援 JPG、JPEG 或 PNG 格式的圖片");return}if(t.size>3*1024*1024){alert("❌ 檔案大小不能超過 3MB");return}f(t);const l=new FileReader;l.onloadend=()=>{N(l.result)},l.readAsDataURL(t)},T=async(a,t)=>{if(confirm(`確定要刪除「${t}」嗎？`))try{e(!0),await h.delete(`${m}/api/${u}/admin/product/${a}`,x()),console.log("刪除成功:",a),alert("✅ 產品刪除成功！"),await b()}catch(o){console.error("刪除失敗:",o),alert("❌ 刪除失敗: "+(o.response?.data?.message||o.message))}finally{e(!1)}},E=()=>{const a=["電子產品","服飾配件","美妝保養","食品飲料","運動健身","家居生活","書籍文具","玩具遊戲","寵物用品","汽車用品","戶外露營","樂器音響","手作材料","辦公用品","清潔用品"],t=["個","件","組","盒","包","瓶","雙","台","支","條","張","本","袋","罐","桶"],o=["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400","https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400","https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400","https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400","https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400","https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400","https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400","https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400","https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400","https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400","https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400","https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400","https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=400","https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400","https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400","https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400","https://images.unsplash.com/photo-1525904097878-94fb15835963?w=400","https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400","https://images.unsplash.com/photo-1563299796-17596ed6b017?w=400","https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400","https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400","https://images.unsplash.com/photo-1503602642458-232111445657?w=400","https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400","https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400","https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400","https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=400","https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400","https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400","https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400","https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400","https://images.unsplash.com/photo-1487700160041-babef9c3cb55?w=400","https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400","https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=400","https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400","https://storage.googleapis.com/vue-course-api.appspot.com/marcochiu/1764050793533.png","https://storage.googleapis.com/vue-course-api.appspot.com/marcochiu/1764332052923.png","https://storage.googleapis.com/vue-course-api.appspot.com/marcochiu/1764748323370.png"],l=a[Math.floor(Math.random()*a.length)],v=t[Math.floor(Math.random()*t.length)],y=Math.floor(Math.random()*5e3)+500,I=Math.floor(Math.random()*40)+10,M=Math.floor(y*(100-I)/100),S=Math.random()>.3?1:0,R=[...o].sort(()=>Math.random()-.5),F=Math.floor(Math.random()*3)+1,k=R.slice(0,F),z={data:{title:`${l}商品_${Date.now()}`,category:l,origin_price:y,price:M,unit:v,description:`這是 ${l} 的精選商品，品質保證，值得擁有！`,content:"產品特色：高品質、耐用、實惠。適合日常使用，是您生活中的好幫手。",is_enabled:S,imageUrl:k[0],imagesUrl:k}};(async()=>{try{e(!0);const g=await h.post(`${m}/api/${u}/admin/product`,z,x());console.log("新增成功:",g.data),alert("✅ 產品新增成功！"),await b()}catch(g){console.error("新增失敗:",g),alert("❌ 新增失敗: "+(g.response?.data?.message||g.message))}finally{e(!1)}})()},U=async()=>{if(!p){alert("❌ 請先選擇檔案");return}try{e(!0);const a=new FormData;a.append("file-to-upload",p);const t=await h.post(`${m}/api/${u}/admin/upload`,a,x());console.log("上傳成功:",t.data),_(t.data.imageUrl),alert(`✅ 圖片上傳成功！
圖片網址：`+t.data.imageUrl),f(null),N(null)}catch(a){console.error("上傳失敗:",a),alert("❌ 上傳失敗: "+(a.response?.data?.message||a.message))}finally{e(!1)}};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"container py-5",children:[s.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[s.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[s.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[s.jsx("i",{className:"bi bi-cloud-arrow-up me-3"}),"API 串接"]}),s.jsx("p",{className:"lead mb-0",children:"Axios 請求與認證機制"})]}),s.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),s.jsx("div",{className:"row mb-5",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body p-4",children:[s.jsxs("h2",{className:"h4 mb-4",children:[s.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"功能說明"]}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:s.jsx("i",{className:"bi bi-check2-circle text-primary fs-4"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("h5",{className:"mb-2",children:"API 操作"}),s.jsxs("ul",{className:"text-muted mb-0",children:[s.jsx("li",{children:"Axios 請求"}),s.jsx("li",{children:"認證機制"}),s.jsx("li",{children:"CRUD 操作"}),s.jsx("li",{children:"Token 管理"})]})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("div",{className:"bg-success bg-opacity-10 rounded-circle p-3",children:s.jsx("i",{className:"bi bi-box text-success fs-4"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("h5",{className:"mb-2",children:"產品管理"}),s.jsxs("ul",{className:"text-muted mb-0",children:[s.jsx("li",{children:"產品列表"}),s.jsx("li",{children:"新增/刪除"}),s.jsx("li",{children:"上架/下架"}),s.jsx("li",{children:"圖片上傳"})]})]})]})})]})]})})})}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-4",children:[s.jsx("i",{className:"bi bi-code-square me-2"}),"互動範例"]}),s.jsxs("div",{className:"container mt-2",children:[s.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3",children:[s.jsx("h1",{className:"text-center flex-grow-1 mb-0",children:"🛍️ 產品列表"}),s.jsx("button",{className:"btn btn-primary btn-lg",onClick:E,children:"➕ 新增產品"})]}),s.jsx(O,{selectedFile:p,previewUrl:$,uploadedImageUrl:A,loading:c,onFileChange:C,onUpload:U}),c&&s.jsx(L,{}),i&&s.jsx(q,{error:i}),s.jsx("div",{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4",children:!c&&!i&&d.map(a=>s.jsx(H,{product:a,onDelete:T},a.id))})]})]})})})}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-4",children:[s.jsx("i",{className:"bi bi-code-slash me-2 text-primary"}),"程式碼範例"]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"1. Axios 基本請求"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`import axios from 'axios';

// GET 請求
const fetchData = async () => {
  try {
    const response = await axios.get('/api/products');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// POST 請求
const createProduct = async (data) => {
  const response = await axios.post('/api/products', {
    name: 'Product Name',
    price: 100
  });
  return response.data;
};

// PUT/PATCH 更新
const updateProduct = async (id, data) => {
  await axios.put(\`/api/products/\${id}\`, data);
};

// DELETE 刪除
const deleteProduct = async (id) => {
  await axios.delete(\`/api/products/\${id}\`);
};`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"2. 認證與 Token 管理"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`// 登入取得 Token
const login = async (email, password) => {
  const response = await axios.post('/admin/signin', {
    username: email,
    password: password
  });
  
  const { token, expired } = response.data;
  
  // 儲存到 Cookie
  document.cookie = \`authToken=\${token};expires=\${new Date(expired)}\`;
  
  return token;
};

// 設定請求 Header
const token = getCookieToken();
axios.defaults.headers.common['Authorization'] = token;

// 或使用 config 參數
const config = {
  headers: { Authorization: token }
};
await axios.get('/api/products', config);`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"3. 檔案上傳"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file-to-upload', file);

  const response = await axios.post('/api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': token
    }
  });

  return response.data.imageUrl;
};

// React 中使用
const handleFileChange = (e) => {
  const file = e.target.files[0];
  uploadFile(file)
    .then(url => console.log('上傳成功:', url))
    .catch(err => console.error('上傳失敗:', err));
};`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"4. useRef 管理 Token"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`import { useRef } from 'react';

function App() {
  const tokenRef = useRef('');

  // 登入後儲存
  const login = async () => {
    const response = await axios.post('/signin', {...});
    tokenRef.current = response.data.token;
  };

  // 使用 token
  const fetchData = async () => {
    const config = {
      headers: { Authorization: tokenRef.current }
    };
    const data = await axios.get('/api/data', config);
  };

  // ✅ 優點：不會觸發重新渲染
  // ✅ 值在整個生命週期保持
}`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"5. 元件拆分模式"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`// ProductCard.jsx - 子元件
const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="card">
      <img src={product.imageUrl} alt={product.title} />
      <div className="card-body">
        <h5>{product.title}</h5>
        <p>\${product.price}</p>
        <button onClick={() => onDelete(product.id)}>
          刪除
        </button>
      </div>
    </div>
  );
};

// App.jsx - 父元件
function App() {
  const [products, setProducts] = useState([]);

  const handleDelete = async (id) => {
    await axios.delete(\`/api/products/\${id}\`);
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div>
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}`})})]})]})})})}),s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm bg-light",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-3",children:[s.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),s.jsxs("div",{className:"row g-3",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"錯誤處理:"})," 使用 try-catch 捕獲所有 API 錯誤"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Loading 狀態:"})," 請求期間顯示載入指示器"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"環境變數:"})," API 金鑰存放在 .env 檔案"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"避免:"})," 全域設定 axios.defaults 可能影響其他請求"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"元件拆分:"})," 將 UI 拆分為可重用的小元件"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"避免:"})," 在 render 中執行 API 請求，應使用 useEffect"]})]})})]})]})})})})]})})}export{Q as default};
