import { useState } from 'react';
const { VITE_APP_WebSite_Title } = import.meta.env;

export const JsxPage = () => {

    //處理邏輯
    //function顯示
    const test = () => <h3>test function</h3>;
    //
    const htmlTemplate = {
        __html: `<h3 style="color:red;">dangerous InnerHTML </h3>`
    }
    const [peoples, setPeoples] = useState([
        { name: '排骨飯', qty: 1, price: 10, remark: '1' },
        { name: '陽春麵', qty: 2, price: 20, remark: '2' },
        { name: '蛋糕', qty: 3, price: 30, remark: '3' }
    ]);

    const handleQtyChange = (index, newQty) => {
        const updatedPeoples = [...peoples];
        updatedPeoples[index].qty = parseInt(newQty);
        setPeoples(updatedPeoples);
    };

    return (
        <>
            <div className="container">
                {test()}
                <div dangerouslySetInnerHTML={htmlTemplate} />
                <ul className="myclass">
                    {
                        peoples.map((item, index) => (
                            <li key={index}>
                                {index + 1}.
                                <input type="checkbox" defaultChecked />
                                <label htmlFor={`name-${index}`}>姓名</label>
                                <input type="text" id={`name-${index}`} defaultValue={item.name} readOnly />
                                {item.price}x<select value={item.qty} onChange={(e) => handleQtyChange(index, e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select> = ${item.qty * item.price}
                                <textarea cols="30" rows="1" style={{ color: 'red', fontSize: '20px' }} defaultValue={item.remark}></textarea>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

