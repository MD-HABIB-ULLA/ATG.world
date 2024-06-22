import { useState } from "react";
import "./App.css";
import Navber from "./Components/Layout/Navber";
import Banner from "./Components/Layout/Banner";
import Content from "./Components/Layout/Content";

function App() {

  return (
    <>
      <Navber />
      <Banner />
      <Content />
    </>
  );
}

export default App;
