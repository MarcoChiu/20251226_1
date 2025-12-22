import{r as i,j as e}from"./index-BgoDCxlK.js";const b=({name:s,count:a})=>(console.log(`🔴 NormalChild 重新渲染 - ${s}`),e.jsx("div",{className:"card mb-3",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h6",{className:"card-subtitle mb-2 text-danger",children:"🔴 普通元件 (未使用 memo)"}),e.jsxs("p",{className:"card-text mb-0",children:["名稱: ",s]}),e.jsxs("p",{className:"card-text mb-0",children:["計數: ",a]})]})})),N=i.memo(({name:s,count:a})=>(console.log(`🟢 MemoizedChild 重新渲染 - ${s}`),e.jsx("div",{className:"card mb-3",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h6",{className:"card-subtitle mb-2 text-success",children:"🟢 Memo 元件 (使用 memo)"}),e.jsxs("p",{className:"card-text mb-0",children:["名稱: ",s]}),e.jsxs("p",{className:"card-text mb-0",children:["計數: ",a]})]})}))),u=i.memo(({user:s})=>(console.log(`🟡 CustomMemoChild 重新渲染 - ${s.name}`),e.jsx("div",{className:"card mb-3",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h6",{className:"card-subtitle mb-2 text-warning",children:"🟡 自訂比較 Memo (只比較 user.id)"}),e.jsxs("p",{className:"card-text mb-0",children:["ID: ",s.id]}),e.jsxs("p",{className:"card-text mb-0",children:["名稱: ",s.name]}),e.jsxs("p",{className:"card-text mb-0",children:["年齡: ",s.age]})]})})),(s,a)=>s.user.id===a.user.id),p=i.memo(({data:s,onUpdate:a})=>{console.log("💎 ExpensiveComponent 重新渲染");const d=s.map(c=>({...c,processed:!0,timestamp:new Date().toLocaleTimeString()}));return e.jsx("div",{className:"card mb-3",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h6",{className:"card-subtitle mb-2 text-info",children:"💎 複雜元件 (處理陣列資料)"}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-sm table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"名稱"}),e.jsx("th",{children:"處理時間"})]})}),e.jsx("tbody",{children:d.map(c=>e.jsxs("tr",{children:[e.jsx("td",{children:c.id}),e.jsx("td",{children:c.name}),e.jsx("td",{children:e.jsx("small",{children:c.timestamp})})]},c.id))})]})}),e.jsx("button",{className:"btn btn-sm btn-info",onClick:a,children:"更新資料"})]})})});function g(){const[s,a]=i.useState(0),[d,c]=i.useState(0),[r,n]=i.useState("張三"),[t,m]=i.useState(25),[o,h]=i.useState([{id:1,name:"項目 A"},{id:2,name:"項目 B"},{id:3,name:"項目 C"}]),x={id:1,name:r,age:t},j=()=>{h(l=>[...l,{id:l.length+1,name:`項目 ${String.fromCharCode(65+l.length)}`}])};return e.jsxs("div",{className:"container mt-4",children:[e.jsxs("div",{className:"text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)"},children:[e.jsxs("div",{className:"position-relative",style:{zIndex:1},children:[e.jsxs("h1",{className:"display-4 fw-bold mb-3",children:[e.jsx("i",{className:"bi bi-lightning-charge me-3"}),"React.memo"]}),e.jsx("p",{className:"lead mb-0",children:"元件重渲染優化與性能提升"})]}),e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",zIndex:0}})]}),e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("h2",{className:"h4 mb-4",children:[e.jsx("i",{className:"bi bi-info-circle me-2 text-primary"}),"功能說明"]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-primary bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-check2-circle text-primary fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"Memo 特性"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsx("li",{children:"Props 比較機制"}),e.jsx("li",{children:"減少重渲染"}),e.jsx("li",{children:"自訂比較函式"}),e.jsx("li",{children:"性能優化"})]})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-success bg-opacity-10 rounded-circle p-3",children:e.jsx("i",{className:"bi bi-speedometer text-success fs-4"})})}),e.jsxs("div",{className:"flex-grow-1 ms-3",children:[e.jsx("h5",{className:"mb-2",children:"應用場景"}),e.jsxs("ul",{className:"text-muted mb-0",children:[e.jsx("li",{children:"昆貴運算元件"}),e.jsx("li",{children:"大量列表渲染"}),e.jsx("li",{children:"複雜狀態管理"}),e.jsx("li",{children:"第三方元件包裝"})]})]})]})})]})]})})})}),e.jsx("div",{className:"card shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"card-title mb-4",children:"📝 React.memo - 效能優化範例"}),e.jsxs("div",{className:"alert alert-primary mb-4",children:[e.jsx("h5",{className:"alert-heading",children:"💡 React.memo 說明"}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"用途："}),"避免子元件不必要的重新渲染，提升效能"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"原理："}),"透過淺層比較 props，只有 props 改變時才重新渲染"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"語法："}),e.jsx("code",{children:"const MemoComponent = memo(Component)"})]}),e.jsxs("p",{className:"mb-0",children:[e.jsx("strong",{children:"觀察方式："}),"打開 Console 查看各元件的渲染次數"]})]}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-md-12",children:e.jsx("div",{className:"card bg-light",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h5",{className:"card-title",children:"🎛️ 控制面板"}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"父元件計數器 (不影響子元件 props)"}),e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("button",{className:"btn btn-primary",onClick:()=>a(l=>l+1),children:"父計數 +1"}),e.jsx("span",{className:"badge bg-primary fs-5",children:s})]}),e.jsx("small",{className:"text-muted",children:"⚠️ 點擊後，NormalChild 會重新渲染，MemoizedChild 不會"})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"子元件計數器 (會改變子元件 props)"}),e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("button",{className:"btn btn-success",onClick:()=>c(l=>l+1),children:"子計數 +1"}),e.jsx("span",{className:"badge bg-success fs-5",children:d})]}),e.jsx("small",{className:"text-muted",children:"✅ 點擊後，所有子元件都會重新渲染（因為 props 改變）"})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"使用者名稱"}),e.jsx("input",{type:"text",className:"form-control",value:r,onChange:l=>n(l.target.value)}),e.jsx("small",{className:"text-muted",children:"⚠️ 修改後，CustomMemoChild 不會重新渲染（只比較 id）"})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"使用者年齡"}),e.jsx("input",{type:"number",className:"form-control",value:t,onChange:l=>m(Number(l.target.value))}),e.jsx("small",{className:"text-muted",children:"⚠️ 修改後，CustomMemoChild 不會重新渲染（只比較 id）"})]})]})]})})})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("h5",{children:"🔴 未使用 memo 的元件"}),e.jsx(b,{name:"普通元件",count:d}),e.jsx("div",{className:"alert alert-danger",children:e.jsxs("small",{children:[e.jsx("strong",{children:"行為："}),"每次父元件重新渲染時，此元件都會重新渲染， 即使 props 沒有改變。點擊「父計數 +1」觀察 Console。"]})})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("h5",{children:"🟢 使用 memo 的元件"}),e.jsx(N,{name:"Memo 元件",count:d}),e.jsx("div",{className:"alert alert-success",children:e.jsxs("small",{children:[e.jsx("strong",{children:"行為："}),"只有當 props (name 或 count) 改變時才重新渲染。 點擊「父計數 +1」時不會重新渲染。"]})})]}),e.jsxs("div",{className:"col-md-12 mt-3",children:[e.jsx("h5",{children:"🟡 使用自訂比較函式的 memo"}),e.jsx(u,{user:x}),e.jsx("div",{className:"alert alert-warning",children:e.jsxs("small",{children:[e.jsx("strong",{children:"行為："}),"使用自訂比較函式，只比較 user.id。 即使修改名稱或年齡，元件也不會重新渲染（因為 id 沒變）。 這在某些場景下很有用，但要小心使用，避免顯示過時資料。"]})})]}),e.jsxs("div",{className:"col-md-12 mt-3",children:[e.jsx("h5",{children:"💎 處理複雜資料的 memo 元件"}),e.jsx(p,{data:o,onUpdate:j}),e.jsx("div",{className:"alert alert-info",children:e.jsxs("small",{children:[e.jsx("strong",{children:"行為："}),"即使使用了 memo，如果傳入的 data 陣列或 onUpdate 函式 是每次都重新建立的（不同的參照），元件仍會重新渲染。 需要搭配 useMemo 和 useCallback 來優化。"]})})]})]}),e.jsxs("div",{className:"alert alert-secondary mt-4",children:[e.jsx("h5",{className:"alert-heading",children:"🎯 使用建議"}),e.jsxs("ul",{className:"mb-0",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"適合使用："}),"渲染成本高的元件、props 很少改變的元件、純展示型元件"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"不適合："}),"props 經常改變的元件、簡單快速的元件（memo 本身也有成本）"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"注意事項："}),"memo 只做淺層比較，對於物件、陣列、函式等參照型別要特別注意"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"搭配使用："}),"通常需要配合 useMemo 和 useCallback 才能發揮最大效果"]})]})]}),e.jsx("div",{className:"card bg-dark text-white mt-4",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h6",{className:"card-subtitle mb-3",children:"📊 渲染統計"}),e.jsxs("p",{className:"mb-1",children:["父元件計數: ",s]}),e.jsxs("p",{className:"mb-1",children:["子元件計數: ",d]}),e.jsx("p",{className:"mb-0",children:e.jsx("small",{className:"text-muted",children:"打開瀏覽器 Console (F12) 查看各元件的渲染記錄"})})]})})]})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-4",children:[e.jsx("i",{className:"bi bi-code-slash me-2 text-primary"}),"程式碼範例"]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"1. React.memo 基本用法"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`import { memo } from 'react';

