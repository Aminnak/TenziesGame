import { useWindowSize } from 'react-use'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { clsx } from 'clsx'
import Die from './Die'
import Confetti from 'react-confetti'
import './App.css'


function App() {
    const [dice , setDice] = useState(() => generateAllNewDice())
    const { width, height } = useWindowSize()
    const gameWon = dice.every(die => die.value === dice[0].value) && dice.every(die => die.isHeld)

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value : Math.ceil(Math.random() * 6),
                isHeld : false,
                id : nanoid()
            }))
    }

    function diceNewValue() {
        setDice((prevDice) =>
            prevDice.map(prevDie =>
                prevDie.isHeld ? prevDie : {...prevDie , value : Math.ceil(Math.random() * 6)}
        ))
    }

    function diceHoldStatus(id){
        setDice((prevDice) =>
            prevDice.map( prevDie =>
                prevDie.id === id ? {...prevDie , isHeld : !prevDie.isHeld} : {...prevDie}
            )
        )
    }

    const diceElement = dice.map(dieObj => (
            <Die
                key={dieObj.id}
                value={dieObj.value}
                isHeld={dieObj.isHeld}
                diceHoldStatus={() => diceHoldStatus(dieObj.id)}
            />
    ))

  return (
    <>
        {gameWon && <Confetti width={width} height={height}/>}
        <main
            className={
                clsx(`
                    flex flex-col justify-evenly items-center bg-stone-100 w-[500px]
                    h-[500px] rounded-2xl max-sm:w-[400px] max-sm:h-[400px]
        `)}>

            <div className='flex flex-col justify-center items-center text-center space-y-5 max-md:px-3'>
                <h1 className="font-bold text-4xl">Tenzies</h1>
                <p className="max-w-md font-sans font-medium">
                    {
                    !gameWon ?
                    `Roll until all dice are the same.
                    Click each die to freeze it at its
                    current value between rolls.`
                    : 'Congratulations, YOU WON!'
                }
                </p>
            </div>

            <div className='grid grid-cols-5 gap-4'>
                {diceElement}
            </div>

            {!gameWon &&
            <button className='bg-indigo-600 px-8 py-2 text-white rounded-lg'
                onClick={diceNewValue}>
                Roll
            </button>}

            {gameWon &&
            <button
                className='bg-indigo-600 px-8 py-2 text-white rounded-lg'
                onClick={() => setDice(generateAllNewDice())}>
                New Game
            </button>}
        </main>
    </>
  )
}

export default App
