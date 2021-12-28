

import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function SquareElem(props) {
  return (
    <button style={{backgroundColor: props.value}} className="square2" onClick={props.onClick}>
    </button>
  );
}

function App() {
  const [gridSize, setGridSize] = useState(4);
  const [squares, setSquares] = useState(Array(gridSize*gridSize).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [iniciador, setIniciador] = useState(0);
  const [texto, setTexto] = useState('4')
  const [color, setColor] = useState('black')
  const boardRef = useRef(null);

  useEffect(() => {
    
    boardRef.current.style.setProperty("--grid-size", gridSize);
  }, [gridSize]);

  function handleClick(i) {
    squares[i] = color
    setSquares(squares);
    setXIsNext(!xIsNext)
  }

  function renderSquare(i) {
    return (
      <SquareElem
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  }

  const createSquares = () => {
    let html = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
      html.push(<tr key={i} className="square">{renderSquare(i)}</tr>);
    }
    return html;
  };

  function handleChange(event) {

    setTexto(parseInt(event.target.value))
    setGridSize(parseInt(texto))
  }

  function handleClickBlack() {
    setColor("black")
  }
  function handleClickBlue() {
    setColor("blue")
  }
  function handleClickGreen() {
    setColor("green")
  }


  return (
    <div className="App">

      <table ref={boardRef} className="board">
        {createSquares()}
      </table>

      <div className="botones">
        <button className="boton-negro" onClick={handleClickBlack}></button>
        <button className="boton-azul" onClick={handleClickBlue}></button>
        <button className="boton-verde" onClick={handleClickGreen}></button>
      </div>

      <div className="numerador">
        <form  >
          <label>
            N:
            <input type="number"  onChange={handleChange} min="1" max="14" />
          </label>
        </form>
      </div>
      
    </div>
  );
}


export default App;
