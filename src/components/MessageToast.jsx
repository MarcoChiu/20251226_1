import { useSelector, useDispatch } from 'react-redux';
import { deleteMessage } from '../slice/messageSlice';
import { useEffect } from 'react';

export default function MessageToast() {
    const { messages } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    // 自動添加 CSS 動畫
    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        if (!document.querySelector('style[data-message-animation]')) {
            styleElement.setAttribute('data-message-animation', 'true');
            document.head.appendChild(styleElement);
        }
    }, []);

    const getMessageIcon = (type) => {
        const icons = {
            success: 'check-circle-fill',
            info: 'info-circle-fill',
            warning: 'exclamation-triangle-fill',
            error: 'x-circle-fill',
            primary: 'flag-fill',
            secondary: 'gear-fill',
            light: 'sun-fill',
            dark: 'moon-fill'
        };
        return icons[type] || 'info-circle-fill';
    };

    const getMessageColor = (type) => {
        const colors = {
            success: 'success',
            info: 'info',
            warning: 'warning',
            error: 'danger',
            primary: 'primary',
            secondary: 'secondary',
            light: 'light',
            dark: 'dark'
        };
        return colors[type] || 'info';
    };

    return (
        <div
            className="position-fixed top-0 end-0 p-3"
            style={{
                zIndex: 9999,
                maxWidth: '400px',
                maxHeight: '100vh',
                overflowY: 'auto'
            }}
        >
            {messages.slice(-5).reverse().map((message) => (
                <div
                    key={message.id}
                    className={`alert alert-${getMessageColor(message.type)} alert-dismissible fade show mb-2 shadow-lg`}
                    role="alert"
                    style={{
                        opacity: message.read ? 1 : 1, // 暫時保持可見，或根據需求調整
                        transition: 'opacity 0.3s',
                        animation: 'slideInRight 0.3s ease-out'
                    }}
                >
                    <div className="d-flex align-items-start">
                        <i className={`bi bi-${getMessageIcon(message.type)} me-2 flex-shrink-0`}></i>
                        <div className="flex-grow-1">
                            <strong>{message.text}</strong>
                            {/* 只有在 03.jsx 原本有顯示 NEW 標籤和時間，這裡通用化可以選擇顯示或隱藏，
                                此處為了通用與簡潔，保留基本樣式，若需要詳細資訊可依需求保留或移除。
                                02.jsx 是精簡版，03.jsx 是詳細版。
                                為了共用，我們取聯集，顯示完整資訊，或根據 payload 傳入的屬性判斷？
                                
                                觀察 02.jsx 其實只是簡單顯示 text。
                                03.jsx 顯示 text, NEW badge, time.
                                
                                為了讓 03.jsx 功能不減，我會保留時間顯示。
                             */}
                            <div className="small mt-1 text-muted-50">
                                {new Date(message.timestamp).toLocaleTimeString('zh-TW')}
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => dispatch(deleteMessage(message.id))}
                        aria-label="Close"
                    ></button>
                </div>
            ))}
        </div>
    );
}
