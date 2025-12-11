import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function AdvancedRoutingPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [inputPath, setInputPath] = useState('');

    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleGoForward = () => {
        navigate(1);
    };

    const handleCustomNavigate = () => {
        if (inputPath) {
            navigate(inputPath);
        }
    };

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
                        <i className="bi bi-bezier2 me-3"></i>
                        React Router Dom - 進階路由
                    </h1>
                    <p className="lead mb-0">useNavigate 與 useLocation Hook</p>
                </div>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        zIndex: 0
                    }}
                ></div>
            </div>

            {/* 當前位置資訊 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm bg-info bg-opacity-10">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-geo-alt me-2 text-info"></i>
                                useLocation - 當前位置資訊
                            </h3>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="p-3 bg-white rounded">
                                        <strong>路徑名稱 (pathname):</strong>
                                        <code className="d-block mt-2 text-primary">{location.pathname}</code>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-white rounded">
                                        <strong>搜尋參數 (search):</strong>
                                        <code className="d-block mt-2 text-primary">
                                            {location.search || '(無)'}
                                        </code>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-white rounded">
                                        <strong>雜湊值 (hash):</strong>
                                        <code className="d-block mt-2 text-primary">
                                            {location.hash || '(無)'}
                                        </code>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-white rounded">
                                        <strong>狀態 (state):</strong>
                                        <code className="d-block mt-2 text-primary">
                                            {JSON.stringify(location.state) || '(無)'}
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* useNavigate 示範 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-compass me-2 text-primary"></i>
                                useNavigate - 程式化導航
                            </h3>
                            
                            <div className="row g-3 mb-4">
                                <div className="col-md-6">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">基本導航</h5>
                                            <p className="text-muted small">使用絕對路徑導航到指定頁面</p>
                                            <div className="d-grid gap-2">
                                                <button 
                                                    className="btn btn-primary"
                                                    onClick={() => handleNavigate('/reactrouterdom/01')}
                                                >
                                                    前往基礎路由
                                                </button>
                                                <button 
                                                    className="btn btn-success"
                                                    onClick={() => handleNavigate('/reactrouterdom/03')}
                                                >
                                                    前往動態路由
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">歷史導航</h5>
                                            <p className="text-muted small">使用數字控制瀏覽器歷史記錄</p>
                                            <div className="d-grid gap-2">
                                                <button 
                                                    className="btn btn-outline-primary"
                                                    onClick={handleGoBack}
                                                >
                                                    <i className="bi bi-arrow-left me-2"></i>
                                                    上一頁 navigate(-1)
                                                </button>
                                                <button 
                                                    className="btn btn-outline-primary"
                                                    onClick={handleGoForward}
                                                >
                                                    下一頁 navigate(1)
                                                    <i className="bi bi-arrow-right ms-2"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">自訂路徑導航</h5>
                                            <p className="text-muted small">輸入路徑並導航</p>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="輸入路徑，例如: /reactrouterdom/01"
                                                    value={inputPath}
                                                    onChange={(e) => setInputPath(e.target.value)}
                                                />
                                                <button 
                                                    className="btn btn-primary"
                                                    onClick={handleCustomNavigate}
                                                >
                                                    導航
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">帶狀態的導航</h5>
                                            <p className="text-muted small">導航時傳遞額外資料</p>
                                            <button 
                                                className="btn btn-warning"
                                                onClick={() => navigate('/reactrouterdom/03', { 
                                                    state: { 
                                                        from: '進階路由頁面',
                                                        timestamp: new Date().toISOString()
                                                    } 
                                                })}
                                            >
                                                帶狀態導航到動態路由
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`import { useNavigate, useLocation } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  // 基本導航
  const goToAbout = () => {
    navigate('/about');
  };

  // 相對路徑導航
  const goToRelative = () => {
    navigate('../other');
  };

  // 歷史導航
  const goBack = () => {
    navigate(-1); // 返回上一頁
  };

  // 帶狀態的導航
  const goWithState = () => {
    navigate('/profile', { 
      state: { userId: 123 } 
    });
  };

  // 替換歷史記錄（不會增加新記錄）
  const replaceHistory = () => {
    navigate('/new-page', { replace: true });
  };

  // 讀取當前位置資訊
  console.log(location.pathname); // '/current/path'
  console.log(location.search);   // '?id=123'
  console.log(location.state);    // { userId: 123 }

  return (
    <div>
      <button onClick={goToAbout}>前往關於</button>
      <button onClick={goBack}>返回</button>
    </div>
  );
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* 最佳實踐 */}
            <div className="row">
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
                                            <strong>使用情境:</strong> 表單提交後使用 <code>navigate</code> 進行重定向
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>傳遞狀態:</strong> 使用 <code>state</code> 傳遞臨時資料
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>replace 選項:</strong> 登入後導航使用 <code>replace: true</code>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 避免在渲染期間直接呼叫 <code>navigate</code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
