import { useState, memo } from 'react';

// 在最前面增加標題區塊
const PageHeader = () => (
    <div className="container py-5">
        <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
            <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-lightning-charge me-3"></i>React.memo</h1><p className="lead mb-0">元件重渲染優化與性能提升</p></div>
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
        </div>
        <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">Memo 特性</h5><ul className="text-muted mb-0"><li>Props 比較機制</li><li>減少重渲染</li><li>自訂比較函式</li><li>性能優化</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-speedometer text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">應用場景</h5><ul className="text-muted mb-0"><li>昆貴運算元件</li><li>大量列表渲染</li><li>複雜狀態管理</li><li>第三方元件包裝</li></ul></div></div></div></div></div></div></div></div>
    </div>
);

// 未使用 memo 的子元件
const NormalChild = ({ name, count }) => {
    console.log(`🔴 NormalChild 重新渲染 - ${name}`);
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-danger">🔴 普通元件 (未使用 memo)</h6>
                <p className="card-text mb-0">名稱: {name}</p>
                <p className="card-text mb-0">計數: {count}</p>
            </div>
        </div>
    );
};

// 使用 memo 的子元件 - 只有 props 改變時才重新渲染
const MemoizedChild = memo(({ name, count }) => {
    console.log(`🟢 MemoizedChild 重新渲染 - ${name}`);
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-success">🟢 Memo 元件 (使用 memo)</h6>
                <p className="card-text mb-0">名稱: {name}</p>
                <p className="card-text mb-0">計數: {count}</p>
            </div>
        </div>
    );
});

// 使用自訂比較函式的 memo 元件
const CustomMemoChild = memo(
    ({ user }) => {
        console.log(`🟡 CustomMemoChild 重新渲染 - ${user.name}`);
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-warning">🟡 自訂比較 Memo (只比較 user.id)</h6>
                    <p className="card-text mb-0">ID: {user.id}</p>
                    <p className="card-text mb-0">名稱: {user.name}</p>
                    <p className="card-text mb-0">年齡: {user.age}</p>
                </div>
            </div>
        );
    },
    // 自訂比較函式：只比較 user.id，其他屬性改變不會重新渲染
    (prevProps, nextProps) => {
        return prevProps.user.id === nextProps.user.id;
    }
);

// 展示複雜物件作為 props 的情況
const ExpensiveComponent = memo(({ data, onUpdate }) => {
    console.log('💎 ExpensiveComponent 重新渲染');

    // 模擬昂貴的計算
    const processedData = data.map(item => ({
        ...item,
        processed: true,
        timestamp: new Date().toLocaleTimeString()
    }));

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-info">💎 複雜元件 (處理陣列資料)</h6>
                <div className="table-responsive">
                    <table className="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>名稱</th>
                                <th>處理時間</th>
                            </tr>
                        </thead>
                        <tbody>
                            {processedData.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><small>{item.timestamp}</small></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="btn btn-sm btn-info" onClick={onUpdate}>
                    更新資料
                </button>
            </div>
        </div>
    );
});

