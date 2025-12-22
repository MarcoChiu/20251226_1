import { useState, useEffect } from 'react';

export default function GoTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="btn btn-primary position-fixed bottom-0 end-0 m-4 rounded-circle"
                    style={{ width: '50px', height: '50px', zIndex: 1000 }}
                >
                    ↑
                </button>
            )}
        </>
    );
}
