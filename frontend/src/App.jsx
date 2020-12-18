import React from "react";
import Routes from "./routes";
import { BrowserRouter  } from "react-router-dom";
import Menu from "./template/menu";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Menu />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}
