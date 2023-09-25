import React from 'react';

import { LETTERS_IN_GUESS } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({ guess, answer }) {
  if (!guess) {
    return (
      <p className="guess">
        {range(0, LETTERS_IN_GUESS).map((index) => (
          <span key={index} className="cell" />
        ))}
      </p>
    );
  }

  const letters = checkGuess(guess, answer);

  return (
    <p className="guess">
      {letters.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
