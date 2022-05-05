import Key from './key';
import Keys from './Keys';

class Keyboard {
  constructor(lang = 'en') {
    this.lang = lang;
    this.isShift = false;
    this.keyboardElement = null;
    this.keysData = Keys;
    this.keys = new Map()
  }
  createKeyboard() {
    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    this.keyboardElement = keyboard;
    return keyboard;
  }
  addListener() {
    this.keyboardElement.addEventListener('click', (event) => {
      // if (this.lang === 'ru') {
      //   this.lang = 'en'
      // } else {
      //   this.lang = 'ru'
      // }
      // this.render()
      if (event.target.classList.contains('key')) {
        console.log(event.target.innerHTML)
      }
    })
  }
  createKey(value) {
    const generalKey = ['Tab','CapsLock','ShiftLeft','ControlLeft','AltLeft','Space','AltRight','ControlRight','Delete','Enter','Backspace'];
    let keyValue

    if (value.general) {
      keyValue = value.general;
    } else if (this.isShift) {
      keyValue = value.shift[this.lang];
    } else {
      keyValue = value.common[this.lang];
    }

    let key = document.createElement('div');
    key.classList.add('key');

    if ( generalKey.includes(value.keyCode) ) {
      key.classList.add('general_key');
      if (value.keyCode === 'Space') {
        key.classList.add('space');
      }
    }
    
    key.textContent = keyValue;
    this.keys.set(key, value)
    return key;
  }
  createRow() {
    let row = document.createElement('div');
    row.classList.add('keyboard_row');
    return row;
  }
  addKeys() {
    this.keysData.forEach( row => {
      let newRow = this.createRow();

      row.forEach( key => {
        let newKey = this.createKey(key);
        newRow.append(newKey)
      });

      this.keyboardElement.append(newRow)
    });
  }
  render() {
    this.keyboardElement.innerHTML = '';
    this.addKeys();
  }
}

export default Keyboard;

// export default function createKeyboard(arrKeys) {
//   const keyboard = document.createElement('div');
//   keyboard.classList.add('keyboard');
//   arrKeys.forEach( keysLine => {
//     const line = document.createElement('div');
//     line.classList.add('keyboard_line');

//     keysLine.forEach( key => {
//       line.append( createKey(key) );
//     })

//     keyboard.append(line);
//   });
//   return keyboard;
// }