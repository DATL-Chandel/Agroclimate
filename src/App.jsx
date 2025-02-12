import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomeViewer from "./components/HomeViewer";
import NDVIViewer from "./components/NDVIViewer";
import Documentation from "./components/Documentation";
import Tracker from "./components/Tracker";
import NavButton from "./components/NavButton";

function App() {
    return (
        <Router>
            <div style={{ position: 'relative' }}>
                <Tracker />
                <NavButton />
                <Routes>
                    <Route path="/" element={<HomeViewer />} />
                    <Route path="/ndvi" element={<NDVIViewer />} />
                    <Route path="/docs" element={<Documentation />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