// 一般元件（每次父元件渲染都會重新渲染）
const NormalChild = ({ name }) => {
  console.log('NormalChild rendered');
  return <div>{name}</div>;
};

// 使用 memo 優化（props 不變時不會重新渲染）
const MemoizedChild = memo(({ name }) => {
  console.log('MemoizedChild rendered');
  return <div>{name}</div>;
});

// 使用
function Parent() {
  const [count, setCount] = useState(0);
  const name = 'Tom';

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>計數 +1</button>
      <NormalChild name={name} /> {/* 每次都重渲染 */}
      <MemoizedChild name={name} /> {/* props 沒變不會重渲染 */}
    </div>
  );
}`})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"2. 自訂比較函式"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`const User = memo(
  ({ user }) => {
    return <div>{user.name} - {user.age}</div>;
  },
  // 自訂比較函式（返回 true 表示不重新渲染）
  (prevProps, nextProps) => {
    // 只比較 user.id，其他欄位改變也不重渲染
    return prevProps.user.id === nextProps.user.id;
  }
);

// 預設行為：淺層比較所有 props
const DefaultMemo = memo(({ data }) => {
  return <div>{data.value}</div>;
});

// 相當於
(prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
}`})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"3. 搭配 useCallback"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`import { memo, useCallback, useState } from 'react';

