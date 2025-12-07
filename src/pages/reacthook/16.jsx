import { useActionState, useState } from 'react';

async function updateName(prevState, formData) {
    const name = formData.get('name');

    await new Promise(resolve => setTimeout(resolve, 1500));

    if (!name) {
        return { error: 'Name is required', success: false };
    }

    if (name.length < 3) {
        return { error: 'Name must be at least 3 characters', success: false };
    }

    return { message: `Hello, ${name}!`, success: true, error: null };
}

const UseActionStateExample = () => {
    const [state, formAction, isPending] = useActionState(updateName, { error: null, message: null });

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
                        <i className="bi bi-gear-fill me-3"></i>
                        useActionState Hook
                    </h1>
                    <p className="lead mb-0">動作狀態 (React 19) - 表單 Action 狀態管理</p>
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
                                                <li>根據 Form Action 結果更新狀態</li>
                                                <li>簡化表單處理流程</li>
                                                <li>自動管理 pending 狀態</li>
                                                <li>輕鬆實現驗證錯誤回顯</li>
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
                                                <li>React 19 新功能</li>
                                                <li>返回 [state, formAction, isPending]</li>
                                                <li>Action 函式接收 prevState 和 formData</li>
                                                <li>支援漸進增強</li>
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
                                <form action={formAction} className="mx-auto" style={{ maxWidth: '400px' }}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Update Name</label>
                                        <input
                                            name="name"
                                            type="text"
                                            className={`form-control ${state?.error ? 'is-invalid' : ''}`}
                                            placeholder="Enter your name..."
                                        />
                                        {state?.error && <div className="invalid-feedback">{state.error}</div>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isPending}
                                        className="btn btn-primary w-100"
                                    >
                                        {isPending ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Updating...
                                            </>
                                        ) : 'Update'}
                                    </button>

                                    {state?.success && (
                                        <div className="alert alert-success mt-3" role="alert">
                                            {state.message}
                                        </div>
                                    )}
                                </form>
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
                                <code>{`import { useActionState } from 'react';

async function updateName(prevState, formData) {
  const name = formData.get('name');
  
  if (!name) {
    return { error: 'Name is required' };
  }
  
  // 執行更新
  await saveName(name);
  return { success: true, message: 'Updated!' };
}

function Form() {
  const [state, formAction, isPending] = useActionState(
    updateName,
    { error: null }
  );
  
  return (
    <form action={formAction}>
      <input name="name" />
      {state?.error && <p>{state.error}</p>}
      <button disabled={isPending}>
        {isPending ? 'Saving...' : 'Save'}
      </button>
    </form>
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
                                            <strong>適用場景:</strong> 表單驗證和錯誤回顯
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>狀態管理:</strong> 自動處理 loading/error 狀態
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>漸進增強:</strong> JavaScript 未載入也能工作
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 複雜的多步驟表單
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

export default UseActionStateExample;
