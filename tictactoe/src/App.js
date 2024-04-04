function Square () {
  return  <button className="square">X1</button>;
}

export default function Board () {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
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


