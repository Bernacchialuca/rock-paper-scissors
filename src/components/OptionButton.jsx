import { options } from "../services/options";
import '../styles/Buttons.css'

export const OptionButton = ({ handlePlay, disabled }) => {
  return (
    options.map(option => (  
        <button
          className='button'
          key={option.id}
          disabled={disabled}
          onClick={() => handlePlay(option.id)}
          title={option.name}
        >
          {option.emoji}
        </button>
  
    )));
}

