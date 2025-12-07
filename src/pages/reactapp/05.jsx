import { useState, useCallback, memo } from 'react';

// 未使用 memo 的按鈕元件
const NormalButton = ({ onClick, label }) => {
    console.log(`🔴 NormalButton 重新渲染 - ${label}`);
    return (
        <button className="btn btn-danger btn-sm" onClick={onClick}>
            {label}
        </button>
    );
};

// 使用 memo 的按鈕元件
const MemoButton = memo(({ onClick, label }) => {
    console.log(`🟢 MemoButton 重新渲染 - ${label}`);
    return (
        <button className="btn btn-success btn-sm" onClick={onClick}>
            {label}
        </button>
    );
});

// 使用 memo 的計數器元件
const Counter = memo(({ count, onIncrement, onDecrement, title }) => {
    console.log(`📊 Counter 重新渲染 - ${title}`);
    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-subtitle mb-3 text-muted">{title}</h6>
                <div className="d-flex align-items-center justify-content-between">
                    <button className="btn btn-outline-danger" onClick={onDecrement}>
                        -1
                    </button>
                    <span className="fs-3 fw-bold mx-3">{count}</span>
                    <button className="btn btn-outline-success" onClick={onIncrement}>
                        +1
                    </button>
                </div>
            </div>
        </div>
    );
});

