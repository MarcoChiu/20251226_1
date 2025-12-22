import{r as b,j as s}from"./index-DXvaqpMq.js";function u(){return b.useEffect(()=>{const c=["red","green","blue"],[i,a]=c;console.log(i,a);const r={name:"Tom",age:99,hobbies:"打球"},{age:d,hobbies:n,name:t}=r;console.log(d,t,n);function m(e){return[e,function(){}]}const[o,x]=m(1);console.log(o,x),console.log(["black",c]);const h=["black",...c];console.log(h);const l=document.querySelector(".peoplelist"),j=[{name:"排骨飯",qty:1,price:10},{name:"陽春麵",qty:2,price:20},{name:"蛋糕",qty:3,price:30}];l&&(l.innerHTML=j.map(e=>`<li>姓名${e.name},數量${e.qty},價格${e.price}</li>`).join(""))},[]),s.jsxs("div",{className:"container py-5",children:[s.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[s.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[s.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[s.jsx("i",{className:"bi bi-code-square me-3"}),"JavaScript 基礎"]}),s.jsx("p",{className:"lead mb-0",children:"陣列/物件解構、擴展運算子與陣列方法"})]}),s.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),s.jsx("div",{className:"row mb-5",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body p-4",children:[s.jsxs("h2",{className:"h4 mb-4",children:[s.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"功能說明"]}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:s.jsx("i",{className:"bi bi-check2-circle text-primary fs-4"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("h5",{className:"mb-2",children:"ES6 特性"}),s.jsxs("ul",{className:"text-muted mb-0",children:[s.jsx("li",{children:"陣列解構購值"}),s.jsx("li",{children:"物件解構購值"}),s.jsx("li",{children:"Spread Operator"}),s.jsx("li",{children:"箱頭函式"})]})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("div",{className:"bg-success bg-opacity-10 rounded-circle p-3",children:s.jsx("i",{className:"bi bi-list-ul text-success fs-4"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("h5",{className:"mb-2",children:"陣列方法"}),s.jsxs("ul",{className:"text-muted mb-0",children:[s.jsx("li",{children:"map 轉換"}),s.jsx("li",{children:"forEach 迴圈"}),s.jsx("li",{children:"filter 過濾"}),s.jsx("li",{children:"reduce 累計"})]})]})]})})]})]})})})}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-4",children:[s.jsx("i",{className:"bi bi-code-square me-2"}),"互動範例"]}),s.jsx("div",{className:"container mt-2",children:s.jsx("ul",{className:"peoplelist"})})]})})})}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-4",children:[s.jsx("i",{className:"bi bi-code-slash me-2 text-primary"}),"程式碼範例"]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"1. 陣列解構"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`const colors = ['red', 'green', 'blue'];
const [first, second] = colors;
console.log(first);  // 'red'
console.log(second); // 'green'

// React Hook 的應用
const [count, setCount] = useState(0);`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"2. 物件解構"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`const user = {
  name: 'Tom',
  age: 25,
  city: 'Taipei'
};

// 順序無關，欄位名稱對應即可
const { age, name, city } = user;
console.log(name); // 'Tom'
console.log(age);  // 25`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"3. 擴展運算子 (Spread Operator)"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 合併陣列
const combined = [...arr1, ...arr2];
// [1, 2, 3, 4, 5, 6]

// 複製物件
const original = { name: 'John', age: 30 };
const copy = { ...original, city: 'Tokyo' };
// { name: 'John', age: 30, city: 'Tokyo' }`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"4. map 陣列轉換"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// React 列表渲染
const items = ['Apple', 'Banana', 'Orange'];
const listItems = items.map((item, index) => (
  <li key={index}>{item}</li>
));`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"5. filter 陣列過濾"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4, 6]

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 }
];
const adults = users.filter(user => user.age >= 18);`})})]})]})})})}),s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm bg-light",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-3",children:[s.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),s.jsxs("div",{className:"row g-3",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"使用解構:"})," 讓程式碼更簡潔易讀"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"map 轉換:"})," 用於資料轉換和 React 列表渲染"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"不可變更新:"})," 使用 Spread Operator 複製後修改"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"避免:"})," 直接修改原始陣列或物件 (mutation)"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"箭頭函式:"})," 簡潔語法，自動綁定 this"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"避免:"})," map 中使用 index 作為 key (若順序會改變)"]})]})})]})]})})})})]})}export{u as default};
