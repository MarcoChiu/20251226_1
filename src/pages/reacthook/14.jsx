import { useState, useOptimistic, useRef } from 'react';

async function deliverMessage(message) {
    await new Promise((res) => setTimeout(res, 1000));
    return message;
}

const UseOptimisticExample = () => {
    const [messages, setMessages] = useState([
        { text: "Hello there!", sending: false, key: 1 }
    ]);
    const formRef = useRef(null);

    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (state, newMessage) => [
            ...state,
            {
                text: newMessage,
                sending: true,
                key: Date.now()
            }
        ]
    );

    const formAction = async (formData) => {
        const message = formData.get("message");
        addOptimisticMessage(message);
        formRef.current?.reset();
        await deliverMessage(message);
        setMessages(msgs => [
            ...msgs,
            { text: message, sending: false, key: Date.now() }
        ]);
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
                        <i className="bi bi-lightning-fill me-3"></i>
                        useOptimistic Hook
                    </h1>
                    <p className="lead mb-0">樂觀更新 (React 19) - 即時 UI 回饋</p>
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
                                                <li>樂觀地更新 UI 提升體驗</li>
                                                <li>異步操作完成前顯示預期結果</li>
                                                <li>失敗時自動回滾狀態</li>
                                                <li>與 React 19 Form Actions 完美整合</li>
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
                                                <li>需確保後端操作可靠</li>
                                                <li>必須有錯誤處理機制</li>
                                                <li>適用於高成功率的操作</li>
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
                                <div className="card mb-3" style={{ height: '300px' }}>
                                    <div className="card-body overflow-auto bg-white">
                                        {optimisticMessages.map((msg) => (
                                            <div key={msg.key} className="d-flex justify-content-end mb-2">
                                                <div className={`p-2 rounded ${msg.sending ? 'bg-light text-muted border border-dashed' : 'bg-primary text-white'}`}>
                                                    {msg.text}
                                                    {msg.sending && <small className="ms-2 fst-italic text-secondary">(Sending...)</small>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <form action={formAction} ref={formRef} className="input-group">
                                    <input
                                        type="text"
                                        name="message"
                                        placeholder="輸入訊息..."
                                        className="form-control"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        發送
                                    </button>
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
                                <code>{`import { useOptimistic } from 'react';

function Messages({ messages }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      { text: newMessage, sending: true }
    ]
  );

  async function sendMessage(formData) {
    const message = formData.get('message');
    addOptimisticMessage(message); // 樂觀更新
    await deliverMessage(message); // 實際發送
  }

  return (
    <form action={sendMessage}>
      {optimisticMessages.map(msg => (
        <div className={msg.sending ? 'pending' : ''}>
          {msg.text}
        </div>
      ))}
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
                                            <strong>適用場景:</strong> 點讚、發送訊息等微交互
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>即時反饋:</strong> 使用者不需等待服務器
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>自動回滾:</strong> 失敗時自動恢復原狀態
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 低成功率或關鍵操作
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

export default UseOptimisticExample;
