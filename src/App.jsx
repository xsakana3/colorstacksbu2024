import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter"

function App() {
  return (
    <>
      <h1>placeholder header</h1>
      <Router>
        <AppRouter />
      </Router>
      <h1>placeholder footer</h1>
    </>
  );
}

export default App;
