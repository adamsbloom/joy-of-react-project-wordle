import React from 'react';

import { LETTERS_IN_GUESS } from '../../constants';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(0, LETTERS_IN_GUESS).map((index) => (
        <span key={index} className="cell">
          {guess[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
