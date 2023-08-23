import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./componentsStyling/App.css";
import ClassicTests from "./components/ClassicTests";
import UserProgress from "./components/Progress";
import AdvancedTests from "./components/AdvancedTests";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ClassicTests" element={<ClassicTests />}></Route>
          <Route path="/AdvancedTests" element={<AdvancedTests />}></Route>
          <Route path="/UserProgress" element={<UserProgress />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