export default function ReactMemoPage() {
    const [parentCount, setParentCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [userName, setUserName] = useState('張三');
    const [userAge, setUserAge] = useState(25);
    const [listData, setListData] = useState([
        { id: 1, name: '項目 A' },
        { id: 2, name: '項目 B' },
        { id: 3, name: '項目 C' }
    ]);

    const user = {
        id: 1,
        name: userName,
        age: userAge
    };

    const handleDataUpdate = () => {
        setListData(prev => [
            ...prev,
            { id: prev.length + 1, name: `項目 ${String.fromCharCode(65 + prev.length)}` }
        ]);
    };

    return (
        <div className="container mt-4">

            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-lightning-charge me-3"></i>React.memo</h1><p className="lead mb-0">元件重渲染優化與性能提升</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">Memo 特性</h5><ul className="text-muted mb-0"><li>Props 比較機制</li><li>減少重渲染</li><li>自訂比較函式</li><li>性能優化</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-speedometer text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">應用場景</h5><ul className="text-muted mb-0"><li>昆貴運算元件</li><li>大量列表渲染</li><li>複雜狀態管理</li><li>第三方元件包裝</li></ul></div></div></div></div></div></div></div></div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <h3 className="card-title mb-4">📝 React.memo - 效能優化範例</h3>

                    {/* 說明區塊 */}
                    <div className="alert alert-primary mb-4">
                        <h5 className="alert-heading">💡 React.memo 說明</h5>
                        <p className="mb-2"><strong>用途：</strong>避免子元件不必要的重新渲染，提升效能</p>
                        <p className="mb-2"><strong>原理：</strong>透過淺層比較 props，只有 props 改變時才重新渲染</p>
                        <p className="mb-2"><strong>語法：</strong><code>const MemoComponent = memo(Component)</code></p>
                        <p className="mb-0"><strong>觀察方式：</strong>打開 Console 查看各元件的渲染次數</p>
                    </div>

                    {/* 控制面板 */}
                    <div className="row mb-4">
                        <div className="col-md-12">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">🎛️ 控制面板</h5>

                                    <div className="row g-3">
                                        {/* 父元件計數器 */}
                                        <div className="col-md-6">
                                            <label className="form-label">父元件計數器 (不影響子元件 props)</label>
                                            <div className="d-flex align-items-center gap-2">
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => setParentCount(prev => prev + 1)}
                                                >
                                                    父計數 +1
                                                </button>
                                                <span className="badge bg-primary fs-5">{parentCount}</span>
                                            </div>
                                            <small className="text-muted">
                                                ⚠️ 點擊後，NormalChild 會重新渲染，MemoizedChild 不會
                                            </small>
                                        </div>

                                        {/* 子元件計數器 */}
                                        <div className="col-md-6">
                                            <label className="form-label">子元件計數器 (會改變子元件 props)</label>
                                            <div className="d-flex align-items-center gap-2">
                                                <button
                                                    className="btn btn-success"
                                                    onClick={() => setChildCount(prev => prev + 1)}
                                                >
                                                    子計數 +1
                                                </button>
                                                <span className="badge bg-success fs-5">{childCount}</span>
                                            </div>
                                            <small className="text-muted">
                                                ✅ 點擊後，所有子元件都會重新渲染（因為 props 改變）
                                            </small>
                                        </div>

                                        {/* 使用者名稱 */}
                                        <div className="col-md-6">
                                            <label className="form-label">使用者名稱</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={userName}
                                                onChange={(e) => setUserName(e.target.value)}
                                            />
                                            <small className="text-muted">
                                                ⚠️ 修改後，CustomMemoChild 不會重新渲染（只比較 id）
                                            </small>
                                        </div>

                                        {/* 使用者年齡 */}
                                        <div className="col-md-6">
                                            <label className="form-label">使用者年齡</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={userAge}
                                                onChange={(e) => setUserAge(Number(e.target.value))}
                                            />
                                            <small className="text-muted">
                                                ⚠️ 修改後，CustomMemoChild 不會重新渲染（只比較 id）
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 元件展示區 */}
                    <div className="row">
                        <div className="col-md-6">
                            <h5>🔴 未使用 memo 的元件</h5>
                            <NormalChild name="普通元件" count={childCount} />
                            <div className="alert alert-danger">
                                <small>
                                    <strong>行為：</strong>每次父元件重新渲染時，此元件都會重新渲染，
                                    即使 props 沒有改變。點擊「父計數 +1」觀察 Console。
                                </small>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h5>🟢 使用 memo 的元件</h5>
                            <MemoizedChild name="Memo 元件" count={childCount} />
                            <div className="alert alert-success">
                                <small>
                                    <strong>行為：</strong>只有當 props (name 或 count) 改變時才重新渲染。
                                    點擊「父計數 +1」時不會重新渲染。
                                </small>
                            </div>
                        </div>

                        <div className="col-md-12 mt-3">
                            <h5>🟡 使用自訂比較函式的 memo</h5>
                            <CustomMemoChild user={user} />
                            <div className="alert alert-warning">
                                <small>
                                    <strong>行為：</strong>使用自訂比較函式，只比較 user.id。
                                    即使修改名稱或年齡，元件也不會重新渲染（因為 id 沒變）。
                                    這在某些場景下很有用，但要小心使用，避免顯示過時資料。
                                </small>
                            </div>
                        </div>

                        <div className="col-md-12 mt-3">
                            <h5>💎 處理複雜資料的 memo 元件</h5>
                            <ExpensiveComponent data={listData} onUpdate={handleDataUpdate} />
                            <div className="alert alert-info">
                                <small>
                                    <strong>行為：</strong>即使使用了 memo，如果傳入的 data 陣列或 onUpdate 函式
                                    是每次都重新建立的（不同的參照），元件仍會重新渲染。
                                    需要搭配 useMemo 和 useCallback 來優化。
                                </small>
                            </div>
                        </div>
                    </div>

                    {/* 重點提示 */}
                    <div className="alert alert-secondary mt-4">
                        <h5 className="alert-heading">🎯 使用建議</h5>
                        <ul className="mb-0">
                            <li><strong>適合使用：</strong>渲染成本高的元件、props 很少改變的元件、純展示型元件</li>
                            <li><strong>不適合：</strong>props 經常改變的元件、簡單快速的元件（memo 本身也有成本）</li>
                            <li><strong>注意事項：</strong>memo 只做淺層比較，對於物件、陣列、函式等參照型別要特別注意</li>
                            <li><strong>搭配使用：</strong>通常需要配合 useMemo 和 useCallback 才能發揮最大效果</li>
                        </ul>
                    </div>

                    {/* 渲染統計 */}
                    <div className="card bg-dark text-white mt-4">
                        <div className="card-body">
                            <h6 className="card-subtitle mb-3">📊 渲染統計</h6>
                            <p className="mb-1">父元件計數: {parentCount}</p>
                            <p className="mb-1">子元件計數: {childCount}</p>
                            <p className="mb-0">
                                <small className="text-muted">
                                    打開瀏覽器 Console (F12) 查看各元件的渲染記錄
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
