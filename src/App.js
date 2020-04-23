import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Main from "./pages/Main";
import Demo from "./pages/Demo";

function App() {
  return (
    <div className="bg-gray-200 text-gray-900 h-screen relative overflow-hidden">
      <Router>
        <Header />
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/demo">
          <Demo />
        </Route>
      </Router>
    </div>
  );
}

export default App;
