// import "assets/css/resetFirefox.css";
// import "assets/css/resetChromium.css";
import 'assets/css/reset.css';
import 'assets/css/main.scss';
import PropTypes from 'prop-types';

/**
 * Render le contenu principal de l'App
 * Il prend en paramètre un Children JSX
 * @param {Object} param0
 * @param {JSX.Element} param0.children
 * @returns {JSX.Element}
 */
function App({ children }) {
    return (
        <>
            <main className="main-container">{children}</main>
        </>
    );
}

App.propTypes = {
    children: PropTypes.any.isRequired,
};

export default App;
