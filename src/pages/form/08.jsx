import { useState } from 'react';

export default function DynamicFormPage() {
    const [users, setUsers] = useState([
        { name: '', email: '' }
    ]);
    const [submittedData, setSubmittedData] = useState(null);

    // 新增欄位
    const addField = () => {
        setUsers([...users, { name: '', email: '' }]);
    };

    // 刪除欄位
    const removeField = (index) => {
        const newUsers = users.filter((_, i) => i !== index);
        setUsers(newUsers);
    };

    // 更新欄位資料
    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newUsers = [...users];
        newUsers[index][name] = value;
        setUsers(newUsers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('提交的資料:', users);
        setSubmittedData(users);
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-plus-slash-minus me-3"></i>動態表單欄位</h1><p className="lead mb-0">動態新增與刪除表單欄位</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">主要功能</h5><ul className="text-muted mb-0"><li>動態新增欄位</li><li>動態刪除欄位</li><li>陣列狀態管理</li><li>表單資料收集</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-list-ul text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">應用場景</h5><ul className="text-muted mb-0"><li>多使用者資料</li><li>訂單明細</li><li>技能清單</li><li>聯絡人資訊</li></ul></div></div></div></div></div></div></div></div>
            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3><form onSubmit={handleSubmit}>
                {users.map((user, index) => (
                    <div key={index} className="row mb-3 align-items-end">
                        <div className="col-md-5">
                            <label className="form-label">姓名 {index + 1}</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="輸入姓名"
                                value={user.name}
                                onChange={(e) => handleChange(index, e)}
                                required
                            />
                        </div>
                        <div className="col-md-5">
                            <label className="form-label">Email {index + 1}</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="輸入 Email"
                                value={user.email}
                                onChange={(e) => handleChange(index, e)}
                                required
                            />
                        </div>
                        <div className="col-md-2">
                            {users.length > 1 && (
                                <button
                                    type="button"
                                    className="btn btn-outline-danger w-100"
                                    onClick={() => removeField(index)}
                                >
                                    🗑️ 刪除
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                <div className="d-flex gap-2 mt-4">
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={addField}
                    >
                        ➕ 新增欄位
                    </button>
                    <button type="submit" className="btn btn-primary">
                        🚀 送出表單
                    </button>
                </div>
            </form>

                {/* 顯示提交結果 */}
                {submittedData && (
                    <div className="alert alert-success mt-4">
                        <h5 className="alert-heading">✅ 提交資料預覽</h5>
                        <hr />
                        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                    </div>
                )}
            </div></div></div></div>

            <div className="row"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h3 className="h4 mb-4"><i className="bi bi-code-slash me-2 text-success"></i>程式碼範例</h3><div className="row g-4"><div className="col-12"><div className="bg-light p-4 rounded-3"><h5 className="mb-3">動態表單欄位管理</h5><pre className="bg-white p-3 rounded border mb-0"><code>{`const [fields, setFields] = useState([{ id: 1, name: '', email: '' }]);

const addField = () => {
  setFields([...fields, {
    id: Date.now(),
    name: '',
    email: ''
  }]);
};

const removeField = (id) => {
  setFields(fields.filter(field => field.id !== id));
};

const handleChange = (id, fieldName, value) => {
  setFields(fields.map(field => 
    field.id === id
      ? { ...field, [fieldName]: value }
      : field
  ));
};`}</code></pre></div></div><div className="col-12"><div className="bg-light p-4 rounded-3"><h5 className="mb-3">表單提交與資料收集</h5><pre className="bg-white p-3 rounded border mb-0"><code>{`const handleSubmit = (e) => {
  e.preventDefault();
  
  // 過濾空白欄位
  const validData = fields.filter(field => 
    field.name.trim() && field.email.trim()
  );
  
  console.log('Valid Fields:', validData);
  
  // 驗證每個欄位
  const hasErrors = validData.some(field => 
    !field.email.includes('@')
  );
  
  if (!hasErrors) {
    // 提交資料
  }
};`}</code></pre></div></div></div></div></div></div></div>

            <div className="row mt-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h3 className="h4 mb-4"><i className="bi bi-lightbulb me-2 text-warning"></i>最佳實踐</h3><div className="row g-4"><div className="col-md-6"><div className="card border-success"><div className="card-body"><h5 className="text-success mb-3"><i className="bi bi-check-circle me-2"></i>建議作法</h5><ul className="mb-0"><li>使用唯一 ID 標識每個欄位</li><li>提供新增/刪除按鈕</li><li>驗證每個欄位資料</li><li>提供最少欄位數限制</li><li>顯示欄位編號或標題</li></ul></div></div></div><div className="col-md-6"><div className="card border-danger"><div className="card-body"><h5 className="text-danger mb-3"><i className="bi bi-x-circle me-2"></i>避免錯誤</h5><ul className="mb-0"><li>不要使用 index 作為 key</li><li>避免刪除最後一個欄位</li><li>注意狀態不可變性</li><li>處理空陣列情況</li><li>提供適當的 UX 回饋</li></ul></div></div></div></div></div></div></div></div>
        </div>
    );
};
