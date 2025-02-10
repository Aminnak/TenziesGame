import { clsx } from 'clsx'

const Die = ({ value , isHeld , diceHoldStatus }) => {
  return (
        <button
            onClick={() => diceHoldStatus()}
            className={
                clsx(
                    `w-[50px] h-[50px] rounded-lg shadow-lg font-bold text-xl cursor-pointer`,
                    isHeld ? 'bg-emerald-500' : 'bg-white'
                )}>
            {value}
        </button>
    )
}
export default Die
