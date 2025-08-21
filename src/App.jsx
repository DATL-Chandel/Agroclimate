import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomeViewer from "./components/HomeViewer";
import NDVIViewer from "./components/NDVIViewer";
import SprayViewer from "./components/SprayViewer";
import CropGrowthTracker from "./components/CropGrowthTracker";
import CropRiskForecast from "./components/CropRiskForecast";
import IrrigationSchedulerViewer from "./components/IrrigationSchedulerViewer";
import Documentation from "./components/Documentation";
import Tracker from "./components/Tracker";
import NavButton from "./components/NavButton";
import FeedbackForm from "./components/FeedbackForm";

function App() {
    return (
        <Router>
            <div style={{ position: 'relative' }}>
                <Tracker />
                <NavButton />
                <Routes>
                    <Route path="/" element={<HomeViewer />} />
                    <Route path="/ndvi" element={<NDVIViewer />} />
                    <Route path="/spray" element={<SprayViewer />} />
                    <Route path="/crop-tracking" element={<CropGrowthTracker />} />
                    <Route path="/crop-risk" element={<CropRiskForecast />} />
                    <Route path="/irrigation-scheduler" element={<IrrigationSchedulerViewer />} />
                    <Route path="/docs" element={<Documentation />} />
                    <Route path="/feedback" element={<FeedbackForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
