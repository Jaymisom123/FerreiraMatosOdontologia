import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Volta o scroll para o topo sempre que a rota mudar
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop; 