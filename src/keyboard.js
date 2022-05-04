import createKey from './key';

export default function createKeyboard(arrKeys) {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  arrKeys.forEach( keysLine => {
    const line = document.createElement('div');
    line.classList.add('keyboard_line');

    keysLine.forEach( key => {
      line.append( createKey(key) );
    })

    keyboard.append(line);
  });
  return keyboard;
}