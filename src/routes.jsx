import { BasicPage } from './pages/react/01.jsx';
import { JsxPage } from './pages/react/02.jsx';
import { RenderSinglePage } from './pages/react/03.jsx';
import { RenderMultiplePage } from './pages/react/04.jsx';
import { EsModulePage } from './pages/react/05.jsx';
import { ComponentPage } from './pages/react/06.jsx';
import { UseStatePage } from './pages/react/07.jsx';
import { UseEffectPage } from './pages/react/08.jsx';
import { UseRefPage } from './pages/react/09.jsx'
export const routes = [
    {
        path: 'react',
        title: 'React',
        showInMenu: true,
        children: [
            {
                path: 'basic',
                element: <BasicPage />,
                title: '01.基本語法',
                showInMenu: true,
            },
            {
                path: 'jsx',
                element: <JsxPage />,
                title: '02.JSX',
                showInMenu: true,
            },
            {
                path: 'rendersingle',
                element: <RenderSinglePage />,
                title: '03.資料渲染 + 單筆 + useState',
                showInMenu: true,
            },
            {
                path: 'rendermutiple',
                element: <RenderMultiplePage />,
                title: '04.資料渲染 + 多筆 + useState',
                showInMenu: true,
            },
            {
                path: 'esmodule',
                element: <EsModulePage />,
                title: '05.ES Module',
                showInMenu: true,
            },
            {
                path: 'component',
                element: <ComponentPage />,
                title: '06.元件拆分',
                showInMenu: true,
            },
            {
                path: 'usestate',
                element: <UseStatePage />,
                title: '07.useState + useMemo + 元件化',
                showInMenu: true,
            },
            {
                path: 'useeffect',
                element: <UseEffectPage />,
                title: '08.useEffect + Unsplash + 滾動加載',
                showInMenu: true,
            },
            {
                path: 'useref',
                element: <UseRefPage />,
                title: '09.useRef + bootstrap.Modal',
                showInMenu: true,
            }
        ]
    }
];