// 使用 memo 的任務列表元件
const TaskList = memo(({ tasks, onToggle, onDelete }) => {
    console.log('📝 TaskList 重新渲染');
    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-subtitle mb-3">任務列表</h6>
                {tasks.length === 0 ? (
                    <p className="text-muted text-center">目前沒有任務</p>
                ) : (
                    <ul className="list-group">
                        {tasks.map(task => (
                            <li
                                key={task.id}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => onToggle(task.id)}
                                    />
                                    <label
                                        className={`form-check-label ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}
                                    >
                                        {task.text}
                                    </label>
                                </div>
                                <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => onDelete(task.id)}
                                >
                                    刪除
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
});

// 搜尋結果元件
const SearchResults = memo(({ results, onItemClick }) => {
    console.log('🔍 SearchResults 重新渲染');
    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-subtitle mb-3">搜尋結果</h6>
                {results.length === 0 ? (
                    <p className="text-muted text-center">沒有找到結果</p>
                ) : (
                    <div className="list-group">
                        {results.map(item => (
                            <button
                                key={item.id}
                                className="list-group-item list-group-item-action"
                                onClick={() => onItemClick(item)}
                            >
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-1">{item.name}</h6>
                                    <small className="text-muted">{item.category}</small>
                                </div>
                                <small className="text-muted">NT$ {item.price.toLocaleString()}</small>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
});

export default function UseCallbackPage() {
    // 範例 1: 基本計數器
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [otherState, setOtherState] = useState(0);

    // 沒有使用 useCallback - 每次渲染都會建立新函式
    const handleIncrement1 = () => {
        setCount1(prev => prev + 1);
    };

    const handleDecrement1 = () => {
        setCount1(prev => prev - 1);
    };

    // 使用 useCallback - 只有依賴改變時才會建立新函式
    const handleIncrement2 = useCallback(() => {
        setCount2(prev => prev + 1);
    }, []);

    const handleDecrement2 = useCallback(() => {
        setCount2(prev => prev - 1);
    }, []);

    // 範例 2: 任務管理
    const [tasks, setTasks] = useState([
        { id: 1, text: '學習 React', completed: false },
        { id: 2, text: '練習 Hooks', completed: false },
        { id: 3, text: '完成專案', completed: false }
    ]);
    const [newTask, setNewTask] = useState('');

    // 使用 useCallback 避免 TaskList 不必要的重新渲染
    const handleToggleTask = useCallback((taskId) => {
        setTasks(prev => prev.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    }, []);

    const handleDeleteTask = useCallback((taskId) => {
        setTasks(prev => prev.filter(task => task.id !== taskId));
    }, []);

    const handleAddTask = useCallback(() => {
        if (newTask.trim()) {
            setTasks(prev => [...prev, {
                id: Date.now(),
                text: newTask,
                completed: false
            }]);
            setNewTask('');
        }
    }, [newTask]);

    // 範例 3: 搜尋功能
    const [searchTerm, setSearchTerm] = useState('');
    const products = [
        { id: 1, name: 'iPhone 15 Pro', category: '手機', price: 35900 },
        { id: 2, name: 'MacBook Pro', category: '筆電', price: 72900 },
        { id: 3, name: 'iPad Air', category: '平板', price: 19900 },
        { id: 4, name: 'AirPods Pro', category: '耳機', price: 7990 },
        { id: 5, name: 'Apple Watch', category: '手錶', price: 12900 }
    ];

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 使用 useCallback 快取點擊處理函式
    const handleProductClick = useCallback((product) => {
        alert(`你選擇了：${product.name}\n價格：NT$ ${product.price.toLocaleString()}`);
    }, []);

    // 範例 4: 帶參數的 useCallback
    const [selectedId, setSelectedId] = useState(null);

    const handleSelectItem = useCallback((id) => {
        console.log(`選擇項目 ID: ${id}`);
        setSelectedId(id);
    }, []);

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-lightning-charge-fill me-3"></i>useCallback - 函式記憶化</h1><p className="lead mb-0">效能優化與避免不必要的渲染</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>

            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">useCallback</h5><ul className="text-muted mb-0"><li>快取函式參照</li><li>避免每次渲染都建立新函式</li><li>配合 memo 使用效果最佳</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-lightning text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">適用場景</h5><ul className="text-muted mb-0"><li>傳遞給子元件的回呼函式</li><li>作為 useEffect 的依賴項</li><li>避免不必要的重新渲染</li></ul></div></div></div></div></div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3>
                <div className="container mt-2">
                    {/* 範例 1: 基本對比 */}
                    <div className="mb-5">
                        <h5 className="mb-3">📌 範例 1: 有無使用 useCallback 的對比</h5>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <Counter
                                    count={count1}
                                    onIncrement={handleIncrement1}
                                    onDecrement={handleDecrement1}
                                    title="❌ 未使用 useCallback"
                                />
                                <div className="alert alert-danger mt-2">
                                    <small>
                                        每次父元件渲染時，handleIncrement1 和 handleDecrement1
                                        都會建立新函式，導致 Counter 重新渲染
                                    </small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <Counter
                                    count={count2}
                                    onIncrement={handleIncrement2}
                                    onDecrement={handleDecrement2}
                                    title="✅ 使用 useCallback"
                                />
                                <div className="alert alert-success mt-2">
                                    <small>
                                        使用 useCallback 快取函式，Counter 只在 count2 改變時重新渲染
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button
                                className="btn btn-warning"
                                onClick={() => setOtherState(prev => prev + 1)}
                            >
                                觸發父元件渲染 (otherState: {otherState})
                            </button>
                            <p className="text-muted mt-2">
                                <small>點擊此按鈕，觀察 Console 中哪個 Counter 會重新渲染</small>
                            </p>
                        </div>
                    </div>

                    {/* 範例 2: 任務管理 */}
                    <div className="mb-5">
                        <h5 className="mb-3">📌 範例 2: 任務管理（實用案例）</h5>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="輸入新任務..."
                                        value={newTask}
                                        onChange={(e) => setNewTask(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
                                    />
                                    <button className="btn btn-primary" onClick={handleAddTask}>
                                        新增任務
                                    </button>
                                </div>
                                <TaskList
                                    tasks={tasks}
                                    onToggle={handleToggleTask}
                                    onDelete={handleDeleteTask}
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="alert alert-info">
                                    <h6 className="alert-heading">📊 技術說明</h6>
                                    <ul className="mb-0 small">
                                        <li>TaskList 使用 memo 包裹</li>
                                        <li>onToggle 和 onDelete 使用 useCallback 快取</li>
                                        <li>當你在輸入框打字時，TaskList 不會重新渲染</li>
                                        <li>只有在真正改變 tasks 時才會重新渲染</li>
                                    </ul>
                                </div>
                                <div className="card bg-light">
                                    <div className="card-body">
                                        <h6>統計資訊</h6>
                                        <p className="mb-1">總任務數: {tasks.length}</p>
                                        <p className="mb-1">已完成: {tasks.filter(t => t.completed).length}</p>
                                        <p className="mb-0">未完成: {tasks.filter(t => !t.completed).length}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 範例 3: 搜尋功能 */}
                    <div className="mb-5">
                        <h5 className="mb-3">📌 範例 3: 搜尋與選擇</h5>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="搜尋產品..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <SearchResults
                                    results={filteredProducts}
                                    onItemClick={handleProductClick}
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="alert alert-info">
                                    <h6 className="alert-heading">🎯 重點觀察</h6>
                                    <ul className="mb-0 small">
                                        <li>handleProductClick 使用 useCallback 且沒有依賴項</li>
                                        <li>即使 searchTerm 改變，handleProductClick 函式不會重新建立</li>
                                        <li>SearchResults 使用 memo，但因為 results 改變所以會重新渲染</li>
                                        <li>這樣可以避免傳遞不同的函式參照給子元件</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 範例 4: 按鈕比較 */}
                    <div className="mb-4">
                        <h5 className="mb-3">📌 範例 4: 按鈕元件比較</h5>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="mb-3">未使用 useCallback 的函式</h6>
                                        <div className="d-flex gap-2 mb-2">
                                            <NormalButton
                                                onClick={() => alert('按鈕 1')}
                                                label="普通按鈕 1"
                                            />
                                            <NormalButton
                                                onClick={() => alert('按鈕 2')}
                                                label="普通按鈕 2"
                                            />
                                        </div>
                                        <small className="text-danger">
                                            即使按鈕沒有被點擊，每次父元件渲染時這些按鈕都會重新渲染
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="mb-3">使用 useCallback 的函式</h6>
                                        <div className="d-flex gap-2 mb-2">
                                            <MemoButton
                                                onClick={useCallback(() => alert('Memo 按鈕 1'), [])}
                                                label="Memo 按鈕 1"
                                            />
                                            <MemoButton
                                                onClick={useCallback(() => alert('Memo 按鈕 2'), [])}
                                                label="Memo 按鈕 2"
                                            />
                                        </div>
                                        <small className="text-success">
                                            配合 memo，只有在 props 真正改變時才會重新渲染
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button
                                className="btn btn-secondary"
                                onClick={() => setOtherState(prev => prev + 1)}
                            >
                                再次觸發父元件渲染
                            </button>
                        </div>
                    </div>
                </div>
            </div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-slash me-2 text-success"></i>程式碼範例</h3>
                <div className="container mt-2">
                    <div className="card bg-dark text-white mt-3">
                        <div className="card-body">
                            <pre className="mb-0" style={{ fontSize: '0.85rem' }}>
                                {`// 基本用法
const handleIncrement = useCallback(() => {
  setCount(prev => prev + 1);
}, []); // 空依賴，函式永不更新

// 帶依賴的 useCallback
const handleAddTask = useCallback(() => {
  if (newTask.trim()) {
    setTasks(prev => [...prev, {
      id: Date.now(),
      text: newTask,
      completed: false
    }]);
    setNewTask('');
  }
}, [newTask]); // newTask 改變時才重新建立函式

// 配合 memo 使用
const MemoButton = memo(({ onClick, label }) => {
  console.log(\`MemoButton 渲染 - \${label}\`);
  return <button onClick={onClick}>{label}</button>;
});

// 傳遞給子元件
<MemoButton onClick={handleIncrement} label="+1" />`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div></div></div></div>
        </div>
    );
};
