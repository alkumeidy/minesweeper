import { useContext, useState, useRef } from 'react'
import { GlobalContext } from './App'
import './Board.css'
import { Overlay } from 'react-bootstrap'

export const Board = () => {
    const { board, setBoard } = useContext(GlobalContext);
    const [show, setShow] = useState(false);
    const checkHover = (e) => {
        e.preventDefault();
    }

    function changeBackground(e) {
        e.target.style.background = 'grey';
      }
    function revertBackground(e) {
        e.target.style.background = 'white';
      }
    return (
        <div className='container'>
            {board.map((row, index) => {
                return (
                    <div key={index} className='row'>
                        {
                            row.map((cell, ind) => {
                                return (
                                    <>
                                        <div
                                            key={ind}
                                            className='col-sm'
                                            onClick={changeBackground}
                                        >
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                )
            }
            )
            }
        </div>)
}