import { useState } from 'react';

export default function KeyboardEventPage() {
    const [eventLog, setEventLog] = useState([]);
    const [formData, setFormData] = useState({
        basicInput: '',
        keyDownInput: '',
        keyUpInput: '',
        keyPressInput: '',
        searchInput: '',
        numberOnlyInput: '',
        maxLengthInput: '',
        preventDefaultInput: '',
        hotkeyInput: ''
    });

    const [lastKey, setLastKey] = useState(null);
    const [pressedKeys, setPressedKeys] = useState(new Set());

    // 記錄事件
    const logEvent = (eventType, key, code) => {
        const timestamp = new Date().toLocaleTimeString();
        const newLog = {
            id: Date.now(),
            timestamp,
            eventType,
            key,
            code
        };
        setEventLog(prev => [newLog, ...prev].slice(0, 10)); // 只保留最新的10條
    };

    // 基本輸入處理
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // onKeyDown 事件
    const handleKeyDown = (e) => {
        logEvent('keydown', e.key, e.code);
        setLastKey({
            key: e.key,
            code: e.code,
            keyCode: e.keyCode,
            ctrlKey: e.ctrlKey,
            shiftKey: e.shiftKey,
            altKey: e.altKey,
            metaKey: e.metaKey
        });
        setPressedKeys(prev => new Set(prev).add(e.key));
    };

    // onKeyUp 事件
    const handleKeyUp = (e) => {
        logEvent('keyup', e.key, e.code);
        setPressedKeys(prev => {
            const newSet = new Set(prev);
            newSet.delete(e.key);
            return newSet;
        });
    };

    // onKeyPress 事件（已廢棄但仍可用）
    const handleKeyPress = (e) => {
        logEvent('keypress', e.key, e.code);
    };

    // 只允許數字
    const handleNumberOnly = (e) => {
        const { name, value } = e.target;
        // 只允許數字
        const numericValue = value.replace(/[^0-9]/g, '');
        setFormData(prev => ({
            ...prev,
            [name]: numericValue
        }));
    };

    // 阻止特定按鍵
    const handlePreventDefault = (e) => {
        // 阻止輸入數字
        if (e.key >= '0' && e.key <= '9') {
            e.preventDefault();
            alert('此欄位不允許輸入數字！');
        }
    };

    // 快捷鍵處理
    const handleHotkey = (e) => {
        // Ctrl + S 儲存
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            alert('觸發快捷鍵：Ctrl + S (儲存)');
        }
        // Ctrl + Enter 送出
        if (e.ctrlKey && e.key === 'Enter') {
            e.preventDefault();
            alert('觸發快捷鍵：Ctrl + Enter (送出)');
        }
        // Escape 清空
        if (e.key === 'Escape') {
            setFormData(prev => ({
                ...prev,
                hotkeyInput: ''
            }));
            alert('觸發快捷鍵：Escape (清空)');
        }
    };

    // Enter 送出搜尋
    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            alert(`搜尋: ${formData.searchInput}`);
        }
    };

    // 清除事件記錄
    const clearLog = () => {
        setEventLog([]);
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-keyboard me-3"></i>鍵盤事件</h1><p className="lead mb-0">KeyDown, KeyUp, KeyPress 事件處理</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">事件類型</h5><ul className="text-muted mb-0"><li>onKeyDown 事件</li><li>onKeyUp 事件</li><li>onKeyPress 事件</li><li>組合鍵偵測</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-lightning text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">應用功能</h5><ul className="text-muted mb-0"><li>快捷鍵設定</li><li>輸入限制</li><li>即時搜尋</li><li>事件記錄</li></ul></div></div></div></div></div></div></div></div>
            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3><div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5>📋 事件記錄（最新 10 筆）</h5>
                    <button className="btn btn-sm btn-secondary" onClick={clearLog}>
                        清除記錄
                    </button>
                </div>
                <div className="border rounded p-3 bg-light" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {eventLog.length === 0 ? (
                        <p className="text-muted mb-0">尚無事件記錄</p>
                    ) : (
                        <table className="table table-sm table-hover mb-0">
                            <thead>
                                <tr>
                                    <th>時間</th>
                                    <th>事件類型</th>
                                    <th>按鍵</th>
                                    <th>代碼</th>
                                </tr>
                            </thead>
                            <tbody>
                                {eventLog.map(log => (
                                    <tr key={log.id}>
                                        <td>{log.timestamp}</td>
                                        <td><span className="badge bg-primary">{log.eventType}</span></td>
                                        <td><code>{log.key}</code></td>
                                        <td><code>{log.code}</code></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

                {/* 最後按下的按鍵資訊 */}
                {lastKey && (
                    <div className="alert alert-info mb-4">
                        <h6 className="mb-2">🎯 最後按下的按鍵資訊：</h6>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="mb-1"><strong>Key:</strong> <code>{lastKey.key}</code></p>
                                <p className="mb-1"><strong>Code:</strong> <code>{lastKey.code}</code></p>
                                <p className="mb-0"><strong>KeyCode:</strong> <code>{lastKey.keyCode}</code></p>
                            </div>
                            <div className="col-md-6">
                                <p className="mb-1"><strong>Ctrl:</strong> {lastKey.ctrlKey ? '✅' : '❌'}</p>
                                <p className="mb-1"><strong>Shift:</strong> {lastKey.shiftKey ? '✅' : '❌'}</p>
                                <p className="mb-1"><strong>Alt:</strong> {lastKey.altKey ? '✅' : '❌'}</p>
                                <p className="mb-0"><strong>Meta:</strong> {lastKey.metaKey ? '✅' : '❌'}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* 當前按下的按鍵 */}
                {pressedKeys.size > 0 && (
                    <div className="alert alert-warning mb-4">
                        <strong>🔽 當前按下的按鍵：</strong>
                        {Array.from(pressedKeys).map((key, index) => (
                            <span key={index} className="badge bg-warning text-dark ms-2">{key}</span>
                        ))}
                    </div>
                )}

                <div>
                    {/* 1. 基本輸入 */}
                    <div className="mb-4">
                        <h5 className="mb-3">1️⃣ 基本輸入事件</h5>
                        <label htmlFor="basicInput" className="form-label">基本輸入</label>
                        <input
                            id="basicInput"
                            name="basicInput"
                            type="text"
                            className="form-control"
                            value={formData.basicInput}
                            onChange={handleChange}
                            placeholder="輸入任何內容..."
                        />
                        <small className="text-muted">您輸入: {formData.basicInput}</small>
                    </div>

                    {/* 2. onKeyDown */}
                    <div className="mb-4">
                        <h5 className="mb-3">2️⃣ onKeyDown 事件</h5>
                        <label htmlFor="keyDownInput" className="form-label">KeyDown 監聽</label>
                        <input
                            id="keyDownInput"
                            name="keyDownInput"
                            type="text"
                            className="form-control"
                            value={formData.keyDownInput}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            placeholder="按下任何鍵查看事件資訊..."
                        />
                        <small className="text-muted">當按鍵被按下時觸發（包含功能鍵）</small>
                    </div>

                    {/* 3. onKeyUp */}
                    <div className="mb-4">
                        <h5 className="mb-3">3️⃣ onKeyUp 事件</h5>
                        <label htmlFor="keyUpInput" className="form-label">KeyUp 監聽</label>
                        <input
                            id="keyUpInput"
                            name="keyUpInput"
                            type="text"
                            className="form-control"
                            value={formData.keyUpInput}
                            onChange={handleChange}
                            onKeyUp={handleKeyUp}
                            placeholder="放開按鍵時觸發..."
                        />
                        <small className="text-muted">當按鍵被放開時觸發</small>
                    </div>

                    {/* 4. Enter 搜尋 */}
                    <div className="mb-4">
                        <h5 className="mb-3">4️⃣ Enter 鍵送出搜尋</h5>
                        <label htmlFor="searchInput" className="form-label">搜尋框</label>
                        <input
                            id="searchInput"
                            name="searchInput"
                            type="search"
                            className="form-control"
                            value={formData.searchInput}
                            onChange={handleChange}
                            onKeyDown={handleSearchKeyDown}
                            placeholder="輸入後按 Enter 搜尋..."
                        />
                        <small className="text-muted">按下 Enter 鍵執行搜尋</small>
                    </div>

                    {/* 5. 只允許數字 */}
                    <div className="mb-4">
                        <h5 className="mb-3">5️⃣ 只允許數字輸入</h5>
                        <label htmlFor="numberOnlyInput" className="form-label">數字輸入</label>
                        <input
                            id="numberOnlyInput"
                            name="numberOnlyInput"
                            type="text"
                            className="form-control"
                            value={formData.numberOnlyInput}
                            onChange={handleNumberOnly}
                            placeholder="只能輸入數字..."
                        />
                        <small className="text-muted">非數字字元會被自動過濾</small>
                    </div>

                    {/* 6. 字數限制 */}
                    <div className="mb-4">
                        <h5 className="mb-3">6️⃣ 字數限制（最多 20 字）</h5>
                        <label htmlFor="maxLengthInput" className="form-label">限制輸入</label>
                        <input
                            id="maxLengthInput"
                            name="maxLengthInput"
                            type="text"
                            className="form-control"
                            value={formData.maxLengthInput}
                            onChange={handleChange}
                            maxLength={20}
                            placeholder="最多 20 個字..."
                        />
                        <small className={`${formData.maxLengthInput.length >= 20 ? 'text-danger' : 'text-muted'}`}>
                            {formData.maxLengthInput.length}/20
                        </small>
                    </div>

                    {/* 7. 阻止特定按鍵 */}
                    <div className="mb-4">
                        <h5 className="mb-3">7️⃣ 阻止輸入數字</h5>
                        <label htmlFor="preventDefaultInput" className="form-label">不允許數字</label>
                        <input
                            id="preventDefaultInput"
                            name="preventDefaultInput"
                            type="text"
                            className="form-control"
                            value={formData.preventDefaultInput}
                            onChange={handleChange}
                            onKeyDown={handlePreventDefault}
                            placeholder="試著輸入數字..."
                        />
                        <small className="text-muted">數字鍵會被阻止（使用 preventDefault）</small>
                    </div>

                    {/* 8. 快捷鍵 */}
                    <div className="mb-4">
                        <h5 className="mb-3">8️⃣ 快捷鍵支援</h5>
                        <label htmlFor="hotkeyInput" className="form-label">快捷鍵輸入</label>
                        <input
                            id="hotkeyInput"
                            name="hotkeyInput"
                            type="text"
                            className="form-control"
                            value={formData.hotkeyInput}
                            onChange={handleChange}
                            onKeyDown={handleHotkey}
                            placeholder="試試快捷鍵..."
                        />
                        <div className="mt-2">
                            <small className="text-muted d-block">支援的快捷鍵：</small>
                            <small className="text-muted d-block">• <kbd>Ctrl</kbd> + <kbd>S</kbd> - 儲存</small>
                            <small className="text-muted d-block">• <kbd>Ctrl</kbd> + <kbd>Enter</kbd> - 送出</small>
                            <small className="text-muted d-block">• <kbd>Escape</kbd> - 清空</small>
                        </div>
                    </div>
                </div>

                {/* 說明 */}
                <div className="alert alert-secondary">
                    <h6 className="mb-2">💡 鍵盤事件說明：</h6>
                    <ul className="mb-0">
                        <li><strong>onKeyDown:</strong> 按鍵被按下時觸發（包含所有按鍵，如 Ctrl、Shift 等）</li>
                        <li><strong>onKeyUp:</strong> 按鍵被放開時觸發</li>
                        <li><strong>onKeyPress:</strong> 字元鍵被按下時觸發（已廢棄，建議使用 onKeyDown）</li>
                        <li><strong>event.key:</strong> 按鍵的字元值（如 'a', 'Enter', 'Escape'）</li>
                        <li><strong>event.code:</strong> 按鍵的物理位置（如 'KeyA', 'Enter', 'Escape'）</li>
                        <li><strong>event.preventDefault():</strong> 阻止預設行為</li>
                    </ul>
                </div>
            </div></div></div></div>

            <div className="row"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h3 className="h4 mb-4"><i className="bi bi-code-slash me-2 text-success"></i>程式碼範例</h3><div className="row g-4"><div className="col-12"><div className="bg-light p-4 rounded-3"><h5 className="mb-3">組合鍵偵測 (Ctrl+S 儲存)</h5><pre className="bg-white p-3 rounded border mb-0"><code>{`const handleKeyDown = (e) => {
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    console.log('儲存檔案...');
    // 執行儲存操作
  }
};

<input
  type="text"
  onKeyDown={handleKeyDown}
  placeholder="按 Ctrl+S 儲存"
/>`}</code></pre></div></div><div className="col-12"><div className="bg-light p-4 rounded-3"><h5 className="mb-3">Enter 鍵提交與事件記錄</h5><pre className="bg-white p-3 rounded border mb-0"><code>{`const [logs, setLogs] = useState([]);

const handleKeyPress = (e) => {
  const log = {
    key: e.key,
    code: e.code,
    ctrl: e.ctrlKey,
    shift: e.shiftKey,
    alt: e.altKey
  };
  
  setLogs(prev => [...prev, log]);
  
  if (e.key === 'Enter') {
    console.log('提交表單');
  }
};

<input onKeyDown={handleKeyPress} />`}</code></pre></div></div></div></div></div></div></div>

            <div className="row mt-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h3 className="h4 mb-4"><i className="bi bi-lightbulb me-2 text-warning"></i>最佳實踐</h3><div className="row g-4"><div className="col-md-6"><div className="card border-success"><div className="card-body"><h5 className="text-success mb-3"><i className="bi bi-check-circle me-2"></i>建議作法</h5><ul className="mb-0"><li>使用 e.preventDefault() 阻止預設行為</li><li>優先使用 onKeyDown 而非 onKeyPress</li><li>組合鍵處理檢查 ctrlKey, shiftKey</li><li>提供快捷鍵提示給使用者</li><li>處理跨瀏覽器相容性</li></ul></div></div></div><div className="col-md-6"><div className="card border-danger"><div className="card-body"><h5 className="text-danger mb-3"><i className="bi bi-x-circle me-2"></i>避免錯誤</h5><ul className="mb-0"><li>不要混淆 event.key 和 event.code</li><li>避免使用已廢棄的 onKeyPress</li><li>注意 Mac 與 Windows 快捷鍵差異</li><li>不要阻止所有預設行為</li><li>考慮無障礙訪問需求</li></ul></div></div></div></div></div></div></div></div>
        </div>
    )
};
