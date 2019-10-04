import React, { Fragment } from "react";
import Filterning from "../components/filterning/Filterning";
import Sorting from "../components/sorting/Sorting";
import Layout from "../components/Layout/Layout";
// import logo from "../images/logo.svg";
import "../css/App.css";

function App() {
  return (
    <Fragment>
      <Layout />
      <Sorting />
      <Filterning />
    </Fragment>
  );
}

export default App;
