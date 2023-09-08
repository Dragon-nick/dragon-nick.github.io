import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/";
import Home from "./components/Home/";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
