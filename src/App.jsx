import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExperimentPage from "./pages/ExperimentPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lab/:id" element={<ExperimentPage />} />
    </Routes>
  );
}