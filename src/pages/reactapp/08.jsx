import { useReducer, useState } from 'react';

// ===== 範例 1: 簡單計數器 =====
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'INCREMENT_BY':
            return { count: state.count + action.payload };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
};

function SimpleCounter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div className="card h-100">
            <div className="card-body">
                <h6 className="card-subtitle mb-3">簡單計數器</h6>
                <div className="text-center mb-3">
                    <h2 className="display-4 text-primary">{state.count}</h2>
                </div>
                <div className="d-flex gap-2 justify-content-center flex-wrap">
                    <button
                        className="btn btn-sm btn-success"
                        onClick={() => dispatch({ type: 'INCREMENT' })}
                    >
                        +1
                    </button>
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => dispatch({ type: 'DECREMENT' })}
                    >
                        -1
                    </button>
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={() => dispatch({ type: 'INCREMENT_BY', payload: 5 })}
                    >
                        +5
                    </button>
                    <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => dispatch({ type: 'RESET' })}
                    >
                        重置
                    </button>
                </div>
            </div>
        </div>
    );
}

// ===== 範例 2: 表單管理 =====
const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                [action.field]: action.value
            };
        case 'RESET_FORM':
            return {
                username: '',
                email: '',
                password: '',
                age: ''
            };
        case 'SET_MULTIPLE':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

function FormManager() {
    const [formState, dispatch] = useReducer(formReducer, {
        username: '',
        email: '',
        password: '',
        age: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('表單資料:', formState);
        alert(`表單提交成功！\n使用者: ${formState.username}\n郵件: ${formState.email}`);
    };

    const fillTestData = () => {
        dispatch({
            type: 'SET_MULTIPLE',
            payload: {
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123',
                age: '25'
            }
        });
    };

    return (
        <div className="card h-100">
            <div className="card-body">
                <h6 className="card-subtitle mb-3">表單管理</h6>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className="form-label small">使用者名稱</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            value={formState.username}
                            onChange={(e) => dispatch({
                                type: 'SET_FIELD',
                                field: 'username',
                                value: e.target.value
                            })}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="form-label small">電子郵件</label>
                        <input
                            type="email"
                            className="form-control form-control-sm"
                            value={formState.email}
                            onChange={(e) => dispatch({
                                type: 'SET_FIELD',
                                field: 'email',
                                value: e.target.value
                            })}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="form-label small">密碼</label>
                        <input
                            type="password"
                            className="form-control form-control-sm"
                            value={formState.password}
                            onChange={(e) => dispatch({
                                type: 'SET_FIELD',
                                field: 'password',
                                value: e.target.value
                            })}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label small">年齡</label>
                        <input
                            type="number"
                            className="form-control form-control-sm"
                            value={formState.age}
                            onChange={(e) => dispatch({
                                type: 'SET_FIELD',
                                field: 'age',
                                value: e.target.value
                            })}
                        />
                    </div>
                    <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-sm btn-primary">
                            提交
                        </button>
                        <button
                            type="button"
                            className="btn btn-sm btn-secondary"
                            onClick={() => dispatch({ type: 'RESET_FORM' })}
                        >
                            清空
                        </button>
                        <button
                            type="button"
                            className="btn btn-sm btn-info"
                            onClick={fillTestData}
                        >
                            填入測試資料
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// ===== 範例 3: 待辦事項列表 =====
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, {
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }]
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
};

function TodoList() {
    const [state, dispatch] = useReducer(todoReducer, {
        todos: [
            { id: 1, text: '學習 React', completed: true },
            { id: 2, text: '練習 Hooks', completed: false },
            { id: 3, text: '完成專案', completed: false }
        ],
        filter: 'all'
    });

    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            dispatch({ type: 'ADD_TODO', payload: inputValue });
            setInputValue('');
        }
    };

    const filteredTodos = state.todos.filter(todo => {
        if (state.filter === 'active') return !todo.completed;
        if (state.filter === 'completed') return todo.completed;
        return true;
    });

    const stats = {
        total: state.todos.length,
        active: state.todos.filter(t => !t.completed).length,
        completed: state.todos.filter(t => t.completed).length
    };

    return (
        <div className="card h-100">
            <div className="card-body">
                <h6 className="card-subtitle mb-3">待辦事項列表</h6>

                {/* 新增任務 */}
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="新增任務..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                    />
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={handleAddTodo}
                    >
                        新增
                    </button>
                </div>

                {/* 篩選按鈕 */}
                <div className="btn-group btn-group-sm mb-3 w-100" role="group">
                    <button
                        className={`btn ${state.filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}
                    >
                        全部 ({stats.total})
                    </button>
                    <button
                        className={`btn ${state.filter === 'active' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}
                    >
                        進行中 ({stats.active})
                    </button>
                    <button
                        className={`btn ${state.filter === 'completed' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}
                    >
                        已完成 ({stats.completed})
                    </button>
                </div>

                {/* 任務列表 */}
                <ul className="list-group mb-3">
                    {filteredTodos.map(todo => (
                        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                                />
                                <label className={`form-check-label ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}>
                                    {todo.text}
                                </label>
                            </div>
                            <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>

                {/* 清除已完成 */}
                {stats.completed > 0 && (
                    <button
                        className="btn btn-sm btn-warning w-100"
                        onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}
                    >
                        清除已完成的任務
                    </button>
                )}
            </div>
        </div>
    );
}

