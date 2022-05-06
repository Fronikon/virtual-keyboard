import './style.scss';
import Keyboard from './keyboard';
import keysData from './keysData';

const currentLang = 'en'

const textArea = document.createElement('textarea');
textArea.classList.add('textarea');
document.body.append(textArea);

let keyboard = new Keyboard(currentLang, keysData, textArea);
document.body.append( keyboard.createKeyboard() );
keyboard.addListener()
keyboard.addKeys()

// document.addEventListener("keypress", (event) => {
//   console.log(event)
// })

// textArea.addEventListener("mousedown", (event) => {
//   let a = (event) => {
//     console.log(2)
//     event.target.removeEventListener("mouseout", a)
//   }

//   console.log(1)
  
//   event.target.addEventListener("mouseout", a)
// })


// const keysEN = [
//   ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '⌫'],
//   ['↹', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del'],
//   ['⇪', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
//   ['⇧', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', '\\'],
//   ['Ctrl', 'EN', '................................................', 'Alt', '←', '↓', '→']
// ];

// const keysENShift = [
//   ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '⌫'],
//   ['↹', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Del'],
//   ['⇪', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
//   ['⇧', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', '|'],
//   ['Ctrl', 'EN', '................................................', 'Alt', '←', '↓', '→']
// ];

// const keysRU = [
//   ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '⌫'],
//   ['↹', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del'],
//   ['⇪', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
//   ['⇧', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', '\\'],
//   ['Ctrl', 'RU', '................................................', 'Alt', '←', '↓', '→']
// ];

// const keysRUShift = [
//   ['Ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '⌫'],
//   ['↹', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Del'],
//   ['⇪', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
//   ['⇧', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', '/'],
//   ['Ctrl', 'RU', '................................................', 'Alt', '←', '↓', '→']
// ];
