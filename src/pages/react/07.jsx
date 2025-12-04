import {  useState, useMemo } from 'react';

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

export const UseStatePage = () => {    
    //console.log(React);
    // 純值 , 方法 (通知元件,值已經更新)
    // 僅能在元件裡運作
    const [fnum, setFnum] = useState(0);
    const [lnum, setLnum] = useState(0);
    const [operator, setOperator] = useState('+');

    const [xnum, setXnum] = useState(0);

    // 處理數字輸入變更
    // setter直接傳入set函式
    const handleNumberChange = (setter) => (e) => {
        console.log('handleNumberChange:', e.target.value)
        setter(Number(e.target.value));
    };

    // 使用 useMemo 優化計算,只在依賴變更時重新計算
    // xnum改變時不會異動 
    const result = useMemo(() => {
        const operations = {
            '+': fnum + lnum,
            '-': fnum - lnum,
            '*': fnum * lnum,
            '/': lnum !== 0 ? (fnum / lnum).toFixed(2) : '錯誤',
            '%': lnum !== 0 ? fnum % lnum : '錯誤'
        };
        console.log('useMemo:', fnum, lnum, operator);
        return operations[operator] ?? 0;
    }, [fnum, lnum, operator]);

    return (
        <>
            <div className="container mt-5">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h3 className="card-title text-center mb-4">🧮 計算機</h3>
                        <div className="d-flex gap-2 align-items-center justify-content-center">
                            <NumberInput value={fnum} onChange={handleNumberChange(setFnum)} />
                            <OperatorSelect value={operator} onChange={(e) => setOperator(e.target.value)} />
                            <NumberInput value={lnum} onChange={handleNumberChange(setLnum)} />
                            <span className="fs-4 fw-bold text-primary">= {result}</span>
                            <NumberInput value={xnum} onChange={handleNumberChange(setXnum)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};