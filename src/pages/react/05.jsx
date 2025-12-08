import { useEffect } from 'react';
import obj from './05.js';
import { fn } from './05.js';
import * as all from './05.js';

export default function EsModulePage() {
    useEffect(() => {
        //預設匯出
        obj.fn();
        //具名匯出
        fn();
        //全部匯出
        all.fn();
    }, []);

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-box-seam me-3"></i>ES modules</h1><p className="lead mb-0">模組化開發與匯出匯入機制</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">匯出方式</h5><ul className="text-muted mb-0"><li>Default Export</li><li>Named Export</li><li>Re-export</li><li>Dynamic Import</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-arrow-right-circle text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">匯入方式</h5><ul className="text-muted mb-0"><li>Import Default</li><li>Import Named</li><li>Import All (*)</li><li>Import Alias</li></ul></div></div></div></div></div></div></div></div>
            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2"></i>互動範例</h3><div className="container mt-2">
                <div className="alert alert-info">此頁面為 ES Modules 測試,請開啟 Console 查看輸出結果。</div>
            </div>
            </div></div></div></div>

            {/* 程式碼範例 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-code-slash me-2 text-primary"></i>
                                程式碼範例
                            </h3>
                            
                            <div className="mb-4">
                                <h5 className="mb-3">1. 預設匯出 (Default Export)</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`// utils.js - 匯出
const utils = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

export default utils;

// App.jsx - 匯入
import utils from './utils.js';
// 可以使用任意名稱
import myUtils from './utils.js';

utils.add(1, 2); // 3`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">2. 具名匯出 (Named Export)</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`// math.js - 匯出
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
sq(5); // 25`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">3. 全部匯入 (Import All)</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`// helpers.js
export const greeting = 'Hello';
export const farewell = 'Goodbye';
export function sayHi(name) {
  return \`\${greeting}, \${name}!\`;
}

// App.jsx - 匯入所有具名匯出為一個物件
import * as helpers from './helpers.js';

console.log(helpers.greeting);  // 'Hello'
console.log(helpers.sayHi('Tom')); // 'Hello, Tom!'`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">4. 混合匯出</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`// user.js - 同時有預設和具名匯出
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
console.log(ADMIN_ROLE); // 'admin'`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">5. 動態匯入 (Dynamic Import)</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`// 按需載入模組（延遲載入）
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
}`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">6. Re-export (轉匯出)</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`// components/index.js - 整合多個匯出
export { Button } from './Button';
export { Input } from './Input';
export { Card } from './Card';

// 或使用 *
export * from './Button';
export * from './Input';

// App.jsx - 一次匯入多個
import { Button, Input, Card } from './components';`}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 最佳實踐 */}
            <div className="row">
                <div className="col-12">
                    <div className="card border-0 shadow-sm bg-light">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-lightbulb me-2 text-warning"></i>
                                最佳實踐
                            </h3>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>優先具名匯出:</strong> 提供更好的重構支援和 IDE 提示
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>index.js:</strong> 用於整合資料夾內的匯出
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>動態載入:</strong> 大型元件使用 lazy 提升初始載入速度
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 預設匯出和具名匯出混用容易混淆
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>檔案副檔名:</strong> 明確使用 .js 或 .jsx
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 循環依賴 (A 引入 B, B 又引入 A)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
