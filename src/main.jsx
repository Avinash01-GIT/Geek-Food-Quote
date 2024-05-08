import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header.jsx";
import Quotes from "./Components/Quotes.jsx";
import Footer from "./Components/Footer.jsx";
import { quotesObj } from "./Components/Data.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    {quotesObj.map((item, idx) => {
      return <Quotes key={idx} quotes={item.quote} author={item.auhtor} />;
    })}
    <Footer />
  </React.StrictMode>
);
