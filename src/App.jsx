//app.jsx
import React from "react";
import "./App.css";
import Header from './component/header/header';
import Offer from './component/offer/offer';
import Content from './component/content/content';

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}
export default App;
