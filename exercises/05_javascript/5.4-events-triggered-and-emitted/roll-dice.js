

const rollDice = () => {
  document.dispatchEvent(
    new CustomEvent('rollDice', {
      detail: { value: Math.floor(Math.random() * 6) + 1 },
      bubbles: true,
      cancelable: false
    })
  );
};
