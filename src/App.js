import logo from "./logo.svg";
// import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import StateManagement from "./Lectures/StateManagement";
import Project from "./project";

function App() {
  const screen = "Labs";
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="project" />} />
          <Route path="/project/*" element={<Project />} />
          <Route path="/Hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Lectures" element={<StateManagement />} />
        </Routes>
        {/* {screen === "Hello" && <HelloWorld />}
        {screen === "Labs" && <Labs />}
        {screen === "Kanbas" && <Kanbas />} */}
      </div>
    </HashRouter>
  );
}

export default App;
