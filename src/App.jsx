import './App.css'
import Die from './Die'
import { useState } from 'react'


function App() {
    const [dice , setDiece] = useState(generateAllNewDice())

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }

    const diceElement = dice.map(dieNumber => <Die value={dieNumber}/>)


  return (
    <main className='
        flex justify-center items-center bg-stone-100 w-[500px] h-[500px] rounded-2xl max-sm:w-[400px] max-sm:h-[400px]'
    >
        <div className='grid grid-cols-5 gap-4'>
            {diceElement}
        </div>
    </main>
  )
}

export default App
