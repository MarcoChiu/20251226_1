import { useState } from 'react';

export default function InputPage() {
    const [formData, setFormData] = useState({
        text: '',
        email: '',
        tel: '',
        url: '',
        search: '',
        password: '',
        number: 0,
        date: '',
        time: '',
        datetimeLocal: '',
        month: '',
        week: '',
        range: 50,
        color: '#667eea'
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const formAction = async (formData) => {
        const data = {
            text: formData.get("text"),//name='text'
            email: formData.get("email"),
            tel: formData.get("tel"),
            url: formData.get("url"),
            search: formData.get("search"),
            password: formData.get("password"),
            number: formData.get("number"),
            date: formData.get("date"),
            time: formData.get("time"),
            datetimeLocal: formData.get("datetimeLocal"),
            month: formData.get("month"),
            week: formData.get("week"),
            range: formData.get("range"),
            color: formData.get("color")
        };
        console.log('提交的資料:', data);
        setSubmittedData(data);
    }

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
                        <i className="bi bi-input-cursor-text me-3"></i>
                        Input 輸入元素
                    </h1>
                    <p className="lead mb-0">HTML5 完整 Input 類型展示與應用</p>
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
                                            <h5 className="mb-2">Input 類型</h5>
                                            <ul className="text-muted mb-0">
                                                <li>文字、Email、電話、網址輸入</li>
                                                <li>日期、時間、月份、週選擇</li>
                                                <li>數字、範圍滑桿、顏色選擇</li>
                                                <li>密碼、搜尋等特殊類型</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-success bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-ui-checks text-success fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">即時預覽</h5>
                                            <ul className="text-muted mb-0">
                                                <li>即時顯示輸入值</li>
                                                <li>視覺化預覽效果</li>
                                                <li>表單資料收集與展示</li>
                                                <li>內建驗證規則</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 互動範例 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-code-square me-2 text-primary"></i>
                                互動範例
                            </h3>
                            <form action={formAction}>
                                {/* Text */}
                                <div className="mb-3">
                                    <label htmlFor="text" className="form-label">📄 文字</label>
                                    <span className="text-muted ms-2 small">您輸入: {formData.text}</span>
                                    <input
                                        id="text"
                                        name="text"
                                        type="text"
                                        className="form-control"
                                        value={formData.text}
                                        onChange={handleChange}
                                        placeholder="請輸入文字"
                                    />
                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">📧 Email 地址</label>
                                    <span className="text-muted ms-2 small">您輸入: {formData.email}</span>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@email.com"
                                    />
                                </div>

                                {/* Tel */}
                                <div className="mb-3">
                                    <label htmlFor="tel" className="form-label">📱 電話號碼</label>
                                    <span className="text-muted ms-2 small">您輸入: {formData.tel}</span>
                                    <input
                                        id="tel"
                                        name="tel"
                                        type="tel"
                                        className="form-control"
                                        value={formData.tel}
                                        onChange={handleChange}
                                        placeholder="0912345678"
                                        pattern="[0-9]{10}"
                                    />
                                    <small className="text-muted">格式: 0912345678</small>
                                </div>

                                {/* URL */}
                                <div className="mb-3">
                                    <label htmlFor="url" className="form-label">🔗 網址</label>
                                    <span className="text-muted ms-2 small">您輸入: {formData.url}</span>
                                    <input
                                        id="url"
                                        name="url"
                                        type="url"
                                        className="form-control"
                                        value={formData.url}
                                        onChange={handleChange}
                                        placeholder="https://example.com"
                                    />
                                </div>

                                {/* Search */}
                                <div className="mb-3">
                                    <label htmlFor="search" className="form-label">🔍 搜尋</label>
                                    <span className="text-muted ms-2 small">您輸入: {formData.search}</span>
                                    <input
                                        id="search"
                                        name="search"
                                        type="search"
                                        className="form-control"
                                        value={formData.search}
                                        onChange={handleChange}
                                        placeholder="搜尋..."
                                    />
                                </div>

                                {/* Password */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">🔒 密碼</label>
                                    <span className="text-muted ms-2 small">長度: {formData.password.length} 字元</span>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        value={formData.password}
                                        onChange={handleChange}
                                        minLength="6"
                                        placeholder="至少 6 個字元"
                                    />
                                </div>

                                {/* Number */}
                                <div className="mb-3">
                                    <label htmlFor="number" className="form-label">🔢 數字</label>
                                    <span className="text-muted ms-2 small">您輸入: {formData.number}</span>
                                    <input
                                        id="number"
                                        name="number"
                                        type="number"
                                        className="form-control"
                                        value={formData.number}
                                        onChange={handleChange}
                                        min="0"
                                        max="999"
                                        step="1"
                                        placeholder="請輸入數字 (0-999)"
                                    />
                                    <small className="text-muted">範圍: 0-999</small>
                                </div>

                                {/* Date */}
                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">📅 日期</label>
                                    <span className="text-muted ms-2 small">您選擇: {formData.date}</span>
                                    <input
                                        id="date"
                                        name="date"
                                        type="date"
                                        className="form-control"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Time */}
                                <div className="mb-3">
                                    <label htmlFor="time" className="form-label">⏰ 時間</label>
                                    <span className="text-muted ms-2 small">您選擇: {formData.time}</span>
                                    <input
                                        id="time"
                                        name="time"
                                        type="time"
                                        className="form-control"
                                        value={formData.time}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Datetime-local */}
                                <div className="mb-3">
                                    <label htmlFor="datetimeLocal" className="form-label">📆 日期時間</label>
                                    <span className="text-muted ms-2 small">您選擇: {formData.datetimeLocal}</span>
                                    <input
                                        id="datetimeLocal"
                                        name="datetimeLocal"
                                        type="datetime-local"
                                        className="form-control"
                                        value={formData.datetimeLocal}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Month */}
                                <div className="mb-3">
                                    <label htmlFor="month" className="form-label">📆 月份</label>
                                    <span className="text-muted ms-2 small">您選擇: {formData.month}</span>
                                    <input
                                        id="month"
                                        name="month"
                                        type="month"
                                        className="form-control"
                                        value={formData.month}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Week */}
                                <div className="mb-3">
                                    <label htmlFor="week" className="form-label">📅 週</label>
                                    <span className="text-muted ms-2 small">您選擇: {formData.week}</span>
                                    <input
                                        id="week"
                                        name="week"
                                        type="week"
                                        className="form-control"
                                        value={formData.week}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Range */}
                                <div className="mb-3">
                                    <label htmlFor="range" className="form-label">🎚️ 範圍滑桿</label>
                                    <span className="text-muted ms-2 small">當前值: {formData.range}</span>
                                    <input
                                        id="range"
                                        name="range"
                                        type="range"
                                        className="form-range"
                                        value={formData.range}
                                        onChange={handleChange}
                                        min="0"
                                        max="100"
                                        step="1"
                                    />
                                    <div className="d-flex justify-content-between text-muted small">
                                        <span>0</span>
                                        <span>50</span>
                                        <span>100</span>
                                    </div>
                                </div>

                                {/* Color */}
                                <div className="mb-3">
                                    <label htmlFor="color" className="form-label">🎨 顏色選擇器</label>
                                    <span className="text-muted ms-2 small">您選擇: {formData.color}</span>
                                    <div className="d-flex align-items-center gap-3">
                                        <input
                                            id="color"
                                            name="color"
                                            type="color"
                                            className="form-control form-control-color"
                                            value={formData.color}
                                            onChange={handleChange}
                                            style={{ width: '80px', height: '40px' }}
                                        />
                                        <div
                                            className="rounded px-3 py-2 text-white"
                                            style={{ backgroundColor: formData.color }}
                                        >
                                            預覽顏色
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-lg w-100"
                                    style={{
                                        backgroundColor: formData.color,
                                        color: 'white',
                                        border: 'none',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    🚀 送出表單
                                </button>
                            </form>

                            {/* 顯示提交結果 */}
                            {submittedData && (
                                <div className="alert alert-success mt-4" role="alert">
                                    <h5 className="alert-heading">✅ 表單提交成功！</h5>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p><strong>📄 文字:</strong> {submittedData.text}</p>
                                            <p><strong>📧 Email:</strong> {submittedData.email}</p>
                                            <p><strong>📱 電話:</strong> {submittedData.tel}</p>
                                            <p><strong>🔗 網址:</strong> {submittedData.url}</p>
                                            <p><strong>🔍 搜尋:</strong> {submittedData.search}</p>
                                            <p><strong>🔒 密碼:</strong> {'*'.repeat(submittedData.password.length)}</p>
                                            <p><strong>🔢 數字:</strong> {submittedData.number}</p>
                                            <p><strong>📅 日期:</strong> {submittedData.date}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p><strong>⏰ 時間:</strong> {submittedData.time}</p>
                                            <p><strong>📆 日期時間:</strong> {submittedData.datetimeLocal}</p>
                                            <p><strong>📆 月份:</strong> {submittedData.month}</p>
                                            <p><strong>📅 週:</strong> {submittedData.week}</p>
                                            <p><strong>🎚️ 範圍:</strong> {submittedData.range}</p>
                                            <p>
                                                <strong>🎨 顏色:</strong>
                                                <span
                                                    className="ms-2 px-3 py-1 rounded text-white"
                                                    style={{ backgroundColor: submittedData.color }}
                                                >
                                                    {submittedData.color}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* 程式碼範例 */}
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

function InputExample() {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    date: '',
    color: '#667eea'
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <form>
      {/* 文字輸入 */}
      <input
        type="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="請輸入文字"
      />
      
      {/* Email 輸入 */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@email.com"
      />
      
      {/* 日期選擇 */}
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      
      {/* 顏色選擇 */}
      <input
        type="color"
        name="color"
        value={formData.color}
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
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>選擇正確類型:</strong> 使用適當的 input type 提供更好的使用者體驗
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>加入驗證:</strong> 使用 HTML5 驗證屬性（required, pattern 等）
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>提供提示:</strong> 使用 placeholder 和 label 引導使用者
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 過度使用 text type，應選擇專用類型
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
