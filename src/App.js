import './App.css';
import { Board } from './Board.js'
import { useEffect, createContext, useState } from 'react';

export const GlobalContext = createContext();
function App() {

  const [board, setBoard] = useState([])

  let bombArr = [];
  const bombInds = () => {
    while (bombArr.length < 10) {
      let randNum = Math.floor( Math.random() * 100)
      if (!bombArr.includes(randNum)){
        bombArr.push(randNum);
      }
    }
  }
  bombInds();

  useEffect(() => {

    const newBoard = [];
    let counter = 1;
    for (let row = 0; row < 10; row++) {
      let row = [];
      for (let col = 0; col < 10; col++) {
        let tileState;
        if(bombArr.includes(counter)) {
          row.push({"id":counter, "state":"bomb"})
        } else {
          row.push({"id":counter, "state":"inert"})
        }
        counter++;
      }
      newBoard.push(row)
    }
    setBoard(newBoard)
  }, [])

  console.log("bombArr: ", board)

  return (
    <GlobalContext.Provider value={{board, setBoard}}>
    <div className="App">
      <Board/>
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
