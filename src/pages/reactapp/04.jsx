import { useState, useMemo, useEffect } from 'react';

export default function UseMemoPage() {
    // 假設的產品資料
    const products = [
        { id: 1, name: 'iPhone 15 Pro', category: '手機', price: 35900, stock: 15 },
        { id: 2, name: 'MacBook Pro', category: '筆電', price: 72900, stock: 8 },
        { id: 3, name: 'iPad Air', category: '平板', price: 19900, stock: 20 },
        { id: 4, name: 'AirPods Pro', category: '耳機', price: 7990, stock: 30 },
        { id: 5, name: 'Apple Watch', category: '手錶', price: 12900, stock: 12 },
        { id: 6, name: 'Samsung S24', category: '手機', price: 28900, stock: 18 },
        { id: 7, name: 'Dell XPS', category: '筆電', price: 45900, stock: 6 },
        { id: 8, name: 'Sony WH-1000XM5', category: '耳機', price: 10900, stock: 25 },
        { id: 9, name: 'iPad Pro', category: '平板', price: 36900, stock: 10 },
        { id: 10, name: 'Galaxy Watch', category: '手錶', price: 8990, stock: 15 }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // 每頁顯示 5 個商品

    // 使用 useMemo 進行搜尋、篩選和排序
    // 只有當 searchTerm, categoryFilter, sortBy, sortOrder 改變時才會重新計算
    const filteredAndSortedProducts = useMemo(() => {
        console.log('🔄 重新計算產品列表...');

        let result = [...products];

        // 1. 搜尋過濾
        if (searchTerm) {
            result = result.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // 2. 類別篩選
        if (categoryFilter !== 'all') {
            result = result.filter(product => product.category === categoryFilter);
        }

        // 3. 排序
        result.sort((a, b) => {
            let compareValue = 0;

            switch (sortBy) {
                case 'name':
                    compareValue = a.name.localeCompare(b.name);
                    break;
                case 'price':
                    compareValue = a.price - b.price;
                    break;
                case 'stock':
                    compareValue = a.stock - b.stock;
                    break;
                default:
                    compareValue = 0;
            }

            return sortOrder === 'asc' ? compareValue : -compareValue;
        });

        return result;
    }, [searchTerm, categoryFilter, sortBy, sortOrder]);

    // 使用 useMemo 計算統計資料
    const statistics = useMemo(() => {
        console.log('📊 重新計算統計資料...');

        return {
            totalProducts: filteredAndSortedProducts.length,
            totalValue: filteredAndSortedProducts.reduce((sum, p) => sum + (p.price * p.stock), 0),
            averagePrice: filteredAndSortedProducts.length > 0
                ? filteredAndSortedProducts.reduce((sum, p) => sum + p.price, 0) / filteredAndSortedProducts.length
                : 0,
            totalStock: filteredAndSortedProducts.reduce((sum, p) => sum + p.stock, 0)
        };
    }, [filteredAndSortedProducts]);

    // 取得所有類別
    const categories = useMemo(() => {
        const uniqueCategories = [...new Set(products.map(p => p.category))];
        return uniqueCategories;
    }, []);

    // 計算分頁資料
    const paginationData = useMemo(() => {
        const totalItems = filteredAndSortedProducts.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentItems = filteredAndSortedProducts.slice(startIndex, endIndex);

        return {
            totalItems,
            totalPages,
            currentItems,
            startIndex,
            endIndex: Math.min(endIndex, totalItems)
        };
    }, [filteredAndSortedProducts, currentPage]);

    // 當搜尋或篩選條件改變時,重置到第一頁
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, categoryFilter]);

    // 分頁按鈕處理
    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-funnel-fill me-3"></i>useMemo - 產品搜尋與排序</h1><p className="lead mb-0">資料篩選與效能優化</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>

            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">useMemo 核心</h5><ul className="text-muted mb-0"><li>快取計算結果</li><li>避免不必要的重複運算</li><li>優化效能</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-sliders text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">實作功能</h5><ul className="text-muted mb-0"><li>產品搜尋、篩選、排序</li><li>統計資料計算快取</li><li>分頁功能</li></ul></div></div></div></div></div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-primary"></i>互動範例</h3>
                <div className="container mt-2">
                    {/* 控制面板 */}
                    <div className="card bg-light mb-4 shadow-sm">
                        <div className="card-body">
                            <h6 className="card-subtitle mb-3">
                                <i className="bi bi-sliders me-2"></i>
                                控制面板
                            </h6>
                            <div className="row">
                                {/* 搜尋框 */}
                                <div className="col-md-4 mb-3">
                                    <label className="form-label small text-muted">
                                        <i className="bi bi-search me-1"></i>
                                        搜尋產品
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="輸入產品名稱..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>

                                {/* 類別篩選 */}
                                <div className="col-md-3 mb-3">
                                    <label className="form-label small text-muted">
                                        <i className="bi bi-folder me-1"></i>
                                        類別篩選
                                    </label>
                                    <select
                                        className="form-select"
                                        value={categoryFilter}
                                        onChange={(e) => setCategoryFilter(e.target.value)}
                                    >
                                        <option value="all">全部類別</option>
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* 排序方式 */}
                                <div className="col-md-3 mb-3">
                                    <label className="form-label small text-muted">
                                        <i className="bi bi-sort-down me-1"></i>
                                        排序方式
                                    </label>
                                    <select
                                        className="form-select"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="name">名稱</option>
                                        <option value="price">價格</option>
                                        <option value="stock">庫存</option>
                                    </select>
                                </div>

                                {/* 排序順序 */}
                                <div className="col-md-2 mb-3">
                                    <label className="form-label small text-muted">
                                        <i className="bi bi-arrow-down-up me-1"></i>
                                        順序
                                    </label>
                                    <select
                                        className="form-select"
                                        value={sortOrder}
                                        onChange={(e) => setSortOrder(e.target.value)}
                                    >
                                        <option value="asc">升冪 ↑</option>
                                        <option value="desc">降冪 ↓</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 結果摘要 */}
                    <div className="alert alert-info border-0 shadow-sm mb-4">
                        <i className="bi bi-info-circle me-2"></i>
                        <small>
                            顯示第 <strong>{paginationData.startIndex + 1} - {paginationData.endIndex}</strong> 項，
                            共 <strong>{paginationData.totalItems}</strong> 個產品
                            {paginationData.totalPages > 1 && ` (第 ${currentPage} / ${paginationData.totalPages} 頁)`}
                        </small>
                    </div>

                    {/* 統計資訊 */}
                    <div className="row mb-4 g-3">
                        <div className="col-md-3">
                            <div className="card bg-gradient text-white border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="card-subtitle mb-2 opacity-75">產品數量</h6>
                                            <h3 className="card-title mb-0">{statistics.totalProducts}</h3>
                                        </div>
                                        <i className="bi bi-box-seam display-4 opacity-25"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card bg-gradient text-white border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="card-subtitle mb-2 opacity-75">總價值</h6>
                                            <h3 className="card-title mb-0">NT$ {statistics.totalValue.toLocaleString()}</h3>
                                        </div>
                                        <i className="bi bi-cash-coin display-4 opacity-25"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card bg-gradient text-white border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="card-subtitle mb-2 opacity-75">平均價格</h6>
                                            <h3 className="card-title mb-0">NT$ {Math.round(statistics.averagePrice).toLocaleString()}</h3>
                                        </div>
                                        <i className="bi bi-tags display-4 opacity-25"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card bg-gradient text-white border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="card-subtitle mb-2 opacity-75">總庫存</h6>
                                            <h3 className="card-title mb-0">{statistics.totalStock}</h3>
                                        </div>
                                        <i className="bi bi-stack display-4 opacity-25"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 產品列表 */}
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="table-light">
                                <tr>
                                    <th>ID</th>
                                    <th>產品名稱</th>
                                    <th>類別</th>
                                    <th className="text-end">價格</th>
                                    <th className="text-end">庫存</th>
                                    <th className="text-end">小計</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginationData.currentItems.length > 0 ? (
                                    paginationData.currentItems.map(product => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td className="fw-bold">{product.name}</td>
                                            <td>
                                                <span className="badge bg-secondary">{product.category}</span>
                                            </td>
                                            <td className="text-end">NT$ {product.price.toLocaleString()}</td>
                                            <td className="text-end">
                                                <span className={`badge ${product.stock < 10 ? 'bg-danger' : 'bg-success'}`}>
                                                    {product.stock}
                                                </span>
                                            </td>
                                            <td className="text-end fw-bold">
                                                NT$ {(product.price * product.stock).toLocaleString()}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center text-muted py-5">
                                            😕 找不到符合條件的產品
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* 分頁按鈕 */}
                    {paginationData.totalPages > 1 && (
                        <nav aria-label="分頁導航" className="mt-4">
                            <ul className="pagination justify-content-center">
                                {/* 上一頁按鈕 */}
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        上一頁
                                    </button>
                                </li>

                                {/* 頁碼按鈕 */}
                                {[...Array(paginationData.totalPages)].map((_, index) => {
                                    const pageNumber = index + 1;
                                    return (
                                        <li
                                            key={pageNumber}
                                            className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
                                        >
                                            <button
                                                className="page-link"
                                                onClick={() => handlePageChange(pageNumber)}
                                            >
                                                {pageNumber}
                                            </button>
                                        </li>
                                    );
                                })}

                                {/* 下一頁按鈕 */}
                                <li className={`page-item ${currentPage === paginationData.totalPages ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === paginationData.totalPages}
                                    >
                                        下一頁
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div></div></div></div>

            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2 text-success"></i>程式碼範例</h3>
                <div className="container mt-2">
                    <div className="card bg-dark text-white mt-4">
                        <div className="card-body">
                            <pre className="mb-0" style={{ fontSize: '0.85rem' }}>
                                {`// 搜尋、篩選、排序
const filteredAndSortedProducts = useMemo(() => {
  let result = [...products];
  
  // 1. 搜尋過濾
  if (searchTerm) {
    result = result.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  // 2. 類別篩選
  if (categoryFilter !== 'all') {
    result = result.filter(product => 
      product.category === categoryFilter
    );
  }
  
  // 3. 排序
  result.sort((a, b) => {
    let compareValue = sortBy === 'name' 
      ? a.name.localeCompare(b.name)
      : a[sortBy] - b[sortBy];
    return sortOrder === 'asc' ? compareValue : -compareValue;
  });
  
  return result;
}, [searchTerm, categoryFilter, sortBy, sortOrder]);

// 分頁計算
const paginationData = useMemo(() => {
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);
  return { totalPages, currentItems, startIndex };
}, [filteredAndSortedProducts, currentPage]);`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div></div></div></div>
        </div>
    );
};
