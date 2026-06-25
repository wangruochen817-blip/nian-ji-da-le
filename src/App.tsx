import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import OtherPage from "@/pages/Other";
import Other2Page from "@/pages/Other2";
import Other3Page from "@/pages/Other3";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="/other-2" element={<Other2Page />} />
        <Route path="/other-3" element={<Other3Page />} />
      </Routes>
    </Router>
  );
}
