/**
 * @description Fichier principal de l'application React
 * Créé par Adrien Quijo
 *
 * V 1.0.0
 */
import { createRoot } from 'react-dom/client';
import 'assets/css/NavHeader.scss';
import App from './pages/App.jsx';
import React from 'react';
import {
    createBrowserRouter,
    NavLink,
    Outlet,
    RouterProvider,
} from 'react-router';
import { Logo } from './components/headers/nav/Logo.jsx';
import { PageError } from './pages/Error/PageError.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { AboutUs } from './pages/About/About.jsx';
import { Home } from './pages/Home/Home.jsx';
import { Room } from './pages/Logement/Room.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Root contentType={'error'} />,
        children: [
            {
                index: true,
                element: (
                    <App>
                        <Home />
                    </App>
                ),
            },
            {
                path: 'a-propos',
                element: (
                    <App>
                        <AboutUs />
                    </App>
                ),
            },
            {
                path: ':id',
                element: (
                    <App>
                        <Room />
                    </App>
                ),
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </React.StrictMode>
);

/**
 * Layout de la page -
 * App.JSX est le <main> container et est utilisé pour matérialiser le Outlet -
 * Si une erreur est trouvée, il sera remplacé par l'erreur -
 * @param {[{}]} contentType
 * @returns {JSX.Element}
 */
export function Root(contentType) {
    let errorContent = false;
    if (contentType.contentType === 'error') {
        errorContent = true;
    }
    return (
        <>
            <header className="main-container">
                <nav>
                    <Logo />
                    <ul>
                        <li>
                            <NavLink
                                id="home-link"
                                aria-labelledby="home-link-text"
                                to="/"
                            >
                                <span id="home-link-text">Accueil</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/a-propos">A Propos</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <>{errorContent ? <PageError /> : <Outlet />}</>
            <Footer />
        </>
    );
}
