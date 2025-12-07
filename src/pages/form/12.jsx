import { useState, useEffect } from 'react';

export default function DebouncePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [results, setResults] = useState([]);

    // 模擬 API 請求
    const searchAPI = (query) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const mockData = [
                    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
                    'Fig', 'Grape', 'Honeydew', 'Ice Cream', 'Juice',
                    'Kiwi', 'Lemon', 'Mango', 'Nectarine', 'Orange'
                ];
                const filtered = mockData.filter(item =>
                    item.toLowerCase().includes(query.toLowerCase())
                );
                resolve(filtered);
            }, 500); // 模擬網路延遲
        });
    };

    // 處理 Debounce 邏輯
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 800); // 設定 800ms 的延遲

        // Cleanup: 如果使用者在 800ms 內又輸入，清除上一次的 timer
        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    // 處理搜尋邏輯（當 debouncedTerm 改變時才執行）
    useEffect(() => {
        if (debouncedTerm) {
            setIsSearching(true);
            searchAPI(debouncedTerm).then(data => {
                setResults(data);
                setIsSearching(false);
            });
        } else {
            setResults([]);
            setIsSearching(false);
        }
    }, [debouncedTerm]);

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-hourglass-split me-3"></i>防抖動搜尋</h1><p className="lead mb-0">Debounce 技術與性能優化</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">Debounce 原理</h5><ul className="text-muted mb-0"><li>延遲執行</li><li>減少請求</li><li>setTimeout 應用</li><li>Cleanup 機制</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-search text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">應用場景</h5><ul className="text-muted mb-0"><li>即時搜尋</li><li>API 請求</li><li>輸入驗證</li><li>自動存檔</li></ul></div></div></div></div></div></div></div></div>
            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3>                        <p className="mb-0">當你在輸入框連續打字時，不會立即觸發搜尋。只有停止打字超過 800ms 後，才會執行 API 請求。這能大幅減少不必要的伺服器負擔。</p>


                <div className="mb-4">
                    <label className="form-label">搜尋水果</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="試著快速輸入 'apple'..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="d-flex justify-content-between mt-2 small text-muted">
                        <span>即使輸入: {searchTerm}</span>
                        <span className={searchTerm !== debouncedTerm ? 'text-warning fw-bold' : 'text-success'}>
                            {searchTerm !== debouncedTerm ? '⏳ 等待中...' : '✅ 已同步'}
                        </span>
                        <span>實際搜尋: {debouncedTerm}</span>
                    </div>
                </div>

                <hr />

                {isSearching ? (
                    <div className="text-center py-4">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-2 text-muted">搜尋中...</p>
                    </div>
                ) : (
                    <div className="list-group">
                        {results.length > 0 ? (
                            results.map((result, index) => (
                                <button key={index} type="button" className="list-group-item list-group-item-action">
                                    🔍 {result}
                                </button>
                            ))
                        ) : debouncedTerm ? (
                            <div className="text-center text-muted py-3">
                                找不到相符的結果 🙅‍♂️
                            </div>
                        ) : (
                            <div className="text-center text-muted py-3">
                                請輸入關鍵字開始搜尋 ⌨️
                            </div>
                        )}
                    </div>
                )}
            </div></div></div></div>

            <div className="row"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h3 className="h4 mb-4"><i className="bi bi-code-slash me-2 text-success"></i>程式碼範例</h3><div className="row g-4"><div className="col-12"><div className="bg-light p-4 rounded-3"><h5 className="mb-3">Debounce Hook 實作</h5><pre className="bg-white p-3 rounded border mb-0"><code>{`const [searchTerm, setSearchTerm] = useState('');
const [debouncedTerm, setDebouncedTerm] = useState('');

useEffect(() => {
  const timerId = setTimeout(() => {
    setDebouncedTerm(searchTerm);
  }, 800); // 800ms 延遲
  
  return () => {
    clearTimeout(timerId);
  };
}, [searchTerm]);

// 當 debouncedTerm 改變時才發送 API
useEffect(() => {
  if (debouncedTerm) {
    searchAPI(debouncedTerm).then(setResults);
  }
}, [debouncedTerm]);`}</code></pre></div></div><div className="col-12"><div className="bg-light p-4 rounded-3"><h5 className="mb-3">自訂 useDebounce Hook</h5><pre className="bg-white p-3 rounded border mb-0"><code>{`function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

// 使用
const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search, 500);`}</code></pre></div></div></div></div></div></div></div>

            <div className="row mt-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h3 className="h4 mb-4"><i className="bi bi-lightbulb me-2 text-warning"></i>最佳實踐</h3><div className="row g-4"><div className="col-md-6"><div className="card border-success"><div className="card-body"><h5 className="text-success mb-3"><i className="bi bi-check-circle me-2"></i>建議作法</h5><ul className="mb-0"><li>使用 useEffect cleanup 清理 timer</li><li>設定合適的延遲時間 (300-800ms)</li><li>顯示載入狀態指示</li><li>空搜尋不發送 API 請求</li><li>封裝為可重用 Hook</li></ul></div></div></div><div className="col-md-6"><div className="card border-danger"><div className="card-body"><h5 className="text-danger mb-3"><i className="bi bi-x-circle me-2"></i>避免錯誤</h5><ul className="mb-0"><li>不要忘記清理 timeout</li><li>避免延遲時間過短或過長</li><li>注意空值處理</li><li>不要在 cleanup 中修改狀態</li><li>處理組件卸載情況</li></ul></div></div></div></div></div></div></div></div>
        </div >
    );
};
