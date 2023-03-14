
import { OptionButton } from "./components/OptionButton"
import { useChoices } from "./hooks/useChoices"
import { Results } from "./components/Results";
import { Message } from "./components/Messages";
import './styles/game.css'

function App() {

  const {
    options,
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  } = useChoices();

  return (
    <div className='game'>
      <div>
        <h1 className="title">Rock, Paper, Scissors!</h1>
        <div>
          <OptionButton
            handlePlay={handlePlay}
            disabled={disabled}
          />
          <Message
            computerChoice={computerChoice}
            userChoice={userChoice}
            computerMessage={computerMessage}
            userMessage={userMessage} />
        </div>
        <Results
          result={result}
          options={options}
          userChoice={userChoice}
          computerChoice={computerChoice}
          reset={reset}
        />
      </div>
    </div>
  );
}
export default App