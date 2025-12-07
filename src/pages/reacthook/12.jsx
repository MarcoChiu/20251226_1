import { useState, useRef, useImperativeHandle, forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef(null);
    const [value, setValue] = useState('');

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            setValue('');
        },
        setValue: (text) => {
            setValue(text);
        },
        shake: () => {
            inputRef.current.style.transform = 'translateX(10px)';
            setTimeout(() => {
                inputRef.current.style.transform = 'translateX(0)';
            }, 100);
        }
    }));

    return (
        <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="即使是子組件，父組件也能控制我"
            className="form-control"
            style={{ transition: 'transform 0.1s' }}
        />
    );
});
CustomInput.displayName = 'CustomInput';

const UseImperativeHandleExample = () => {
    const inputRef = useRef(null);

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
                        <i className="bi bi-link-45deg me-3"></i>
                        useImperativeHandle Hook
                    </h1>
                    <p className="lead mb-0">命令式控制 - 自定義 ref 暴露接口</p>
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
                                                <li>自定義暴露給父組件的 ref 值</li>
                                                <li>限制父組件的訪問權限</li>
                                                <li>只暴露必要的公開方法</li>
                                                <li>提供命令式的組件接口</li>
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
                                                <li>必須配合 forwardRef 使用</li>
                                                <li>應視為「逃生艇」少用</li>
                                                <li>優先使用 props 進行數據流</li>
                                                <li>主要用於無法通過 props 的行為</li>
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
                            <div className="bg-light p-4 rounded-3">
                                <div className="mb-4">
                                    <CustomInput ref={inputRef} />
                                </div>

                                <div className="d-flex flex-wrap gap-2">
                                    <button
                                        onClick={() => inputRef.current.focus()}
                                        className="btn btn-primary"
                                    >
                                        Focus
                                    </button>
                                    <button
                                        onClick={() => inputRef.current.setValue('Hello World')}
                                        className="btn btn-success"
                                    >
                                        Set Text
                                    </button>
                                    <button
                                        onClick={() => inputRef.current.clear()}
                                        className="btn btn-warning"
                                    >
                                        Clear
                                    </button>
                                    <button
                                        onClick={() => inputRef.current.shake()}
                                        className="btn btn-danger"
                                    >
                                        Shake (Custom Animation)
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
                                <code>{`import { forwardRef, useImperativeHandle, useRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    }
  }));

  return <input ref={inputRef} {...props} />;
});

// 使用
function Parent() {
  const ref = useRef(null);
  return (
    <>
      <CustomInput ref={ref} />
      <button onClick={() => ref.current.focus()}>Focus</button>
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
                                            <strong>適用場景:</strong> 焦點管理(focus, blur, select)
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>滾動控制:</strong> scrollIntoView(), scroll()
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>第三方整合:</strong> video player, map 等
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 過度使用命令式 API
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

export default UseImperativeHandleExample;
