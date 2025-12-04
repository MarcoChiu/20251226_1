import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { routes } from './routes';
import './App.css';

// Recursive function to render routes
const renderRoutes = (routes) => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path}>
          {renderRoutes(route.children)}
        </Route>
      );
    }
    return <Route key={route.path} path={route.path} element={route.element} />;
  });
};

// Helper to find the first leaf path for redirect
const getFirstPath = (routes) => {
  if (!routes || routes.length === 0) return '';
  const first = routes[0];
  if (first.children && first.children.length > 0) {
    return `${first.path}/${getFirstPath(first.children)}`;
  }
  return first.path;
};

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={`/${getFirstPath(routes)}`} replace />} />
          {renderRoutes(routes)}
        </Route>
      </Routes>
    </HashRouter>
  );
}
