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
react/
├── node_modules/          # 開發套件
├── public/                # 靜態資源目錄，不編譯
├── src/                   # 原始碼目錄，編譯
│   └── assets/            # 附加資源（例如圖片、字型）
│   ├── App.css            # 主樣式
│   ├── App.jsx            # 主元件
│   ├── index.css          # 全域樣式檔案
│   ├── main.jsx           # 進入點，所有檔案軍需要跟他產生關連才會被編譯
├── .gitignore             # 排除檔案，不會上傳至github
├── eslint.config.js       # 程式碼檢測設定檔
├── index.html             # 首頁
├── package-lock.json      # 專案套件清單，自動產生勿隨意修改
├── package.json           # 專案套件清單 
├── README.md              # 專案說明文件
├── vite.config.js         # Vite 設定檔
```

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

### axios
```bash
npm install axios
#在使用頁面
import axios from 'axios'
```

### scss
```bash
#-D 開發環境才安裝
npm add -D sass
#main.jsx 
import './assets/all.scss' 
```

### bootstrap
```bash
#詳情至all.scss
npm i bootstrap

``` 

### React Hook Form
```bash
npm i react-hook-form
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

## React 概念
```bash
1.JS
  a.是屬於同步語言
  b.有錯不會網下執行
  c.AsyncFunction搭配Promise、funciton前加async，內部await等待Promise
  d.立即函式
  (()=>{    
  })();

2.Reack Hook (本次六角教學)
3.Rack Class componet
4.react 18是umd最後一個版本

5.JSX語法:
  a.關注點分離
  b.箭頭函式也可以用
  c.元件通常都是用大寫開頭做命名(App)，用函式來宣告 
  d.所有標籤都需要結尾 &lt;input /&gt; &lt;img /&gt;
  e.JS屬性為小駝峰 colSpan className
  f.checkbox defaultChecked
  g.label htmlFor 
  h.input text defaultValue  
  i.select defaultValue
  j.textarea defaultValue
  k.style={{key:value}} 物件方式
  l.註解 {/*  */}
  m.最外層必須要一個元素包著&lt;div&gt;&lt;/div&gt; 或React.Fragment &lt;&gt; &lt;/&gt;

6.表達式:
  a.有可能是單一個值，或是一句話，有回傳值就是表達式
  b.所有函式執行都是表達式
  c.const a = 1 ; 陳述式
  d.0===0 表達式
  e.a = 1 ; 表達式
  f.渲染{}只能塞入表達式 {a = 1 } O , 塞個{const a = 1} X ;
  g.三元運算表達式可以在{}用

7.元件包法
  a.元件不要把col-包進去比較好
  b.先排出版面功能沒問題，再一個一個切成元件
  c.React傳props由外到內
  d.?可選串連，可防止欄位出錯

8.生命週期
  a.function元件
  b.建立virtual DOM
  c.useLayoutEffect
  d.渲染
  e.useEffect
  f.卸載

```