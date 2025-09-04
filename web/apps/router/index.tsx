import { useEffect } from 'react';
import config, { type CustomRouteConfig } from './config';
import { Route, Routes } from 'react-router-dom';

const CustomRoute: React.FC<CustomRouteConfig> = ({ loginRequired = true, redirectIfLogged = true, component: Component, title }) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Open Source @ noneandundefined`;
        } else {
            document.title = `Open Source @ noneandundefined`;
        }
    }, [title]);

    return <Component />
};

export default () => {
    return (
        <Routes>
            {config.map((route) => (
                <Route key={route.path} path={route.path} element={<CustomRoute {...route} />} />
            ))}
        </Routes>
    );
};
