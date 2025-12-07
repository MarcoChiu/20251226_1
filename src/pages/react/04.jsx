import { useState } from 'react';
import styles from './04.module.css';

export default function RenderMultiplePage() {
    const 測試物件 = [
        { name: '排骨飯', qty: 0, price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9Ib0OMzM_hz_-X_jYMgHV5_TkqObmX8wFQ&s' },
        { name: '陽春麵', qty: 0, price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8gNLRZ5cmKF1euq1XWBCT_3-8Y9YCzac2g&s' },
        { name: '雞腿飯', qty: 0, price: 140, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNC7g80ocvAw1bhkvHRu8Li1YlUOfDNqT6A&s' },
        { name: '燒肉飯', qty: 0, price: 80, image: 'https://tokyo-kitchen.icook.network/uploads/step/cover/855139/a934e79af2162ea3.jpg' }
    ];

    const [meals, setMeals] = useState(測試物件);
    const [loadingIndex, setLoadingIndex] = useState(null);
    const [error, setError] = useState(null);

    const 警告 = () => alert('警告按鈕寫成 function');

    const handleClick = async (index) => {
        try {
            setLoadingIndex(index);
            setError(null);

            // 模擬非同步操作
            await new Promise(resolve => setTimeout(resolve, 300));

            // 方法一：使用函式更新確保拿到最新狀態
            // setMeals(prevMeals =>
            //   prevMeals.map((meal, i) =>
            //     i === index ? { ...meal, qty: meal.qty + 1 } : meal
            //   )
            // );

            // 方法二：直接修改特定索引（更簡潔，但需要完整複製陣列）
            setMeals(prevMeals => {
                const newMeals = [...prevMeals];
                newMeals[index] = { ...newMeals[index], qty: newMeals[index].qty + 1 };
                return newMeals;
            });

            // 方法三：使用 with() 方法（ES2023+，瀏覽器支援度需確認）
            // setMeals(prevMeals => 
            //   prevMeals.with(index, { ...prevMeals[index], qty: prevMeals[index].qty + 1 })
            // );

        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoadingIndex(null);
        }
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-list-ul me-3"></i>多筆資料渲染</h1><p className="lead mb-0">陣列狀態與儲物件更新</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">陣列操作</h5><ul className="text-muted mb-0"><li>map 渲染列表</li><li>陣列不可變更新</li><li>CSS Modules</li><li>Loading 狀態</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-arrow-repeat text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">更新方式</h5><ul className="text-muted mb-0"><li>函式式更新</li><li>Spread 複製</li><li>with() 方法</li><li>特定索引修改</li></ul></div></div></div></div></div></div></div></div>
            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2"></i>互動範例</h3><div className="container mt-2">
                {/* 寫註解的方法 */}
                <h2 className={styles.title}>餐點清單</h2>

                <div className={`${styles.alertButtons} mb-3`}>
                    <button className={`${styles.button} me-2`} onClick={警告}>
                        警告按鈕寫成 function
                    </button>
                    <button className={styles.button} onClick={() => alert('警告按鈕直接寫在裡面')}>
                        警告按鈕直接寫在裡面
                    </button>
                </div>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {meals.map((meal, index) => (
                        <div key={index} className="col">
                            <div className={`${styles.mealCard} card h-100`}>
                                <img src={meal.image} alt={meal.name} className={`${styles.mealImage} card-img-top`} style={{ height: '200px', objectFit: 'cover' }} />
                                <div className={`${styles.mealInfo} card-body`}>
                                    <p className="card-text fw-bold">名稱：{meal.name}</p>
                                    <p className="card-text">價格：${meal.price}</p>
                                    <p className="card-text">數量：{meal.qty}</p>
                                    <p className="card-text text-primary">小計：${meal.price * meal.qty}</p>
                                </div>
                                <div className="card-footer bg-transparent border-0">
                                    <button
                                        className={`${styles.button} w-100`}
                                        onClick={() => handleClick(index)}
                                        disabled={loadingIndex === index}
                                    >
                                        {/* 點擊後loadingIndex會被設定，然後開始渲染時判斷index有一樣的會驅動 */}
                                        {loadingIndex === index ? '讀取中...' : '加價 +1'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {error && <div className="alert alert-danger mt-3">⚠️ {error}</div>}
            </div>
            </div></div></div></div>
        </div>
    );
};
