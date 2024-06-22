import { useState } from "react";
import "./App.css";
import Navber from "./Components/Layout/Navber";
import Banner from "./Components/Layout/Banner";
import Content from "./Components/Layout/Content";
import Edit from "./Components/Layout/Edit";

function App() {

  return (
    <div className=" mb-10">
      <Navber />
      <Banner />
      <Content />
      <Edit/>
    </div>
  );
}

export default App;
