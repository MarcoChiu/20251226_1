import { useState } from 'react';

export default function SelectPage() {
    const [formData, setFormData] = useState({
        singleSelect: '',
        multipleSelect: [],
        groupedSelect: '',
        citySelect: '',
        districtSelect: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value, options, multiple } = e.target;

        if (multiple) {
            // 處理多選下拉選單
            const selectedValues = Array.from(options)
                .filter(option => option.selected)
                .map(option => option.value);
            setFormData(prev => ({
                ...prev,
                [name]: selectedValues
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    // 城市與區域的聯動資料
    const cityData = {
        '台北市': ['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
        '新北市': ['板橋區', '三重區', '中和區', '永和區', '新莊區', '新店區', '樹林區', '鶯歌區', '三峽區', '淡水區', '汐止區', '瑞芳區'],
        '台中市': ['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區'],
        '台南市': ['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區'],
        '高雄市': ['新興區', '前金區', '苓雅區', '鹽埕區', '鼓山區', '旗津區', '前鎮區', '三民區', '楠梓區', '小港區', '左營區', '仁武區']
    };

    // 當城市改變時，重置區域選擇
    const handleCityChange = (e) => {
        const city = e.target.value;
        setFormData(prev => ({
            ...prev,
            citySelect: city,
            districtSelect: '' // 重置區域
        }));
    };

    async function formAction(formData) {
        const data = {
            singleSelect: formData.get("singleSelect"),
            multipleSelect: formData.getAll("multipleSelect"),
            groupedSelect: formData.get("groupedSelect"),
            citySelect: formData.get("citySelect"),
            districtSelect: formData.get("districtSelect")
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
                        <i className="bi bi-menu-button-wide me-3"></i>
                        Select 下拉選單
                    </h1>
                    <p className="lead mb-0">單選、多選、分組與聯動選單應用</p>
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
                                            <h5 className="mb-2">選單類型</h5>
                                            <ul className="text-muted mb-0">
                                                <li>基本單選下拉選單</li>
                                                <li>多選下拉選單</li>
                                                <li>分組選單</li>
                                                <li>聯動選單（城市/區域）</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-success bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-gear text-success fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">實用功能</h5>
                                            <ul className="text-muted mb-0">
                                                <li>即時顯示選擇值</li>
                                                <li>動態選項生成</li>
                                                <li>聯動資料更新</li>
                                                <li>表單資料收集</li>
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
                                {/* 基本單選下拉選單 */}
                                <div className="mb-3">
                                    <label htmlFor="singleSelect" className="form-label">📌 基本單選下拉選單</label>
                                    <span className="text-muted ms-2 small">您選擇: {formData.singleSelect || '未選擇'}</span>
                                    <select
                                        id="singleSelect"
                                        name="singleSelect"
                                        className="form-select"
                                        value={formData.singleSelect}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">請選擇...</option>
                                        <option value="選項1">選項 1</option>
                                        <option value="選項2">選項 2</option>
                                        <option value="選項3">選項 3</option>
                                        <option value="選項4">選項 4</option>
                                        <option value="選項5">選項 5</option>
                                    </select>
                                </div>

                                {/* 多選下拉選單 */}
                                <div className="mb-3">
                                    <label htmlFor="multipleSelect" className="form-label">📌 多選下拉選單</label>
                                    <span className="text-muted ms-2 small">
                                        已選擇 {formData.multipleSelect.length} 項: {formData.multipleSelect.join(', ') || '無'}
                                    </span>
                                    <select
                                        id="multipleSelect"
                                        name="multipleSelect"
                                        className="form-select"
                                        multiple
                                        size="5"
                                        value={formData.multipleSelect}
                                        onChange={handleChange}
                                    >
                                        <option value="蘋果">🍎 蘋果</option>
                                        <option value="香蕉">🍌 香蕉</option>
                                        <option value="橘子">🍊 橘子</option>
                                        <option value="葡萄">🍇 葡萄</option>
                                        <option value="西瓜">🍉 西瓜</option>
                                        <option value="草莓">🍓 草莓</option>
                                    </select>
                                    <small className="text-muted">按住 Ctrl (Windows) 或 Cmd (Mac) 可多選</small>
                                </div>

                                {/* 分組下拉選單 */}
                                <div className="mb-3">
                                    <label htmlFor="groupedSelect" className="form-label">📌 分組下拉選單</label>
                                    <span className="text-muted ms-2 small">您選擇: {formData.groupedSelect || '未選擇'}</span>
                                    <select
                                        id="groupedSelect"
                                        name="groupedSelect"
                                        className="form-select"
                                        value={formData.groupedSelect}
                                        onChange={handleChange}
                                    >
                                        <option value="">請選擇程式語言...</option>
                                        <optgroup label="前端">
                                            <option value="HTML">HTML</option>
                                            <option value="CSS">CSS</option>
                                            <option value="JavaScript">JavaScript</option>
                                            <option value="TypeScript">TypeScript</option>
                                            <option value="React">React</option>
                                            <option value="Vue">Vue</option>
                                        </optgroup>
                                        <optgroup label="後端">
                                            <option value="Python">Python</option>
                                            <option value="Java">Java</option>
                                            <option value="C#">C#</option>
                                            <option value="PHP">PHP</option>
                                            <option value="Node.js">Node.js</option>
                                        </optgroup>
                                        <optgroup label="資料庫">
                                            <option value="MySQL">MySQL</option>
                                            <option value="PostgreSQL">PostgreSQL</option>
                                            <option value="MongoDB">MongoDB</option>
                                            <option value="Redis">Redis</option>
                                        </optgroup>
                                    </select>
                                </div>

                                {/* 聯動下拉選單 - 城市 */}
                                <div className="mb-3">
                                    <label htmlFor="citySelect" className="form-label">📌 聯動下拉選單 - 城市</label>
                                    <span className="text-muted ms-2 small">您選擇: {formData.citySelect || '未選擇'}</span>
                                    <select
                                        id="citySelect"
                                        name="citySelect"
                                        className="form-select"
                                        value={formData.citySelect}
                                        onChange={handleCityChange}
                                    >
                                        <option value="">請選擇城市...</option>
                                        {Object.keys(cityData).map(city => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* 聯動下拉選單 - 區域 */}
                                <div className="mb-3">
                                    <label htmlFor="districtSelect" className="form-label">📌 聯動下拉選單 - 區域</label>
                                    <span className="text-muted ms-2 small">您選擇: {formData.districtSelect || '未選擇'}</span>
                                    <select
                                        id="districtSelect"
                                        name="districtSelect"
                                        className="form-select"
                                        value={formData.districtSelect}
                                        onChange={handleChange}
                                        disabled={!formData.citySelect}
                                    >
                                        <option value="">請選擇區域...</option>
                                        {formData.citySelect && cityData[formData.citySelect].map(district => (
                                            <option key={district} value={district}>{district}</option>
                                        ))}
                                    </select>
                                    {!formData.citySelect && (
                                        <small className="text-muted">請先選擇城市</small>
                                    )}
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
                                    <p><strong>📌 基本單選:</strong> {submittedData.singleSelect}</p>
                                    <p><strong>📌 多選:</strong> {submittedData.multipleSelect.join(', ') || '無'}</p>
                                    <p><strong>📌 分組選單:</strong> {submittedData.groupedSelect}</p>
                                    <p><strong>📌 城市:</strong> {submittedData.citySelect}</p>
                                    <p><strong>📌 區域:</strong> {submittedData.districtSelect}</p>
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

function SelectExample() {
  const [formData, setFormData] = useState({
    singleSelect: '',
    multipleSelect: []
  });
  
  const handleChange = (e) => {
    const { name, value, options, multiple } = e.target;
    
    if (multiple) {
      const selectedValues = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
      setFormData(prev => ({ ...prev, [name]: selectedValues }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  return (
    <form>
      {/* 單選下拉選單 */}
      <select value={formData.singleSelect} onChange={handleChange}>
        <option value="">請選擇...</option>
        <option value="選項1">選項 1</option>
        <option value="選項2">選項 2</option>
      </select>
      
      {/* 多選下拉選單 */}
      <select 
        multiple 
        value={formData.multipleSelect} 
        onChange={handleChange}
      >
        <option value="選項1">選項 1</option>
        <option value="選項2">選項 2</option>
        <option value="選項3">選項 3</option>
      </select>
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
                                            <strong>提供預設選項:</strong> 使用空值選項引導使用者選擇
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>使用分組:</strong> optgroup 讓選項更有組織
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>聯動選單:</strong> 根據前一個選擇動態更新後續選項
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 選項過多時應考慮使用搜尋或自動完成
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
