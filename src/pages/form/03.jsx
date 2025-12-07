import { useState } from 'react';

export default function CheckboxPage() {
    const [formData, setFormData] = useState({
        singleCheckbox: false,
        agreeTerms: false,
        newsletter: false,
        hobbies: [],
        skills: [],
        allSkills: false
    });

    const [submittedData, setSubmittedData] = useState(null);

    // 興趣選項
    const hobbyOptions = [
        { id: 'reading', label: '📚 閱讀', value: '閱讀' },
        { id: 'music', label: '🎵 音樂', value: '音樂' },
        { id: 'sports', label: '⚽ 運動', value: '運動' },
        { id: 'travel', label: '✈️ 旅遊', value: '旅遊' },
        { id: 'cooking', label: '🍳 烹飪', value: '烹飪' },
        { id: 'gaming', label: '🎮 遊戲', value: '遊戲' }
    ];

    // 技能選項
    const skillOptions = [
        { id: 'html', label: 'HTML', value: 'HTML' },
        { id: 'css', label: 'CSS', value: 'CSS' },
        { id: 'javascript', label: 'JavaScript', value: 'JavaScript' },
        { id: 'react', label: 'React', value: 'React' },
        { id: 'vue', label: 'Vue', value: 'Vue' },
        { id: 'nodejs', label: 'Node.js', value: 'Node.js' }
    ];

    // 處理單個 checkbox
    const handleSingleChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: checked
        }));
    };

    // 處理多個 checkbox（興趣）
    const handleHobbyChange = (value) => {
        setFormData(prev => {
            const hobbies = prev.hobbies.includes(value)
                ? prev.hobbies.filter(h => h !== value)
                : [...prev.hobbies, value];
            return { ...prev, hobbies };
        });
    };

    // 處理多個 checkbox（技能）
    const handleSkillChange = (value) => {
        setFormData(prev => {
            const skills = prev.skills.includes(value)
                ? prev.skills.filter(s => s !== value)
                : [...prev.skills, value];
            return { ...prev, skills };
        });
    };

    // 處理全選/取消全選
    const handleSelectAll = (e) => {
        const { checked } = e.target;
        setFormData(prev => ({
            ...prev,
            allSkills: checked,
            skills: checked ? skillOptions.map(s => s.value) : []
        }));
    };

    async function formAction(formData) {
        const data = {
            singleCheckbox: formData.get("singleCheckbox"),
            agreeTerms: formData.get("agreeTerms"),
            newsletter: formData.get("newsletter"),
            hobbies: formData.getAll("hobbies"),
            skills: formData.getAll("skills")
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
                        <i className="bi bi-check-square me-3"></i>
                        Checkbox 複選框
                    </h1>
                    <p className="lead mb-0">單選、多選與全選功能應用</p>
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
                                            <h5 className="mb-2">複選功能</h5>
                                            <ul className="text-muted mb-0">
                                                <li>單一複選框</li>
                                                <li>多選群組</li>
                                                <li>全選/取消全選</li>
                                                <li>動態選項管理</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-success bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-list-check text-success fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">實用場景</h5>
                                            <ul className="text-muted mb-0">
                                                <li>條款同意</li>
                                                <li>興趣愛好選擇</li>
                                                <li>技能多選</li>
                                                <li>即時資料收集</li>
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
                                {/* 單個 Checkbox */}
                                <div className="mb-4">
                                    <h5 className="mb-3">1️⃣ 基本單個核取方塊</h5>
                                    <div className="form-check">
                                        <input
                                            id="singleCheckbox"
                                            name="singleCheckbox"
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={formData.singleCheckbox}
                                            onChange={handleSingleChange}
                                        />
                                        <label htmlFor="singleCheckbox" className="form-check-label">
                                            我同意接收促銷訊息
                                        </label>
                                    </div>
                                    <small className="text-muted ms-4">
                                        狀態: {formData.singleCheckbox ? '✅ 已勾選' : '❌ 未勾選'}
                                    </small>
                                </div>

                                {/* 多個獨立的 Checkbox */}
                                <div className="mb-4">
                                    <h5 className="mb-3">2️⃣ 多個獨立核取方塊</h5>
                                    <div className="form-check">
                                        <input
                                            id="agreeTerms"
                                            name="agreeTerms"
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={formData.agreeTerms}
                                            onChange={handleSingleChange}
                                            required
                                        />
                                        <label htmlFor="agreeTerms" className="form-check-label">
                                            我已閱讀並同意服務條款 <span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="form-check mt-2">
                                        <input
                                            id="newsletter"
                                            name="newsletter"
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={formData.newsletter}
                                            onChange={handleSingleChange}
                                        />
                                        <label htmlFor="newsletter" className="form-check-label">
                                            訂閱電子報
                                        </label>
                                    </div>
                                    <small className="text-muted ms-4 d-block mt-2">
                                        服務條款: {formData.agreeTerms ? '✅' : '❌'} |
                                        電子報: {formData.newsletter ? '✅' : '❌'}
                                    </small>
                                </div>

                                {/* 多選 Checkbox 群組（興趣） */}
                                <div className="mb-4">
                                    <h5 className="mb-3">3️⃣ 多選核取方塊群組 - 興趣</h5>
                                    <small className="text-muted d-block mb-2">
                                        已選擇 {formData.hobbies.length} 項: {formData.hobbies.join(', ') || '無'}
                                    </small>
                                    <div className="row">
                                        {hobbyOptions.map(hobby => (
                                            <div key={hobby.id} className="col-md-4 mb-2">
                                                <div className="form-check">
                                                    <input
                                                        id={hobby.id}
                                                        name="hobbies"
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        value={hobby.value}
                                                        checked={formData.hobbies.includes(hobby.value)}
                                                        onChange={() => handleHobbyChange(hobby.value)}
                                                    />
                                                    <label htmlFor={hobby.id} className="form-check-label">
                                                        {hobby.label}
                                                    </label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 全選/取消全選 */}
                                <div className="mb-4">
                                    <h5 className="mb-3">4️⃣ 全選/取消全選 - 技能</h5>
                                    <div className="form-check mb-3 border-bottom pb-2">
                                        <input
                                            id="allSkills"
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={formData.allSkills || (formData.skills.length === skillOptions.length && skillOptions.length > 0)}
                                            onChange={handleSelectAll}
                                        />
                                        <label htmlFor="allSkills" className="form-check-label fw-bold">
                                            🎯 全選/取消全選
                                        </label>
                                    </div>
                                    <small className="text-muted d-block mb-2">
                                        已選擇 {formData.skills.length}/{skillOptions.length} 項: {formData.skills.join(', ') || '無'}
                                    </small>
                                    <div className="row">
                                        {skillOptions.map(skill => (
                                            <div key={skill.id} className="col-md-4 mb-2">
                                                <div className="form-check">
                                                    <input
                                                        id={skill.id}
                                                        name="skills"
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        value={skill.value}
                                                        checked={formData.skills.includes(skill.value)}
                                                        onChange={() => handleSkillChange(skill.value)}
                                                    />
                                                    <label htmlFor={skill.id} className="form-check-label">
                                                        {skill.label}
                                                    </label>
                                                </div>
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
                                    <p><strong>☑️ 促銷訊息:</strong> {submittedData.singleCheckbox === 'on' ? '已同意' : '未同意'}</p>
                                    <p><strong>☑️ 服務條款:</strong> {submittedData.agreeTerms === 'on' ? '已同意' : '未同意'}</p>
                                    <p><strong>☑️ 電子報:</strong> {submittedData.newsletter === 'on' ? '已訂閱' : '未訂閱'}</p>
                                    <p><strong>📚 興趣:</strong> {submittedData.hobbies.join(', ') || '無'}</p>
                                    <p><strong>💻 技能:</strong> {submittedData.skills.join(', ') || '無'}</p>
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

function CheckboxExample() {
  const [hobbies, setHobbies] = useState([]);
  
  const handleHobbyChange = (value) => {
    setHobbies(prev => 
      prev.includes(value)
        ? prev.filter(h => h !== value)
        : [...prev, value]
    );
  };
  
  // 全選/取消全選
  const [allSkills, setAllSkills] = useState(false);
  const [skills, setSkills] = useState([]);
  
  const handleSelectAll = (e) => {
    const { checked } = e.target;
    setAllSkills(checked);
    setSkills(checked ? allOptions.map(s => s.value) : []);
  };
  
  return (
    <form>
      {/* 單一複選框 */}
      <input type="checkbox" name="agree" />
      
      {/* 多選群組 */}
      {options.map(option => (
        <input
          key={option.value}
          type="checkbox"
          value={option.value}
          checked={hobbies.includes(option.value)}
          onChange={() => handleHobbyChange(option.value)}
        />
      ))}
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
                                            <strong>使用陣列:</strong> 管理多選狀態最佳方式
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>提供全選:</strong> 多選項時增加全選功能
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>清晰標籤:</strong> 每個 checkbox 都應有明確標籤
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 過多選項應考慮分頁或搜尋
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
