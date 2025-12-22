import { lazy } from 'react';
import Layout from './components/Layout';

// React Pages
const BasicAiPage = lazy(() => import('./pages/react/01.jsx'));
const JsxAiPage = lazy(() => import('./pages/react/02.jsx'));
const RenderSingleAiPage = lazy(() => import('./pages/react/03.jsx'));
const RenderMultipleAiPage = lazy(() => import('./pages/react/04.jsx'));
const EsModuleAiPage = lazy(() => import('./pages/react/05.jsx'));
const ComponentAiPage = lazy(() => import('./pages/react/06.jsx'));
const ReactMemoAiPage = lazy(() => import('./pages/react/07.jsx'));

// React Form Pages
const InputPage = lazy(() => import('./pages/reactform/01.jsx'));
const SelectPage = lazy(() => import('./pages/reactform/02.jsx'));
const CheckboxPage = lazy(() => import('./pages/reactform/03.jsx'));
const RadioPage = lazy(() => import('./pages/reactform/04.jsx'));
const FilePage = lazy(() => import('./pages/reactform/05.jsx'));
const TextareaPage = lazy(() => import('./pages/reactform/06.jsx'));
const KeyboardEventPage = lazy(() => import('./pages/reactform/07.jsx'));
const DynamicFormPage = lazy(() => import('./pages/reactform/08.jsx'));
const ValidationPage = lazy(() => import('./pages/reactform/09.jsx'));
const UncontrolledPage = lazy(() => import('./pages/reactform/10.jsx'));
const WizardFormPage = lazy(() => import('./pages/reactform/11.jsx'));
const DebouncePage = lazy(() => import('./pages/reactform/12.jsx'));

// React Hook Pages
const UseStateAiPage = lazy(() => import('./pages/reacthook/01.jsx'));
const UseEffectAiPage = lazy(() => import('./pages/reacthook/02.jsx'));
const UseRefAiPage = lazy(() => import('./pages/reacthook/03.jsx'));
const UseMemoAiPage = lazy(() => import('./pages/reacthook/04.jsx'));
const UseCallbackAiPage = lazy(() => import('./pages/reacthook/05.jsx'));
const UseContextAiPage = lazy(() => import('./pages/reacthook/06.jsx'));
const UseTransitionAiPage = lazy(() => import('./pages/reacthook/07.jsx'));
const UseLayoutEffectAiPage = lazy(() => import('./pages/reacthook/08.jsx'));
const UseReducerAiPage = lazy(() => import('./pages/reacthook/09.jsx'));
const UseDeferredValueAiPage = lazy(() => import('./pages/reacthook/10.jsx'));
const UseInsertionEffectAiPage = lazy(() => import('./pages/reacthook/11.jsx'));
const UseImperativeHandleAiPage = lazy(() => import('./pages/reacthook/12.jsx'));
const ForwardRefAiPage = lazy(() => import('./pages/reacthook/13.jsx'));
const UseOptimisticAiPage = lazy(() => import('./pages/reacthook/14.jsx'));
const UseFormStatusAiPage = lazy(() => import('./pages/reacthook/15.jsx'));
const UseActionStateAiPage = lazy(() => import('./pages/reacthook/16.jsx'));
const UseIdAiPage = lazy(() => import('./pages/reacthook/17.jsx'));
const UseSyncExternalStoreAiPage = lazy(() => import('./pages/reacthook/18.jsx'));
const UseDebugValueAiPage = lazy(() => import('./pages/reacthook/19.jsx'));

// React Hook Form Pages
const ReactHookFormAiPage = lazy(() => import('./pages/reacthookform/01.jsx'));

// React Router Dom Pages
const BasicRoutingPage = lazy(() => import('./pages/reactrouterdom/01.jsx'));
const AdvancedRoutingPage = lazy(() => import('./pages/reactrouterdom/02.jsx'));
const DynamicRoutingPage = lazy(() => import('./pages/reactrouterdom/03.jsx'));
const NestedRoutingPage = lazy(() => import('./pages/reactrouterdom/04.jsx'));
const NestedRoutingDemoPage = lazy(() => import('./pages/reactrouterdom/05.jsx'));

// React Redux Pages
const ReduxBasicPage = lazy(() => import('./pages/reactredux/03.jsx'));
const ReduxTodoListPage = lazy(() => import('./pages/reactredux/01.jsx'));
const ReduxMessagePage = lazy(() => import('./pages/reactredux/02.jsx'));

// React App Pages
const UseStatePage = lazy(() => import('./pages/reactapp/01.jsx'));
const UseEffectPage = lazy(() => import('./pages/reactapp/02.jsx'));
const UseRefPage = lazy(() => import('./pages/reactapp/03.jsx'));
const UseMemoPage = lazy(() => import('./pages/reactapp/04.jsx'));
const UseCallbackPage = lazy(() => import('./pages/reactapp/05.jsx'));
const UseDebugValuePage = lazy(() => import('./pages/reactapp/06.jsx'));
const UseContextPage = lazy(() => import('./pages/reactapp/07.jsx'));
const UseReducerPage = lazy(() => import('./pages/reactapp/08.jsx'));


