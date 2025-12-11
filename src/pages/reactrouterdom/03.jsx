import { useParams, useSearchParams, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';

// 模擬使用者資料
const users = [
    { id: 1, name: '張三', email: 'zhang@example.com', role: '開發者' },
    { id: 2, name: '李四', email: 'li@example.com', role: '設計師' },
    { id: 3, name: '王五', email: 'wang@example.com', role: '專案經理' },
    { id: 4, name: '趙六', email: 'zhao@example.com', role: '測試工程師' },
];

export default function DynamicRoutingPage() {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    
    const userId = searchParams.get('userId');
    const filter = searchParams.get('filter') || 'all';
    const [selectedUserId, setSelectedUserId] = useState(userId || '1');

    const handleUserChange = (newUserId) => {
        setSelectedUserId(newUserId);
        setSearchParams({ userId: newUserId, filter });
    };

    const handleFilterChange = (newFilter) => {
        setSearchParams({ userId: selectedUserId, filter: newFilter });
    };

    const currentUser = users.find(u => u.id === parseInt(selectedUserId));

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
                        React Router Dom - 動態路由
                    </h1>
                    <p className="lead mb-0">URL 參數 (Params) 與查詢參數 (Search Params)</p>
                </div>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        zIndex: 0
                    }}
                ></div>
            </div>

            {/* 狀態資訊 */}
            {location.state && (
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="alert alert-info">
                            <h5 className="alert-heading">
                                <i className="bi bi-info-circle me-2"></i>
                                接收到的狀態資料
                            </h5>
                            <p className="mb-0">
                                <strong>來源:</strong> {location.state.from}<br />
                                <strong>時間:</strong> {location.state.timestamp}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* URL 參數示範 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-diagram-3 me-2 text-primary"></i>
                                useParams - URL 路徑參數
                            </h3>
                            
                            <div className="alert alert-warning">
                                <i className="bi bi-exclamation-triangle me-2"></i>
                                本範例使用查詢參數模擬動態路由，因為當前路由結構採用數字編號。<br />
                                實際應用中，URL 參數路由格式為: <code>/users/:userId</code>
                            </div>

                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`// 路由配置
<Route path="/users/:userId" element={<UserProfile />} />
<Route path="/posts/:postId/comments/:commentId" element={<Comment />} />

// 元件中使用
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  // 訪問 /users/123，userId 會是 "123"
  
  return <div>使用者 ID: {userId}</div>;
}

// 多個參數
function Comment() {
  const { postId, commentId } = useParams();
  
  return (
    <div>
      文章 ID: {postId}
      評論 ID: {commentId}
    </div>
  );
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* 查詢參數示範 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-search me-2 text-success"></i>
                                useSearchParams - 查詢參數
                            </h3>

                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <h5>當前查詢參數</h5>
                                            <div className="mb-2">
                                                <strong>userId:</strong> 
                                                <code className="ms-2">{userId || '(未設定)'}</code>
                                            </div>
                                            <div>
                                                <strong>filter:</strong> 
                                                <code className="ms-2">{filter}</code>
                                            </div>
                                            <hr />
                                            <small className="text-muted">
                                                完整 URL: {location.pathname}{location.search}
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <h5>選擇使用者</h5>
                                            <select 
                                                className="form-select mb-3"
                                                value={selectedUserId}
                                                onChange={(e) => handleUserChange(e.target.value)}
                                            >
                                                {users.map(user => (
                                                    <option key={user.id} value={user.id}>
                                                        {user.name}
                                                    </option>
                                                ))}
                                            </select>

                                            <h5>篩選條件</h5>
                                            <div className="btn-group w-100" role="group">
                                                <button
                                                    className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                                                    onClick={() => handleFilterChange('all')}
                                                >
                                                    全部
                                                </button>
                                                <button
                                                    className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline-primary'}`}
                                                    onClick={() => handleFilterChange('active')}
                                                >
                                                    啟用
                                                </button>
                                                <button
                                                    className={`btn ${filter === 'inactive' ? 'btn-primary' : 'btn-outline-primary'}`}
                                                    onClick={() => handleFilterChange('inactive')}
                                                >
                                                    停用
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {currentUser && (
                                <div className="card border-primary">
                                    <div className="card-body">
                                        <h5 className="card-title">選中的使用者資訊</h5>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p><strong>姓名:</strong> {currentUser.name}</p>
                                                <p><strong>Email:</strong> {currentUser.email}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p><strong>角色:</strong> {currentUser.role}</p>
                                                <p><strong>篩選狀態:</strong> {filter}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <pre className="bg-light p-4 rounded-3 overflow-auto mt-4">
                                <code>{`import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // 讀取查詢參數
  const query = searchParams.get('q');
  const page = searchParams.get('page') || '1';
  
  // 設定查詢參數
  const handleSearch = (searchTerm) => {
    setSearchParams({ q: searchTerm, page: '1' });
    // URL 變成: /search?q=searchTerm&page=1
  };
  
  // 更新特定參數
  const nextPage = () => {
    setSearchParams(prev => {
      prev.set('page', String(parseInt(page) + 1));
      return prev;
    });
  };
  
  // 刪除參數
  const clearFilter = () => {
    searchParams.delete('filter');
    setSearchParams(searchParams);
  };
  
  return (
    <div>
      <p>搜尋關鍵字: {query}</p>
      <p>當前頁碼: {page}</p>
    </div>
  );
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* 快速導航連結 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-box-arrow-up-right me-2 text-info"></i>
                                快速導航範例
                            </h3>
                            <div className="d-flex flex-wrap gap-2">
                                <Link 
                                    to="/reactrouterdom/03?userId=1&filter=all" 
                                    className="btn btn-outline-primary"
                                >
                                    張三 - 全部
                                </Link>
                                <Link 
                                    to="/reactrouterdom/03?userId=2&filter=active" 
                                    className="btn btn-outline-success"
                                >
                                    李四 - 啟用
                                </Link>
                                <Link 
                                    to="/reactrouterdom/03?userId=3&filter=inactive" 
                                    className="btn btn-outline-warning"
                                >
                                    王五 - 停用
                                </Link>
                                <Link 
                                    to="/reactrouterdom/03?userId=4" 
                                    className="btn btn-outline-info"
                                >
                                    趙六 - 預設篩選
                                </Link>
                            </div>
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
                                            <strong>URL 參數:</strong> 用於資源識別，如 <code>/users/:userId</code>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>查詢參數:</strong> 用於篩選、排序、分頁等可選條件
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>型別轉換:</strong> URL 參數永遠是字串，需要時要轉換型別
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 不要將敏感資料放在 URL 參數中
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
