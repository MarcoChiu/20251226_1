import { useEffect } from 'react';
import obj from './05.js';
import { fn } from './05.js';
import * as all from './05.js';

export default function EsModulePage() {
    useEffect(() => {
        //預設匯出
        obj.fn();
        //具名匯出
        fn();
        //全部匯出
        all.fn();
    }, []);

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-box-seam me-3"></i>ES modules</h1><p className="lead mb-0">模組化開發與匯出匯入機制</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">匯出方式</h5><ul className="text-muted mb-0"><li>Default Export</li><li>Named Export</li><li>Re-export</li><li>Dynamic Import</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-arrow-right-circle text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">匯入方式</h5><ul className="text-muted mb-0"><li>Import Default</li><li>Import Named</li><li>Import All (*)</li><li>Import Alias</li></ul></div></div></div></div></div></div></div></div>
            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2"></i>互動範例</h3><div className="container mt-2">
                <div className="alert alert-info">此頁面為 ES Modules 測試，請開啟 Console 查看輸出結果。</div>
            </div>
            </div></div></div></div>
        </div>
    );
};
