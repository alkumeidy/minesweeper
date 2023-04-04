import logo from './logo.svg';
import './App.css';
import { Board } from './Board.js'
import { useEffect, createContext, useState } from 'react';



//Create Global Context
export const GlobalContext = createContext();

function App() {

  const [board, setBoard] = useState([])

  useEffect(() => {

    //Create New Board
    const newBoard = [];
    let counter = 1;
    //iterate 10 times to fill rows
    for (let row = 0; row < 10; row++) {
      let row = [];

      for (let col = 0; col < 10; col++) {
        row.push(counter);
        counter++;
      }
      newBoard.push(row)
    }
    setBoard(newBoard)
  }, [])

  const box = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  ]

  return (
    <GlobalContext.Provider value={{ board, setBoard }}>
      <div className="App">
        <Board />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
