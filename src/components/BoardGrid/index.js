import React from "react";

import "./styles.css";
import Board from "../../objects/Board";
import Symbol from "../../objects/Symbol";

const BoardGrid = () => (
  <Board>
    <ul className="board-grid">
      <li className="item">
        <Symbol symbol="" />
      </li>
      <li className="item">
        <Symbol symbol="O" />
      </li>
      <li className="item">
        <Symbol symbol="X" />
      </li>
      <li className="item">
        <Symbol symbol="O" />
      </li>
      <li className="item">
        <Symbol symbol="X" />
      </li>
      <li className="item">
        <Symbol symbol="O" />
      </li>
      <li className="item">
        <Symbol symbol="X" />
      </li>
      <li className="item">
        <Symbol symbol="O" />
      </li>
      <li className="item">
        <Symbol symbol="X" />
      </li>
    </ul>
  </Board>
);

export default BoardGrid;