const Button = memo(({ onClick, label }) => {
  console.log(\`Button "\${label}" rendered\`);
  return <button onClick={onClick}>{label}</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // ❌ 每次渲染都創建新函式，memo 失效
  const handleClick1 = () => {
    console.log('Clicked');
  };

  // ✅ 使用 useCallback 保持函式引用
  const handleClick2 = useCallback(() => {
    console.log('Clicked');
  }, []);

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <Button onClick={handleClick1} label="普通" /> {/* 每次都重渲染 */}
      <Button onClick={handleClick2} label="優化" /> {/* 只渲染一次 */}
    </div>
  );
}`})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"4. 物件 Props 的陷阱"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`const Card = memo(({ style, data }) => {
  return <div style={style}>{data.name}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);

  // ❌ 每次渲染都創建新物件，memo 失效
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Card 
        style={{ color: 'red' }} // 新物件！
        data={{ name: 'Tom' }}   // 新物件！
      />
    </div>
  );
}

// ✅ 解決方案 1：提升常數到元件外
const cardStyle = { color: 'red' };
const cardData = { name: 'Tom' };

function Parent() {
  return <Card style={cardStyle} data={cardData} />;
}

// ✅ 解決方案 2：使用 useMemo
function Parent() {
  const style = useMemo(() => ({ color: 'red' }), []);
  const data = useMemo(() => ({ name: 'Tom' }), []);
  
  return <Card style={style} data={data} />;
}`})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"5. 效能優化實例"}),e.jsx("pre",{className:"bg-dark text-light p-3 rounded",children:e.jsx("code",{children:`// 大型列表項目
const ListItem = memo(({ item, onDelete }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <button onClick={() => onDelete(item.id)}>刪除</button>
    </div>
  );
});

function List() {
  const [items, setItems] = useState([...]);
  const [filter, setFilter] = useState('');

  // 使用 useCallback 避免每次創建新函式
  const handleDelete = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      {items.map(item => (
        <ListItem 
          key={item.id}
          item={item}
          onDelete={handleDelete} // 穩定的函式引用
        />
      ))}
    </div>
  );
}

// 當 filter 改變時，ListItem 不會重渲染（因為 props 沒變）`})})]})]})})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card border-0 shadow-sm bg-light",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h3",{className:"card-title mb-3",children:[e.jsx("i",{className:"bi bi-lightbulb me-2 text-warning"}),"最佳實踐"]}),e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"適用場景:"})," 昂貴的渲染、大型列表、第三方元件"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"搭配使用:"})," 與 useCallback、useMemo 一起使用"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"提升常數:"})," 將不變的物件/陣列提升到元件外"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"避免:"})," 不要預設所有元件都用 memo（有成本）"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Profile:"})," 使用 React DevTools Profiler 測量效能"]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("i",{className:"bi bi-x-circle-fill text-danger me-2 mt-1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"避免:"})," 傳遞新創建的物件/陣列作為 props"]})]})})]})]})})})})]})}export{g as default};
