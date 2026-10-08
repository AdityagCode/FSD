import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((currentCount) => Math.max(0, currentCount - 1));
  };

  return (
    <main className="page">
      <section className="counter-card" aria-labelledby="counter-title">
        <p className="eyebrow">REACT • USESTATE</p>
        <h1 id="counter-title">Counter</h1>
        <p className="description">A little progress, one click at a time.</p>

        <output className="count" aria-live="polite" aria-atomic="true">
          {count}
        </output>

        <div className="controls" aria-label="Counter controls">
          <button
            className="control-button secondary"
            type="button"
            onClick={decrement}
            disabled={count === 0}
            aria-label="Decrement count"
          >
            <span aria-hidden="true">−</span>
          </button>
          <button
            className="control-button primary"
            type="button"
            onClick={() => setCount((currentCount) => currentCount + 1)}
            aria-label="Increment count"
          >
            <span aria-hidden="true">+</span>
          </button>
        </div>

        <button
          className="reset-button"
          type="button"
          onClick={() => setCount(0)}
        >
          Reset counter
        </button>
      </section>
    </main>
  );
}

export default App;
