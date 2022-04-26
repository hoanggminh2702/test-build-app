import { Route, Routes } from "react-router-dom";
import Details from "./pages/details";
import Home from "./pages/home";
function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
