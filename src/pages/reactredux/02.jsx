import { useSelector, useDispatch } from 'react-redux';
import { addMessage, markAsRead, markAllAsRead, deleteMessage, clearAllMessages, createAsyncMessage } from '../../slice/messageSlice';
import MessageToast from '../../components/MessageToast';
import { useState } from 'react';

export default function MessageSlicePage() {
    const { messages, unreadCount } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [messageType, setMessageType] = useState('info');
    const [timeout, setTimeoutVal] = useState(3000);


    // 自動添加 CSS 動畫 (已移至 MessageToast 元件)
    // const styleElement = document.createElement('style');


    const handleAddMessage = () => {
        if (inputValue.trim()) {
            dispatch(createAsyncMessage({
                text: inputValue,
                type: messageType,
                timeout: Number(timeout)
            }));
            setInputValue('');
        }
    };

    const getMessageIcon = (type) => {
        const icons = {
            success: 'check-circle-fill',
            info: 'info-circle-fill',
            warning: 'exclamation-triangle-fill',
            error: 'x-circle-fill',
            primary: 'flag-fill',
            secondary: 'gear-fill',
            light: 'sun-fill',
            dark: 'moon-fill'
        };
        return icons[type] || 'info-circle-fill';
    };

    const getMessageColor = (type) => {
        const colors = {
            success: 'success',
            info: 'info',
            warning: 'warning',
            error: 'danger',
            primary: 'primary',
            secondary: 'secondary',
            light: 'light',
            dark: 'dark'
        };
        return colors[type] || 'info';
    };

    return (
        <div className="container py-5">
            {/* 右上角訊息通知區 */}
            {/* 右上角訊息通知區 */}
            <MessageToast />

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
                        <i className="bi bi-envelope me-3"></i>
                        Redux Toolkit - Message Slice
                    </h1>
                    <p className="lead mb-0">多狀態管理與未讀計數功能 + 右上角彈出通知</p>
                </div>
            </div>

            {/* 功能說明 */}
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h2 className="h4 mb-4">
                                <i className="bi bi-info-circle me-2 text-primary"></i>
                                Message Slice 特色
                            </h2>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-list-check text-primary fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">多狀態管理</h5>
                                            <ul className="text-muted mb-0">
                                                <li>訊息列表 (messages)</li>
                                                <li>未讀計數 (unreadCount)</li>
                                                <li>訊息類型與時間戳記</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-success bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-gear text-success fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">進階功能</h5>
                                            <ul className="text-muted mb-0">
                                                <li>右上角彈出通知</li>
                                                <li>支援自動刪除 (Auto Delete)</li>
                                                <li>標記已讀/全部已讀</li>
                                                <li>自動計算未讀數量</li>
                                                <li>訊息類型分類與動畫</li>
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
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3 className="card-title mb-0">
                                    <i className="bi bi-chat-dots me-2 text-primary"></i>
                                    訊息中心
                                </h3>
                                <div>
                                    <span className="badge bg-danger fs-6 me-2">
                                        {unreadCount} 則未讀
                                    </span>
                                    {messages.length > 0 && (
                                        <>
                                            <button
                                                className="btn btn-sm btn-outline-primary me-2"
                                                onClick={() => dispatch(markAllAsRead())}
                                                disabled={unreadCount === 0}
                                            >
                                                <i className="bi bi-check-all me-1"></i>
                                                全部標記已讀
                                            </button>
                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => dispatch(clearAllMessages())}
                                            >
                                                <i className="bi bi-trash me-1"></i>
                                                清空全部
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* 新增訊息 */}
                            <div className="mb-4">
                                <label className="form-label fw-bold">新增訊息</label>
                                <div className="row g-2">
                                    <div className="col-md-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="請輸入訊息內容..."
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleAddMessage()}
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <select
                                            className="form-select"
                                            value={messageType}
                                            onChange={(e) => setMessageType(e.target.value)}
                                        >
                                            <option value="success">成功 (Success)</option>
                                            <option value="info">資訊 (Info)</option>
                                            <option value="warning">警告 (Warning)</option>
                                            <option value="error">錯誤 (Error)</option>
                                            <option value="primary">主要 (Primary)</option>
                                            <option value="secondary">次要 (Secondary)</option>
                                            <option value="light">亮色 (Light)</option>
                                            <option value="dark">暗色 (Dark)</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={timeout}
                                                onChange={(e) => setTimeoutVal(e.target.value)}
                                                placeholder="毫秒"
                                                title="自動刪除時間(ms)"
                                            />
                                            <span className="input-group-text small">ms</span>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button
                                            className="btn btn-primary w-100"
                                            onClick={handleAddMessage}
                                        >
                                            <i className="bi bi-plus-lg me-1"></i>
                                            新增
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* 訊息列表 */}
                            <div>
                                <label className="form-label fw-bold">
                                    訊息列表
                                    <span className="badge bg-secondary ms-2">{messages.length} 則</span>
                                </label>
                                {messages.length === 0 ? (
                                    <div className="alert alert-info">
                                        <i className="bi bi-inbox me-2"></i>
                                        目前沒有訊息
                                    </div>
                                ) : (
                                    <div className="list-group">
                                        {messages.map((message) => (
                                            <div
                                                key={message.id}
                                                className={`list-group-item ${!message.read ? 'list-group-item-action' : ''}`}
                                                style={{
                                                    opacity: message.read ? 0.6 : 1,
                                                    borderLeft: `4px solid var(--bs-${getMessageColor(message.type)})`
                                                }}
                                            >
                                                <div className="d-flex w-100 justify-content-between align-items-start">
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <i className={`bi bi-${getMessageIcon(message.type)} text-${getMessageColor(message.type)} me-2`}></i>
                                                            <h6 className="mb-0">
                                                                {message.text}
                                                                {!message.read && (
                                                                    <span className="badge bg-danger ms-2">NEW</span>
                                                                )}
                                                            </h6>
                                                        </div>
                                                        <small className="text-muted">
                                                            <i className="bi bi-clock me-1"></i>
                                                            {new Date(message.timestamp).toLocaleString('zh-TW')}
                                                        </small>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        {!message.read && (
                                                            <button
                                                                className="btn btn-sm btn-outline-success"
                                                                onClick={() => dispatch(markAsRead(message.id))}
                                                                title="標記為已讀"
                                                            >
                                                                <i className="bi bi-check"></i>
                                                            </button>
                                                        )}
                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() => dispatch(deleteMessage(message.id))}
                                                            title="刪除"
                                                        >
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* 統計資訊 */}
                            {messages.length > 0 && (
                                <div className="row g-3 mt-3">
                                    <div className="col-md-3">
                                        <div className="card bg-primary bg-opacity-10">
                                            <div className="card-body text-center">
                                                <h6 className="text-muted">總訊息數</h6>
                                                <h3 className="mb-0 text-primary">{messages.length}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card bg-danger bg-opacity-10">
                                            <div className="card-body text-center">
                                                <h6 className="text-muted">未讀</h6>
                                                <h3 className="mb-0 text-danger">{unreadCount}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card bg-success bg-opacity-10">
                                            <div className="card-body text-center">
                                                <h6 className="text-muted">已讀</h6>
                                                <h3 className="mb-0 text-success">
                                                    {messages.filter(m => m.read).length}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card bg-info bg-opacity-10">
                                            <div className="card-body text-center">
                                                <h6 className="text-muted">已讀率</h6>
                                                <h3 className="mb-0 text-info">
                                                    {Math.round((messages.filter(m => m.read).length / messages.length) * 100)}%
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

                            <h5 className="mt-4 mb-3">1. 建立 Message Slice (messageSlice.jsx)</h5>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messages: [],
    unreadCount: 0
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        text: action.payload.text,
        type: action.payload.type || 'info',
        read: false,
        timestamp: new Date().toISOString()
      });
      state.unreadCount += 1;
    },
    markAsRead: (state, action) => {
      const message = state.messages.find(m => m.id === action.payload);
      if (message && !message.read) {
        message.read = true;
        state.unreadCount = Math.max(0, state.unreadCount - 1);
      }
    },
    markAllAsRead: (state) => {
      state.messages.forEach(message => {
        message.read = true;
      });
      state.unreadCount = 0;
    },
    deleteMessage: (state, action) => {
      const message = state.messages.find(m => m.id === action.payload);
      if (message && !message.read) {
        state.unreadCount = Math.max(0, state.unreadCount - 1);
      }
      state.messages = state.messages.filter(m => m.id !== action.payload);
    },
    clearAllMessages: (state) => {
      state.messages = [];
      state.unreadCount = 0;
    }
  }
});

