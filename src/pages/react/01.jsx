import { useEffect } from 'react';

export default function BasicPage() {

    useEffect(() => {
        //#####陣列解值#####
        const colors = ['red', 'green', 'blue'];
        const [x, y] = colors; //順序有關係，x取得第0，y取得第1
        console.log(x, y); //red green

        //#####物件解值#####
        const user = {
            name: 'Tom',
            age: 99,
            hobbies: '打球'
        };
        const { age, hobbies, name } = user; //順序沒關係欄位名稱對就好
        console.log(age, name, hobbies); //99 'Tom' '打球'

        //#####解構概念#####
        function useState(init) {
            let state = init;
            return [state, function () { }];
        }
        const [count, setCount] = useState(1);
        console.log(count, setCount);//, f{}

        //#####擴展運算子 Spread Operator#####
        const colorsArr = ['black', colors];
        console.log(colorsArr); //會將陣列裡面塞陣列
        const SpreadOperator = ['black', ...colors];
        console.log(SpreadOperator);//['black', 'red', 'green', 'blue'] 會將變數展開在塞入

        //#####陣列方法#####
        const peoplelist = document.querySelector('.peoplelist');
        const peoples = [
            { name: '排骨飯', qty: 1, price: 10 },
            { name: '陽春麵', qty: 2, price: 20 },
            { name: '蛋糕', qty: 3, price: 30 }
        ];

        //forEach唯一沒有回傳值的陣列方法
        //let html = '';      
        //peoples.forEach(x => html += `<li>姓名${x.name},數量${x.qty},價格${x.price}</li>`);

        //map
        //1.會產生新的陣列
        //2.新陣列長度與原始的相同
        //3.箭頭函式跟傳統函式不一樣
        //const html = peoples.map(x => `<li>姓名${x.name},數量${x.qty},價格${x.price}</li>`).join("");//沒有join會直接是原陣列數量的文字      
        if (peoplelist) {
            peoplelist.innerHTML = peoples.map(x => `<li>姓名${x.name},數量${x.qty},價格${x.price}</li>`).join("");//html;
        }
    }, []);

    return (
        <div className="container py-5">
            <div className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}>
                <div className="position-relative" style={{ zIndex: 1 }}><h1 className="display-4 fw-bold mb-3"><i className="bi bi-code-square me-3"></i>JavaScript 基礎</h1><p className="lead mb-0">陣列/物件解構、擴展運算子與陣列方法</p></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)', zIndex: 0 }}></div>
            </div>
            <div className="row mb-5"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body p-4"><h2 className="h4 mb-4"><i className="bi bi-info-circle me-2 text-primary"></i>功能說明</h2><div className="row g-4"><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-primary bg-opacity-10 rounded-circle p-3"><i className="bi bi-check2-circle text-primary fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">ES6 特性</h5><ul className="text-muted mb-0"><li>陣列解構購值</li><li>物件解構購值</li><li>Spread Operator</li><li>箱頭函式</li></ul></div></div></div><div className="col-md-6"><div className="d-flex align-items-start"><div className="flex-shrink-0"><div className="bg-success bg-opacity-10 rounded-circle p-3"><i className="bi bi-list-ul text-success fs-4"></i></div></div><div className="flex-grow-1 ms-3"><h5 className="mb-2">陣列方法</h5><ul className="text-muted mb-0"><li>map 轉換</li><li>forEach 迴圈</li><li>filter 過濾</li><li>reduce 累計</li></ul></div></div></div></div></div></div></div></div>
            <div className="row mb-4"><div className="col-12"><div className="card border-0 shadow-sm"><div className="card-body"><h3 className="card-title mb-4"><i className="bi bi-code-square me-2"></i>互動範例</h3><div className="container mt-2">
                <ul className="peoplelist"></ul>
            </div>
            </div></div></div></div>
        </div>
    )
}
