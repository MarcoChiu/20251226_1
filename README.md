React + axios + bootstrap 基礎專案可直接使用

## 安裝說明
- 指令執行方式 VS Code 上方的Terminal(終端機)

### 安裝Node.js 16版以上
```bash
#觀看版本
node -v
```

### Github網頁上操作
- 1.建立repository 
- 2.輸入專案名稱跟簡介
- 3.Choose visibility 選public才可以部屬到Github Page
- 4.Add README 要開啟
- 5.建立完成後點選<> Code
- 6.複製HTTPS底下文字


### 開啟VS Code 
- 1.左邊選單source control 
- 2.Clone Resposity
- 3.選擇專案路徑 

### 建立vite專案
```bash
npm create vite@latest
```

```bash
Need to install the following packages:(安裝套件，第一次會問安裝過就不會出現)
create-vite@8.1.0
Ok to proceed? (y) y

◆  Project name:(專案名稱)
│  .
└
◆  Current directory is not empty. Please choose how to proceed:(刪除的話只有READMME.md所以不影響)
│  ○ Cancel operation
│  ● Remove existing files and continue
│  ○ Ignore files and continue
└
◆  Select a framework:(開發框架)
│  ○ Vanilla
│  ○ Vue
│  ● React
│  ○ Preact
│  ○ Lit
│  ○ Svelte
│  ○ Solid
│  ○ Qwik
│  ○ Angular
│  ○ Marko
│  ○ Others
└
◆  Select a variant:(開發語言方式)
│  ○ TypeScript
│  ○ TypeScript + React Compiler
│  ○ TypeScript + SWC
│  ● JavaScript
│  ○ JavaScript + React Compiler
│  ○ JavaScript + SWC
│  ○ React Router v7 ↗
│  ○ TanStack Router ↗
│  ○ RedwoodSDK ↗
│  ○ RSC ↗
└

◆  Use rolldown-vite (Experimental)?:(實驗性工具，建議不使用)
│  ○ Yes
│  ● No
└

◆  Install with npm and start now?(安裝npm，選No自行npm install)
│  ● Yes / ○ No
└
  ➜  Local:   http://localhost:5173/ (npm run dev)
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 專案結構說明 
```bash
20251226_1/
├── node_modules/          # 開發套件
├── public/                # 靜態資源目錄，不編譯
├── src/                   # 原始碼目錄，編譯
│   ├── assets/            # 附加資源（圖片、字型、樣式）
│   │   ├── all.scss       # SCSS 主檔案
│   │   └── scss/          # SCSS 模組化檔案
│   │       ├── _customize.scss      # Bootstrap 客製化
│   │       ├── _variables.scss      # 變數定義
│   │       └── _variables-dark.scss # 深色模式變數
│   ├── components/        # 共用元件
│   │   ├── Layout.jsx     # 主要布局元件（包含側邊欄、Outlet）
│   │   ├── Loading.jsx    # 載入動畫元件
│   │   └── Loading.module.css
│   ├── pages/             # 頁面元件
│   │   ├── react/         # React 基礎教學
│   │   ├── reactapp/      # React 應用實作
│   │   ├── reactform/     # React 表單處理
│   │   ├── reacthook/     # React Hooks 教學
│   │   ├── reacthookform/ # React Hook Form 教學
│   │   └── reactrouterdom/# React Router Dom 教學
│   ├── App.css            # 主樣式
│   ├── App.jsx            # 主元件（路由配置）
│   ├── main.jsx           # 進入點，所有檔案都需要跟它產生關聯才會被編譯
│   └── routes.jsx         # 路由配置檔（集中管理所有路由）
├── .gitignore             # 排除檔案，不會上傳至 Github
├── eslint.config.js       # 程式碼檢測設定檔
├── index.html             # 首頁（SPA 唯一的 HTML 檔案）
├── package-lock.json      # 專案套件清單，自動產生勿隨意修改
├── package.json           # 專案套件清單與腳本命令
├── README.md              # 專案說明文件
└── vite.config.js         # Vite 設定檔
```

#### 專案特色
- 📚 **教學導向**: 包含 React、Hooks、Form、Router 完整教學範例
- 🎨 **Bootstrap 5.3**: 使用 Bootstrap 進行 UI 設計
- 🔄 **巢狀路由**: 實作完整的 React Router Dom 巢狀路由結構
- 📝 **表單處理**: React Hook Form 完整實作範例
- 🧩 **元件化**: Layout、Loading 等可重用元件
### axios
```bash
npm install axios
```
**使用範例:**
```javascript
// 在使用頁面引入
import axios from 'axios'

// GET 請求
const getData = async () => {
  const response = await axios.get('https://api.example.com/data');
  console.log(response.data);
};