export const { 
  addMessage, 
  markAsRead, 
  markAllAsRead, 
  deleteMessage, 
  clearAllMessages 
} = messageSlice.actions;

export const createAsyncMessage = (payload) => (dispatch) => {
  const id = Date.now();
  const timeout = payload.timeout || 3000;

  dispatch(addMessage({
    ...payload,
    id
  }));

  setTimeout(() => {
    dispatch(deleteMessage(id));
  }, timeout);
};

export default messageSlice.reducer;`}</code>
                            </pre>

                            <h5 className="mt-4 mb-3">2. 更新 Store (store.jsx)</h5>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slice/todosSlice';
import messageReducer from './slice/messageSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    message: messageReducer, // 新增 message reducer
  },
});`}</code>
                            </pre>

                            <h5 className="mt-4 mb-3">3. 在元件中使用</h5>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`import { useSelector, useDispatch } from 'react-redux';
import { 
  addMessage, 
  markAsRead, 
  markAllAsRead, 
  deleteMessage 
} from './slice/messageSlice';

function MessageCenter() {
  // 讀取狀態（解構多個狀態）
  const { messages, unreadCount } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  
  // 新增訊息 (使用 Async Thunk 自動刪除)
  const handleAdd = (text, type) => {
    dispatch(createAsyncMessage({ text, type }));
  };
  
  // 標記已讀
  const handleRead = (id) => {
    dispatch(markAsRead(id));
  };
  
  // 全部已讀
  const handleReadAll = () => {
    dispatch(markAllAsRead());
  };
  
  return (
    <div>
      <span>未讀: {unreadCount}</span>
      {messages.map(msg => (
        <div key={msg.id}>
          <span>{msg.text}</span>
          {!msg.read && (
            <button onClick={() => handleRead(msg.id)}>
              標記已讀
            </button>
          )}
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

            {/* 重點說明 */}
            <div className="row">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-lightbulb me-2 text-warning"></i>
                                重點說明
                            </h3>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="card h-100 border-primary">
                                        <div className="card-header bg-primary text-white">
                                            <i className="bi bi-database me-2"></i>
                                            多狀態管理
                                        </div>
                                        <div className="card-body">
                                            <ul className="mb-0">
                                                <li>一個 Slice 可以管理多個相關狀態</li>
                                                <li>使用物件解構取得多個狀態值</li>
                                                <li>保持狀態之間的同步更新</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 border-success">
                                        <div className="card-header bg-success text-white">
                                            <i className="bi bi-arrow-repeat me-2"></i>
                                            自動計算
                                        </div>
                                        <div className="card-body">
                                            <ul className="mb-0">
                                                <li>unreadCount 自動同步更新</li>
                                                <li>使用 Math.max() 避免負數</li>
                                                <li>reducer 內直接操作多個狀態</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 border-warning">
                                        <div className="card-header bg-warning">
                                            <i className="bi bi-box-seam me-2"></i>
                                            資料結構
                                        </div>
                                        <div className="card-body">
                                            <ul className="mb-0">
                                                <li>每則訊息包含 id, text, type, read, timestamp</li>
                                                <li>type 用於分類（success/info/warning/error）</li>
                                                <li>timestamp 記錄建立時間</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 border-info">
                                        <div className="card-header bg-info text-white">
                                            <i className="bi bi-cpu me-2"></i>
                                            Reducer 邏輯
                                        </div>
                                        <div className="card-body">
                                            <ul className="mb-0">
                                                <li>markAsRead: 檢查未讀才減少計數</li>
                                                <li>deleteMessage: 刪除時同步更新計數</li>
                                                <li>clearAllMessages: 重置所有狀態</li>
                                            </ul>
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
}
