import { useState } from 'react';

export default function RadioPage() {
    const [formData, setFormData] = useState({
        gender: '',
        paymentMethod: '',
        shippingMethod: 'standard',
        size: '',
        rating: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    async function formAction(formData) {
        const data = {
            gender: formData.get("gender"),
            paymentMethod: formData.get("paymentMethod"),
            shippingMethod: formData.get("shippingMethod"),
            size: formData.get("size"),
            rating: formData.get("rating")
        };
        console.log('提交的資料:', data);
        setSubmittedData(data);
    }

    return (
        <div className="container py-5">
            <div
                className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)'
                }}
            >
                <div className="position-relative" style={{ zIndex: 1 }}>
                    <h1 className="display-4 fw-bold mb-3">
                        <i className="bi bi-record-circle me-3"></i>
                        Radio 單選按鈕
                    </h1>
                    <p className="lead mb-0">基本單選、分組與樣式化應用</p>
                </div>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        zIndex: 0
                    }}
                ></div>
            </div>

            <div className="row mb-5">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h2 className="h4 mb-4">
                                <i className="bi bi-info-circle me-2 text-primary"></i>
                                功能說明
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
                                            <h5 className="mb-2">單選功能</h5>
                                            <ul className="text-muted mb-0">
                                                <li>基本單選按鈕</li>
                                                <li>分組單選</li>
                                                <li>預設值設定</li>
                                                <li>必填驗證</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-success bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-ui-radios text-success fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">應用場景</h5>
                                            <ul className="text-muted mb-0">
                                                <li>性別選擇</li>
                                                <li>付款方式</li>
                                                <li>配送方式</li>
                                                <li>評分系統</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-code-square me-2 text-primary"></i>
                                互動範例
                            </h3>
                            <form action={formAction}>
                                {/* 基本 Radio - 性別 */}
                                <div className="mb-4">
                                    <h5 className="mb-3">1️⃣ 基本單選按鈕 - 性別</h5>
                                    <small className="text-muted d-block mb-2">
                                        您選擇: {formData.gender || '未選擇'}
                                    </small>
                                    <div className="form-check">
                                        <input
                                            id="male"
                                            name="gender"
                                            type="radio"
                                            className="form-check-input"
                                            value="男性"
                                            checked={formData.gender === '男性'}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="male" className="form-check-label">
                                            👨 男性
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            id="female"
                                            name="gender"
                                            type="radio"
                                            className="form-check-input"
                                            value="女性"
                                            checked={formData.gender === '女性'}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="female" className="form-check-label">
                                            👩 女性
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            id="other"
                                            name="gender"
                                            type="radio"
                                            className="form-check-input"
                                            value="其他"
                                            checked={formData.gender === '其他'}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="other" className="form-check-label">
                                            🧑 其他
                                        </label>
                                    </div>
                                </div>

                                {/* 付款方式 */}
                                <div className="mb-4">
                                    <h5 className="mb-3">2️⃣ 付款方式</h5>
                                    <small className="text-muted d-block mb-2">
                                        您選擇: {formData.paymentMethod || '未選擇'}
                                    </small>
                                    <div className="form-check">
                                        <input
                                            id="credit"
                                            name="paymentMethod"
                                            type="radio"
                                            className="form-check-input"
                                            value="信用卡"
                                            checked={formData.paymentMethod === '信用卡'}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="credit" className="form-check-label">
                                            💳 信用卡
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            id="atm"
                                            name="paymentMethod"
                                            type="radio"
                                            className="form-check-input"
                                            value="ATM轉帳"
                                            checked={formData.paymentMethod === 'ATM轉帳'}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="atm" className="form-check-label">
                                            🏧 ATM 轉帳
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            id="cash"
                                            name="paymentMethod"
                                            type="radio"
                                            className="form-check-input"
                                            value="貨到付款"
                                            checked={formData.paymentMethod === '貨到付款'}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="cash" className="form-check-label">
                                            💵 貨到付款
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            id="mobile"
                                            name="paymentMethod"
                                            type="radio"
                                            className="form-check-input"
                                            value="行動支付"
                                            checked={formData.paymentMethod === '行動支付'}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="mobile" className="form-check-label">
                                            📱 行動支付
                                        </label>
                                    </div>
                                </div>

                                {/* 配送方式（有預設值） */}
                                <div className="mb-4">
                                    <h5 className="mb-3">3️⃣ 配送方式（有預設值）</h5>
                                    <small className="text-muted d-block mb-2">
                                        您選擇: {formData.shippingMethod}
                                    </small>
                                    <div className="form-check">
                                        <input
                                            id="standard"
                                            name="shippingMethod"
                                            type="radio"
                                            className="form-check-input"
                                            value="standard"
                                            checked={formData.shippingMethod === 'standard'}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="standard" className="form-check-label">
                                            🚚 標準配送（3-5 個工作天）- 免費
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            id="express"
                                            name="shippingMethod"
                                            type="radio"
                                            className="form-check-input"
                                            value="express"
                                            checked={formData.shippingMethod === 'express'}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="express" className="form-check-label">
                                            🚀 快速配送（1-2 個工作天）- NT$ 100
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            id="store"
                                            name="shippingMethod"
                                            type="radio"
                                            className="form-check-input"
                                            value="store"
                                            checked={formData.shippingMethod === 'store'}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="store" className="form-check-label">
                                            🏪 超商取貨 - NT$ 60
                                        </label>
                                    </div>
                                </div>

                                {/* 水平排列的 Radio - 尺寸 */}
                                <div className="mb-4">
                                    <h5 className="mb-3">4️⃣ 水平排列 - 尺寸選擇</h5>
                                    <small className="text-muted d-block mb-2">
                                        您選擇: {formData.size || '未選擇'}
                                    </small>
                                    <div className="d-flex gap-3">
                                        <div className="form-check">
                                            <input
                                                id="sizeS"
                                                name="size"
                                                type="radio"
                                                className="form-check-input"
                                                value="S"
                                                checked={formData.size === 'S'}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="sizeS" className="form-check-label">S</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                id="sizeM"
                                                name="size"
                                                type="radio"
                                                className="form-check-input"
                                                value="M"
                                                checked={formData.size === 'M'}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="sizeM" className="form-check-label">M</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                id="sizeL"
                                                name="size"
                                                type="radio"
                                                className="form-check-input"
                                                value="L"
                                                checked={formData.size === 'L'}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="sizeL" className="form-check-label">L</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                id="sizeXL"
                                                name="size"
                                                type="radio"
                                                className="form-check-input"
                                                value="XL"
                                                checked={formData.size === 'XL'}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="sizeXL" className="form-check-label">XL</label>
                                        </div>
                                    </div>
                                </div>

                                {/* 星級評分 */}
                                <div className="mb-4">
                                    <h5 className="mb-3">5️⃣ 星級評分</h5>
                                    <small className="text-muted d-block mb-2">
                                        您的評分: {formData.rating ? `${formData.rating} 星` : '未評分'}
                                    </small>
                                    <div className="d-flex gap-2">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <div key={star} className="form-check">
                                                <input
                                                    id={`star${star}`}
                                                    name="rating"
                                                    type="radio"
                                                    className="form-check-input d-none"
                                                    value={star}
                                                    checked={formData.rating === String(star)}
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    htmlFor={`star${star}`}
                                                    className="form-check-label"
                                                    style={{ cursor: 'pointer', fontSize: '2rem' }}
                                                >
                                                    {formData.rating >= star ? '⭐' : '☆'}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg w-100">
                                    🚀 送出表單
                                </button>
                            </form>

                            {/* 顯示提交結果 */}
                            {submittedData && (
                                <div className="alert alert-success mt-4" role="alert">
                                    <h5 className="alert-heading">✅ 表單提交成功！</h5>
                                    <hr />
                                    <p><strong>👤 性別:</strong> {submittedData.gender}</p>
                                    <p><strong>💳 付款方式:</strong> {submittedData.paymentMethod}</p>
                                    <p><strong>🚚 配送方式:</strong> {submittedData.shippingMethod}</p>
                                    <p><strong>👕 尺寸:</strong> {submittedData.size}</p>
                                    <p><strong>⭐ 評分:</strong> {submittedData.rating} 星</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-code-slash me-2"></i>
                                程式碼範例
                            </h3>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`import { useState } from 'react';

function RadioExample() {
  const [formData, setFormData] = useState({
    gender: '',
    paymentMethod: '',
    shippingMethod: 'standard' // 預設值
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <form>
      {/* 基本單選 */}
      <div>
        <input
          type="radio"
          name="gender"
          value="男性"
          checked={formData.gender === '男性'}
          onChange={handleChange}
        />
        <label>男性</label>
        
        <input
          type="radio"
          name="gender"
          value="女性"
          checked={formData.gender === '女性'}
          onChange={handleChange}
        />
        <label>女性</label>
      </div>
      
      {/* 預設值 */}
      <input
        type="radio"
        name="shippingMethod"
        value="standard"
        checked={formData.shippingMethod === 'standard'}
        onChange={handleChange}
      />
    </form>
  );
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm bg-light">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-lightbulb me-2 text-warning"></i>
                                最佳實踐
                            </h3>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>同一 name:</strong> 同組 radio 必須使用相同 name
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>預設值:</strong> 常用選項可設為預設值
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>必填驗證:</strong> 重要選項應加入 required
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 選項過多時考慮使用 select
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
