import { useRef, forwardRef } from 'react';

const FancyButton = forwardRef((props, ref) => (
    <button
        ref={ref}
        className="btn btn-outline-primary btn-lg rounded-pill shadow-sm"
        {...props}
    >
        {props.children}
    </button>
));
FancyButton.displayName = 'FancyButton';

const ForwardRefExample = () => {
    const btnRef = useRef(null);

    const handleClick = () => {
        if (btnRef.current) {
            console.log('Button clicked programmatically!');
            const originalColor = btnRef.current.style.backgroundColor;
            const originalText = btnRef.current.innerText;

            btnRef.current.classList.remove('btn-outline-primary');
            btnRef.current.classList.add('btn-success');
            btnRef.current.innerText = '已點擊!';

            setTimeout(() => {
                btnRef.current.classList.remove('btn-success');
                btnRef.current.classList.add('btn-outline-primary');
                btnRef.current.innerText = '點我 (Forward Ref)';
            }, 1000);
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
                        <i className="bi bi-forward-fill me-3"></i>
                        forwardRef
                    </h1>
                    <p className="lead mb-0">Ref 轉發 - 允許組件接收 ref</p>
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
                                Hook 說明
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
                                            <h5 className="mb-2">主要用途</h5>
                                            <ul className="text-muted mb-0">
                                                <li>允許組件接收並轉發 ref</li>
                                                <li>將 ref 傳遞給子組件</li>
                                                <li>封裝可重用組件庫時必要</li>
                                                <li>使父組件能訪問子組件的 DOM</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-warning bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-exclamation-triangle text-warning fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">注意事項</h5>
                                            <ul className="text-muted mb-0">
                                                <li>函式組件預設不能接收 ref</li>
                                                <li>必須使用 forwardRef 包裝</li>
                                                <li>主要用於可重用 UI 庫</li>
                                                <li>搭配 useImperativeHandle 更佳</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 範例展示 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-play-circle me-2"></i>
                                互動範例
                            </h3>
                            <div className="bg-light p-4 rounded-3 text-center">
                                <p className="mb-4">父組件持有 ref，可以直接操作下方的自定義按鈕 DOM</p>

                                <FancyButton ref={btnRef} onClick={() => alert('Button Clicked!')}>
                                    點我 (Forward Ref)
                                </FancyButton>

                                <div className="mt-4 pt-3 border-top">
                                    <button
                                        onClick={handleClick}
                                        className="btn btn-link link-secondary text-decoration-none"
                                    >
                                        父組件觸發按鈕改變 (透過 ref)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 程式碼範例 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-code-slash me-2"></i>
                                程式碼範例
                            </h3>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`import { forwardRef, useRef } from 'react';

// 使用 forwardRef 包裝組件
const FancyButton = forwardRef((props, ref) => (
  <button 
    ref={ref}
    className="fancy-button"
    {...props}
  >
    {props.children}
  </button>
));

// 父組件使用
function Parent() {
  const buttonRef = useRef(null);
  
  const handleClick = () => {
    buttonRef.current.focus();
  };
  
  return (
    <>
      <FancyButton ref={buttonRef}>
        Click me
      </FancyButton>
      <button onClick={handleClick}>Focus Button</button>
    </>
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
                                            <strong>適用場景:</strong> UI 組件庫(Button, Input)
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>焦點管理:</strong> 讓使用者控制焦點
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>測量位置:</strong> 獲取 DOM 節點進行計算
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 過度暴露內部 DOM 結構
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
};

export default ForwardRefExample;
