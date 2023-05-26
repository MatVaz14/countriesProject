import React from "react";
import axios from "axios";
import Home from "./components/home/Home.jsx";
import { Route } from "react-router-dom";
import Landing from "./components/landing/Landing.jsx";
import Footer from "./components/footer/Footer.jsx";


axios.defaults.baseURL = "http://localhost:3002";

function App() {
  return (
    <>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/home" render={() => <Footer />} />
    </>
  );
}

export default App;