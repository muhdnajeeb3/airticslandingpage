import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import PgDsAndAI from "./screens/PgDsAndAI";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/master-in-data-science-in-woolf" element={<HomeScreen />} />
    <Route path="/pg-diploma-in-data-science-and-ai-landing-page" element={<PgDsAndAI />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
