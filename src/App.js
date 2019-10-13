import React from "react";

import Header from "./components/Header";
import Board from "./objects/Board";
import Symbol from "./objects/Symbol";

function App() {
  return (
    <>
      <Header />
      <Board />
      <Symbol symbol="O" />
    </>
  );
}

export default App;
