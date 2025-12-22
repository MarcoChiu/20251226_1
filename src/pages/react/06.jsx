import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './06.module.css';
import Loading from '../../components/Loading';

const { VITE_APP_Path06, VITE_APP_Email06, VITE_APP_Password06 } = import.meta.env;

// 產品卡片元件
const ProductCard = ({ onDelete, product }) => {
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
                        >
                            🗑️ 刪除產品
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

export default function ComponentPage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');

    const url = `https://vue3-course-api.hexschool.io/v2`;
    const path = VITE_APP_Path06;
    const cookieName = 'mycook';
    const tokenRef = useRef(''); // 使用 useRef 儲存 token

    // 建立帶有 Authorization header 的 config
    const getAuthConfig = () => ({
        headers: { Authorization: tokenRef.current }
    });

    // 取得產品列表
    const getProducts = async () => {
        const checkProduct = await axios.get(`${url}/api/${path}/admin/products`, getAuthConfig());
        //console.log(checkProduct.data.products);
        setProducts(checkProduct.data.products);
    };

    //首次開啟時
    // axios 要放在 useEffect 裡，axios 是非同步的
    useEffect(() => {
        (async () => {
            try {

                //登入資料
                setLoading(true);
                const loginData = await axios.post(`${url}/admin/signin`, { username: VITE_APP_Email06, password: VITE_APP_Password06 });
                //console.log(loginData.data);
                const { token, expired } = loginData.data;
                //console.log(token);
                //console.log(expired);

                //cookie儲存方式          
                document.cookie = `${cookieName}=${token};expires=${new Date(expired)}`;

                //cookie取得方式
                const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)mycook\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                //console.log(myCookie)
                //axios.defaults.headers.common['Authorization'] = myCookie;

                // 儲存 token 到 ref，避免使用全域設定
                tokenRef.current = myCookie;

                const checkData = await axios.post(`${url}/api/user/check`, {}, getAuthConfig());
                //console.log(checkData.data);

                //取得產品
                await getProducts();

                setError(null);
            } catch (error) {
                //console.dir(error.response.data.message);
                setError(error.response.data.message || '未知錯誤');
            } finally {
                setLoading(false);
            }
        })();

    }, []);

    // 處理檔案選擇
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // 檢查檔案類型
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (!validTypes.includes(file.type)) {
            alert('❌ 僅支援 JPG、JPEG 或 PNG 格式的圖片');
            return;
        }

        // 檢查檔案大小 (3MB = 3 * 1024 * 1024 bytes)
        if (file.size > 3 * 1024 * 1024) {
            alert('❌ 檔案大小不能超過 3MB');
            return;
        }

        setSelectedFile(file);

        // 生成預覽圖
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    //刪除
    const handleDeleteProduct = async (productId, productTitle) => {
        if (!confirm(`確定要刪除「${productTitle}」嗎？`)) {
            return;
        }

        try {
            setLoading(true);
            await axios.delete(`${url}/api/${path}/admin/product/${productId}`, getAuthConfig());
            console.log('刪除成功:', productId);
            alert('✅ 產品刪除成功！');
            // 重新取得產品列表
            await getProducts();
        } catch (error) {
            console.error('刪除失敗:', error);
            alert('❌ 刪除失敗: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    //新增
    const handleAddProduct = () => {

        // 隨機生成測試資料
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
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
            'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=400',
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400',
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400',
            'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400',
            'https://images.unsplash.com/photo-1525904097878-94fb15835963?w=400',
            'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400',
            'https://images.unsplash.com/photo-1563299796-17596ed6b017?w=400',
            'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
            'https://images.unsplash.com/photo-1503602642458-232111445657?w=400',
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
            'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400',
            'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400',
            'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=400',
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
            'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400',
            'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?w=400',
            'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400',
            'https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=400',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
            'https://storage.googleapis.com/vue-course-api.appspot.com/marcochiu/1764050793533.png',
            'https://storage.googleapis.com/vue-course-api.appspot.com/marcochiu/1764332052923.png',
            'https://storage.googleapis.com/vue-course-api.appspot.com/marcochiu/1764748323370.png'
        ];

        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const randomUnit = units[Math.floor(Math.random() * units.length)];
        const randomOriginPrice = Math.floor(Math.random() * 5000) + 500; // 500-5500
        const randomDiscount = Math.floor(Math.random() * 40) + 10; // 10-50% 折扣
        const randomPrice = Math.floor(randomOriginPrice * (100 - randomDiscount) / 100);
        const randomEnabled = Math.random() > 0.3 ? 1 : 0; // 70% 機率啟用

        // 隨機選擇 1-3 張圖片
        const shuffledImages = [...images].sort(() => Math.random() - 0.5);
        const randomImageCount = Math.floor(Math.random() * 3) + 1;
        const selectedImages = shuffledImages.slice(0, randomImageCount);

        const temp = {
            data: {
                title: `${randomCategory}商品_${Date.now()}`,
                category: randomCategory,
                origin_price: randomOriginPrice,
                price: randomPrice,
                unit: randomUnit,
                description: `這是 ${randomCategory} 的精選商品，品質保證，值得擁有！`,
                content: `產品特色：高品質、耐用、實惠。適合日常使用，是您生活中的好幫手。`,
                is_enabled: randomEnabled,
                imageUrl: selectedImages[0],
                imagesUrl: selectedImages
            }
        };

        // 發送 POST 請求新增產品
        (async () => {
            try {
                setLoading(true);
                const response = await axios.post(`${url}/api/${path}/admin/product`, temp, getAuthConfig());
                console.log('新增成功:', response.data);
                alert('✅ 產品新增成功！');
                // 重新取得產品列表
                await getProducts();
            } catch (error) {
                console.error('新增失敗:', error);
                alert('❌ 新增失敗: ' + (error.response?.data?.message || error.message));
            } finally {
                setLoading(false);
            }
        })();
    };

    // 上傳圖片
    const handleUpload = async () => {
        if (!selectedFile) {
            alert('❌ 請先選擇檔案');
            return;
        }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('file-to-upload', selectedFile);
            const response = await axios.post(`${url}/api/${path}/admin/upload`, formData, getAuthConfig());

            console.log('上傳成功:', response.data);
            setUploadedImageUrl(response.data.imageUrl);
            alert('✅ 圖片上傳成功！\n圖片網址：' + response.data.imageUrl);

            // 清空選擇
            setSelectedFile(null);
            setPreviewUrl(null);
        } catch (error) {
            console.error('上傳失敗:', error);
            alert('❌ 上傳失敗: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };


    return (<>
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-cloud-arrow-up me-3"></i>API 串接</h1><p className="lead mb-0">Axios 請求與認證機制</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">API 操作</h5><ul className="text-muted mb-0"><li>Axios 請求</li><li>認證機制</li><li>CRUD 操作</li><li>Token 管理</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-box text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">產品管理</h5><ul className="text-muted mb-0"><li>產品列表</li><li>新增/刪除</li><li>上架/下架</li><li>圖片上傳</li></ul></div></div></div></div></div></div></div></div>
            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2"></i>互動範例</h3>

                <div className="container mt-2">
                    {/* Header */}
                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                        <h1 className="text-center flex-grow-1 mb-0">🛍️ 產品列表</h1>
                        <button className="btn btn-primary btn-lg" onClick={handleAddProduct}>
                            ➕ 新增產品
                        </button>
                    </div>

                    {/* 圖片上傳區域 */}
                    <UploadSection
                        selectedFile={selectedFile}
                        previewUrl={previewUrl}
                        uploadedImageUrl={uploadedImageUrl}
                        loading={loading}
                        onFileChange={handleFileChange}
                        onUpload={handleUpload}
                    />

                    {/* Loading */}
                    {loading && <Loading />}

                    {/* Error */}
                    {error && <ErrorAlert error={error} />}

                    {/* 產品網格 */}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {!loading && !error && products.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onDelete={handleDeleteProduct}
                            />
                        ))}
                    </div>
                </div>
            </div></div></div></div>

            {/* 程式碼範例 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-code-slash me-2 text-primary"></i>
                                程式碼範例
                            </h3>

                            <div className="mb-4">
                                <h5 className="mb-3">1. Axios 基本請求</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`import axios from 'axios';

// GET 請求
const fetchData = async () => {
  try {
    const response = await axios.get('/api/products');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// POST 請求
const createProduct = async (data) => {
  const response = await axios.post('/api/products', {
    name: 'Product Name',
    price: 100
  });
  return response.data;
};

// PUT/PATCH 更新
const updateProduct = async (id, data) => {
  await axios.put(\`/api/products/\${id}\`, data);
};

// DELETE 刪除
const deleteProduct = async (id) => {
  await axios.delete(\`/api/products/\${id}\`);
};`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">2. 認證與 Token 管理</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`// 登入取得 Token
const login = async (email, password) => {
  const response = await axios.post('/admin/signin', {
    username: email,
    password: password
  });
  
  const { token, expired } = response.data;
  
  // 儲存到 Cookie
  document.cookie = \`authToken=\${token};expires=\${new Date(expired)}\`;
  
  return token;
};

// 設定請求 Header
const token = getCookieToken();
axios.defaults.headers.common['Authorization'] = token;

// 或使用 config 參數
const config = {
  headers: { Authorization: token }
};
await axios.get('/api/products', config);`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">3. 檔案上傳</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file-to-upload', file);

  const response = await axios.post('/api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': token
    }
  });

  return response.data.imageUrl;
};

// React 中使用
const handleFileChange = (e) => {
  const file = e.target.files[0];
  uploadFile(file)
    .then(url => console.log('上傳成功:', url))
    .catch(err => console.error('上傳失敗:', err));
};`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">4. useRef 管理 Token</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`import { useRef } from 'react';

function App() {
  const tokenRef = useRef('');

  // 登入後儲存
  const login = async () => {
    const response = await axios.post('/signin', {...});
    tokenRef.current = response.data.token;
  };

  // 使用 token
  const fetchData = async () => {
    const config = {
      headers: { Authorization: tokenRef.current }
    };
    const data = await axios.get('/api/data', config);
  };

  // ✅ 優點：不會觸發重新渲染
  // ✅ 值在整個生命週期保持
}`}</code>
                                </pre>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">5. 元件拆分模式</h5>
                                <pre className="bg-dark text-light p-3 rounded">
                                    <code>{`// ProductCard.jsx - 子元件
const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="card">
      <img src={product.imageUrl} alt={product.title} />
      <div className="card-body">
        <h5>{product.title}</h5>
        <p>\${product.price}</p>
        <button onClick={() => onDelete(product.id)}>
          刪除
        </button>
      </div>
    </div>
  );
};

// App.jsx - 父元件
function App() {
  const [products, setProducts] = useState([]);

  const handleDelete = async (id) => {
    await axios.delete(\`/api/products/\${id}\`);
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div>
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}`}</code>
                                </pre>
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
                                            <strong>錯誤處理:</strong> 使用 try-catch 捕獲所有 API 錯誤
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>Loading 狀態:</strong> 請求期間顯示載入指示器
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>環境變數:</strong> API 金鑰存放在 .env 檔案
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 全域設定 axios.defaults 可能影響其他請求
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>元件拆分:</strong> 將 UI 拆分為可重用的小元件
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 在 render 中執行 API 請求，應使用 useEffect
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};
