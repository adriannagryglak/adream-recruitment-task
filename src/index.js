import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./components/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./components/Article";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Article />} />
        <Route index element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
