import React from 'react';

function HappyBanner({ guessNumber }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{guessNumber} guesses</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
