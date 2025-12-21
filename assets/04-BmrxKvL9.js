import{r as c,j as e}from"./index-BEiEE2Na.js";const N="_title_1xx89_13",b="_mealCard_1xx89_21",p="_mealImage_1xx89_55",u="_mealInfo_1xx89_71",v="_button_1xx89_87",g="_alertButtons_1xx89_135",i={title:N,mealCard:b,mealImage:p,mealInfo:u,button:v,alertButtons:g};function f(){const m=[{name:"排骨飯",qty:0,price:100,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9Ib0OMzM_hz_-X_jYMgHV5_TkqObmX8wFQ&s"},{name:"陽春麵",qty:0,price:50,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8gNLRZ5cmKF1euq1XWBCT_3-8Y9YCzac2g&s"},{name:"雞腿飯",qty:0,price:140,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNC7g80ocvAw1bhkvHRu8Li1YlUOfDNqT6A&s"},{name:"燒肉飯",qty:0,price:80,image:"https://tokyo-kitchen.icook.network/uploads/step/cover/855139/a934e79af2162ea3.jpg"}],[x,o]=c.useState(m),[d,t]=c.useState(null),[r,n]=c.useState(null),h=()=>alert("警告按鈕寫成 function"),j=async s=>{try{t(s),n(null),await new Promise(a=>setTimeout(a,300)),o(a=>{const l=[...a];return l[s]={...l[s],qty:l[s].qty+1},l})}catch(a){console.error(a),n(a.message)}finally{t(null)}};return e.jsxs("div",{className:"container py-5",children:[e.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[e.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[e.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[e.jsx("i",{className:"bi bi-list-ul me-3"}),"多筆資料渲染"]}),e.jsx("p",{className:"lead mb-0",children:"陣列狀態與儲物件更新"})]}),e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("h2",{className:"h4 mb-4",children:[e.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"功能說明"]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-check2-circle text-primary fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"陣列操作"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsx("li",{children:"map 渲染列表"}),e.jsx("li",{children:"陣列不可變更新"}),e.jsx("li",{children:"CSS Modules"}),e.jsx("li",{children:"Loading 狀態"})]})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-success bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-arrow-repeat text-success fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"更新方式"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsx("li",{children:"函式式更新"}),e.jsx("li",{children:"Spread 複製"}),e.jsx("li",{children:"with() 方法"}),e.jsx("li",{children:"特定索引修改"})]})]})]})})]})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-4",children:[e.jsx("i",{className:"bi bi-code-square me-2"}),"互動範例"]}),e.jsxs("div",{className:"container mt-2",children:[e.jsx("h2",{className:i.title,children:"餐點清單"}),e.jsxs("div",{className:`${i.alertButtons} mb-3`,children:[e.jsx("button",{className:`${i.button} me-2`,onClick:h,children:"警告按鈕寫成 function"}),e.jsx("button",{className:i.button,onClick:()=>alert("警告按鈕直接寫在裡面"),children:"警告按鈕直接寫在裡面"})]}),e.jsx("div",{className:"row row-cols-1 row-cols-md-2 g-4",children:x.map((s,a)=>e.jsx("div",{className:"col",children:e.jsxs("div",{className:`${i.mealCard} card h-100`,children:[e.jsx("img",{src:s.image,alt:s.name,className:`${i.mealImage} card-img-top`,style:{height:"200px",objectFit:"cover"}}),e.jsxs("div",{className:`${i.mealInfo} card-body`,children:[e.jsxs("p",{className:"card-text fw-bold",children:["名稱：",s.name]}),e.jsxs("p",{className:"card-text",children:["價格：$",s.price]}),e.jsxs("p",{className:"card-text",children:["數量：",s.qty]}),e.jsxs("p",{className:"card-text text-primary",children:["小計：$",s.price*s.qty]})]}),e.jsx("div",{className:"card-footer bg-transparent border-0",children:e.jsx("button",{className:`${i.button} w-100`,onClick:()=>j(a),disabled:d===a,children:d===a?"讀取中...":"加價 +1"})})]})},a))}),r&&e.jsxs("div",{className:"alert alert-danger mt-3",children:["⚠️ ",r]})]})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-4",children:[e.jsx("i",{className:"bi bi-code-slash me-2 text-primary"}),"程式碼範例"]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"1. map 渲染列表"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`const fruits = ['Apple', 'Banana', 'Orange'];

// 使用 map 渲染列表
return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);

// 物件陣列渲染
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

return (
  <div>
    {users.map(user => (
      <div key={user.id}>{user.name}</div>
    ))}
  </div>
);`})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"2. 陣列狀態不可變更新"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`const [items, setItems] = useState([1, 2, 3]);

// ❌ 錯誤：直接修改陣列
items.push(4); // 不會觸發重新渲染

// ✅ 正確：複製陣列後修改
setItems([...items, 4]); // 新增

// ✅ 更新特定索引
setItems(items.map((item, i) => 
  i === 1 ? item + 10 : item
));

// ✅ 刪除特定索引
setItems(items.filter((_, i) => i !== 1));

// ✅ 函式式更新（推薦）
setItems(prevItems => [...prevItems, 4]);`})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"3. key 屬性的重要性"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`// ❌ 錯誤：使用 index 作為 key（順序會改變時）
{items.map((item, index) => (
  <div key={index}>{item}</div>
))}

// ✅ 正確：使用唯一 ID
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}

// ⚠️ 可接受：靜態列表使用 index
{['Red', 'Green', 'Blue'].map((color, index) => (
  <div key={index}>{color}</div>
))}

// Key 作用：
// 1. 幫助 React 識別哪些元素改變
// 2. 提升渲染效能
// 3. 保持元件狀態正確`})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"4. 更新陣列中的物件"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`const [meals, setMeals] = useState([
  { id: 1, name: '便當', qty: 0 },
  { id: 2, name: '麵食', qty: 0 }
]);

// 方法一：使用 map
const updateQty = (id) => {
  setMeals(prevMeals =>
    prevMeals.map(meal =>
      meal.id === id 
        ? { ...meal, qty: meal.qty + 1 }
        : meal
    )
  );
};

// 方法二：找到索引後更新
const updateByIndex = (index) => {
  setMeals(prevMeals => {
    const newMeals = [...prevMeals];
    newMeals[index] = {
      ...newMeals[index],
      qty: newMeals[index].qty + 1
    };
    return newMeals;
  });
};`})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"5. 條件渲染列表"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`const [products, setProducts] = useState([...]);

// 過濾後渲染
return (
  <div>
    {products
      .filter(product => product.inStock)
      .map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
  </div>
);

// 空列表處理
{products.length === 0 ? (
  <p>沒有產品</p>
) : (
  products.map(product => <div key={product.id}>...</div>)
)}`})})]})]})})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm bg-light",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-3",children:[e.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"唯一 key:"})," 使用穩定的唯一 ID 作為 key"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"不可變更新:"})," 使用 map/filter/spread 而非 push/splice"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"函式式更新:"})," 依賴舊狀態時使用 prevState"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"避免:"})," 會改變順序的列表使用 index 作為 key"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"空列表處理:"})," 提供友善的空狀態訊息"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"避免:"})," 在 render 中進行昂貴的計算，改用 useMemo"]})]})})]})]})})})})]})}export{f as default};
