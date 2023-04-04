
import 'bootstrap/dist/css/bootstrap.css';

export default function Board({ board }) {
  return (
    <div className="container">
      {board.map((row, index) => {
        return <div key={index} style={{ height: '50px', className: 'row', width: '502px', border: '1px solid black' }}>
          {row.map((num, ind) => {
              return <div key={ind} style={{ maxWidth: '50px', className: 'col-md-1', border: '1px solid gray' }}
                onClick={() => console.log(`You clicked ${num}`)}>
              </div>
            })
          }
        </div>
      })}
    </div>
  )
}