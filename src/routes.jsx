import BasicAiPage from './pages/react/01.jsx';
import JsxAiPage from './pages/react/02.jsx';
import RenderSingleAiPage from './pages/react/03.jsx';
import RenderMultipleAiPage from './pages/react/04.jsx';
import EsModuleAiPage from './pages/react/05.jsx';
import ComponentAiPage from './pages/react/06.jsx';
import ReactMemoAiPage from './pages/react/07.jsx';

import InputPage from './pages/form/01.jsx';
import SelectPage from './pages/form/02.jsx';
import CheckboxPage from './pages/form/03.jsx';
import RadioPage from './pages/form/04.jsx';
import FilePage from './pages/form/05.jsx';
import TextareaPage from './pages/form/06.jsx';
import KeyboardEventPage from './pages/form/07.jsx';
import DynamicFormPage from './pages/form/08.jsx';
import ValidationPage from './pages/form/09.jsx';
import UncontrolledPage from './pages/form/10.jsx';
import WizardFormPage from './pages/form/11.jsx';
import DebouncePage from './pages/form/12.jsx';

import UseStateAiPage from './pages/reacthook/01.jsx';
import UseEffectAiPage from './pages/reacthook/02.jsx';
import UseRefAiPage from './pages/reacthook/03.jsx';
import UseMemoAiPage from './pages/reacthook/04.jsx';
import UseCallbackAiPage from './pages/reacthook/05.jsx';
import UseContextAiPage from './pages/reacthook/06.jsx';
import UseTransitionAiPage from './pages/reacthook/07.jsx';
import UseLayoutEffectAiPage from './pages/reacthook/08.jsx';
import UseReducerAiPage from './pages/reacthook/09.jsx';
import UseDeferredValueAiPage from './pages/reacthook/10.jsx';
import UseInsertionEffectAiPage from './pages/reacthook/11.jsx';
import UseImperativeHandleAiPage from './pages/reacthook/12.jsx';
import ForwardRefAiPage from './pages/reacthook/13.jsx';
import UseOptimisticAiPage from './pages/reacthook/14.jsx';
import UseFormStatusAiPage from './pages/reacthook/15.jsx';
import UseActionStateAiPage from './pages/reacthook/16.jsx';
import UseIdAiPage from './pages/reacthook/17.jsx';
import UseSyncExternalStoreAiPage from './pages/reacthook/18.jsx';
import UseDebugValueAiPage from './pages/reacthook/19.jsx';

import ReactHookFormAiPage from './pages/reacthookform/01.jsx';

import UseStatePage from './pages/reactapp/01.jsx';
import UseEffectPage from './pages/reactapp/02.jsx';
import UseRefPage from './pages/reactapp/03.jsx';
import UseMemoPage from './pages/reactapp/04.jsx';
import UseCallbackPage from './pages/reactapp/05.jsx';
import UseDebugValuePage from './pages/reactapp/06.jsx';
import UseContextPage from './pages/reactapp/07.jsx';
import UseReducerPage from './pages/reactapp/08.jsx';


