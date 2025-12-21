import { RouterProvider, createHashRouter } from 'react-router-dom';
import { routerConfig } from './components/Layout';
import './App.css';

export const App = () => {
  return (
    <RouterProvider router={createHashRouter(routerConfig)} />
  )
}

export default App;
