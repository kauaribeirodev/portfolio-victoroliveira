// ALTERE A IMPORTAÇÃO DE "BrowserRouter" PARA "HashRouter"
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Use react-router-dom
import HomePage from "@/react-app/pages/Home";

export default function App() {
  return (
    // ALTERE A TAG DE "BrowserRouter" PARA "Router" (que agora é HashRouter)
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
