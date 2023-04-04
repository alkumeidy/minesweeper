import './App.css';
import Board from "./Board";
import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [board, setBoard] = useState([])

  useEffect(()=> {
    const newBoard = [];
    let counter=1;
    for (let row=0;row<10;row++){
      let row = [];
      for(let col=0;col<10;col++){
        row.push(counter);
        counter++;
      }
      newBoard.push(row);
    }

    setBoard(newBoard);
  }, [])

  console.log(board);

  return (
    <div className="App">
      <Board board={board} />
    </div>
  );
}

export default App;
