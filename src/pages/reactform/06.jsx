import { useState } from 'react';

export default function TextareaPage() {
    const [formData, setFormData] = useState({
        basicTextarea: '',
        limitedTextarea: '',
        autoResizeTextarea: '',
        richTextarea: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const maxLength = 200;
    const remainingChars = maxLength - formData.limitedTextarea.length;

    async function formAction(formData) {
        const data = {
            basicTextarea: formData.get("basicTextarea"),
            limitedTextarea: formData.get("limitedTextarea"),
            autoResizeTextarea: formData.get("autoResizeTextarea"),
            richTextarea: formData.get("richTextarea")
        };
        console.log('提交的資料:', data);
        setSubmittedData(data);
    }

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-textarea-t me-3"></i>Textarea 多行文字</h1><p className="lead mb-0">基本、字數限制與自動調整高度</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">多行輸入</h5><ul className="text-muted mb-0"><li>基本多行文字方塊</li><li>字數限制功能</li><li>自動調整高度</li><li>即時字數統計</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-chat-text text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">應用場景</h5><ul className="text-muted mb-0"><li>留言評論</li><li>詳細描述</li><li>長文本輸入</li><li>表單備註</li></ul></div></div></div></div></div></div></div></div>
            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3><form action={formAction}>
                {/* 基本 Textarea */}
                <div className="mb-4">
                    <h5 className="mb-3">1️⃣ 基本多行文字</h5>
                    <label htmlFor="basicTextarea" className="form-label">留言</label>
                    <small className="text-muted ms-2">字數: {formData.basicTextarea.length}</small>
                    <textarea
                        id="basicTextarea"
                        name="basicTextarea"
                        className="form-control"
                        rows="4"
                        value={formData.basicTextarea}
                        onChange={handleChange}
                        placeholder="請輸入您的留言..."
                    />
                </div>

                {/* 有字數限制的 Textarea */}
                <div className="mb-4">
                    <h5 className="mb-3">2️⃣ 有字數限制的多行文字</h5>
                    <label htmlFor="limitedTextarea" className="form-label">簡短描述</label>
                    <small className={`ms-2 ${remainingChars < 20 ? 'text-danger' : 'text-muted'}`}>
                        剩餘字數: {remainingChars}/{maxLength}
                    </small>
                    <textarea
                        id="limitedTextarea"
                        name="limitedTextarea"
                        className="form-control"
                        rows="3"
                        value={formData.limitedTextarea}
                        onChange={handleChange}
                        maxLength={maxLength}
                        placeholder={`最多 ${maxLength} 個字...`}
                    />
                    {remainingChars < 20 && (
                        <small className="text-danger">⚠️ 字數即將達到上限</small>
                    )}
                </div>

                {/* 自動調整高度的 Textarea */}
                <div className="mb-4">
                    <h5 className="mb-3">3️⃣ 自動調整高度</h5>
                    <label htmlFor="autoResizeTextarea" className="form-label">詳細說明</label>
                    <small className="text-muted ms-2">字數: {formData.autoResizeTextarea.length}</small>
                    <textarea
                        id="autoResizeTextarea"
                        name="autoResizeTextarea"
                        className="form-control"
                        value={formData.autoResizeTextarea}
                        onChange={handleChange}
                        placeholder="輸入內容會自動調整高度..."
                        style={{
                            minHeight: '60px',
                            height: 'auto',
                            resize: 'none',
                            overflow: 'hidden'
                        }}
                        onInput={(e) => {
                            e.target.style.height = 'auto';
                            e.target.style.height = e.target.scrollHeight + 'px';
                        }}
                    />
                </div>

                {/* 必填的 Textarea */}
                <div className="mb-4">
                    <h5 className="mb-3">4️⃣ 必填欄位</h5>
                    <label htmlFor="richTextarea" className="form-label">
                        意見回饋 <span className="text-danger">*</span>
                    </label>
                    <small className="text-muted ms-2">字數: {formData.richTextarea.length}</small>
                    <textarea
                        id="richTextarea"
                        name="richTextarea"
                        className="form-control"
                        rows="5"
                        value={formData.richTextarea}
                        onChange={handleChange}
                        required
                        minLength={10}
                        placeholder="請輸入至少 10 個字的意見回饋..."
                    />
                    <small className="text-muted">至少需要 10 個字</small>
                </div>

                {/* 禁用的 Textarea */}
                <div className="mb-4">
                    <h5 className="mb-3">5️⃣ 禁用狀態</h5>
                    <label htmlFor="disabledTextarea" className="form-label">系統訊息（唯讀）</label>
                    <textarea
                        id="disabledTextarea"
                        className="form-control"
                        rows="3"
                        value="這是一個禁用的文字區域，無法編輯。\n可以用來顯示系統訊息或唯讀內容。"
                        disabled
                    />
                </div>

                {/* 唯讀的 Textarea */}
                <div className="mb-4">
                    <h5 className="mb-3">6️⃣ 唯讀狀態</h5>
                    <label htmlFor="readonlyTextarea" className="form-label">使用條款</label>
                    <textarea
                        id="readonlyTextarea"
                        className="form-control"
                        rows="4"
                        value="第一條：使用者需遵守相關法律法規。\n第二條：禁止發布不當內容。\n第三條：保護個人隱私資料。\n第四條：尊重智慧財產權。"
                        readOnly
                    />
                    <small className="text-muted">此內容為唯讀，無法修改</small>
                </div>

                {/* 不同大小的 Textarea */}
                <div className="mb-4">
                    <h5 className="mb-3">7️⃣ 不同大小</h5>
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <label className="form-label">小型</label>
                            <textarea
                                className="form-control form-control-sm"
                                rows="2"
                                placeholder="小型文字區域"
                            />
                        </div>
                        <div className="col-md-4 mb-2">
                            <label className="form-label">標準</label>
                            <textarea
                                className="form-control"
                                rows="2"
                                placeholder="標準文字區域"
                            />
                        </div>
                        <div className="col-md-4 mb-2">
                            <label className="form-label">大型</label>
                            <textarea
                                className="form-control form-control-lg"
                                rows="2"
                                placeholder="大型文字區域"
                            />
                        </div>
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
                        <div className="mb-3">
                            <strong>📝 基本留言:</strong>
                            <pre className="bg-light p-2 rounded mt-1">{submittedData.basicTextarea || '(空白)'}</pre>
                        </div>
                        <div className="mb-3">
                            <strong>📝 簡短描述:</strong>
                            <pre className="bg-light p-2 rounded mt-1">{submittedData.limitedTextarea || '(空白)'}</pre>
                        </div>
                        <div className="mb-3">
                            <strong>📝 詳細說明:</strong>
                            <pre className="bg-light p-2 rounded mt-1">{submittedData.autoResizeTextarea || '(空白)'}</pre>
                        </div>
                        <div className="mb-0">
                            <strong>📝 意見回饋:</strong>
                            <pre className="bg-light p-2 rounded mt-1">{submittedData.richTextarea || '(空白)'}</pre>
                        </div>
                    </div>
                )}
            </div></div></div></div>

            <div className="row"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h3 className="h4 mb-4"><i className="bi bi-code-slash me-2 text-success"></i>程式碼範例</h3><div className="row g-4"><div className="col-12"><div className="bg-light p-4 rounded-3"><h5 className="mb-3">基本 Textarea 與字數限制</h5><pre className="bg-white p-3 rounded border mb-0"><code>{`const [text, setText] = useState('');
const maxLength = 200;

const handleChange = (e) => {
  const value = e.target.value;
  if (value.length <= maxLength) {
    setText(value);
  }
};

<textarea
  value={text}
  onChange={handleChange}
  maxLength={maxLength}
  rows={4}
  className="form-control"
/>
<small>{text.length}/{maxLength}</small>`}</code></pre></div></div><div className="col-12"><div className="bg-light p-4 rounded-3"><h5 className="mb-3">自動調整高度</h5><pre className="bg-white p-3 rounded border mb-0"><code>{`const textareaRef = useRef(null);

const autoResize = () => {
  if (textareaRef.current) {
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = 
      textareaRef.current.scrollHeight + 'px';
  }
};

<textarea
  ref={textareaRef}
  onChange={(e) => {
    setText(e.target.value);
    autoResize();
  }}
  style={{ overflow: 'hidden', resize: 'none' }}
/>`}</code></pre></div></div></div></div></div></div></div>

            <div className="row mt-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h3 className="h4 mb-4"><i className="bi bi-lightbulb me-2 text-warning"></i>最佳實踐</h3><div className="row g-4"><div className="col-md-6"><div className="card border-success"><div className="card-body"><h5 className="text-success mb-3"><i className="bi bi-check-circle me-2"></i>建議作法</h5><ul className="mb-0"><li>提供字數限制和即時顯示</li><li>使用 placeholder 提供輸入提示</li><li>適當設定 rows 屬性</li><li>考慮自動調整高度功能</li><li>長文本使用 resize: vertical</li></ul></div></div></div><div className="col-md-6"><div className="card border-danger"><div className="card-body"><h5 className="text-danger mb-3"><i className="bi bi-x-circle me-2"></i>避免錯誤</h5><ul className="mb-0"><li>不要禁用 resize 而未提供替代方案</li><li>避免 rows 值過小影響體驗</li><li>不要忘記驗證內容長度</li><li>注意行高與滿版問題</li><li>處理換行字元 \\n</li></ul></div></div></div></div></div></div></div></div>
        </div>
    )
};
