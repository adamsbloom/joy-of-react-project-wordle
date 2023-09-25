import React from 'react';

function GuessInput({ onGuess }) {
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
      <input
        id="guess-input"
        type="text"
        pattern="^[A-Z]{5}$"
        value={value}
        onChange={onChange}
      />
    </form>
  );
}

export default GuessInput;
