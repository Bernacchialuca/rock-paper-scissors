import '../styles/Message.css'
import '../styles/Buttons.css'

export const Results = ({ result, options, userChoice, computerChoice, reset }) => {
  return (
    result !== null && (
      <div>
        {result === 0 && <p className='message'>🤷🏽‍♀️ It's a draw</p>}
        {result === 1 && (
          <p className='message'>
            ✅ You won with {options[userChoice]?.name} against {" "}
            {options[computerChoice]?.name}
          </p>
        )}
        {result === 2 && (
          <p className='message'>
            ❌ You lost with {options[userChoice]?.name} against{" "}
            {options[computerChoice]?.name}
          </p>
        )}
        <button
          className='button-reset'
          onClick={reset}
        >
          Play again!
        </button>
      </div>
    )
  )
}