export const routes = [

    {
        path: '/',
        element: <Layout />,
        children: [


            {
                path: 'react',
                title: 'React',
                isShow: true,
                children: [
                    { path: '01', element: <BasicAiPage />, title: '01.Basic', isShow: true },
                    { path: '02', element: <JsxAiPage />, title: '02.JSX', isShow: true },
                    { path: '03', element: <RenderSingleAiPage />, title: '03.Single Render', isShow: true },
                    { path: '04', element: <RenderMultipleAiPage />, title: '04.Multiple Render', isShow: true },
                    { path: '05', element: <EsModuleAiPage />, title: '05.ES Modules', isShow: true },
                    { path: '06', element: <ComponentAiPage />, title: '06.Component', isShow: true },
                    { path: '07', element: <ReactMemoAiPage />, title: '07.React.memo', isShow: true },
                ]
            },
            {
                path: 'reactform',
                title: 'React Form',
                isShow: true,
                children: [
                    { path: '01', element: <InputPage />, title: '01.Input', isShow: true },
                    { path: '02', element: <SelectPage />, title: '02.Select', isShow: true },
                    { path: '03', element: <CheckboxPage />, title: '03.Checkbox', isShow: true },
                    { path: '04', element: <RadioPage />, title: '04.Radio', isShow: true },
                    { path: '05', element: <FilePage />, title: '05.File', isShow: true },
                    { path: '06', element: <TextareaPage />, title: '06.Textarea', isShow: true },
                    { path: '07', element: <KeyboardEventPage />, title: '07.Keyboard Event', isShow: true },
                    { path: '08', element: <DynamicFormPage />, title: '08.Dynamic Form', isShow: true },
                    { path: '09', element: <ValidationPage />, title: '09.Validation', isShow: true },
                    { path: '10', element: <UncontrolledPage />, title: '10.Uncontrolled', isShow: true },
                    { path: '11', element: <WizardFormPage />, title: '11.Wizard Form', isShow: true },
                    { path: '12', element: <DebouncePage />, title: '12.Debounce', isShow: true },
                ]
            },
            {
                path: 'reacthook',
                title: 'React Hook',
                isShow: true,
                children: [
                    { path: '01', element: <UseStateAiPage />, title: '01.useState', isShow: true },
                    { path: '02', element: <UseEffectAiPage />, title: '02.useEffect', isShow: true },
                    { path: '03', element: <UseRefAiPage />, title: '03.useRef', isShow: true },
                    { path: '04', element: <UseMemoAiPage />, title: '04.useMemo', isShow: true },
                    { path: '05', element: <UseCallbackAiPage />, title: '05.useCallback', isShow: true },
                    { path: '06', element: <UseContextAiPage />, title: '06.useContext', isShow: true },
                    { path: '07', element: <UseTransitionAiPage />, title: '07.useTransition', isShow: true },
                    { path: '08', element: <UseLayoutEffectAiPage />, title: '08.useLayoutEffect', isShow: true },
                    { path: '09', element: <UseReducerAiPage />, title: '09.useReducer', isShow: true },
                    { path: '10', element: <UseDeferredValueAiPage />, title: '10.useDeferredValue', isShow: true },
                    { path: '11', element: <UseInsertionEffectAiPage />, title: '11.useInsertionEffect', isShow: true },
                    { path: '12', element: <UseImperativeHandleAiPage />, title: '12.useImperativeHandle', isShow: true },
                    { path: '13', element: <ForwardRefAiPage />, title: '13.forwardRef', isShow: true },
                    { path: '14', element: <UseOptimisticAiPage />, title: '14.useOptimistic', isShow: true },
                    { path: '15', element: <UseFormStatusAiPage />, title: '15.useFormStatus', isShow: true },
                    { path: '16', element: <UseActionStateAiPage />, title: '16.useActionState', isShow: true },
                    { path: '17', element: <UseIdAiPage />, title: '17.useId', isShow: true },
                    { path: '18', element: <UseSyncExternalStoreAiPage />, title: '18.useSyncExternalStore', isShow: true },
                    { path: '19', element: <UseDebugValueAiPage />, title: '19.useDebugValue', isShow: true },
                ]
            },
            {
                path: 'reacthookform',
                title: 'React Hook Form',
                isShow: true,
                children: [
                    { path: '01', element: <ReactHookFormAiPage />, title: '01.Basic', isShow: true },
                ]
            },
            {
                path: 'reactrouterdom',
                title: 'React Router Dom',
                isShow: true,
                children: [
                    { path: '01', element: <BasicRoutingPage />, title: '01.Basic Routing', isShow: true },
                    { path: '02', element: <AdvancedRoutingPage />, title: '02.useNavigate & useLocation', isShow: true },
                    { path: '03', element: <DynamicRoutingPage />, title: '03.Dynamic Routing', isShow: true },
                    { path: '04', element: <NestedRoutingPage />, title: '04.Nested Routing', isShow: true },
                    { path: '05/*', element: <NestedRoutingDemoPage />, title: '05.Nested Demo', isShow: true },
                ]
            },
            {
                path: 'reactredux',
                title: 'React Redux',
                isShow: true,
                children: [
                    { path: '01', element: <ReduxTodoListPage />, title: '01.Redux Todo List', isShow: true },
                    { path: '02', element: <ReduxMessagePage />, title: '02.Redux Message', isShow: true },
                    { path: '03', element: <ReduxBasicPage />, title: '03.Redux Async Product', isShow: true },
                ]
            },
            {
                path: 'reactapp',
                title: 'React App',
                isShow: true,
                children: [
                    { path: '01', element: <UseStatePage />, title: '01.useState', isShow: true },
                    { path: '02', element: <UseEffectPage />, title: '02.useEffect', isShow: true },
                    { path: '03', element: <UseRefPage />, title: '03.useRef', isShow: true },
                    { path: '04', element: <UseMemoPage />, title: '04.useMemo', isShow: true },
                    { path: '05', element: <UseCallbackPage />, title: '05.useCallback', isShow: true },
                    { path: '06', element: <UseDebugValuePage />, title: '06.useDebugValue', isShow: true },
                    { path: '07', element: <UseContextPage />, title: '07.useContext', isShow: true },
                    { path: '08', element: <UseReducerPage />, title: '08.useReducer', isShow: true },
                ]
            }]
    }
];
