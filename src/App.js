import React from "react";

import "./App.css";

import Header from "./components/Header";
import BoardGrid from "./components/BoardGrid";

const App = () => {
  return (
    <main className="app">
      <Header />
      <BoardGrid />
    </main>
  );
};

export default App;
