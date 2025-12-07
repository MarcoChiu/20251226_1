import { useState } from 'react';

export default function ValidationPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    // 驗證規則
    const validate = (name, value, allData = formData) => {
        let error = '';
        switch (name) {
            case 'username':
                if (!value) error = '⚠️ 使用者名稱為必填';
                else if (value.length < 3) error = '⚠️ 長度至少需 3 個字';
                break;
            case 'email':
                if (!value) error = '⚠️ Email 為必填';
                else if (!/\S+@\S+\.\S+/.test(value)) error = '⚠️ Email 格式不正確';
                break;
            case 'password':
                if (!value) error = '⚠️ 密碼為必填';
                else if (value.length < 6) error = '⚠️ 密碼長度至少需 6 個字';
                break;
            case 'confirmPassword':
                if (!value) error = '⚠️ 請再次輸入密碼';
                else if (value !== allData.password) error = '⚠️ 兩次密碼輸入不一致';
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const newData = { ...prev, [name]: value };
            // 即時驗證（如果在 touched 狀態）
            if (touched[name]) {
                const error = validate(name, value, newData);
                setErrors(prevErrors => ({ ...prevErrors, [name]: error }));

                // 特殊情況：修改密碼時也要重新驗證確認密碼
                if (name === 'password' && touched.confirmPassword) {
                    const confirmError = validate('confirmPassword', newData.confirmPassword, newData);
                    setErrors(prevErrors => ({ ...prevErrors, [name]: error, confirmPassword: confirmError }));
                }
            }
            return newData;
        });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const error = validate(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 送出前檢查所有欄位
        const newErrors = {};
        let hasError = false;

        Object.keys(formData).forEach(key => {
            const error = validate(key, formData[key]);
            if (error) {
                newErrors[key] = error;
                hasError = true;
            }
        });

        setErrors(newErrors);
        setTouched({
            username: true,
            email: true,
            password: true,
            confirmPassword: true
        });

        if (!hasError) {
            alert('🎉 驗證成功，表單已送出！');
            console.log(formData);
        }
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-check-circle me-3"></i>表單驗證</h1><p className="lead mb-0">即時驗證、錯誤提示與驗證狀態管理</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">驗證功能</h5><ul className="text-muted mb-0"><li>即時驗證</li><li>自訂驗證規則</li><li>錯誤訊息顯示</li><li>onBlur 驗證</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-shield-check text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">驗證類型</h5><ul className="text-muted mb-0"><li>必填欄位</li><li>Email 格式</li><li>密碼長度</li><li>密碼一致性</li></ul></div></div></div></div></div></div></div></div>
            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                        <label className="form-label">使用者名稱</label>
                        <input
                            type="text"
                            name="username"
                            className={`form-control ${touched.username && errors.username ? 'is-invalid' : ''} ${touched.username && !errors.username ? 'is-valid' : ''}`}
                            value={formData.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div className="invalid-feedback">{errors.username}</div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''} ${touched.email && !errors.email ? 'is-valid' : ''}`}
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div className="invalid-feedback">{errors.email}</div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">密碼</label>
                        <input
                            type="password"
                            name="password"
                            className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''} ${touched.password && !errors.password ? 'is-valid' : ''}`}
                            value={formData.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div className="invalid-feedback">{errors.password}</div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">確認密碼</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className={`form-control ${touched.confirmPassword && errors.confirmPassword ? 'is-invalid' : ''} ${touched.confirmPassword && !errors.confirmPassword ? 'is-valid' : ''}`}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div className="invalid-feedback">{errors.confirmPassword}</div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        🚀 註冊帳號
                    </button>
                </form>
            </div></div></div></div>

            <div className="row"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h3 className="h4 mb-4"><i className="bi bi-code-slash me-2 text-success"></i>程式碼範例</h3><div className="row g-4"><div className="col-12"><div className="bg-light p-4 rounded-3"><h5 className="mb-3">自訂驗證規則</h5><pre className="bg-white p-3 rounded border mb-0"><code>{`const validate = (name, value, allData) => {
  let error = '';
  
  switch (name) {
    case 'username':
      if (!value) error = '使用者名稱為必填';
      else if (value.length < 3) error = '長度至少 3 個字';
      break;
      
    case 'email':
      if (!value) error = 'Email 為必填';
      else if (!/\\S+@\\S+\\.\\S+/.test(value)) 
        error = 'Email 格式不正確';
      break;
      
    case 'confirmPassword':
      if (value !== allData.password) 
        error = '兩次密碼輸入不一致';
      break;
  }
  
  return error;
};`}</code></pre></div></div><div className="col-12"><div className="bg-light p-4 rounded-3"><h5 className="mb-3">即時驗證與 onBlur 驗證</h5><pre className="bg-white p-3 rounded border mb-0"><code>{`const [errors, setErrors] = useState({});
const [touched, setTouched] = useState({});

const handleBlur = (e) => {
  const { name, value } = e.target;
  setTouched(prev => ({ ...prev, [name]: true }));
  const error = validate(name, value);
  setErrors(prev => ({ ...prev, [name]: error }));
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
  
  // 即時驗證（如果已 touched）
  if (touched[name]) {
    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }
};`}</code></pre></div></div></div></div></div></div></div>

            <div className="row mt-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h3 className="h4 mb-4"><i className="bi bi-lightbulb me-2 text-warning"></i>最佳實踐</h3><div className="row g-4"><div className="col-md-6"><div className="card border-success"><div className="card-body"><h5 className="text-success mb-3"><i className="bi bi-check-circle me-2"></i>建議作法</h5><ul className="mb-0"><li>使用 touched 狀態控制驗證時機</li><li>onBlur 時顯示錯誤訊息</li><li>提供清晰的錯誤提示</li><li>密碼確認即時驗證</li><li>提交前全場驗證</li></ul></div></div></div><div className="col-md-6"><div className="card border-danger"><div className="card-body"><h5 className="text-danger mb-3"><i className="bi bi-x-circle me-2"></i>避免錯誤</h5><ul className="mb-0"><li>不要在每次輸入時都顯示錯誤</li><li>避免過於嚴格的驗證</li><li>注意驗證時序問題</li><li>不要忘記移除已修正的錯誤</li><li>處理異步驗證情況</li></ul></div></div></div></div></div></div></div></div>
        </div>
    );
};