// ===== 範例 4: 購物車 =====
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }]
            };

        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: Math.max(1, action.payload.quantity) }
                        : item
                )
            };

        case 'CLEAR_CART':
            return {
                ...state,
                items: []
            };

        case 'APPLY_DISCOUNT':
            return {
                ...state,
                discountCode: action.payload.code,
                discountPercent: action.payload.percent
            };

        default:
            return state;
    }
};

function ShoppingCart() {
    const [state, dispatch] = useReducer(cartReducer, {
        items: [],
        discountCode: null,
        discountPercent: 0
    });

    const products = [
        { id: 1, name: 'iPhone 15', price: 35900 },
        { id: 2, name: 'iPad Air', price: 19900 },
        { id: 3, name: 'AirPods', price: 7990 },
        { id: 4, name: 'Apple Watch', price: 12900 }
    ];

    const subtotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = subtotal * (state.discountPercent / 100);
    const total = subtotal - discount;

    const applyDiscount = () => {
        dispatch({
            type: 'APPLY_DISCOUNT',
            payload: { code: 'SAVE10', percent: 10 }
        });
    };

    return (
        <div className="card h-100">
            <div className="card-body">
                <h6 className="card-subtitle mb-3">購物車系統</h6>

                {/* 商品列表 */}
                <div className="mb-3">
                    <strong className="small">可選商品：</strong>
                    <div className="row g-2 mt-2">
                        {products.map(product => (
                            <div key={product.id} className="col-6">
                                <button
                                    className="btn btn-sm btn-outline-success w-100"
                                    onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
                                >
                                    {product.name}
                                    <br />
                                    <small>NT$ {product.price.toLocaleString()}</small>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 購物車內容 */}
                {state.items.length === 0 ? (
                    <div className="alert alert-secondary">
                        購物車是空的
                    </div>
                ) : (
                    <>
                        <ul className="list-group mb-3">
                            {state.items.map(item => (
                                <li key={item.id} className="list-group-item">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <strong>{item.name}</strong>
                                            <br />
                                            <small className="text-muted">
                                                NT$ {item.price.toLocaleString()}
                                            </small>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <input
                                                type="number"
                                                className="form-control form-control-sm"
                                                style={{ width: '60px' }}
                                                value={item.quantity}
                                                onChange={(e) => dispatch({
                                                    type: 'UPDATE_QUANTITY',
                                                    payload: {
                                                        id: item.id,
                                                        quantity: parseInt(e.target.value) || 1
                                                    }
                                                })}
                                                min="1"
                                            />
                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-end mt-1">
                                        <small className="text-muted">
                                            小計: NT$ {(item.price * item.quantity).toLocaleString()}
                                        </small>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* 優惠碼 */}
                        {!state.discountCode && (
                            <button
                                className="btn btn-sm btn-warning w-100 mb-3"
                                onClick={applyDiscount}
                            >
                                套用折扣碼 SAVE10 (9折)
                            </button>
                        )}

                        {/* 總計 */}
                        <div className="card bg-light">
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-1">
                                    <span>小計:</span>
                                    <span>NT$ {subtotal.toLocaleString()}</span>
                                </div>
                                {state.discountCode && (
                                    <div className="d-flex justify-content-between mb-1 text-success">
                                        <span>折扣 ({state.discountCode}):</span>
                                        <span>-NT$ {discount.toLocaleString()}</span>
                                    </div>
                                )}
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <strong>總計:</strong>
                                    <strong>NT$ {total.toLocaleString()}</strong>
                                </div>
                            </div>
                        </div>

                        <button
                            className="btn btn-sm btn-danger w-100 mt-3"
                            onClick={() => dispatch({ type: 'CLEAR_CART' })}
                        >
                            清空購物車
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

// ===== 主要元件 =====
export default function UseReducerPage() {
    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-arrow-repeat me-3"></i>useReducer - 複雜狀態管理</h1><p className="lead mb-0">狀態邏輯分離與集中管理</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>

            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">useReducer</h5><ul className="text-muted mb-0"><li>管理複雜的狀態邏輯</li><li>適合多個子狀態管理</li><li>Action 與 Dispatch 模式</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-lightning text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">核心概念</h5><ul className="text-muted mb-0"><li>Reducer：純函式狀態更新</li><li>Action：描述發生了什麼</li><li>Dispatch：發送 Action</li></ul></div></div></div></div></div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3>
                <div className="container mt-2">
                    {/* 範例 1: 簡單計數器 */}
                    <div className="mb-4">
                        <h5>📊 範例 1: 簡單計數器</h5>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <SimpleCounter />
                            </div>
                            <div className="col-md-6">
                                <div className="alert alert-info h-100 d-flex align-items-center">
                                    <div>
                                        <h6 className="alert-heading">技術說明</h6>
                                        <small>
                                            展示 useReducer 的基本用法，透過不同的 action type 來執行不同的狀態更新。
                                            使用 payload 傳遞額外資料（如 +5 功能）。
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 範例 2: 表單管理 */}
                    <div className="mb-4">
                        <h5>📝 範例 2: 表單管理</h5>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <FormManager />
                            </div>
                            <div className="col-md-6">
                                <div className="alert alert-info h-100 d-flex align-items-center">
                                    <div>
                                        <h6 className="alert-heading">技術說明</h6>
                                        <small>
                                            使用 useReducer 管理多個表單欄位，避免使用多個 useState。
                                            支援單一欄位更新、整個表單重置、批次更新多個欄位。
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 範例 3: 待辦事項 */}
                    <div className="mb-4">
                        <h5>✅ 範例 3: 待辦事項列表</h5>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <TodoList />
                            </div>
                            <div className="col-md-6">
                                <div className="alert alert-info h-100 d-flex align-items-center">
                                    <div>
                                        <h6 className="alert-heading">技術說明</h6>
                                        <small>
                                            管理待辦事項的新增、切換、刪除和篩選。
                                            狀態包含 todos 陣列和 filter 字串，展示如何處理複雜的狀態結構。
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 範例 4: 購物車 */}
                    <div className="mb-4">
                        <h5>🛒 範例 4: 購物車系統</h5>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <ShoppingCart />
                            </div>
                            <div className="col-md-6">
                                <div className="alert alert-info h-100 d-flex align-items-center">
                                    <div>
                                        <h6 className="alert-heading">技術說明</h6>
                                        <small>
                                            完整的購物車功能：新增商品、移除商品、更新數量、套用折扣。
                                            展示如何處理條件邏輯（如檢查商品是否已存在）。
                                            計算總價、折扣等衍生資料。
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-slash me-2 text-success"></i>程式碼範例</h3>
                <div className="container mt-2">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <pre className="mb-0" style={{ fontSize: '0.85rem' }}>
                                {`// 1. 定義 reducer 函式
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'INCREMENT_BY':
      return { count: state.count + action.payload };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// 2. 使用 useReducer
const [state, dispatch] = useReducer(counterReducer, { count: 0 });

// 3. 觸發狀態更新
dispatch({ type: 'INCREMENT' });
dispatch({ type: 'INCREMENT_BY', payload: 5 });
dispatch({ type: 'RESET' });`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div></div></div></div>
        </div>
    );
};
