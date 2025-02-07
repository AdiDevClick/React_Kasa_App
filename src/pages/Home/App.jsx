// import "assets/css/resetFirefox.css";
// import "assets/css/resetChromium.css";
import "assets/css/reset.css";
import "assets/css/App.css";
import "assets/css/main.scss";

import { RenderMain } from "../../components/main/Main.jsx";
import { RenderFooter } from "../../components/footer/Footer.jsx";
import datas from "../../data/datas.json";
function App() {
    return (
        <>
            <div className="main-container">
                {/* <RenderNavHeader /> */}
                <RenderMain datas={datas} />
            </div>
            {/* <RenderFooter /> */}
        </>
    );
}

export default App;
