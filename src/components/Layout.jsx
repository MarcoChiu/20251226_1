import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from './Loading';
import NavBar from './NavBar';
import Footer from './Footer';
import GoTop from './GoTop';

const Layout = () => {
    return (
        <>
            <NavBar />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
            <Footer />
            <GoTop />
        </>
    );
}

export default Layout;
