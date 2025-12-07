import { useState } from 'react';

const UseStateExample = () => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({ name: 'Guest', age: 18 });

    const increment = () => setCount((prev) => prev + 1);

    const updateName = () => {
        setUser(prev => ({ ...prev, name: 'Alice', age: 25 }));
    };

    return (
        <div className="container py-5">
            {/* 標題區塊 */}
            <div
                className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)'
                }}
            >
                <div className="position-relative" style={{ zIndex: 1 }}>
                    <h1 className="display-4 fw-bold mb-3">
                        <i className="bi bi-box-fill me-3"></i>
                        useState Hook
                    </h1>
                    <p className="lead mb-0">狀態管理的基礎 - 讓函式組件擁有內部狀態</p>
                </div>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        zIndex: 0
                    }}
                ></div>
            </div>

            {/* 功能說明 */}
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h2 className="h4 mb-4">
                                <i className="bi bi-info-circle me-2 text-primary"></i>
                                Hook 說明
                            </h2>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-check2-circle text-primary fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">主要用途</h5>
                                            <ul className="text-muted mb-0">
                                                <li>讓函式組件擁有內部狀態</li>
                                                <li>返回陣列：[狀態值, 更新函式]</li>
                                                <li>狀態更新觸發組件重新渲染</li>
                                                <li>每次渲染獲得該次的狀態快照</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-warning bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-exclamation-triangle text-warning fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">注意事項</h5>
                                            <ul className="text-muted mb-0">
                                                <li>初始值只在首次渲染時使用</li>
                                                <li>更新狀態不會立即改變值</li>
                                                <li>物件/陣列須創建新引用</li>
                                                <li>依賴前值時使用函式式更新</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 範例展示 */}
            <div className="row g-4 mb-5">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-play-circle me-2"></i>
                                互動範例
                            </h3>
                            <div className="bg-light p-4 rounded-3">
                                <div className="mb-4">
                                    <p className="mb-2 fs-5">計數器: <span className="fw-bold text-primary">{count}</span></p>
                                    <button
                                        onClick={increment}
                                        className="btn btn-primary"
                                    >
                                        增加
                                    </button>
                                </div>

                                <hr />

                                <div className="pt-2">
                                    <p className="mb-2 fs-5">使用者: {user.name}, 年齡: {user.age}</p>
                                    <button
                                        onClick={updateName}
                                        className="btn btn-success"
                                    >
                                        更新使用者資料
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 程式碼範例 */}
            <div className="row">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-code-slash me-2"></i>
                                程式碼範例
                            </h3>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`// 📌 基本用法
const [count, setCount] = useState(0);
const [name, setName] = useState('Alice');
const [isActive, setIsActive] = useState(false);

// 📌 惰性初始化（避免每次渲染都執行昂貴計算）
const [data, setData] = useState(() => {
  const stored = localStorage.getItem('data');
  return stored ? JSON.parse(stored) : [];
});

// 📌 函式式更新（確保基於最新狀態）
const increment = () => setCount(prev => prev + 1);
const decrement = () => setCount(prev => prev - 1);

// 📌 物件狀態的不可變更新
const [user, setUser] = useState({ name: 'Guest', age: 18, role: 'user' });

// ✅ 正確：創建新物件
const updateName = (newName) => {
  setUser(prev => ({ ...prev, name: newName }));
};

// ❌ 錯誤：直接修改（不會觸發更新）
const wrongUpdate = () => {
  user.name = 'Bob';  // 不會觸發重渲染！
  setUser(user);
};`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* 最佳實踐 */}
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm bg-light">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-lightbulb me-2 text-warning"></i>
                                最佳實踐
                            </h3>
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>狀態粒度:</strong> 相關狀態合併，無關狀態分開
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>函式式更新:</strong> 依賴前值時必須使用
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 直接修改狀態物件
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

export default UseStateExample;
