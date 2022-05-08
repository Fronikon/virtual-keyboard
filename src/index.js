import './style.scss';
import Keyboard from './Keyboard';
import keysData from './keysData';

const currentLang = localStorage.getItem('lang') || 'en';

const createElement = (tag, selector, text) => {
  const newElement = document.createElement(tag);
  newElement.classList.add(selector);
  if (text) {
    newElement.textContent = text;
  }
  return newElement;
};

const textAreaWraper = createElement('div', 'textarea_wraper');
const textArea = createElement('textarea', 'textarea');
const keyboardDescription = createElement('div', 'keyboard_description');
const keyboardControl = createElement('span', 'keyboard_control', 'Language change: "Shift + Alt"');
const buttonClear = createElement('button', 'button_clear', 'Clear Textarea');
const keyboardMade = createElement('span', 'keyboard_made', 'Keyboard create for Windows.');

document.body.append(textAreaWraper);
textAreaWraper.append(textArea);
textAreaWraper.append(keyboardDescription);
keyboardDescription.append(keyboardControl);
keyboardDescription.append(buttonClear);
keyboardDescription.append(keyboardMade);

const keyboard = new Keyboard(currentLang, keysData, textArea);
document.body.append(keyboard.createKeyboard());
keyboard.addListener();
keyboard.addKeys();

buttonClear.addEventListener('click', () => {
  textArea.value = '';
});

window.addEventListener('unload', () => {
  localStorage.setItem('lang', keyboard.lang);
});
