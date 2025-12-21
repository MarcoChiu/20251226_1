import{k as u,i as g,r as d,j as e,y as N,z as p,A as v,x as f,s as y}from"./index-D_x0jVGn.js";import{M as w}from"./MessageToast-Bl9XEF70.js";function S(){const{messages:a,unreadCount:i}=u(s=>s.message),l=g(),[c,r]=d.useState(""),[t,x]=d.useState("info"),[n,h]=d.useState(3e3),m=()=>{c.trim()&&(l(y({text:c,type:t,timeout:Number(n)})),r(""))},j=s=>({success:"check-circle-fill",info:"info-circle-fill",warning:"exclamation-triangle-fill",error:"x-circle-fill",primary:"flag-fill",secondary:"gear-fill",light:"sun-fill",dark:"moon-fill"})[s]||"info-circle-fill",o=s=>({success:"success",info:"info",warning:"warning",error:"danger",primary:"primary",secondary:"secondary",light:"light",dark:"dark"})[s]||"info";return e.jsxs("div",{className:"container py-5",children:[e.jsx(w,{}),e.jsx("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:e.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[e.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[e.jsx("i",{className:"bi bi-envelope me-3"}),"Redux Toolkit - Message Slice"]}),e.jsx("p",{className:"lead mb-0",children:"多狀態管理與未讀計數功能 + 右上角彈出通知"})]})}),e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("h2",{className:"h4 mb-4",children:[e.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"Message Slice 特色"]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-list-check text-primary fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"多狀態管理"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsx("li",{children:"訊息列表 (messages)"}),e.jsx("li",{children:"未讀計數 (unreadCount)"}),e.jsx("li",{children:"訊息類型與時間戳記"})]})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-success bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-gear text-success fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"進階功能"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsx("li",{children:"右上角彈出通知"}),e.jsx("li",{children:"支援自動刪除 (Auto Delete)"}),e.jsx("li",{children:"標記已讀/全部已讀"}),e.jsx("li",{children:"自動計算未讀數量"}),e.jsx("li",{children:"訊息類型分類與動畫"})]})]})]})})]})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[e.jsxs("h3",{className:"card-title mb-0",children:[e.jsx("i",{className:"bi bi-chat-dots me-2 text-primary"}),"訊息中心"]}),e.jsxs("div",{children:[e.jsxs("span",{className:"badge bg-danger fs-6 me-2",children:[i," 則未讀"]}),a.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"btn btn-sm btn-outline-primary me-2",onClick:()=>l(N()),disabled:i===0,children:[e.jsx("i",{className:"bi bi-check-all me-1"}),"全部標記已讀"]}),e.jsxs("button",{className:"btn btn-sm btn-outline-danger",onClick:()=>l(p()),children:[e.jsx("i",{className:"bi bi-trash me-1"}),"清空全部"]})]})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"form-label fw-bold",children:"新增訊息"}),e.jsxs("div",{className:"row g-2",children:[e.jsx("div",{className:"col-md-8",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"請輸入訊息內容...",value:c,onChange:s=>r(s.target.value),onKeyPress:s=>s.key==="Enter"&&m()})}),e.jsx("div",{className:"col-md-2",children:e.jsxs("select",{className:"form-select",value:t,onChange:s=>x(s.target.value),children:[e.jsx("option",{value:"success",children:"成功 (Success)"}),e.jsx("option",{value:"info",children:"資訊 (Info)"}),e.jsx("option",{value:"warning",children:"警告 (Warning)"}),e.jsx("option",{value:"error",children:"錯誤 (Error)"}),e.jsx("option",{value:"primary",children:"主要 (Primary)"}),e.jsx("option",{value:"secondary",children:"次要 (Secondary)"}),e.jsx("option",{value:"light",children:"亮色 (Light)"}),e.jsx("option",{value:"dark",children:"暗色 (Dark)"})]})}),e.jsx("div",{className:"col-md-2",children:e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",className:"form-control",value:n,onChange:s=>h(s.target.value),placeholder:"毫秒",title:"自動刪除時間(ms)"}),e.jsx("span",{className:"input-group-text small",children:"ms"})]})}),e.jsx("div",{className:"col-md-2",children:e.jsxs("button",{className:"btn btn-primary w-100",onClick:m,children:[e.jsx("i",{className:"bi bi-plus-lg me-1"}),"新增"]})})]})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label fw-bold",children:["訊息列表",e.jsxs("span",{className:"badge bg-secondary ms-2",children:[a.length," 則"]})]}),a.length===0?e.jsxs("div",{className:"alert alert-info",children:[e.jsx("i",{className:"bi bi-inbox me-2"}),"目前沒有訊息"]}):e.jsx("div",{className:"list-group",children:a.map(s=>e.jsx("div",{className:`list-group-item ${s.read?"":"list-group-item-action"}`,style:{opacity:s.read?.6:1,borderLeft:`4px solid var(--bs-${o(s.type)})`},children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsxs("div",{className:"flex-grow-1",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("i",{className:`bi bi-${j(s.type)} text-${o(s.type)} me-2`}),e.jsxs("h6",{className:"mb-0",children:[s.text,!s.read&&e.jsx("span",{className:"badge bg-danger ms-2",children:"NEW"})]})]}),e.jsxs("small",{className:"text-muted",children:[e.jsx("i",{className:"bi bi-clock me-1"}),new Date(s.timestamp).toLocaleString("zh-TW")]})]}),e.jsxs("div",{className:"d-flex gap-2",children:[!s.read&&e.jsx("button",{className:"btn btn-sm btn-outline-success",onClick:()=>l(v(s.id)),title:"標記為已讀",children:e.jsx("i",{className:"bi bi-check"})}),e.jsx("button",{className:"btn btn-sm btn-outline-danger",onClick:()=>l(f(s.id)),title:"刪除",children:e.jsx("i",{className:"bi bi-trash"})})]})]})},s.id))})]}),a.length>0&&e.jsxs("div",{className:"row g-3 mt-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsx("div",{className:"card bg-primary bg-opacity-10",children:e.jsxs("div",{className:"card-body text-center",children:[e.jsx("h6",{className:"text-muted",children:"總訊息數"}),e.jsx("h3",{className:"mb-0 text-primary",children:a.length})]})})}),e.jsx("div",{className:"col-md-3",children:e.jsx("div",{className:"card bg-danger bg-opacity-10",children:e.jsxs("div",{className:"card-body text-center",children:[e.jsx("h6",{className:"text-muted",children:"未讀"}),e.jsx("h3",{className:"mb-0 text-danger",children:i})]})})}),e.jsx("div",{className:"col-md-3",children:e.jsx("div",{className:"card bg-success bg-opacity-10",children:e.jsxs("div",{className:"card-body text-center",children:[e.jsx("h6",{className:"text-muted",children:"已讀"}),e.jsx("h3",{className:"mb-0 text-success",children:a.filter(s=>s.read).length})]})})}),e.jsx("div",{className:"col-md-3",children:e.jsx("div",{className:"card bg-info bg-opacity-10",children:e.jsxs("div",{className:"card-body text-center",children:[e.jsx("h6",{className:"text-muted",children:"已讀率"}),e.jsxs("h3",{className:"mb-0 text-info",children:[Math.round(a.filter(s=>s.read).length/a.length*100),"%"]})]})})})]})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-3",children:[e.jsx("i",{className:"bi bi-code-slash me-2 text-success"}),"程式碼範例"]}),e.jsx("h5",{className:"mt-4 mb-3",children:"1. 建立 Message Slice (messageSlice.jsx)"}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:e.jsx("code",{children:`import { createSlice } from '@reduxjs/toolkit';

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

