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
        </div>
    )
}
