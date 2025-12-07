import { useState, useTransition } from 'react';

const UseTransitionExample = () => {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('about');
    const [posts, setPosts] = useState([]);

    const selectTab = (nextTab) => {
        startTransition(() => {
            setTab(nextTab);
            if (nextTab === 'posts') {
                const newPosts = [];
                for (let i = 0; i < 2000; i++) {
                    newPosts.push(`Post #${i + 1}`);
                }
                setPosts(newPosts);
            }
        });
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
                        <i className="bi bi-hourglass-split me-3"></i>
                        useTransition Hook
                    </h1>
                    <p className="lead mb-0">過渡狀態 - 非緊急更新優先級控制</p>
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
                                                <li>標記 UI 更新為非緊急過渡</li>
                                                <li>優先處理緊急交互(輸入、點擊)</li>
                                                <li>保持界面回應性</li>
                                                <li>大數據渲染時維持流暢體驗</li>
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
                                                <li>需要 React 18+ 並發模式</li>
                                                <li>不同於 debounce，是降低優先級</li>
                                                <li>不應用於受控輸入</li>
                                                <li>Transition 可被中斷和取消</li>
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
                            <div className="bg-light p-4 rounded-3" style={{ minHeight: '400px' }}>
                                <div className="mb-3">
                                    <button
                                        onClick={() => selectTab('about')}
                                        className={`btn me-2 ${tab === 'about' ? 'btn-primary' : 'btn-light'}`}
                                    >
                                        About
                                    </button>
                                    <button
                                        onClick={() => selectTab('posts')}
                                        className={`btn ${tab === 'posts' ? 'btn-primary' : 'btn-light'}`}
                                    >
                                        Posts (Slow)
                                    </button>
                                </div>

                                <div className="card position-relative" style={{ height: '300px', overflow: 'hidden' }}>
                                    {isPending && (
                                        <div className="position-absolute top-0 end-0 p-2 m-2 badge bg-warning text-dark z-3">
                                            Loading... (UI still responsive)
                                        </div>
                                    )}

                                    <div className="card-body overflow-auto h-100">
                                        {tab === 'about' && <p>這是關於頁面。切換很快。</p>}

                                        {tab === 'posts' && (
                                            <ul className="list-group list-group-flush">
                                                {posts.map((post, index) => (
                                                    <li key={index} className="list-group-item">{post}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
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
                                <code>{`import { useTransition } from 'react';

function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <>
      {isPending && <Spinner />}
      <Tabs activeTab={tab} onChange={selectTab} />
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
                                            <strong>適用場景:</strong> 視圖切換、大列表渲染
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>搭配 Suspense:</strong> 與 Suspense 完美配合
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>Loading 指示:</strong> 使用 isPending 顯示載入狀態
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 受控表單輸入不應使用
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

export default UseTransitionExample;
