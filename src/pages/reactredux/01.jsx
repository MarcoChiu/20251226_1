import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    checkLogin,
    login,
    fetchProducts,
    addProduct,
    deleteProduct,
    logout
} from '../../slice/productSlice';
import axios from 'axios';
import { Loading } from '../../components/Loading';
import styles from '../react/06.module.css';

const { VITE_APP_Path06, VITE_APP_Email06, VITE_APP_Password06 } = import.meta.env;

// Upload helper function
const uploadFile = async (file, token) => {
    const formData = new FormData();
    formData.append('file-to-upload', file);
    const url = `https://vue3-course-api.hexschool.io/v2/api/${VITE_APP_Path06}/admin/upload`;

    const res = await axios.post(url, formData, {
        headers: { Authorization: token }
    });
    return res.data.imageUrl;
};

// 產品卡片元件
const ProductCard = ({ onDelete, product, loading }) => {
    const discount = Math.round((1 - product.price / product.origin_price) * 100);

    return (
        <div className="col">
            <div className="card h-100 shadow-sm product-card">
                <img src={product.imageUrl} alt={product.title} className={`card-img-top ${styles['product-card']}`} style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <span className={`badge ${product.is_enabled ? 'bg-success' : 'bg-secondary'} mb-2`}>
                        {product.is_enabled ? '✓ 販售中' : '✗ 已下架'}
                    </span>
                    <p className="text-muted small mb-2">📁 {product.category}</p>

                    {product.description && <p className="card-text small">{product.description}</p>}
                    {product.content && <p className="card-text text-muted" style={{ fontSize: '0.85rem' }}>{product.content}</p>}

                    <div className="bg-light p-2 rounded mb-3">
                        <span className="text-muted small">📦 {product.unit} × {product.num}</span>
                    </div>

                    <div className="bg-gradient p-3 rounded text-white mb-3" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <span className="text-decoration-line-through opacity-75 small">原價 NT$ {product.origin_price?.toLocaleString()}</span>
                            {discount > 0 && <span className="badge bg-white bg-opacity-25 small">省 {discount}%</span>}
                        </div>
                        <div className="fs-4 fw-bold">NT$ {product.price?.toLocaleString()}</div>
                    </div>

                    {product.imagesUrl && product.imagesUrl.length > 0 && (
                        <div className="border-top pt-3 mb-3">
                            <p className="text-muted small fw-bold mb-2">🖼️ 更多圖片</p>
                            <div className="d-flex gap-2 flex-wrap">
                                {product.imagesUrl.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`${product.title}-${idx}`}
                                        className={`rounded ${styles['gallery-image']}`}
                                        style={{ width: '80px', height: '80px', objectFit: 'cover', cursor: 'pointer' }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="border-top pt-3">
                        <button
                            className="btn btn-danger w-100"
                            onClick={() => onDelete(product.id, product.title)}
                            disabled={loading}
                        >
                            {loading ? '處理中...' : '🗑️ 刪除產品'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 上傳區域元件
const UploadSection = ({ selectedFile, previewUrl, uploadedImageUrl, loading, onFileChange, onUpload }) => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h3 className="card-title">📤 上傳圖片</h3>
                <p className="text-muted small mb-3">
                    支援格式：JPG、JPEG、PNG，檔案大小限制 3MB
                </p>

                <div className="d-flex gap-3 align-items-center flex-wrap mb-3">
                    <div className="file-input-wrapper">
                        <input
                            type="file"
                            className="form-control d-none"
                            id="file-upload"
                            accept=".jpg,.jpeg,.png"
                            onChange={onFileChange}
                        />
                        <label htmlFor="file-upload" className="btn btn-outline-secondary">
                            📁 選擇檔案
                        </label>
                    </div>

                    {selectedFile && (
                        <span className="text-muted small">
                            已選擇：{selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
                        </span>
                    )}

                    <button
                        className="btn btn-success"
                        onClick={onUpload}
                        disabled={!selectedFile || loading}
                    >
                        {loading ? '上傳中...' : '⬆️ 上傳'}
                    </button>
                </div>

                {previewUrl && (
                    <div className="mt-3">
                        <p className="text-muted small">預覽：</p>
                        <img src={previewUrl} alt="預覽" className="img-thumbnail" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                    </div>
                )}

                {uploadedImageUrl && (
                    <div className="alert alert-success mt-3">
                        <p className="small mb-2">
                            ✅ 上傳成功！圖片網址：
                        </p>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            value={uploadedImageUrl}
                            readOnly
                            onClick={(e) => e.target.select()}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

// Error 元件
const ErrorAlert = ({ error }) => {
    return (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
            <span className="fs-4 me-2">⚠️</span>
            <span>錯誤：{error}</span>
        </div>
    );
};

export default function ReduxProductPage() {
    const dispatch = useDispatch();
    const { products, status, error, isLoggedIn, token } = useSelector((state) => state.product);

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    const [uploadLoading, setUploadLoading] = useState(false);

    // Initial Check
    useEffect(() => {
        dispatch(checkLogin())
            .unwrap()
            .then(() => {
                dispatch(fetchProducts());
            })
            .catch(() => {
                dispatch(login({ username: VITE_APP_Email06, password: VITE_APP_Password06 }))
                    .unwrap()
                    .then(() => {
                        dispatch(fetchProducts());
                    })
                    .catch((err) => {
                        console.error('Login failed:', err);
                    });
            });
    }, [dispatch]);

    // 處理檔案選擇
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (!validTypes.includes(file.type)) {
            alert('❌ 僅支援 JPG、JPEG 或 PNG 格式的圖片');
            return;
        }

        if (file.size > 3 * 1024 * 1024) {
            alert('❌ 檔案大小不能超過 3MB');
            return;
        }

        setSelectedFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    // 處理上傳
    const handleUpload = async () => {
        if (!selectedFile) return;
        setUploadLoading(true);
        try {
            const imageUrl = await uploadFile(selectedFile, token);
            setUploadedImageUrl(imageUrl);
            alert('✅ 圖片上傳成功！');
            setSelectedFile(null);
            setPreviewUrl(null);
        } catch (error) {
            alert('❌ 上傳失敗: ' + (error.response?.data?.message || error.message));
        } finally {
            setUploadLoading(false);
        }
    };

    // 處理刪除
    const handleDeleteProduct = (id, title) => {
        if (confirm(`確定要刪除「${title}」嗎？`)) {
            dispatch(deleteProduct(id));
        }
    };

    // 處理新增 (隨機資料)
    const handleAddProduct = () => {
        const categories = ['電子產品', '服飾配件', '美妝保養', '食品飲料', '運動健身', '家居生活', '書籍文具', '玩具遊戲', '寵物用品', '汽車用品', '戶外露營', '樂器音響', '手作材料', '辦公用品', '清潔用品'];
        const units = ['個', '件', '組', '盒', '包', '瓶', '雙', '台', '支', '條', '張', '本', '袋', '罐', '桶'];
        const images = [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
            'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
            'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400',
            'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400',
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
            'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400',
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
            'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400',
            'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
            'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400',
        ];

        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const randomUnit = units[Math.floor(Math.random() * units.length)];
        const randomOriginPrice = Math.floor(Math.random() * 5000) + 500;
        const randomDiscount = Math.floor(Math.random() * 40) + 10;
        const randomPrice = Math.floor(randomOriginPrice * (100 - randomDiscount) / 100);
        const randomEnabled = Math.random() > 0.3 ? 1 : 0;

        // 隨機選擇 1-3 張圖片
        const shuffledImages = [...images].sort(() => Math.random() - 0.5);
        const randomImageCount = Math.floor(Math.random() * 3) + 1;
        const selectedImages = shuffledImages.slice(0, randomImageCount);

        const temp = {
            title: `${randomCategory}商品_${Date.now()}`,
            category: randomCategory,
            origin_price: randomOriginPrice,
            price: randomPrice,
            unit: randomUnit,
            description: `這是 ${randomCategory} 的精選商品，品質保證，值得擁有！`,
            content: `產品特色：高品質、耐用、實惠。`,
            is_enabled: randomEnabled,
            imageUrl: selectedImages[0],
            imagesUrl: selectedImages
        };

        dispatch(addProduct(temp));
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}>
                    <h1 className="display-4 fw-bold mb-3"><i className="bi bi-cloud-arrow-up me-3"></i>Redux Async Thunk</h1>
                    <p className="lead mb-0">結合 Redux Toolkit 與 Axios 進行 API 串接</p>
                </div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>

            <div className="row mb-5">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>Redux Async 說明</h2>
                            <p>本範例展示如何使用 <code>createAsyncThunk</code> 處理非同步 API 請求，並將 Products 狀態存於 Store 中。</p>
                            <ul>
                                <li><strong>checkLogin:</strong> 檢查 Cookie Token 驗證狀態</li>
                                <li><strong>fetchProducts:</strong> 取得遠端產品列表，Store</li>
                                <li><strong>addProduct / deleteProduct:</strong> 呼叫 API 後 Dispatch 更新</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4"><i className="bi bi-code-square me-2"></i>互動範例</h3>

                            {status === 'loading' && <Loading><b>載入中...</b></Loading>}
                            {error && <ErrorAlert error={error} />}

                            <div className="container mt-2">
                                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                                    <h1 className="text-center flex-grow-1 mb-0">🛍️ 產品列表 (Redux)</h1>
                                    <button className="btn btn-primary btn-lg" onClick={handleAddProduct} disabled={status === 'loading'}>
                                        {status === 'loading' ? '處理中...' : '➕ 新增產品'}
                                    </button>
                                </div>

                                <UploadSection
                                    selectedFile={selectedFile}
                                    previewUrl={previewUrl}
                                    uploadedImageUrl={uploadedImageUrl}
                                    loading={uploadLoading}
                                    onFileChange={handleFileChange}
                                    onUpload={handleUpload}
                                />

                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                    {products && products.map(product => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            onDelete={handleDeleteProduct}
                                            loading={status === 'loading'}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
