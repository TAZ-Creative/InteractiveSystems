function Square ({ value }) {

  function handleClick() {
    console.log('clicked!');
  }
  
  return  <button className="square">{value}</button>;
}

export default function Board () {
  return (
    <>
      <div className="board-row">
        <Square  value="1"/>
        <Square  value="2"/>
        <Square  value="3"/>
      </div>
      <div className="board-row">
        <Square  value="4"/>
        <Square  value="5"/>
        <Square  value="6"/>
      </div>
      <div className="board-row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
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


