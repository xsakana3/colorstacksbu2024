import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter"
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header/>
      <Router>
        <AppRouter />
      </Router>
      <Footer/>
    </>
  );
}

export default App;
