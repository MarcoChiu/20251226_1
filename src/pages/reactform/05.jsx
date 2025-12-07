import { useState } from 'react';

export default function FilePage() {
    const [formData, setFormData] = useState({
        singleFile: null,
        multipleFiles: [],
        imageFile: null,
        imagePreview: null
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleSingleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            singleFile: file
        }));
    };

    const handleMultipleFilesChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData(prev => ({
            ...prev,
            multipleFiles: files
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    imageFile: file,
                    imagePreview: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    };

    async function formAction(formData) {
        const data = {
            singleFile: formData.get("singleFile"),
            multipleFiles: formData.getAll("multipleFiles"),
            imageFile: formData.get("imageFile")
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
                        <i className="bi bi-file-earmark-arrow-up me-3"></i>
                        File 檔案上傳
                    </h1>
                    <p className="lead mb-0">單檔、多檔上傳與圖片預覽</p>
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
                                            <h5 className="mb-2">上傳功能</h5>
                                            <ul className="text-muted mb-0">
                                                <li>單一檔案上傳</li>
                                                <li>多檔案上傳</li>
                                                <li>圖片即時預覽</li>
                                                <li>檔案資訊顯示</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-success bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-image text-success fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">實用功能</h5>
                                            <ul className="text-muted mb-0">
                                                <li>FileReader API</li>
                                                <li>檔案大小格式化</li>
                                                <li>檔案類型限制</li>
                                                <li>拖放上傳支援</li>
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
                                {/* 單一檔案上傳 */}
                                <div className="mb-4">
                                    <h5 className="mb-3">1️⃣ 單一檔案上傳</h5>
                                    <label htmlFor="singleFile" className="form-label">選擇檔案</label>
                                    <input
                                        id="singleFile"
                                        name="singleFile"
                                        type="file"
                                        className="form-control"
                                        onChange={handleSingleFileChange}
                                    />
                                    {formData.singleFile && (
                                        <div className="alert alert-info mt-2">
                                            <p className="mb-1"><strong>📄 檔案名稱:</strong> {formData.singleFile.name}</p>
                                            <p className="mb-1"><strong>📊 檔案大小:</strong> {formatFileSize(formData.singleFile.size)}</p>
                                            <p className="mb-0"><strong>📋 檔案類型:</strong> {formData.singleFile.type || '未知'}</p>
                                        </div>
                                    )}
                                </div>

                                {/* 多檔案上傳 */}
                                <div className="mb-4">
                                    <h5 className="mb-3">2️⃣ 多檔案上傳</h5>
                                    <label htmlFor="multipleFiles" className="form-label">選擇多個檔案</label>
                                    <input
                                        id="multipleFiles"
                                        name="multipleFiles"
                                        type="file"
                                        className="form-control"
                                        multiple
                                        onChange={handleMultipleFilesChange}
                                    />
                                    <small className="text-muted">按住 Ctrl (Windows) 或 Cmd (Mac) 可選擇多個檔案</small>
                                    {formData.multipleFiles.length > 0 && (
                                        <div className="alert alert-info mt-2">
                                            <p className="mb-2"><strong>已選擇 {formData.multipleFiles.length} 個檔案:</strong></p>
                                            <ul className="mb-0">
                                                {formData.multipleFiles.map((file, index) => (
                                                    <li key={index}>
                                                        {file.name} ({formatFileSize(file.size)})
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* 限制檔案類型 - 圖片 */}
                                <div className="mb-4">
                                    <h5 className="mb-3">3️⃣ 限制檔案類型 - 僅圖片</h5>
                                    <label htmlFor="imageFile" className="form-label">選擇圖片</label>
                                    <input
                                        id="imageFile"
                                        name="imageFile"
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                    <small className="text-muted">僅接受圖片檔案（JPG, PNG, GIF 等）</small>
                                    {formData.imagePreview && (
                                        <div className="mt-3">
                                            <p className="mb-2"><strong>圖片預覽:</strong></p>
                                            <img
                                                src={formData.imagePreview}
                                                alt="預覽"
                                                className="img-thumbnail"
                                                style={{ maxWidth: '300px', maxHeight: '300px' }}
                                            />
                                            <div className="alert alert-info mt-2">
                                                <p className="mb-1"><strong>📄 檔案名稱:</strong> {formData.imageFile.name}</p>
                                                <p className="mb-0"><strong>📊 檔案大小:</strong> {formatFileSize(formData.imageFile.size)}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* 限制檔案類型 - 文件 */}
                                <div className="mb-4">
                                    <h5 className="mb-3">4️⃣ 限制檔案類型 - 文件</h5>
                                    <label htmlFor="documentFile" className="form-label">選擇文件</label>
                                    <input
                                        id="documentFile"
                                        name="documentFile"
                                        type="file"
                                        className="form-control"
                                        accept=".pdf,.doc,.docx,.txt"
                                    />
                                    <small className="text-muted">僅接受 PDF, DOC, DOCX, TXT 檔案</small>
                                </div>

                                {/* 自訂樣式的檔案上傳 */}
                                <div className="mb-4">
                                    <h5 className="mb-3">5️⃣ 自訂樣式的檔案上傳</h5>
                                    <div className="border border-2 border-dashed rounded p-4 text-center" style={{ cursor: 'pointer' }}>
                                        <input
                                            id="customFile"
                                            name="customFile"
                                            type="file"
                                            className="d-none"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    alert(`已選擇: ${file.name}`);
                                                }
                                            }}
                                        />
                                        <label htmlFor="customFile" style={{ cursor: 'pointer' }}>
                                            <div className="mb-2" style={{ fontSize: '3rem' }}>📤</div>
                                            <p className="mb-1 fw-bold">點擊或拖曳檔案到此處上傳</p>
                                            <small className="text-muted">支援所有檔案格式</small>
                                        </label>
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
                                    <p><strong>📁 單一檔案:</strong> {submittedData.singleFile ? submittedData.singleFile.name : '無'}</p>
                                    <p><strong>📁 多檔案:</strong> {submittedData.multipleFiles.length} 個檔案</p>
                                    {submittedData.multipleFiles.length > 0 && (
                                        <ul>
                                            {submittedData.multipleFiles.map((file, index) => (
                                                <li key={index}>{file.name}</li>
                                            ))}
                                        </ul>
                                    )}
                                    <p><strong>🖼️ 圖片檔案:</strong> {submittedData.imageFile ? submittedData.imageFile.name : '無'}</p>
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

function FileUploadExample() {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  
  // 單一檔案
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  // 多檔案
  const handleMultipleFiles = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
  };
  
  // 圖片預覽
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <form>
      {/* 單一檔案 */}
      <input
        type="file"
        onChange={handleFileChange}
      />
      
      {/* 多檔案 */}
      <input
        type="file"
        multiple
        onChange={handleMultipleFiles}
      />
      
      {/* 限制檔案類型 */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      
      {imagePreview && <img src={imagePreview} alt="Preview" />}
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
                                            <strong>限制類型:</strong> 使用 accept 屬性限制檔案類型
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>大小驗證:</strong> 上傳前檢查檔案大小
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>預覽功能:</strong> 圖片上傳應提供預覽
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 忽略檔案大小和類型驗證
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
