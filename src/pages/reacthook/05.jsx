import { useState, useCallback, memo } from 'react';

const ChildButton = memo(({ onClick, label }) => {
    console.log(`ChildButton "${label}" rendered`);
    return (
        <button
            onClick={onClick}
            className="btn btn-outline-primary me-2 mb-2"
        >
            {label}
        </button>
    );
});
ChildButton.displayName = 'ChildButton';

const UseCallbackExample = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const handleClickNormal = () => {
        console.log('Clicked Normal Button');
    };

    const handleClickMemoized = useCallback(() => {
        console.log('Clicked Memoized Button');
    }, []);

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
                        <i className="bi bi-arrow-repeat me-3"></i>
                        useCallback Hook
                    </h1>
                    <p className="lead mb-0">函式快取 - 記憶回調函式</p>
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
                                                <li>記憶回調函式避免重新建立</li>
                                                <li>搭配 React.memo 優化子元件</li>
                                                <li>作為 useEffect/useMemo 的相依項</li>
                                                <li>保持函式引用的穩定性</li>
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
                                                <li>不要預設使用，有成本</li>
                                                <li>必須搭配 React.memo 才有效</li>
                                                <li>相依陣列必須包含所有外部值</li>
                                                <li>返回函式而非執行結果</li>
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
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-code-square me-2 text-primary"></i>
                                互動範例
                            </h3>

                            <div className="mb-4">
                                <p className="mb-2">父組件 State: <span className="fw-bold">{count}</span></p>
                                <div className="d-flex flex-wrap gap-3 align-items-center">
                                    <button
                                        onClick={() => setCount(c => c + 1)}
                                        className="btn btn-primary"
                                    >
                                        <i className="bi bi-plus-lg me-1"></i>
                                        增加 Count (觸發渲染)
                                    </button>

                                    <input
                                        value={text}
                                        onChange={e => setText(e.target.value)}
                                        placeholder="輸入文字也會觸發渲染"
                                        className="form-control w-auto"
                                    />
                                </div>
                            </div>

                            <div className="p-4 bg-light rounded-3">
                                <p className="mb-3 fw-bold border-bottom pb-2">Child Components 渲染狀態:</p>

                                <div className="d-flex flex-wrap gap-2 mb-3">
                                    <ChildButton onClick={handleClickNormal} label="普通函數 (會重繪)" />
                                    <ChildButton onClick={handleClickMemoized} label="useCallback (不重繪)" />
                                </div>

                                <div className="alert alert-info py-2 mb-0 d-inline-flex align-items-center border-0 bg-white">
                                    <i className="bi bi-info-circle-fill me-2 text-info"></i>
                                    <span className="small text-muted">請打開瀏覽器 Console (F12) 查看子組件的渲染紀錄</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 程式碼範例 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-code-slash me-2"></i>
                                程式碼範例
                            </h3>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`import { useState, useCallback, memo } from 'react';

// 子元件使用 memo 包裹
const ChildButton = memo(({ onClick, label }) => {
  console.log(\`ChildButton "\${label}" rendered\`);
  return <button onClick={onClick}>{label}</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  
  // 不使用 useCallback - 每次渲染都會建立新函式
  const handleClickNormal = () => {
    console.log('Clicked Normal Button');
  };
  
  // 使用 useCallback - 函式引用保持不變
  const handleClickMemoized = useCallback(() => {
    console.log('Clicked Memoized Button');
  }, []); // 空陣列表示函式永不改變
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      
      {/* 每次都會重新渲染 */}
      <ChildButton onClick={handleClickNormal} label="普通函式" />
      
      {/* 不會重新渲染（除非 dependencies 改變）*/}
      <ChildButton onClick={handleClickMemoized} label="useCallback" />
    </div>
  );
}`}</code>
                            </pre>
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
                                            <strong>適用場景:</strong> 傳遞給經 React.memo 優化的子元件
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>相依項:</strong> 作為 useEffect/useMemo 的相依項時使用
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>高頻事件:</strong> scroll, resize 等高頻率事件處理器
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 不要預設使用，useCallback 本身也有成本
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

export default UseCallbackExample;
