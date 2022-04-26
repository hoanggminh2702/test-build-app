import "antd/dist/antd.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/details";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
