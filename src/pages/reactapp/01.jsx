import { useState, useMemo } from 'react';

// 數字輸入元件
const NumberInput = ({ value, onChange }) => {
    return (
        <input
            type="number"
            className="form-control text-end"
            style={{ width: '120px' }}
            value={value}
            onChange={onChange}
        />
    )
};

// 運算符選擇元件
const OperatorSelect = ({ value, onChange }) => {
    const operators = [
        { value: '+', label: '+' },
        { value: '-', label: '-' },
        { value: '*', label: '×' },
        { value: '/', label: '÷' },
        { value: '%', label: '%' }
    ];

    return (
        <select
            className="form-select"
            style={{ width: '80px' }}
            value={value}
            onChange={onChange}
        >
            {operators.map(op => (
                <option key={op.value} value={op.value}>{op.label}</option>
            ))}
        </select>
    )
};

export default function UseStatePage() {
    const [fnum, setFnum] = useState(10);
    const [lnum, setLnum] = useState(5);
    const [operator, setOperator] = useState('+');
    const [xnum, setXnum] = useState(0);

    // 處理數字輸入變更 - 使用高階函式模式
    const handleNumberChange = (setter) => (e) => {
        console.log('🔢 handleNumberChange:', e.target.value)
        setter(Number(e.target.value));
    };

    // 使用 useMemo 優化計算 - 只在依賴項改變時重新計算
    const result = useMemo(() => {
        const operations = {
            '+': fnum + lnum,
            '-': fnum - lnum,
            '*': fnum * lnum,
            '/': lnum !== 0 ? (fnum / lnum).toFixed(2) : '⚠️ 錯誤',
            '%': lnum !== 0 ? fnum % lnum : '⚠️ 錯誤'
        };
        console.log('✅ useMemo 重新計算:', fnum, lnum, operator);
        return operations[operator] ?? 0;
    }, [fnum, lnum, operator]);

    // 計算歷史記錄
    const [history, setHistory] = useState([]);

    const addToHistory = () => {
        const record = `${fnum} ${operator} ${lnum} = ${result}`;
        setHistory(prev => [record, ...prev].slice(0, 5));
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-calculator-fill me-3"></i>useState + useMemo 計算機</h1><p className="lead mb-0">狀態管理與效能優化</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>

            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">useState</h5><ul className="text-muted mb-0"><li>管理元件內部狀態</li><li>狀態改變觸發重新渲染</li><li>適合簡單的狀態管理</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-lightning text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">useMemo</h5><ul className="text-muted mb-0"><li>快取計算結果</li><li>避免不必要的重複計算</li><li>優化效能表現</li></ul></div></div></div></div></div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3>
                <div className="container mt-2">
                    {/* 計算器主體 */}
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body bg-light">
                            <div className="row align-items-center justify-content-center g-3">
                                <div className="col-auto">
                                    <label className="form-label small text-muted mb-1">第一個數字</label>
                                    <NumberInput value={fnum} onChange={handleNumberChange(setFnum)} />
                                </div>
                                <div className="col-auto">
                                    <label className="form-label small text-muted mb-1">運算符</label>
                                    <OperatorSelect value={operator} onChange={(e) => setOperator(e.target.value)} />
                                </div>
                                <div className="col-auto">
                                    <label className="form-label small text-muted mb-1">第二個數字</label>
                                    <NumberInput value={lnum} onChange={handleNumberChange(setLnum)} />
                                </div>
                                <div className="col-auto">
                                    <div className="d-flex align-items-center" style={{ marginTop: '24px' }}>
                                        <span className="fs-3 fw-bold text-primary mx-2">=</span>
                                        <span className="fs-2 fw-bold text-success px-3 py-2 bg-white rounded border border-success">
                                            {result}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <button className="btn btn-primary btn-sm" onClick={addToHistory}>
                                    <i className="bi bi-clock-history me-1"></i>
                                    加入歷史記錄
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 測試區域 */}
                    <div className="card mb-4 shadow-sm border-warning">
                        <div className="card-header bg-warning bg-opacity-10">
                            <h6 className="mb-0">
                                <i className="bi bi-flask me-2"></i>
                                🧪 useMemo 效能測試
                            </h6>
                        </div>
                        <div className="card-body">
                            <p className="small text-muted mb-3">
                                <strong>測試方法：</strong>打開 Console，修改下方輸入框，觀察是否會觸發 useMemo 重新計算
                            </p>
                            <div className="d-flex align-items-center gap-3">
                                <label className="form-label mb-0">
                                    <i className="bi bi-exclamation-triangle-fill text-warning me-1"></i>
                                    測試數字（不在依賴陣列中）:
                                </label>
                                <NumberInput value={xnum} onChange={handleNumberChange(setXnum)} />
                                <span className="badge bg-secondary">{xnum}</span>
                            </div>
                            <div className="alert alert-info mt-3 mb-0 small">
                                <i className="bi bi-info-circle me-1"></i>
                                <strong>預期結果：</strong>修改此數字不會在 Console 看到「useMemo 重新計算」，證明計算被快取了！
                            </div>
                        </div>
                    </div>

                    {/* 歷史記錄 */}
                    {history.length > 0 && (
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header bg-secondary bg-opacity-10">
                                <h6 className="mb-0">
                                    <i className="bi bi-clock-history me-2"></i>
                                    📊 計算歷史記錄
                                </h6>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    {history.map((record, index) => (
                                        <li key={index} className="list-group-item">
                                            <span className="badge bg-primary me-2">{index + 1}</span>
                                            <code>{record}</code>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="btn btn-sm btn-outline-danger mt-2"
                                    onClick={() => setHistory([])}
                                >
                                    清除歷史
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-slash me-2 text-success"></i>程式碼範例</h3>
                <div className="container mt-2">
                    <div className="card bg-dark text-white shadow">
                        <div className="card-body">
                            <pre className="mb-0" style={{ fontSize: '0.85rem' }}>
                                {`// 1️⃣ useState 宣告狀態
const [fnum, setFnum] = useState(10);
const [operator, setOperator] = useState('+');

// 2️⃣ useMemo 快取計算結果
const result = useMemo(() => {
  const operations = {
    '+': fnum + lnum,
    '-': fnum - lnum,
    '*': fnum * lnum,
    '/': lnum !== 0 ? (fnum / lnum).toFixed(2) : '⚠️ 錯誤'
  };
  console.log('✅ useMemo 重新計算');
  return operations[operator] ?? 0;
}, [fnum, lnum, operator]); // 只在這些值改變時重算

// 3️⃣ 高階函式模式
const handleNumberChange = (setter) => (e) => {
  setter(Number(e.target.value));
};

// 4️⃣ 使用方式
<NumberInput 
  value={fnum} 
  onChange={handleNumberChange(setFnum)} 
/>`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div></div></div></div>

        </div>
    )
};
