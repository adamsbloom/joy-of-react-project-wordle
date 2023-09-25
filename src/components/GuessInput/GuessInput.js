import React from 'react';
import { LETTERS_IN_GUESS } from '../../constants';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';

function GuessInput({ onGuess, gameWon, gameLost, guessNumber, answer }) {
  const [value, setValue] = React.useState('');

  function onChange(event) {
    setValue(event.target.value.toUpperCase());
  }

  function onSubmit(event) {
    event.preventDefault();

    onGuess(value);
    setValue('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      {gameWon ? (
        <HappyBanner guessNumber={guessNumber} />
      ) : gameLost ? (
        <SadBanner answer={answer} />
      ) : (
        <input
          id="guess-input"
          type="text"
          maxLength={LETTERS_IN_GUESS}
          pattern={'^[A-Z]{' + LETTERS_IN_GUESS + '}$'}
          value={value}
          onChange={onChange}
        />
      )}
    </form>
  );
}

export default GuessInput;
