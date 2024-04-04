import { useState } from 'react';

function Square ({ value, onSquareClick }) {

  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   setValue('X');
  //   console.log('clicked!');
  // }

  return  <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default function Board () {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    
    if (squares[i]) {
      return;
    }

     const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  // function handleClick() {
  //   const nextSquares = squares.slice();
  //   nextSquares[0] = "X";
  //   setSquares(nextSquares);
  // }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>        
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>        
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>      
      </div>
    </>
  );
}
   
// export default function Board() {
//   return (
//   <>
//     <div className="board-row">
//       <button className="square">X1</button>
//       <button className="square">X2</button>
//       <button className="square">X3</button>
//     </div>
//     <div className="board-row">
//       <button className="square">X4</button>
//       <button className="square">X5</button>
//       <button className="square">X6</button>
//     </div>
//     <div className="board-row">
//       <button className="square">X7</button>
//       <button className="square">X8</button>
//       <button className="square">X9</button>
//     </div>
//   </>
//   );
// }


