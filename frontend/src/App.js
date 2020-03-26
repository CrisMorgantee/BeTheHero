import React from "react";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes />
      <ToastContainer autoClose={3500} />
    </>
  );
}

export default App;
