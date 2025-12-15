import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, editTodo } from '../../slice/todosSlice';
import { createAsyncMessage } from '../../slice/messageSlice';
import MessageToast from '../../components/MessageToast';
import { useState } from 'react';

//1.匯入useDispatch
//2.匯入action
export default function ReduxTodoListPage() {
    const todos = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            dispatch(addTodo(inputValue));
            dispatch(createAsyncMessage({ text: '新增成功', type: 'success', timeout: 3000 }));
            setInputValue('');
        }
    };

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
        dispatch(createAsyncMessage({ text: '刪除成功', type: 'error', timeout: 3000 }));
    };

    const handleEdit = (id, text) => {
        setEditingId(id);
        setEditingText(text);
    };

    const handleSaveEdit = (id) => {
        if (editingText.trim()) {
            dispatch(editTodo({ id, text: editingText }));
            dispatch(createAsyncMessage({ text: '編輯已儲存', type: 'info', timeout: 3000 }));
            setEditingId(null);
            setEditingText('');
        }
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditingText('');
    };

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
                        <i className="bi bi-box-seam me-3"></i>
                        Redux Toolkit - Todo List
                    </h1>
                    <p className="lead mb-0">了解 Redux 的核心概念與基本使用方式</p>
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
                                什麼是 Redux?
                            </h2>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-diagram-3 text-primary fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">核心概念</h5>
                                            <ul className="text-muted mb-0">
                                                <li><strong>Store</strong>: 全域狀態儲存中心</li>
                                                <li><strong>State</strong>: 應用程式的狀態資料</li>
                                                <li><strong>Action</strong>: 描述發生什麼事的物件</li>
                                                <li><strong>Reducer</strong>: 根據 Action 更新 State</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-success bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-check2-circle text-success fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">主要優勢</h5>
                                            <ul className="text-muted mb-0">
                                                <li>跨元件共用狀態</li>
                                                <li>可預測的狀態管理</li>
                                                <li>強大的開發工具支援</li>
                                                <li>時間旅行除錯功能</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 互動範例 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-code-square me-2 text-primary"></i>
                                Todo List 範例
                            </h3>

                            {/* 新增 Todo */}
                            <div className="mb-4">
                                <label className="form-label fw-bold">新增待辦事項</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="請輸入待辦事項..."
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                                    />
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleAddTodo}
                                    >
                                        <i className="bi bi-plus-lg me-2"></i>
                                        新增
                                    </button>
                                </div>
                            </div>

                            {/* Todo 列表 */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    待辦清單
                                    <span className="badge bg-primary ms-2">{todos.length} 項</span>
                                </label>
                                {todos.length === 0 ? (
                                    <div className="alert alert-info">
                                        <i className="bi bi-info-circle me-2"></i>
                                        目前沒有待辦事項
                                    </div>
                                ) : (
                                    <ul className="list-group">
                                        {todos.map((todo) => (
                                            <li
                                                key={todo.id}
                                                className="list-group-item d-flex align-items-center"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input me-3"
                                                    checked={todo.completed}
                                                    onChange={() => handleToggle(todo.id)}
                                                    disabled={editingId === todo.id}
                                                />
                                                {editingId === todo.id ? (
                                                    <>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-sm me-2"
                                                            value={editingText}
                                                            onChange={(e) => setEditingText(e.target.value)}
                                                            onKeyPress={(e) => e.key === 'Enter' && handleSaveEdit(todo.id)}
                                                            autoFocus
                                                        />
                                                        <button
                                                            className="btn btn-sm btn-success me-2"
                                                            onClick={() => handleSaveEdit(todo.id)}
                                                        >
                                                            <i className="bi bi-check-lg"></i>
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-secondary"
                                                            onClick={handleCancelEdit}
                                                        >
                                                            <i className="bi bi-x-lg"></i>
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span
                                                            style={{
                                                                textDecoration: todo.completed ? 'line-through' : 'none',
                                                                color: todo.completed ? '#6c757d' : '#212529',
                                                                flex: 1
                                                            }}
                                                        >
                                                            {todo.text}
                                                        </span>
                                                        <button
                                                            className="btn btn-sm btn-primary me-2"
                                                            onClick={() => handleEdit(todo.id, todo.text)}
                                                        >
                                                            <i className="bi bi-pencil"></i>
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-danger"
                                                            onClick={() => handleDelete(todo.id)}
                                                        >
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* 統計資訊 */}
                            {todos.length > 0 && (
                                <div className="row g-3 mt-3">
                                    <div className="col-md-4">
                                        <div className="card bg-light">
                                            <div className="card-body text-center">
                                                <h6 className="text-muted">總數</h6>
                                                <h3 className="mb-0">{todos.length}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card bg-success bg-opacity-10">
                                            <div className="card-body text-center">
                                                <h6 className="text-muted">已完成</h6>
                                                <h3 className="mb-0 text-success">
                                                    {todos.filter(t => t.completed).length}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card bg-warning bg-opacity-10">
                                            <div className="card-body text-center">
                                                <h6 className="text-muted">待完成</h6>
                                                <h3 className="mb-0 text-warning">
                                                    {todos.filter(t => !t.completed).length}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
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
                                <i className="bi bi-code-slash me-2 text-success"></i>
                                程式碼範例
                            </h3>

                            <h5 className="mt-4 mb-3">1. 建立 Slice (todosSlice.jsx)</h5>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload);
    },
    editTodo: (state, action) => {
      const todo = state.items.find(t => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;`}</code>
                            </pre>

                            <h5 className="mt-4 mb-3">2. 配置 Store (store.jsx)</h5>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slice/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});`}</code>
                            </pre>

                            <h5 className="mt-4 mb-3">3. 提供 Store (main.jsx)</h5>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);`}</code>
                            </pre>

                            <h5 className="mt-4 mb-3">4. 在元件中使用</h5>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, editTodo } from './slice/todosSlice';

function TodoList() {
  // 讀取狀態
  const todos = useSelector((state) => state.todos.items);
  
  // 取得 dispatch 函式
  const dispatch = useDispatch();
  
  // 新增 Todo
  const handleAdd = (text) => {
    dispatch(addTodo(text));
  };
  
  // 切換完成狀態
  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };
  
  // 刪除 Todo
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  
  // 編輯 Todo
  const handleEdit = (id, text) => {
    dispatch(editTodo({ id, text }));
  };
  
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => handleToggle(todo.id)}>完成</button>
          <button onClick={() => handleEdit(todo.id, '新文字')}>編輯</button>
          <button onClick={() => handleDelete(todo.id)}>刪除</button>
        </div>
      ))}
    </div>
  );
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* Redux 資料流程 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm bg-light">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-arrow-repeat me-2 text-info"></i>
                                Redux 資料流程
                            </h3>
                            <div className="text-center">
                                <div className="d-inline-flex flex-column align-items-center">
                                    <div className="alert alert-primary mb-3 w-100">
                                        <strong>1. UI 元件</strong><br />
                                        使用者觸發事件
                                    </div>
                                    <i className="bi bi-arrow-down fs-3 text-primary mb-3"></i>
                                    <div className="alert alert-success mb-3 w-100">
                                        <strong>2. dispatch(action)</strong><br />
                                        發送 Action
                                    </div>
                                    <i className="bi bi-arrow-down fs-3 text-success mb-3"></i>
                                    <div className="alert alert-warning mb-3 w-100">
                                        <strong>3. Reducer</strong><br />
                                        根據 Action 更新 State
                                    </div>
                                    <i className="bi bi-arrow-down fs-3 text-warning mb-3"></i>
                                    <div className="alert alert-info mb-3 w-100">
                                        <strong>4. Store</strong><br />
                                        儲存新的 State
                                    </div>
                                    <i className="bi bi-arrow-down fs-3 text-info mb-3"></i>
                                    <div className="alert alert-secondary mb-0 w-100">
                                        <strong>5. UI 更新</strong><br />
                                        React 重新渲染
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 最佳實踐 */}
            <div className="row">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
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
                                            <strong>使用 Redux Toolkit:</strong> 簡化 Redux 配置與使用
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>模組化 Slice:</strong> 依功能分割不同的 Slice
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>避免過度使用:</strong> 不是所有狀態都需要放 Redux
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 直接修改 state，使用 Immer 已內建在 RTK
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 訊息通知元件 */}
            <MessageToast />
        </div>
    );
}

