import React from 'react';
import { LETTERS_IN_GUESS } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess key={index} guess={guess} />
      ))}
    </div>
  );
}

export default GuessResults;
