import { createRoot } from "react-dom/client";
import "assets/css/index.css";
import "assets/css/NavHeader.scss";
import App from "./pages/Home/App.jsx";
import React from "react";
import {
    createBrowserRouter,
    NavLink,
    Outlet,
    RouterProvider,
} from "react-router";
import { Logo } from "./components/headers/nav/Logo.jsx";
import { PageError } from "./pages/Error/PageError.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { RenderAboutUs } from "./pages/About/About.jsx";
import { RenderMain } from "./components/main/Main.jsx";
import datas from "./data/datas.json";
import { Room } from "./pages/Logement/Room.jsx";
import { useActivePage } from "./hooks/useActivePage.jsx";

// const body = document.querySelector("body");
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Root contentType={"error"} />,
        children: [
            {
                index: true,
                element: (
                    <App>
                        <RenderMain datas={datas} />
                    </App>
                ),
            },
            {
                path: "a-propos",
                element: <RenderAboutUs />,
            },
            {
                path: ":id",
                element: (
                    <App>
                        <Room activeRoom={useActivePage} />
                    </App>
                ),
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <BrowserRouter>
            <App />
        </BrowserRouter> */}
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </React.StrictMode>
);

/**
 *
 * @param {[{}]} contentType
 * @returns
 */
export function Root(contentType) {
    let errorContent = false;
    if (contentType.contentType === "error") {
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
