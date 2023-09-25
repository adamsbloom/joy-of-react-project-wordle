import React from 'react';
import { LETTERS_IN_GUESS } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess key={index} guess={guess} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
