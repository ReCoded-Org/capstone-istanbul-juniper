import React from "react";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import "antd/dist/antd.css";
import "./i18n";

function App() {
  return (
    <div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
