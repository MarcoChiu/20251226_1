import { useRef } from 'react';

export default function UncontrolledPage() {
    // 使用 useRef 來直接存取 DOM 元素
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const fileRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // 直接從 ref.current.value 獲取值
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            // 檔案通常必須是非受控元件處理
            fileName: fileRef.current.files[0]?.name || '未選擇檔案'
        };

        alert(`提交資料:\n姓名: ${data.name}\nEmail: ${data.email}\n檔案: ${data.fileName}`);
        console.log('Form Data:', data);
    };

    const handleReset = () => {
        // 非受控元件需要手動清除（雖然 form reset 也可以，但這裡是示範）
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (fileRef.current) fileRef.current.value = '';
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-plugin me-3"></i>非受控元件</h1><p className="lead mb-0">使用 useRef 處理表單資料</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">useRef 特性</h5><ul className="text-muted mb-0"><li>直接操作 DOM</li><li>defaultValue 設定</li><li>減少重渲染</li><li>一次性讀取</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-lightbulb text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">適用場景</h5><ul className="text-muted mb-0"><li>簡單表單</li><li>第三方整合</li><li>檔案上傳</li><li>效能優化</li></ul></div></div></div></div></div></div></div></div>
            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3><form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">姓名 (Default Value)</label>
                    <input
                        type="text"
                        className="form-control"
                        ref={nameRef}
                        defaultValue="預設訪客" // 非受控元件使用 defaultValue
                        placeholder="請輸入姓名"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        ref={emailRef}
                        placeholder="name@example.com"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">上傳檔案 (Native HTML)</label>
                    <input
                        type="file"
                        className="form-control"
                        ref={fileRef}
                    />
                </div>

                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-dark">
                        📤 提交 (Console Log)
                    </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={handleReset}>
                        🔄 重置 (Manual)
                    </button>
                </div>
            </form>
            </div></div></div></div>

            <div className="row"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h3 className="h4 mb-4"><i className="bi bi-code-slash me-2 text-success"></i>程式碼範例</h3><div className="row g-4"><div className="col-12"><div className="bg-light p-4 rounded-3"><h5 className="mb-3">使用 useRef 處理表單</h5><pre className="bg-white p-3 rounded border mb-0"><code>{`import { useRef } from 'react';

const nameRef = useRef(null);
const emailRef = useRef(null);

const handleSubmit = (e) => {
  e.preventDefault();
  
  const data = {
    name: nameRef.current.value,
    email: emailRef.current.value
  };
  
  console.log(data);
};

<input
  ref={nameRef}
  defaultValue="預設值"
  type="text"
/>`}</code></pre></div></div><div className="col-12"><div className="bg-light p-4 rounded-3"><h5 className="mb-3">手動重置表單</h5><pre className="bg-white p-3 rounded border mb-0"><code>{`const handleReset = () => {
  if (nameRef.current) {
    nameRef.current.value = '';
  }
  if (emailRef.current) {
    emailRef.current.value = '';
  }
  if (fileRef.current) {
    fileRef.current.value = '';
  }
};

// 或使用原生 form reset
<form ref={formRef}>
  <button onClick={() => formRef.current.reset()}>
    重置
  </button>
</form>`}</code></pre></div></div></div></div></div></div></div>

            <div className="row mt-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h3 className="h4 mb-4"><i className="bi bi-lightbulb me-2 text-warning"></i>最佳實踐</h3><div className="row g-4"><div className="col-md-6"><div className="card border-success"><div className="card-body"><h5 className="text-success mb-3"><i className="bi bi-check-circle me-2"></i>建議作法</h5><ul className="mb-0"><li>簡單表單優先使用</li><li>檔案上傳必須使用 ref</li><li>第三方 DOM 套件整合</li><li>減少不必要的狀態</li><li>性能優化場景</li></ul></div></div></div><div className="col-md-6"><div className="card border-danger"><div className="card-body"><h5 className="text-danger mb-3"><i className="bi bi-x-circle me-2"></i>避免錯誤</h5><ul className="mb-0"><li>不適合複雜驗證</li><li>無法即時顯示錯誤</li><li>不適合條件式渲染</li><li>混合受控/非受控會有問題</li><li>注意 defaultValue vs value</li></ul></div></div></div></div></div></div></div></div>
        </div>
    );
};
