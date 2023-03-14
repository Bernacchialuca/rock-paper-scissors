import { useState, useEffect } from "react";
import { getResult } from "../services/getResults";
import { options } from "../services/options";

export const useChoices = () => {
  
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userMessage, setUserMessage] = useState(null);
  const [computerMessage, setComputerMessage] = useState(null);
  const [result, setResult] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (userChoice !== null) {
      setUserMessage(
        `You have chosen ${options[userChoice]?.emoji} - ${options[userChoice]?.name}`
      );
    }
  }, [userChoice]);

  useEffect(() => {
    if (computerChoice !== null) {
      setComputerMessage(
        `The computer has chosen ${options[computerChoice]?.emoji} - ${options[computerChoice]?.name}`
      );
    }
  }, [computerChoice]);

  const handlePlay = (choice) => {
    setUserChoice(choice);
    setDisabled(true);
    const randomChoice = Math.floor(Math.random() * 3);

    setTimeout(() => {
      setComputerChoice(randomChoice);
    }, 800);

    setTimeout(() => {
      setResult(getResult(choice, randomChoice));
    }, 1500);

    clearTimeout();
  };

  const reset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setUserMessage(null);
    setComputerMessage(null);
    setResult(null);
    setDisabled(false);
  };

  return {
    options,
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  };
}