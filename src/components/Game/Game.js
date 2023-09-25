import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function onGuess(guess) {
    if (guesses.every((prev) => prev.value !== guess)) {
      console.log({ guess });

      const id = crypto.randomUUID();
      const newGuesses = [...guesses, { value: guess, id }];
      setGuesses(newGuesses);
    } else {
      console.log(`already guessed:`, guess);
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput onGuess={onGuess} />
    </>
  );
}

export default Game;
