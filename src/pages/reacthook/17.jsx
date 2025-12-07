import { useId, useState } from 'react';

/**
 * useId Hook 範例
 * 
 * useId 是 React 18 引入的 Hook,用於產生在伺服器端和客戶端之間穩定的唯一 ID。
 * 主要用途:
 * - 為表單元素產生唯一的 ID
 * - 連結標籤與輸入欄位 (accessibility)
 * - 避免 SSR 和 CSR 之間的 ID 不匹配問題
 * 
 * 注意事項:
 * - 不要用於 key 屬性
 * - 每次呼叫 useId 會產生不同的 ID
 * - 在同一個元件中多次呼叫會產生不同的 ID
 * - 產生的 ID 不會在渲染之間改變
 */

function FormFieldWithId({ label, type = 'text' }) {
  // 為每個表單欄位產生唯一 ID
  const id = useId();
  
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-bold">
        {label}
      </label>
      <input 
        type={type}
        id={id}
        className="form-control"
        placeholder={`請輸入${label}`}
      />
    </div>
  );
}

function AccessibleForm() {
  // 為整個表單產生唯一的前綴
  const formId = useId();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('表單資料:', formData);
    alert('表單已送出!請查看控制台');
  };

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h3 className="card-title mb-3">
          <i className="bi bi-person-badge me-2"></i>
          無障礙表單範例
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor={`${formId}-username`} className="form-label fw-bold">
              使用者名稱
            </label>
            <input
              type="text"
              id={`${formId}-username`}
              className="form-control"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              aria-describedby={`${formId}-username-help`}
            />
            <div id={`${formId}-username-help`} className="form-text">
              請輸入 3-20 個字元的使用者名稱
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor={`${formId}-email`} className="form-label fw-bold">
              電子郵件
            </label>
            <input
              type="email"
              id={`${formId}-email`}
              className="form-control"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              aria-describedby={`${formId}-email-help`}
            />
            <div id={`${formId}-email-help`} className="form-text">
              我們不會與他人分享您的電子郵件
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor={`${formId}-password`} className="form-label fw-bold">
              密碼
            </label>
            <input
              type="password"
              id={`${formId}-password`}
              className="form-control"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              aria-describedby={`${formId}-password-help`}
            />
            <div id={`${formId}-password-help`} className="form-text">
              密碼必須至少 8 個字元
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            <i className="bi bi-check-circle me-2"></i>
            送出表單
          </button>
        </form>
      </div>
    </div>
  );
}

function MultipleFieldsExample() {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h3 className="card-title mb-3">
          <i className="bi bi-input-cursor-text me-2"></i>
          多個表單欄位
        </h3>
        <p className="text-muted mb-4">
          每個 FormFieldWithId 元件都會獲得唯一的 ID
        </p>
        <FormFieldWithId label="姓名" />
        <FormFieldWithId label="電話" type="tel" />
        <FormFieldWithId label="地址" />
        <FormFieldWithId label="郵遞區號" />
      </div>
    </div>
  );
}

export default function UseIdExample() {
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
            <i className="bi bi-fingerprint me-3"></i>
            useId Hook
          </h1>
          <p className="lead mb-0">產生穩定的唯一 ID 用於無障礙功能</p>
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
                Hook 說明
              </h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                        <i className="bi bi-check2-circle text-primary fs-4"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-2">主要用途</h5>
                      <ul className="text-muted mb-0">
                        <li>為表單元素產生唯一 ID</li>
                        <li>連結 label 與 input (accessibility)</li>
                        <li>避免 SSR/CSR ID 不匹配</li>
                        <li>產生 aria-describedby 等屬性的 ID</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-warning bg-opacity-10 rounded-circle p-3">
                        <i className="bi bi-exclamation-triangle text-warning fs-4"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-2">注意事項</h5>
                      <ul className="text-muted mb-0">
                        <li>不要用於列表的 key 屬性</li>
                        <li>每次呼叫產生不同的 ID</li>
                        <li>ID 在渲染之間保持穩定</li>
                        <li>適用於 React 18+</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 範例展示 */}
      <div className="row g-4">
        <div className="col-lg-6">
          <AccessibleForm />
        </div>
        <div className="col-lg-6">
          <MultipleFieldsExample />
        </div>
      </div>

      {/* 程式碼範例 */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h3 className="card-title mb-3">
                <i className="bi bi-code-slash me-2"></i>
                程式碼範例
              </h3>
              <pre className="bg-light p-4 rounded-3 overflow-auto">
                <code>{`import { useId } from 'react';

function FormField() {
  // 產生唯一 ID
  const id = useId();
  
  return (
    <div>
      <label htmlFor={id}>使用者名稱</label>
      <input 
        id={id}
        type="text"
        aria-describedby={\`\${id}-help\`}
      />
      <div id={\`\${id}-help\`}>
        請輸入您的使用者名稱
      </div>
    </div>
  );
}

// 多個 ID 的使用
function MultipleIds() {
  const formId = useId();
  
  return (
    <form>
      <input id={\`\${formId}-name\`} />
      <input id={\`\${formId}-email\`} />
    </form>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* 最佳實踐 */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm bg-light">
            <div className="card-body">
              <h3 className="card-title mb-3">
                <i className="bi bi-lightbulb me-2 text-warning"></i>
                最佳實踐
              </h3>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <div>
                      <strong>使用場景:</strong> 需要唯一 ID 的表單元素
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <div>
                      <strong>無障礙:</strong> 連結 label 和 input
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                    <div>
                      <strong>避免:</strong> 不要用於列表的 key
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