export default messageSlice.reducer;`})}),e.jsx("h5",{className:"mt-4 mb-3",children:"2. 更新 Store (store.jsx)"}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:e.jsx("code",{children:`import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slice/todosSlice';
import messageReducer from './slice/messageSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    message: messageReducer, // 新增 message reducer
  },
});`})}),e.jsx("h5",{className:"mt-4 mb-3",children:"3. 在元件中使用"}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:e.jsx("code",{children:`import { useSelector, useDispatch } from 'react-redux';
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
}`})})]})})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-3",children:[e.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"重點說明"]}),e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"card h-100 border-primary",children:[e.jsxs("div",{className:"card-header bg-primary text-white",children:[e.jsx("i",{className:"bi bi-database me-2"}),"多狀態管理"]}),e.jsx("div",{className:"card-body",children:e.jsxs("ul",{className:"mb-0",children:[e.jsx("li",{children:"一個 Slice 可以管理多個相關狀態"}),e.jsx("li",{children:"使用物件解構取得多個狀態值"}),e.jsx("li",{children:"保持狀態之間的同步更新"})]})})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"card h-100 border-success",children:[e.jsxs("div",{className:"card-header bg-success text-white",children:[e.jsx("i",{className:"bi bi-arrow-repeat me-2"}),"自動計算"]}),e.jsx("div",{className:"card-body",children:e.jsxs("ul",{className:"mb-0",children:[e.jsx("li",{children:"unreadCount 自動同步更新"}),e.jsx("li",{children:"使用 Math.max() 避免負數"}),e.jsx("li",{children:"reducer 內直接操作多個狀態"})]})})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"card h-100 border-warning",children:[e.jsxs("div",{className:"card-header bg-warning",children:[e.jsx("i",{className:"bi bi-box-seam me-2"}),"資料結構"]}),e.jsx("div",{className:"card-body",children:e.jsxs("ul",{className:"mb-0",children:[e.jsx("li",{children:"每則訊息包含 id, text, type, read, timestamp"}),e.jsx("li",{children:"type 用於分類（success/info/warning/error）"}),e.jsx("li",{children:"timestamp 記錄建立時間"})]})})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"card h-100 border-info",children:[e.jsxs("div",{className:"card-header bg-info text-white",children:[e.jsx("i",{className:"bi bi-cpu me-2"}),"Reducer 邏輯"]}),e.jsx("div",{className:"card-body",children:e.jsxs("ul",{className:"mb-0",children:[e.jsx("li",{children:"markAsRead: 檢查未讀才減少計數"}),e.jsx("li",{children:"deleteMessage: 刪除時同步更新計數"}),e.jsx("li",{children:"clearAllMessages: 重置所有狀態"})]})})]})})]})]})})})})]})}export{S as default};
