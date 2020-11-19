import React from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <Content />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
