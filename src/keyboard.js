class Keyboard {
  constructor(lang = 'en', keysData, textArea) {
    this.lang = lang;
    this.keysData = keysData;
    this.textArea = textArea;
    this.isShift = false;
    this.isCaps = false;
    this.keyboardElement = null;
    this.keys = new Map()
    document.isShift = this.isShift
  }
  createKeyboard() {
    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    this.keyboardElement = keyboard;
    return keyboard;
  }
  activateKeyFunction(keyData, element) {
    switch (keyData.keyCode) {
      case 'Backspace': {
        const text = this.textArea.value;
        let currentPos = getCurrentPosition(this.textArea);
        this.textArea.focus();

        if (text.length > 0 && currentPos !== 0) {
          let backSpace = text.substring(0, currentPos - 1) + text.substring(currentPos, text.length);
          this.textArea.value = backSpace;
          resetCursor(this.textArea, currentPos - 1);
        }
        
        break;
      }

      case 'Delete': {
        const text = this.textArea.value;
        let currentPos = getCurrentPosition(this.textArea);
        this.textArea.focus();

        if (text.length > 0 && currentPos !== text.length) {
          let deleteOp = text.substring(0, currentPos) + text.substring(currentPos + 1, text.length);
          this.textArea.value = deleteOp;
          resetCursor(this.textArea, currentPos);
        }
        
        break;
      }

      case 'Enter': {
        updateText(this.textArea, '\n');
        
        break;
      }
      
      case 'CapsLock': {
        this.isShift = !this.isShift;
        this.isCaps = !this.isCaps

        element.classList.toggle('active_capslock');
        
        this.render();
        
        break;
      }

      case 'switchLang': {
        if (this.lang === 'ru') {
          this.lang = 'en'
        } else {
          this.lang = 'ru'
        }
        this.render()
        
        break;
      }

      case 'ArrowUp': {
        updateText(this.textArea, keyData.general);
        break;
      }
      case 'ArrowDown': {
        updateText(this.textArea, keyData.general);
        break;
      }
      case 'ArrowLeft': {
        updateText(this.textArea, keyData.general);
        break;
      }
      case 'ArrowRight': {
        updateText(this.textArea, keyData.general);
        break;
      }

      case 'ShiftLeft': {
        break;
      }
      case 'ShiftRight': {
        break;
      }
      case 'Tab': {
        updateText(this.textArea, '  ');
        break;
      }
      case 'ControlRight': {
        break;
      }
      case 'ControlLeft': {
        break;
      }
      case 'AltLeft': {
        break;
      }
      case 'AltRight': {
        break;
      }
    
      default:
        const letter = keyData[this.isShift ? 'shift' : 'common'][this.lang];
        updateText(this.textArea, letter);
        
        break;
    }

    function updateText(textArea, letter) {
      const text = textArea.value;
      let currentPos = getCurrentPosition(textArea);

      let newText = text.substring(0, currentPos) + letter + text.substring(currentPos, text.length);
      textArea.value = newText;

      resetCursor(textArea, currentPos + letter.length);
    }

    function getCurrentPosition(textarea) {
      if (textarea.selectionStart) {
        return textarea.selectionStart;
      }
      return 0;
    }

    function resetCursor(textElement, currentPos) { 
      if (textElement.setSelectionRange) { 
          textElement.focus(); 
          textElement.setSelectionRange(currentPos, currentPos); 
      } else if (textElement.createTextRange) { 
          let range = textElement.createTextRange();  
          range.moveStart('character', currentPos); 
          range.select(); 
      } 
    }
  }
  addListener() {
    this.keyboardElement.addEventListener('click', (event) => {
      if (event.target.classList.contains('key')) {
        const keyData = this.keys.get(event.target);
        this.activateKeyFunction(keyData, event.target)
      }
    })

    this.textArea.onkeydown = function (e) {
      return false;
    }

    let pressedKeys = new Map();

    document.addEventListener('keydown', (event) => {
      if (!pressedKeys.has(event.code)) {
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          this.isShift = !this.isShift;
          this.render();
        }

        for (let entry of this.keys) {
          if (entry[1].keyCode === event.code) {
            entry[0].classList.add('active_key');
            pressedKeys.set(event.code, entry);
            break;
          }
        }
      }
    })

    document.addEventListener('keyup', (event) => {
      if (pressedKeys.has('ShiftLeft') && pressedKeys.has('AltLeft')) {
        this.lang = this.lang === 'ru' ? 'en' : 'ru';
        this.render();
      }

      if (pressedKeys.has(event.code)) {
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          this.isShift = !this.isShift;
          this.render();
        }

        let entry = pressedKeys.get(event.code);
        entry[0].classList.remove('active_key');
        this.activateKeyFunction(entry[1], entry[0])
        pressedKeys.delete(event.code);
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
    
    if (value.keyCode === 'ShiftLeft' || value.keyCode === 'ShiftRight') {

      key.addEventListener('mousedown', () => {
        this.isShift = !this.isShift;
        this.render();

        const func = () => {
          this.isShift = !this.isShift;
          this.render();
          document.removeEventListener('mouseup', func)
        }

        document.addEventListener('mouseup', func)
      })
    }

    if ( generalKey.includes(value.keyCode) ) {
      key.classList.add('general_key');
      if (value.keyCode === 'Space') {
        key.classList.add('space');
      }
    }
    
    key.textContent = keyValue;
    this.keys.set(key, value);
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
    for (let entry of this.keys) {
      let newText
      if (entry[1].general) {
        newText = entry[1].general
      } else {
        newText = entry[1][this.isShift ? 'shift' : 'common'][this.lang]
      }
      entry[0].textContent = newText;
    }
  }
}

export default Keyboard;