export const routes = [
    {
        path: 'react',
        title: 'React',
        showInMenu: true,
        children: [
            { path: '01', element: <BasicAiPage />, title: '01.Basic', showInMenu: true },
            { path: '02', element: <JsxAiPage />, title: '02.JSX', showInMenu: true },
            { path: '03', element: <RenderSingleAiPage />, title: '03.Single Render', showInMenu: true },
            { path: '04', element: <RenderMultipleAiPage />, title: '04.Multiple Render', showInMenu: true },
            { path: '05', element: <EsModuleAiPage />, title: '05.ES Modules', showInMenu: true },
            { path: '06', element: <ComponentAiPage />, title: '06.Component', showInMenu: true },
            { path: '07', element: <ReactMemoAiPage />, title: '07.React.memo', showInMenu: true },
        ]
    },
    {
        path: 'form',
        title: 'Form',
        showInMenu: true,
        children: [
            { path: '01', element: <InputPage />, title: '01.Input', showInMenu: true },
            { path: '02', element: <SelectPage />, title: '02.Select', showInMenu: true },
            { path: '03', element: <CheckboxPage />, title: '03.Checkbox', showInMenu: true },
            { path: '04', element: <RadioPage />, title: '04.Radio', showInMenu: true },
            { path: '05', element: <FilePage />, title: '05.File', showInMenu: true },
            { path: '06', element: <TextareaPage />, title: '06.Textarea', showInMenu: true },
            { path: '07', element: <KeyboardEventPage />, title: '07.Keyboard Event', showInMenu: true },
            { path: '08', element: <DynamicFormPage />, title: '08.Dynamic Form', showInMenu: true },
            { path: '09', element: <ValidationPage />, title: '09.Validation', showInMenu: true },
            { path: '10', element: <UncontrolledPage />, title: '10.Uncontrolled', showInMenu: true },
            { path: '11', element: <WizardFormPage />, title: '11.Wizard Form', showInMenu: true },
            { path: '12', element: <DebouncePage />, title: '12.Debounce', showInMenu: true },
        ]
    },
    {
        path: 'reacthook',
        title: 'React Hook',
        showInMenu: true,
        children: [
            { path: '01', element: <UseStateAiPage />, title: '01.useState', showInMenu: true },
            { path: '02', element: <UseEffectAiPage />, title: '02.useEffect', showInMenu: true },
            { path: '03', element: <UseRefAiPage />, title: '03.useRef', showInMenu: true },
            { path: '04', element: <UseMemoAiPage />, title: '04.useMemo', showInMenu: true },
            { path: '05', element: <UseCallbackAiPage />, title: '05.useCallback', showInMenu: true },
            { path: '06', element: <UseContextAiPage />, title: '06.useContext', showInMenu: true },
            { path: '07', element: <UseTransitionAiPage />, title: '07.useTransition', showInMenu: true },
            { path: '08', element: <UseLayoutEffectAiPage />, title: '08.useLayoutEffect', showInMenu: true },
            { path: '09', element: <UseReducerAiPage />, title: '09.useReducer', showInMenu: true },
            { path: '10', element: <UseDeferredValueAiPage />, title: '10.useDeferredValue', showInMenu: true },
            { path: '11', element: <UseInsertionEffectAiPage />, title: '11.useInsertionEffect', showInMenu: true },
            { path: '12', element: <UseImperativeHandleAiPage />, title: '12.useImperativeHandle', showInMenu: true },
            { path: '13', element: <ForwardRefAiPage />, title: '13.forwardRef', showInMenu: true },
            { path: '14', element: <UseOptimisticAiPage />, title: '14.useOptimistic', showInMenu: true },
            { path: '15', element: <UseFormStatusAiPage />, title: '15.useFormStatus', showInMenu: true },
            { path: '16', element: <UseActionStateAiPage />, title: '16.useActionState', showInMenu: true },
            { path: '17', element: <UseIdAiPage />, title: '17.useId', showInMenu: true },
            { path: '18', element: <UseSyncExternalStoreAiPage />, title: '18.useSyncExternalStore', showInMenu: true },
            { path: '19', element: <UseDebugValueAiPage />, title: '19.useDebugValue', showInMenu: true },
        ]
    },
    {
        path: 'reacthookform',
        title: 'React Hook Form',
        showInMenu: true,
        children: [
            { path: '01', element: <ReactHookFormAiPage />, title: '01.Basic', showInMenu: true },
        ]
    },
    {
        path: 'reactapp',
        title: 'React App',
        showInMenu: true,
        children: [
            { path: '01', element: <UseStatePage />, title: '01.useState', showInMenu: true },
            { path: '02', element: <UseEffectPage />, title: '02.useEffect', showInMenu: true },
            { path: '03', element: <UseRefPage />, title: '03.useRef', showInMenu: true },
            { path: '04', element: <UseMemoPage />, title: '04.useMemo', showInMenu: true },
            { path: '05', element: <UseCallbackPage />, title: '05.useCallback', showInMenu: true },
            { path: '06', element: <UseDebugValuePage />, title: '06.useDebugValue', showInMenu: true },
            { path: '07', element: <UseContextPage />, title: '07.useContext', showInMenu: true },
            { path: '08', element: <UseReducerPage />, title: '08.useReducer', showInMenu: true },
        ]
    }
];
