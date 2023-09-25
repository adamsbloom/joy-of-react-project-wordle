import React, { useState } from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
 
function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guesses, setGuesses] = useState(() => range(0, NUM_OF_GUESSES_ALLOWED).map(() => '')));

  function onGuess(guess) {
    if (currentIndex >= NUM_OF_GUESSES_ALLOWED) {
      console.log('You have already guessed the maximum number of times');

      return;
    }

    if (guesses.every((prev) => prev !== guess)) {
      console.log({ guess });

      const id = crypto.randomUUID();
      const newGuesses = [...guesses];
      newGuesses[currentIndex] = guess;
      setGuesses(newGuesses);
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log(`already guessed:`, guess);
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput onGuess={onGuess} />
    </>
  );
}

export default Game;
