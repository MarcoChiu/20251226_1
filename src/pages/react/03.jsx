import { useEffect, useState } from 'react';


export default function RenderSinglePage() {
    //console.log(React);
    //hook 概念需要什麼就取出來
    //hook 取出React中useState方法
    const 測試物件 = { name: '排骨飯', qty: 1, price: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9Ib0OMzM_hz_-X_jYMgHV5_TkqObmX8wFQ&s' };

    useEffect(() => {
        const PageTitle = '03.資料渲染 + 單筆 + useState';

    }, []);

    //處理邏輯      
    //[狀態, 寫入方法] = useState(初始化方法)
    //初始化只有第一次套用
    const [meal, setMeal] = useState(測試物件);
    const [isLoading, setIsLoading] = useState(false); // isLoading 來驅動
    const [error, setError] = useState(null);
    //console.log(meal, Setmeal);

    //async
    const handleClick = () => {

        try {
            setIsLoading(true);
            setError(null); // 清除舊錯誤

            // 模擬非同步操作，例如 API 請求
            // await new Promise((resolve, reject) => {
            //   setTimeout(() => {
            //     const isOk = Math.random() > 0.3; // 模擬成功/失敗
            //     if (isOk) {
            //       resolve();
            //     } else {
            //       reject(new Error("更新價格失敗！伺服器無回應。"));
            //     }
            //   }, 1000);
            // });

            // 成功 → 更新價格
            setMeal(x => ({
                ...x,
                price: x.price + 1
            }));


        } catch (err) {
            console.error("捕捉到錯誤：", err);
            setError(err.message);
        } finally {
            // 無論成功或失敗都關閉 loading
            setIsLoading(false);
        }
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-file-earmark-text me-3"></i>單筆資料渲染</h1><p className="lead mb-0">useState 與非同步狀態管理</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">狀態管理</h5><ul className="text-muted mb-0"><li>useState 基本使用</li><li>物件狀態更新</li><li>非同步處理</li><li>Loading 狀態</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-shield-check text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">錯誤處理</h5><ul className="text-muted mb-0"><li>try-catch 機制</li><li>錯誤狀態管理</li><li>finally 清理</li><li>錯誤訊息顯示</li></ul></div></div></div></div></div></div></div></div>
            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2"></i>互動範例</h3><div className="container mt-2">
                <div className="card" style={{ maxWidth: '400px' }}>
                    <img src={meal.image} className="card-img-top" alt={meal.name} />
                    <div className="card-body">
                        <h5 className="card-title">{meal.name}</h5>
                        <p className="card-text">價格：${meal.price}</p>
                        <button className="btn btn-primary" onClick={handleClick} disabled={isLoading}>
                            {isLoading ? '讀取中...' : '點我加價 +1'}
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="alert alert-danger mt-3">⚠️ {error}</div>
                )}
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
                                <h5 className="mb-3">1. useState 基本用法</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`import { useState } from 'react';

function Counter() {
  // [狀態變數, 更新函式] = useState(初始值)
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>計數: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">2. 物件狀態更新</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`const [user, setUser] = useState({
  name: 'Tom',
  age: 25,
  email: 'tom@example.com'
});

// ❌ 錯誤：直接修改
user.age = 26; // 不會觸發重新渲染

// ✅ 正確：使用 spread operator
setUser({
  ...user,
  age: 26
});

// ✅ 正確：函式式更新
setUser(prevUser => ({
  ...prevUser,
  age: prevUser.age + 1
}));`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">3. 非同步狀態更新</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`const [loading, setLoading] = useState(false);
const [data, setData] = useState(null);
const [error, setError] = useState(null);

const fetchData = async () => {
  try {
    setLoading(true);
    setError(null);
    
    const response = await fetch('/api/data');
    const result = await response.json();
    
    setData(result);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">4. Loading 與錯誤處理</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const handleSubmit = async () => {
  try {
    setIsLoading(true);
    setError(null); // 清除舊錯誤
    
    // 模擬 API 請求
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 處理成功邏輯
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false); // 無論成功失敗都關閉 loading
  }
};

// JSX 中顯示
{isLoading && <Spinner />}
{error && <Alert>{error}</Alert>}`}</code>
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
                                            <strong>函式式更新:</strong> 當新狀態依賴舊狀態時使用
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>不可變更新:</strong> 使用 spread operator 複製物件
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>錯誤處理:</strong> 使用 try-catch-finally 結構
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 直接修改狀態物件 (mutation)
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>Loading 狀態:</strong> 提供視覺回饋給使用者
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 在非同步操作中忘記清理 loading 狀態
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
