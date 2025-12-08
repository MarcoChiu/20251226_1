import { useMemo, useState } from 'react';

export default function JsxPage() {
    const [query, setQuery] = useState('');

    //處理邏輯
    //function顯示
    const test = () => <h3>test function</h3>;
    //
    const htmlTemplate = {
        __html: `<h3 style="color:red;">dangerous InnerHTML </h3>`
    }
    const [peoples, setPeoples] = useState([
        { name: '排骨飯', qty: 1, price: 10, remark: '1' },
        { name: '陽春麵', qty: 2, price: 20, remark: '2' },
        { name: '蛋糕', qty: 3, price: 30, remark: '3' }
    ]);

    // 使用 useMemo 產生穩定的事件處理函式，避免不必要的重新建立
    const handleQtyChange = useMemo(() => (index, newQty) => {
        console.log('Quantity changed:', index, newQty);
        const updatedPeoples = [...peoples];
        updatedPeoples[index].qty = parseInt(newQty);
        setPeoples(updatedPeoples);
    }, [peoples]);

    // 使用 useMemo 生成下拉選單的選項資料（1..10），避免每次渲染都重建陣列
    const qtyOptions = useMemo(() => [...Array(10)].map((_, i) => i + 1), []);

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-filetype-jsx me-3"></i>JSX 語法</h1><p className="lead mb-0">模板語法、事件處理與渲染優化</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">JSX 特性</h5><ul className="text-muted mb-0"><li>dangerouslySetInnerHTML</li><li>className 與 htmlFor</li><li>行內樣式物件</li><li>事件處理</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-lightning text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">性能優化</h5><ul className="text-muted mb-0"><li>useMemo 緩存</li><li>事件函式穩定性</li><li>減少重渲染</li><li>key 屬性優化</li></ul></div></div></div></div></div></div></div></div>
            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2"></i>互動範例</h3><div className="container mt-2">
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="輸入查詢字串" className="form-control mb-3" />

                {test()}
                <div dangerouslySetInnerHTML={htmlTemplate} />
                <ul className="myclass list-group">
                    {
                        peoples.map((item, index) => (
                            <li key={index} className="list-group-item">
                                {index + 1}.
                                <input type="checkbox" defaultChecked className="form-check-input mx-2" />
                                <label htmlFor={`name-${index}`} className="form-label me-2">姓名</label>
                                <input type="text" id={`name-${index}`} defaultValue={item.name} readOnly className="form-control d-inline-block w-auto me-2" />
                                {item.price}x
                                <select value={item.qty} onChange={(e) => handleQtyChange(index, e.target.value)} className="form-select d-inline-block w-auto mx-2">
                                    {qtyOptions.map((val) => (
                                        <option key={val} value={val}>{val}</option>
                                    ))}
                                </select> = ${item.qty * item.price}
                                <br />
                                <textarea cols="30" rows="1" style={{ color: 'red', fontSize: '20px' }} defaultValue={item.remark} className="form-control mt-2"></textarea>
                            </li>
                        ))
                    }
                </ul>
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
                                <h5 className="mb-3">1. JSX 基本語法</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`// JSX 允許在 JavaScript 中寫 HTML
const element = <h1>Hello, World!</h1>;

// 使用 {} 嵌入 JavaScript 表達式
const name = 'Tom';
const greeting = <h1>Hello, {name}!</h1>;

// className 而非 class
const styled = <div className="container">Content</div>;

// htmlFor 而非 for
const label = <label htmlFor="email">Email</label>;`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">2. 行內樣式物件</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`// 樣式必須是物件，屬性名稱使用 camelCase
const divStyle = {
  color: 'blue',
  backgroundColor: 'lightgray',
  fontSize: '20px'
};

const StyledDiv = () => (
  <div style={divStyle}>樣式文字</div>
);

// 或直接寫在 JSX 中
<div style={{ color: 'red', fontSize: '20px' }}>
  直接樣式
</div>`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">3. 條件渲染</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`// 使用三元運算子
const isLoggedIn = true;
<div>
  {isLoggedIn ? <p>歡迎回來</p> : <p>請登入</p>}
</div>

// 使用 && 短路運算
{error && <div className="alert">錯誤: {error}</div>}

// 使用變數
let content;
if (isLoading) {
  content = <Spinner />;
} else {
  content = <Content />;
}
return <div>{content}</div>;`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">4. 事件處理</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`// 使用 camelCase (onClick 而非 onclick)
<button onClick={handleClick}>點擊</button>

// 傳遞參數
<button onClick={() => handleClick(id)}>刪除</button>

// 阻止預設行為
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('表單提交');
};
<form onSubmit={handleSubmit}>...</form>

// 取得事件物件
const handleChange = (e) => {
  console.log(e.target.value);
};
<input onChange={handleChange} />`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">5. dangerouslySetInnerHTML</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`// ⚠️ 謹慎使用，可能有 XSS 風險
const htmlContent = {
  __html: '<h3 style="color:red;">HTML 內容</h3>'
};

<div dangerouslySetInnerHTML={htmlContent} />

// 只在信任的內容時使用
// 使用者輸入的內容應該進行清理`}</code>
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
                                            <strong>使用 className:</strong> 而非 class 屬性
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>自閉合標籤:</strong> 如 &lt;img /&gt;、&lt;input /&gt; 必須加 /
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>列表渲染:</strong> 使用唯一的 key 屬性
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 在 JSX 中寫複雜邏輯，應提取為函式
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>事件命名:</strong> 使用 camelCase (onClick, onChange)
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 濫用 dangerouslySetInnerHTML
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
}
