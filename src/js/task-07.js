const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const handleFontSizeControlInput = () => {
  textEl.style.fontSize = `${fontSizeControlEl.value}px`;
};
fontSizeControlEl.addEventListener('input', handleFontSizeControlInput);
