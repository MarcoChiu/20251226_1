import { useEffect } from 'react';
import obj from './05.js';
import { fn } from './05.js';
import * as all from './05.js';
export const EsModulePage = () => {
    useEffect(() => {
        //預設匯出
        obj.fn();
        //具名匯出
        fn();
        //全部匯出
        all.fn();
    }, []);
    return (
        <>
        </>
    );
};