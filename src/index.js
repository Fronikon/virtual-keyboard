import './style.scss';
import Keyboard from './Keyboard';
import keysData from './keysData';

const currentLang = 'en'

const textArea = document.createElement('textarea');
textArea.classList.add('textarea');
document.body.append(textArea);

let keyboard = new Keyboard(currentLang, keysData, textArea);
document.body.append( keyboard.createKeyboard() );
keyboard.addListener()
keyboard.addKeys()