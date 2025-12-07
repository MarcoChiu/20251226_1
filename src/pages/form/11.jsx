import { useState } from 'react';

export default function WizardFormPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        firstName: '',
        lastName: '',
        // Step 2
        address: '',
        city: '',
        // Step 3
        paymentMethod: 'credit'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('🎉 訂單已完成！\n' + JSON.stringify(formData, null, 2));
    };

    // 進度條樣式
    const getProgressStyle = (currentStep) => {
        if (step > currentStep) return 'btn-success'; // 已完成
        if (step === currentStep) return 'btn-primary'; // 進行中
        return 'btn-light disabled'; // 未開始
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-ui-checks-grid me-3"></i>多步驟表單</h1><p className="lead mb-0">分步驟表單精靈與進度管理</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">主要功能</h5><ul className="text-muted mb-0"><li>步驟切換</li><li>進度指示</li><li>資料保持</li><li>完成驗證</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-cart-check text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">應用場景</h5><ul className="text-muted mb-0"><li>訂單系統</li><li>註冊流程</li><li>調查表單</li><li>引導設定</li></ul></div></div></div></div></div></div></div></div>
            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3>{/* 進度指示器 */}
                <div className="d-flex justify-content-between mb-4 position-relative">
                    {/* 連接線 (視覺效果) */}
                    <div className="position-absolute top-50 start-0 w-100 bg-light" style={{ height: '4px', zIndex: 0 }}></div>

                    {[1, 2, 3].map(s => (
                        <button
                            key={s}
                            className={`btn rounded-circle ${getProgressStyle(s)} position-relative`}
                            style={{ width: '40px', height: '40px', zIndex: 1 }}
                        >
                            {step > s ? '✓' : s}
                        </button>
                    ))}
                </div>

                <form onSubmit={handleSubmit}>
                    {/* 步驟 1: 基本資料 */}
                    {step === 1 && (
                        <div className="animate-fade-in">
                            <h5 className="mb-3">步驟 1: 基本資料</h5>
                            <div className="mb-3">
                                <label className="form-label">名字</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="form-control"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    autoFocus
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">姓氏</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    )}

                    {/* 步驟 2: 配送資訊 */}
                    {step === 2 && (
                        <div className="animate-fade-in">
                            <h5 className="mb-3">步驟 2: 配送資訊</h5>
                            <div className="mb-3">
                                <label className="form-label">地址</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="form-control"
                                    value={formData.address}
                                    onChange={handleChange}
                                    autoFocus
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">城市</label>
                                <input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    )}

                    {/* 步驟 3: 確認與付款 */}
                    {step === 3 && (
                        <div className="animate-fade-in">
                            <h5 className="mb-3">步驟 3: 確認與付款</h5>
                            <div className="alert alert-secondary">
                                <p className="mb-1"><strong>姓名:</strong> {formData.lastName} {formData.firstName}</p>
                                <p className="mb-1"><strong>地址:</strong> {formData.city} {formData.address}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">付款方式</label>
                                <select
                                    name="paymentMethod"
                                    className="form-select"
                                    value={formData.paymentMethod}
                                    onChange={handleChange}
                                >
                                    <option value="credit">💳 信用卡</option>
                                    <option value="paypal">🅿️ PayPal</option>
                                    <option value="cash">💵 貨到付款</option>
                                </select>
                            </div>
                        </div>
                    )}

                    <hr />
                    <div className="d-flex justify-content-between">
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={prevStep}
                            disabled={step === 1}
                        >
                            ⬅️ 上一步
                        </button>

                        {step < 3 ? (
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={nextStep}
                            >
                                下一步 ➡️
                            </button>
                        ) : (
                            <button type="submit" className="btn btn-success">
                                ✅ 完成訂單
                            </button>
                        )}
                    </div>
                </form>
            </div></div></div></div>

            <div className="row"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h3 className="h4 mb-4"><i className="bi bi-code-slash me-2 text-success"></i>程式碼範例</h3><div className="row g-4"><div className="col-12"><div className="bg-light p-4 rounded-3"><h5 className="mb-3">步驟管理與進度顯示</h5><pre className="bg-white p-3 rounded border mb-0"><code>{`const [step, setStep] = useState(1);
const [formData, setFormData] = useState({
  // Step 1
  firstName: '',
  lastName: '',
  // Step 2
  address: '',
  city: ''
});

const nextStep = () => setStep(prev => prev + 1);
const prevStep = () => setStep(prev => prev - 1);

const getProgressStyle = (currentStep) => {
  if (step > currentStep) return 'btn-success';
  if (step === currentStep) return 'btn-primary';
  return 'btn-light disabled';
};`}</code></pre></div></div><div className="col-12"><div className="bg-light p-4 rounded-3"><h5 className="mb-3">條件式步驟渲染</h5><pre className="bg-white p-3 rounded border mb-0"><code>{`{step === 1 && (
  <div>
    <input
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
    />
    <button onClick={nextStep}>下一步</button>
  </div>
)}

{step === 2 && (
  <div>
    <input
      name="address"
      value={formData.address}
      onChange={handleChange}
    />
    <button onClick={prevStep}>上一步</button>
    <button onClick={nextStep}>下一步</button>
  </div>
)}`}</code></pre></div></div></div></div></div></div></div>

            <div className="row mt-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h3 className="h4 mb-4"><i className="bi bi-lightbulb me-2 text-warning"></i>最佳實踐</h3><div className="row g-4"><div className="col-md-6"><div className="card border-success"><div className="card-body"><h5 className="text-success mb-3"><i className="bi bi-check-circle me-2"></i>建議作法</h5><ul className="mb-0"><li>顯示清晰的進度指示器</li><li>保持所有步驟資料</li><li>提供上一步/下一步按鈕</li><li>每步驟驗證後再前進</li><li>支援跳轉到特定步驟</li></ul></div></div></div><div className="col-md-6"><div className="card border-danger"><div className="card-body"><h5 className="text-danger mb-3"><i className="bi bi-x-circle me-2"></i>避免錯誤</h5><ul className="mb-0"><li>不要在步驟切換時清空資料</li><li>避免無限制的步驟切換</li><li>注意步驟間資料依賴</li><li>不要省略最後確認步驟</li><li>處理瀏覽器返回問題</li></ul></div></div></div></div></div></div></div></div>
        </div>
    );
};
