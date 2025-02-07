import { createRoot } from "react-dom/client";
import "assets/css/index.css";
import "assets/css/NavHeader.scss";
import App from "./pages/Home/App.jsx";
import React from "react";
import {
    BrowserRouter,
    createBrowserRouter,
    NavLink,
    Outlet,
    RouterProvider,
} from "react-router";
import { RenderLogo } from "./components/headers/nav/Logo.jsx";
import { PageError } from "./pages/Error/PageError.jsx";
import { RenderFooter } from "./components/footer/Footer.jsx";

// const body = document.querySelector("body");
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Root contentType={"error"} />,
        children: [
            { index: true, element: <App /> },
            {
                path: "a-propos",
                element: <h1 style={{ color: "Blue" }}>Test</h1>,
                // element: <App />,
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

export function Root(contentType) {
    let errorContent = false;
    if (contentType.contentType === "error") {
        errorContent = true;
    }
    console.log("Render App");
    return (
        <>
            <header className="main-container">
                <nav>
                    <RenderLogo />
                    <ul>
                        <li>
                            <NavLink to="/">Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/a-propos">A Propos</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <>{errorContent ? <PageError /> : <Outlet />}</>
            <RenderFooter />
        </>
    );
}
