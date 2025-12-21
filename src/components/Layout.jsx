import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { routes } from '../routes';
import { Loading } from './Loading';

const { VITE_APP_WebSite_Title } = import.meta.env;


const Layout = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [expandedMenus, setExpandedMenus] = useState({});
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleMenu = (key) => {
        setExpandedMenus(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const uniqueRoutes = useMemo(() => {
        return routes.filter((route, index, self) =>
            index === self.findIndex((t) => (
                t.title === route.title
            ))
        );
    }, []);

    // Initialize all menus as expanded on first load
    useEffect(() => {
        const initialExpanded = {};
        uniqueRoutes.forEach(route => {
            if (route.children) {
                initialExpanded[route.title] = true;
            }
        });
        setExpandedMenus(initialExpanded);
    }, [uniqueRoutes]);

    // Helper to flatten routes for easier title lookup
    const getFlattenedRoutes = (routes, parentPath = '') => {
        let flat = [];
        routes.forEach(route => {
            const fullPath = parentPath ? `${parentPath}/${route.path}` : route.path;
            if (route.children) {
                flat = [...flat, ...getFlattenedRoutes(route.children, fullPath)];
            } else {
                flat.push({ ...route, fullPath });
            }
        });
        return flat;
    };

    const getTitle = () => {
        const currentPath = location.pathname.startsWith('/')
            ? location.pathname.slice(1)
            : location.pathname;

        const flatRoutes = getFlattenedRoutes(routes);
        const route = flatRoutes.find(r => r.fullPath === currentPath);
        return route ? route.title : '首頁';
    };

    // Update document title when route changes
    useEffect(() => {
        const pageTitle = getTitle();
        document.title = `${VITE_APP_WebSite_Title}${pageTitle}`;
    }, [location]);

    // Recursive menu renderer
    const renderMenu = (routes, parentPath = '') => {
        return routes.filter(r => r.isShow).map(route => {
            const fullPath = parentPath ? `${parentPath}/${route.path}` : route.path;
            const menuKey = route.title;
            const isExpanded = expandedMenus[menuKey];

            if (route.children) {
                return (
                    <li className="nav-item mb-2" key={menuKey}>
                        <div
                            className="nav-link text-white fw-bold d-flex align-items-center justify-content-between"
                            onClick={() => toggleMenu(menuKey)}
                            style={{ cursor: 'pointer', userSelect: 'none' }}
                        >
                            <span>{route.title}</span>
                            <span style={{ fontSize: '1.2rem', transition: 'transform 0.2s', transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                                ▶
                            </span>
                        </div>
                        <div style={{
                            maxHeight: isExpanded ? '1000px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease-in-out'
                        }}>
                            <ul className="nav flex-column ms-3">
                                {renderMenu(route.children, fullPath)}
                            </ul>
                        </div>
                    </li>
                );
            }

            return (
                <li className="nav-item mb-2" key={route.title}>
                    <Link
                        to={`/${fullPath}`}
                        className="nav-link text-white"
                        style={{
                            whiteSpace: 'normal',
                            wordWrap: 'break-word',
                            fontSize: '0.9rem',
                            lineHeight: '1.4'
                        }}
                    >
                        {route.title}
                    </Link>
                </li>
            );
        });
    };

    return (
        <div className="d-flex" style={{ minHeight: '100vh', overflow: 'hidden' }}>
            {/* Sidebar */}
            <div
                className={`bg-dark text-white flex-shrink-0 transition-all`}
                style={{
                    width: isOpen ? '300px' : '0px',
                    transition: 'width 0.3s',
                    overflow: 'hidden'
                }}
            >
                <div className="p-1" style={{ width: '300px', height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>
                    <h4 className="mb-2">學習筆記本</h4>
                    <ul className="nav flex-column">
                        {renderMenu(uniqueRoutes)}
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow-1 d-flex flex-column" style={{ height: '100vh', overflowY: 'auto' }}>
                {/* Header with Toggle Button and Title */}
                <div className="bg-light border-bottom p-3 d-flex align-items-center sticky-top">
                    <button
                        className="btn btn-outline-secondary me-3"
                        onClick={toggleSidebar}
                    >
                        {isOpen ? '<' : '>'}
                    </button>
                    <h2 className="m-0 h4">{getTitle()}</h2>
                </div>

                {/* Content Container */}
                <div className="mt-4 pb-5">
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};


// 遞迴處理路由，為 createHashRouter 格式化
const formatRoutes = (routes) => {
    return routes.map((route) => {
        const formatted = { ...route };
        if (route.children) {
            formatted.children = formatRoutes(route.children);
        }
        return formatted;
    });
};

// 找出第一個導覽路徑
const getFirstPath = (routes) => {
    if (!routes || routes.length === 0) return '';
    const first = routes[0];
    if (first.children && first.children.length > 0) {
        return `${first.path}/${getFirstPath(first.children)}`;
    }
    return first.path;
};

export const routerConfig = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to={`/${getFirstPath(routes)}`} replace />
            },
            ...formatRoutes(routes)
        ]
    }
];

export { Layout };