// POST 請求
const postData = async () => {
  const response = await axios.post('https://api.example.com/data', {
    name: 'John',
    email: 'john@example.com'
  });
  console.log(response.data);
};
```

### scss
```bash
# -D 開發環境才安裝
npm add -D sass
```
**設定方式:**
```javascript
// main.jsx 
import './assets/all.scss'
```
**SCSS 結構:**
```scss
// all.scss
@import './scss/variables';        // 變數定義
@import './scss/variables-dark';   // 深色模式
@import './scss/customize';        // Bootstrap 客製化
@import 'bootstrap/scss/bootstrap'; // Bootstrap 主檔案
```

### bootstrap
```bash
npm i bootstrap
```
**專案使用 Bootstrap 5.3.8**
- 詳細設定請參考 `assets/all.scss`
- 包含客製化變數與深色模式支援
- 已整合 Bootstrap Icons

### react-hook-form
```bash
npm i react-hook-form
```

### @reduxjs/toolkit
```bash
npm install @reduxjs/toolkit
```

### react-redux
```bash
npm install react-redux
```

**基本使用:**
```javascript
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username", { required: true })} />
      {errors.username && <span>必填欄位</span>}
      <button type="submit">送出</button>
    </form>
  );
}
```
**完整範例:** 請參考 `src/pages/reacthookform/01.jsx`

### react-router-dom
```bash
npm i react-router-dom
```
**專案使用 React Router Dom 7.9.6**
- 採用 HashRouter 模式
- 集中式路由配置（`routes.jsx`）
- 支援巢狀路由與動態路由
- 完整教學範例請參考 `src/pages/reactrouterdom/` 

### 運行開發專案
```bash
#會對應package.json scripts dev
npm run dev
```

### 建立編譯
```bash
#建立專案在dist
#會對應package.json scripts build
npm run build
```

### 執行dist網頁資料
```bash
#會跑本地端dist資料夾
#會對應package.json scripts preview
npm run preview
```

### 發佈至Github Page
```bash 
#package.json
"scripts": {
    ...
    "deploy": "vite build && gh-pages -d dist"
 }
```
```bash
#--save-dev 開發環境才安裝
npm install gh-pages --save-dev
``` 
```bash
#會對應package.json scripts deploy
npm run deploy
```

### 環境變數
```bash
#開發環境
.env..env.development
#本地端開發環境
.env.development.local
#正式環境或以編譯
.env.production
#修改vite.config.js 讓專案路徑也讀取變數
```
### 使用https
```bash
#參考下列網址產生localhost-key.pem localhost.pem
https://marco.easyusing.com/2025/11/vs-code-mkcert-vite-httpsssl.html
mkcert localhost
```
```bash
#vite.config.js
server: {
    port: 3000,
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem')
    }
  }
```

## 下載專案後如何執行 
- 1.先解壓縮 
- 2.開啟VS Code 
- 3.開啟解壓後的資料夾
- 4.輸入指令
```bash
npm install  
```
- 5.Github建立repository 
- 6.參考上方加入https
- 7.輸入指令連結個人或指定的Github
```bash
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/MarcoChiu/20251226_1.git
git push -u origin main
```
- 8.更新指令
```bash
git remote add origin https://github.com/MarcoChiu/20251226_1.git
git branch -M main
git push -u origin main
```

- 9.錯誤處理
```bash
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/MarcoChiu/20251226_1.git'
```
```bash
git branch -M main
git push -u origin main --force
```

## 筆記

### 1. JavaScript 基礎
- 是屬於同步語言
- 有錯不會往下執行
- AsyncFunction 搭配 Promise、function 前加 async，內部 await 等待 Promise
- 立即函式: `(() => { })();`

### 2. React 開發方式
- **React Hook** (本次六角教學)
- **React Class Component**
- React 18 是 UMD 最後一個版本

### 3. JSX 語法規則

| 項目 | 說明 | 範例 |
|------|------|------|
| **關注點分離** | HTML、CSS、JS 整合在一起 | - |
| **函式宣告** | 箭頭函式也可以用 | `const App = () => { }` |
| **元件命名** | 大寫開頭做命名 | `<App />`, `<UserProfile />` |
| **標籤結尾** | 所有標籤都需要結尾 | `<input />`, `<img />` |
| **屬性命名** | JS 屬性為小駝峰 | `colSpan`, `className` |
| **checkbox** | 預設勾選屬性 | `defaultChecked` |
| **label** | for 屬性改名 | `htmlFor` |
| **input text** | 預設值 | `defaultValue` |
| **select** | 預設選項 | `defaultValue` |
| **textarea** | 預設內容 | `defaultValue` |
| **style** | 物件方式 | `style={{color: 'red', fontSize: '16px'}}` |
| **註解** | JSX 註解語法 | `{/* 註解內容 */}` |
| **最外層** | 必須一個元素包著 | `<div></div>` 或 `<></>` (Fragment) |

### 4. 表達式 vs 陳述式

| 類型 | 說明 | 範例 |
|------|------|------|
| **表達式** | 有回傳值的運算 | `0 === 0`, `a = 1`, `add(1, 2)` |
| **陳述式** | 無回傳值的宣告 | `const a = 1;`, `if (true) { }` |
| **JSX 中** | `{}` 只能塞入表達式 | `{a = 1}` ✅ / `{const a = 1}` ❌ |
| **三元運算** | 表達式可在 `{}` 中使用 | `{isActive ? 'Active' : 'Inactive'}` |

### 5. 元件最佳實踐
- 元件不要把 `col-` 包進去比較好
- 先排出版面功能沒問題，再一個一個切成元件
- React 傳 props 由外到內 (單向資料流)
- `?.` 可選串連，可防止欄位出錯

### 6. React 生命週期 (Function Component)
1. 建立 Virtual DOM
2. useLayoutEffect (DOM 更新後，瀏覽器繪製前)
3. 渲染 (瀏覽器繪製)
4. useEffect (瀏覽器繪製後)
5. 卸載 (元件移除時) 

### React-Router-Dom

| 項目 | 說明 | 用法範例 |
|------|------|----------|
| **BrowserRouter** | 路由容器,包在最外層 | `<BrowserRouter><App /></BrowserRouter>` |
| **HashRouter** | 使用 Hash 模式的路由容器 | `<HashRouter><App /></HashRouter>` |
| **Routes** | 路由規則集合,包裹所有 Route | `<Routes>{/* Route 元件 */}</Routes>` |
| **Route** | 單一路由規則,定義路徑與元件 | `<Route path="/" element={<Home />} />` |
| **Link** | 導航連結,替代 a 標籤 | `<Link to="/about">關於</Link>` |
| **NavLink** | 支援 active 狀態的導航連結 | `<NavLink to="/home" className={({isActive}) => isActive ? 'active' : ''}>首頁</NavLink>` |
| **Navigate** | 元件,替換式轉址(重定向) | `<Navigate to="/login" replace />` |
| **Outlet** | 子路由顯示位置的佔位符 | `<div><Sidebar /><Outlet /></div>` |

### Hooks API

| Hook | 說明 | 用法範例 |
|------|------|----------|
| **useNavigate()** | 程式化轉址 | `const navigate = useNavigate(); navigate('/home');` |
| **useParams()** | 取得 URL 路徑參數 | `const { id } = useParams();` |
| **useLocation()** | 取得目前路徑資訊 | `const location = useLocation(); // location.pathname, search, hash, state` |
| **useSearchParams()** | 查詢字串參數管理 | `const [searchParams, setSearchParams] = useSearchParams();` |
| **useRoutes()** | 動態路由配置 | `const element = useRoutes(routesConfig);` |
| **useMatch()** | 檢查路徑是否匹配 | `const match = useMatch('/users/:id');` |
| **useOutletContext()** | 取得父路由傳遞的 context | `const context = useOutletContext();` |

