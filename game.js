const items = [
  { emoji: '💰', multiplier: 2 },
  { emoji: '💎', multiplier: 10 },
  { emoji: '💣', multiplier: 0 },
  { emoji: '🔁', multiplier: 1.5 }
];

function startGame() {
  const zone = document.getElementById('drop-zone');
  const result = document.getElementById('result');
  const betAmount = parseFloat(document.getElementById('betAmount').value);

  if (!betAmount || betAmount < 1) {
    alert('Enter a valid bet!');
    return;
  }

  zone.innerHTML = '';
  result.innerText = '';

  const item = items[Math.floor(Math.random() * items.length)];

  const elem = document.createElement('div');
  elem.classList.add('item');
  elem.innerText = item.emoji;

  elem.style.left = `${Math.random() * 80 + 10}px`;

  elem.onclick = () => {
    let winnings = betAmount * item.multiplier;
    result.innerText = item.multiplier === 0
      ? '💥 Bomb! You lost.'
      : `🎉 You won $${winnings.toFixed(2)}!`;
    elem.remove();
  };

  zone.appendChild(elem);
}
