import{k as p,i as v,r as o,j as e,q as f,s as n,t as w,v as y,w as T}from"./index-BgoDCxlK.js";import{M as S}from"./MessageToast-CiXYpoMs.js";function C(){const i=p(s=>s.todos.items),t=v(),[c,m]=o.useState(""),[x,d]=o.useState(null),[r,l]=o.useState(""),h=()=>{c.trim()&&(t(f(c)),t(n({text:"新增成功",type:"success",timeout:3e3})),m(""))},b=s=>{t(w(s))},N=s=>{t(y(s)),t(n({text:"刪除成功",type:"error",timeout:3e3}))},u=(s,a)=>{d(s),l(a)},j=s=>{r.trim()&&(t(T({id:s,text:r})),t(n({text:"編輯已儲存",type:"info",timeout:3e3})),d(null),l(""))},g=()=>{d(null),l("")};return e.jsxs("div",{className:"container py-5",children:[e.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[e.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[e.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[e.jsx("i",{className:"bi bi-box-seam me-3"}),"Redux Toolkit - Todo List"]}),e.jsx("p",{className:"lead mb-0",children:"了解 Redux 的核心概念與基本使用方式"})]}),e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("h2",{className:"h4 mb-4",children:[e.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"什麼是 Redux?"]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-diagram-3 text-primary fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"核心概念"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Store"}),": 全域狀態儲存中心"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"State"}),": 應用程式的狀態資料"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Action"}),": 描述發生什麼事的物件"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reducer"}),": 根據 Action 更新 State"]})]})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-success bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-check2-circle text-success fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"主要優勢"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsx("li",{children:"跨元件共用狀態"}),e.jsx("li",{children:"可預測的狀態管理"}),e.jsx("li",{children:"強大的開發工具支援"}),e.jsx("li",{children:"時間旅行除錯功能"})]})]})]})})]})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-4",children:[e.jsx("i",{className:"bi bi-code-square me-2 text-primary"}),"Todo List 範例"]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"form-label fw-bold",children:"新增待辦事項"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",className:"form-control",placeholder:"請輸入待辦事項...",value:c,onChange:s=>m(s.target.value),onKeyPress:s=>s.key==="Enter"&&h()}),e.jsxs("button",{className:"btn btn-primary",onClick:h,children:[e.jsx("i",{className:"bi bi-plus-lg me-2"}),"新增"]})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{className:"form-label fw-bold",children:["待辦清單",e.jsxs("span",{className:"badge bg-primary ms-2",children:[i.length," 項"]})]}),i.length===0?e.jsxs("div",{className:"alert alert-info",children:[e.jsx("i",{className:"bi bi-info-circle me-2"}),"目前沒有待辦事項"]}):e.jsx("ul",{className:"list-group",children:i.map(s=>e.jsxs("li",{className:"list-group-item d-flex align-items-center",children:[e.jsx("input",{type:"checkbox",className:"form-check-input me-3",checked:s.completed,onChange:()=>b(s.id),disabled:x===s.id}),x===s.id?e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",className:"form-control form-control-sm me-2",value:r,onChange:a=>l(a.target.value),onKeyPress:a=>a.key==="Enter"&&j(s.id),autoFocus:!0}),e.jsx("button",{className:"btn btn-sm btn-success me-2",onClick:()=>j(s.id),children:e.jsx("i",{className:"bi bi-check-lg"})}),e.jsx("button",{className:"btn btn-sm btn-secondary",onClick:g,children:e.jsx("i",{className:"bi bi-x-lg"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{textDecoration:s.completed?"line-through":"none",color:s.completed?"#6c757d":"#212529",flex:1},children:s.text}),e.jsx("button",{className:"btn btn-sm btn-primary me-2",onClick:()=>u(s.id,s.text),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{className:"btn btn-sm btn-danger",onClick:()=>N(s.id),children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id))})]}),i.length>0&&e.jsxs("div",{className:"row g-3 mt-3",children:[e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"card bg-light",children:e.jsxs("div",{className:"card-body text-center",children:[e.jsx("h6",{className:"text-muted",children:"總數"}),e.jsx("h3",{className:"mb-0",children:i.length})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"card bg-success bg-opacity-10",children:e.jsxs("div",{className:"card-body text-center",children:[e.jsx("h6",{className:"text-muted",children:"已完成"}),e.jsx("h3",{className:"mb-0 text-success",children:i.filter(s=>s.completed).length})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"card bg-warning bg-opacity-10",children:e.jsxs("div",{className:"card-body text-center",children:[e.jsx("h6",{className:"text-muted",children:"待完成"}),e.jsx("h3",{className:"mb-0 text-warning",children:i.filter(s=>!s.completed).length})]})})})]})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-3",children:[e.jsx("i",{className:"bi bi-code-slash me-2 text-success"}),"程式碼範例"]}),e.jsx("h5",{className:"mt-4 mb-3",children:"1. 建立 Slice (todosSlice.jsx)"}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:e.jsx("code",{children:`import { createSlice } from '@reduxjs/toolkit';

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
export default todosSlice.reducer;`})}),e.jsx("h5",{className:"mt-4 mb-3",children:"2. 配置 Store (store.jsx)"}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:e.jsx("code",{children:`import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slice/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});`})}),e.jsx("h5",{className:"mt-4 mb-3",children:"3. 提供 Store (main.jsx)"}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:e.jsx("code",{children:`import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);`})}),e.jsx("h5",{className:"mt-4 mb-3",children:"4. 在元件中使用"}),e.jsx("pre",{className:"bg-light p-4 rounded-3 overflow-auto",children:e.jsx("code",{children:`import { useSelector, useDispatch } from 'react-redux';
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
}`})})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm bg-light",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-4",children:[e.jsx("i",{className:"bi bi-arrow-repeat me-2 text-info"}),"Redux 資料流程"]}),e.jsx("div",{className:"text-center",children:e.jsxs("div",{className:"d-inline-flex flex-column align-items-center",children:[e.jsxs("div",{className:"alert alert-primary mb-3 w-100",children:[e.jsx("strong",{children:"1. UI 元件"}),e.jsx("br",{}),"使用者觸發事件"]}),e.jsx("i",{className:"bi bi-arrow-down fs-3 text-primary mb-3"}),e.jsxs("div",{className:"alert alert-success mb-3 w-100",children:[e.jsx("strong",{children:"2. dispatch(action)"}),e.jsx("br",{}),"發送 Action"]}),e.jsx("i",{className:"bi bi-arrow-down fs-3 text-success mb-3"}),e.jsxs("div",{className:"alert alert-warning mb-3 w-100",children:[e.jsx("strong",{children:"3. Reducer"}),e.jsx("br",{}),"根據 Action 更新 State"]}),e.jsx("i",{className:"bi bi-arrow-down fs-3 text-warning mb-3"}),e.jsxs("div",{className:"alert alert-info mb-3 w-100",children:[e.jsx("strong",{children:"4. Store"}),e.jsx("br",{}),"儲存新的 State"]}),e.jsx("i",{className:"bi bi-arrow-down fs-3 text-info mb-3"}),e.jsxs("div",{className:"alert alert-secondary mb-0 w-100",children:[e.jsx("strong",{children:"5. UI 更新"}),e.jsx("br",{}),"React 重新渲染"]})]})})]})})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-3",children:[e.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"使用 Redux Toolkit:"})," 簡化 Redux 配置與使用"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"模組化 Slice:"})," 依功能分割不同的 Slice"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"避免過度使用:"})," 不是所有狀態都需要放 Redux"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"避免:"})," 直接修改 state，使用 Immer 已內建在 RTK"]})]})})]})]})})})}),e.jsx(S,{})]})}export{C as default};
