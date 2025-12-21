import{r as l,j as s}from"./index-BEiEE2Na.js";const i={myName:"Marco",fn(){console.log("預設匯出:This is react005.js")}};function e(){console.log("具名匯出:This is react005.js")}function c(){return l.useEffect(()=>{i.fn(),e(),e()},[]),s.jsxs("div",{className:"container py-5",children:[s.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[s.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[s.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[s.jsx("i",{className:"bi bi-box-seam me-3"}),"ES modules"]}),s.jsx("p",{className:"lead mb-0",children:"模組化開發與匯出匯入機制"})]}),s.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),s.jsx("div",{className:"row mb-5",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body p-4",children:[s.jsxs("h2",{className:"h4 mb-4",children:[s.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"功能說明"]}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:s.jsx("i",{className:"bi bi-check2-circle text-primary fs-4"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("h5",{className:"mb-2",children:"匯出方式"}),s.jsxs("ul",{className:"text-muted mb-0",children:[s.jsx("li",{children:"Default Export"}),s.jsx("li",{children:"Named Export"}),s.jsx("li",{children:"Re-export"}),s.jsx("li",{children:"Dynamic Import"})]})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("div",{className:"bg-success bg-opacity-10 rounded-circle p-3",children:s.jsx("i",{className:"bi bi-arrow-right-circle text-success fs-4"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("h5",{className:"mb-2",children:"匯入方式"}),s.jsxs("ul",{className:"text-muted mb-0",children:[s.jsx("li",{children:"Import Default"}),s.jsx("li",{children:"Import Named"}),s.jsx("li",{children:"Import All (*)"}),s.jsx("li",{children:"Import Alias"})]})]})]})})]})]})})})}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-4",children:[s.jsx("i",{className:"bi bi-code-square me-2"}),"互動範例"]}),s.jsx("div",{className:"container mt-2",children:s.jsx("div",{className:"alert alert-info",children:"此頁面為 ES Modules 測試,請開啟 Console 查看輸出結果。"})})]})})})}),s.jsx("div",{className:"row mb-4",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-4",children:[s.jsx("i",{className:"bi bi-code-slash me-2 text-primary"}),"程式碼範例"]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"1. 預設匯出 (Default Export)"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`// utils.js - 匯出
const utils = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

export default utils;

// App.jsx - 匯入
import utils from './utils.js';
// 可以使用任意名稱
import myUtils from './utils.js';

utils.add(1, 2); // 3`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"2. 具名匯出 (Named Export)"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`// math.js - 匯出
export const PI = 3.14159;
export function square(x) {
  return x * x;
}
export const multiply = (a, b) => a * b;

// App.jsx - 匯入
import { PI, square, multiply } from './math.js';

console.log(PI);        // 3.14159
console.log(square(4)); // 16
console.log(multiply(2, 3)); // 6

// 使用別名
import { square as sq } from './math.js';
sq(5); // 25`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"3. 全部匯入 (Import All)"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`// helpers.js
export const greeting = 'Hello';
export const farewell = 'Goodbye';
export function sayHi(name) {
  return \`\${greeting}, \${name}!\`;
}

// App.jsx - 匯入所有具名匯出為一個物件
import * as helpers from './helpers.js';

console.log(helpers.greeting);  // 'Hello'
console.log(helpers.sayHi('Tom')); // 'Hello, Tom!'`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"4. 混合匯出"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`// user.js - 同時有預設和具名匯出
export const ADMIN_ROLE = 'admin';
export const USER_ROLE = 'user';

export default class User {
  constructor(name) {
    this.name = name;
  }
}

// App.jsx - 匯入
import User, { ADMIN_ROLE, USER_ROLE } from './user.js';

const admin = new User('Alice');
console.log(ADMIN_ROLE); // 'admin'`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"5. 動態匯入 (Dynamic Import)"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`// 按需載入模組（延遲載入）
const loadModule = async () => {
  const module = await import('./heavyModule.js');
  module.doSomething();
};

// React 中的 Lazy Loading
const LazyComponent = React.lazy(() => 
  import('./components/HeavyComponent')
);

function App() {
  return (
    <Suspense fallback={<div>載入中...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`})})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("h5",{className:"mb-3",children:"6. Re-export (轉匯出)"}),s.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:s.jsx("code",{children:`// components/index.js - 整合多個匯出
export { Button } from './Button';
export { Input } from './Input';
export { Card } from './Card';

// 或使用 *
export * from './Button';
export * from './Input';

// App.jsx - 一次匯入多個
import { Button, Input, Card } from './components';`})})]})]})})})}),s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"card border-0 shadow-sm bg-light",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("h3",{className:"card-title mb-3",children:[s.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),s.jsxs("div",{className:"row g-3",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"優先具名匯出:"})," 提供更好的重構支援和 IDE 提示"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"index.js:"})," 用於整合資料夾內的匯出"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"動態載入:"})," 大型元件使用 lazy 提升初始載入速度"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"避免:"})," 預設匯出和具名匯出混用容易混淆"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"檔案副檔名:"})," 明確使用 .js 或 .jsx"]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),s.jsxs("div",{children:[s.jsx("strong",{children:"避免:"})," 循環依賴 (A 引入 B, B 又引入 A)"]})]})})]})]})})})})]})}export{c as default};
