import { useState } from 'react';
import styles from './04.module.css';

export const RenderMultiplePage = () => {
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
        <>
            <div className={styles.container}>
                {/* 寫註解的方法 */}
                <h2 className={styles.title}>餐點清單</h2>

                <div className={styles.alertButtons}>
                    <button className={styles.button} onClick={警告}>
                        警告按鈕寫成 function
                    </button>
                </div>

                <div className={styles.alertButtons}>
                    <button className={styles.button} onClick={() => alert('警告按鈕直接寫在裡面')}>
                        警告按鈕直接寫在裡面
                    </button>
                </div>

                {meals.map((meal, index) => (
                    <div key={index} className={styles.mealCard}>
                        <img src={meal.image} alt={meal.name} className={styles.mealImage} />
                        <div className={styles.mealInfo}>
                            <p>名稱：{meal.name}</p>
                            <p>價格：${meal.price}</p>
                            <p>數量：{meal.qty}</p>
                            <p>小計：${meal.price * meal.qty}</p>
                        </div>
                        <button
                            className={styles.button}
                            onClick={() => handleClick(index)}
                            disabled={loadingIndex === index}
                        >
                            {/* 點擊後loadingIndex會被設定，然後開始渲染時判斷index有一樣的會驅動 */}
                            {loadingIndex === index ? '讀取中...' : '加價 +1'}
                        </button>
                    </div>
                ))}

                {error && <p className={styles.errorText}>⚠️ {error}</p>}
            </div>
        </>
    );
};