### 路由配置

| 項目 | 說明 | 用法範例 |
|------|------|----------|
| **Nested Route** | 巢狀路由,父子路由結構 | `<Route path="admin" element={<Layout />}><Route path="users" /></Route>` |
| **Index 屬性** | 設定預設子路由 | `<Route index element={<Dashboard />} />` |
| **404 路由** | 萬用路由,處理未匹配路徑 | `<Route path="*" element={<NotFound />} />` |
| **動態參數** | URL 參數路由 | `<Route path="/users/:userId" element={<UserDetail />} />` |
| **可選參數** | 可選的 URL 參數 | `<Route path="/users/:userId?" element={<Users />} />` |
| **相對路徑** | 相對於父路由的路徑 | `<Route path="settings" />` (在父路由 /admin 下會是 /admin/settings) |

### 導航選項

| 選項 | 說明 | 用法範例 |
|------|------|----------|
| **replace** | 替換歷史記錄而非新增 | `navigate('/home', { replace: true });` |
| **state** | 傳遞狀態資料 | `navigate('/profile', { state: { from: 'login' } });` |
| **relative** | 相對路徑導航 | `navigate('..', { relative: 'path' });` |
| **preventScrollReset** | 防止滾動重置 | `<Link to="/page" preventScrollReset />` |

 


## 實用工具
```bash
https://github.com/streamich/react-use
```

### React Redux Toolkit
專案使用 Redux Toolkit 進行全域狀態管理。

**核心檔案:**
- `src/store.jsx`: Redux Store 設定檔
- `src/slice/todosSlice.jsx`: 待辦事項 Slice
- `src/slice/messageSlice.jsx`: 全域訊息通知 Slice
- `src/components/MessageToast.jsx`: 共用訊息通知元件

**Message Slice 功能:**
- 支援多種訊息類型: success / info / warning / error / primary / secondary / light / dark
- `createAsyncMessage`: 支援自動刪除的非同步 Action
- `MessageToast`: 自動顯示/隱藏訊息的 UI 元件

**使用範例:**
```javascript
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from './slice/messageSlice';

const Component = () => {
    const dispatch = useDispatch();
    
    const handleAction = () => {
        // 發送會自動消失的通知
        dispatch(createAsyncMessage({ 
            text: '操作成功！', 
            type: 'success',
            timeout: 3000 // 可選，預設 3000ms
        }));
    };
};
```

**範例頁面:**
- `src/pages/reactredux/01.jsx`: Redux 初始化與基本概念
- `src/pages/reactredux/02.jsx`: Redux Todo List 實作 (整合訊息通知)
- `src/pages/reactredux/03.jsx`: Redux Message Slice 完整功能展示