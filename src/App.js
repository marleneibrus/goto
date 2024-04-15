import React, { Component } from "react";
import { Route, NavLink, Routes, HashRouter } from "react-router-dom";


import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.css";


class App extends Component {

render() {
  return (
    <HashRouter>
      <div className="App">
        <h1>Tutvustus</h1>
        <h2>Marlene Ibrus</h2>
        <ul className="header">
          <li><NavLink to="/">Tutvustav video</NavLink></li>
          <li><NavLink to="/contact">Kontakt</NavLink></li>
        </ul>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}
}
export default App;

