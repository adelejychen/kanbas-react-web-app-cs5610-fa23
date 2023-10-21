import logo from "./logo.svg";
// import './App.css';
import React from "react";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import StateManagement from "./Lectures/StateManagement";

function App() {
  const screen = "Labs";
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
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
