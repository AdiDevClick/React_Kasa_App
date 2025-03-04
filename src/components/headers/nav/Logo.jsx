import { NavLink } from 'react-router';

/**
 * Affiche le logo de l'app.
 * Un lien vers la page d'accueil sera créé.
 * @returns {JSX.Element}
 */
export function Logo() {
    return (
        <NavLink
            aria-labelledby="home-logo"
            style={{ color: 'transparent' }}
            to="/"
        >
            <span style={{ display: 'none' }} id="home-logo" aria-hidden="true">
                Home
            </span>
            <svg
                className="header-menu__logo"
                width="123"
                height="41"
                viewBox="0 0 123 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12.1445 20.7402L5.62785 27.4038V36.7544H0.5V0.641846H5.62785V20.8477L25.0709 0.641846H30.9466L15.6699 16.871L32.0149 36.7544H26.0324L12.1445 20.7402Z"
                    fill="white"
                />
                <path
                    d="M69.4054 33.8526L71.4352 29.9834C73.7854 31.5956 77.4177 32.7778 80.9431 32.7778C85.5367 32.7778 87.3529 31.3806 87.3529 29.0161C87.3529 22.8899 70.1532 28.1563 70.1532 17.301C70.1532 12.357 74.5332 9.13269 81.4772 9.13269C85.0026 9.13269 89.0621 10.1 91.4124 11.6047L89.2758 15.4739C86.8187 13.8617 84.148 13.3243 81.4772 13.3243C77.204 13.3243 75.0674 14.9365 75.0674 17.0861C75.0674 23.5347 92.267 18.2683 92.267 28.9086C92.267 33.8526 87.7802 36.9694 80.5157 36.9694C76.1357 37.0769 71.6488 35.6797 69.4054 33.8526Z"
                    fill="white"
                />
                <path
                    d="M122.5 20.2027V36.7543H117.799V33.1001C116.197 35.5721 113.099 36.9693 108.826 36.9693C102.63 36.9693 98.7837 33.6374 98.7837 28.9084C98.7837 24.5018 101.561 20.9551 109.68 20.9551H117.479V19.9878C117.479 15.7961 115.022 13.4316 110.215 13.4316C107.01 13.4316 103.698 14.6139 101.561 16.3335L99.5315 12.5718C102.309 10.3148 106.369 9.02502 110.749 9.02502C118.334 9.1325 122.5 12.7867 122.5 20.2027ZM117.586 28.371V24.5018H110.001C105.087 24.5018 103.698 26.4364 103.698 28.6935C103.698 31.3804 105.941 33.1001 109.68 33.1001C113.419 33.2075 116.411 31.5954 117.586 28.371Z"
                    fill="white"
                />
                <path
                    d="M53.5946 29.5537V36.8622L56.6927 35.0351V27.7266L53.5946 29.5537Z"
                    fill="white"
                />
                <path
                    d="M62.141 20.6328L49.4282 13.2168L42.3774 9.13269L35.4335 21.2777L35.5403 32.6703L48.1463 40.0863L49.4282 39.334V28.5862L55.0902 18.5907L60.859 21.9226V32.6703L62.141 31.918V20.6328Z"
                    fill="white"
                />
            </svg>
        </NavLink>
    );
}
