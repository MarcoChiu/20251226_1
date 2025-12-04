import { useState, useRef, useEffect } from 'react';
import { Modal } from 'bootstrap';

function Counter() {
    const [count, setCount] = useState(0);  // 會觸發渲染
    const renderCount = useRef(0);          // 不會觸發渲染
    // 每次渲染時增加
    renderCount.current += 1;
    return (
        <div>
            <p>計數: {count}</p>
            <p>渲染次數: {renderCount.current}</p>
            <button onClick={() => setCount(count + 1)}>
                增加計數 (StrictMode關係所以會多一次渲染)
            </button>
        </div>
    )
}

export const UseRefPage = () => {
    //useRef 跟  useState差異 :    
    const modalRef = useRef(null);
    const customerModal = useRef(null);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        customerModal.current = new Modal(modalRef.current);//初始化modal
    }, []);

    const modalOpen = (imageUrl = '') => {
        setSelectedImage(imageUrl);
        customerModal.current.show();
    }

    const modalClose = () => {
        customerModal.current.hide();
    }

    return (
        <>
            <button type="button" className="btn btn-primary" onClick={modalOpen} >
                bootstrap Modal demo
            </button>
            <div className="modal fade" ref={modalRef} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" >標題</h1>
                            <button type="button" className="btn-close" onClick={modalClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-start">
                            <div>1.修改class變className </div>
                            <div>2.main.jsx import 'bootstrap' </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={modalClose}>關閉</button>
                            <button type="button" className="btn btn-primary">存檔</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <Counter />
        </>
    )
};