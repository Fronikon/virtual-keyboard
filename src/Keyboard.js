class Keyboard {
  constructor(lang, keysData, textArea) {
    this.lang = lang;
    this.keysData = keysData;
    this.textArea = textArea;
    this.isShift = false;
    this.isCaps = false;
    this.keyboardElement = null;
    this.keys = new Map();
    document.isShift = this.isShift;
  }

  createKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    this.keyboardElement = keyboard;
    return keyboard;
  }

  activateKeyFunction(keyData, element) {
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
        const range = textElement.createTextRange();
        range.moveStart('character', currentPos);
        range.select();
      }
    }

    const updateText = (letter) => {
      const { textArea } = this;
      const text = textArea.value;
      const currentPos = getCurrentPosition(textArea);
      const textbefore = text.substring(0, currentPos);
      const textAfter = text.substring(currentPos, text.length);

      if (currentPos === textArea.value.length) {
        textArea.scrollTop = textArea.scrollHeight;
      }

      const newText = textbefore + letter + textAfter;
      textArea.value = newText;

      resetCursor(textArea, currentPos + letter.length);
    };

    switch (keyData.keyCode) {
      case 'Backspace': {
        const text = this.textArea.value;
        const currentPos = getCurrentPosition(this.textArea);
        this.textArea.focus();

        if (text.length > 0 && currentPos !== 0) {
          const textbefore = text.substring(0, currentPos - 1);
          const textAfter = text.substring(currentPos, text.length);

          const backSpace = textbefore + textAfter;
          this.textArea.value = backSpace;
          resetCursor(this.textArea, currentPos - 1);
        }

        break;
      }

      case 'Delete': {
        const text = this.textArea.value;
        const currentPos = getCurrentPosition(this.textArea);
        this.textArea.focus();

        if (text.length > 0 && currentPos !== text.length) {
          const textbefore = text.substring(0, currentPos);
          const textAfter = text.substring(currentPos + 1, text.length);

          const formatedText = textbefore + textAfter;
          this.textArea.value = formatedText;
          resetCursor(this.textArea, currentPos);
        }

        break;
      }

      case 'Enter': {
        updateText('\n');

        break;
      }

      case 'CapsLock': {
        this.isShift = !this.isShift;
        this.isCaps = !this.isCaps;

        element.classList.toggle('active_capslock');

        this.render();

        break;
      }

      case 'switchLang': {
        if (this.lang === 'ru') {
          this.lang = 'en';
        } else {
          this.lang = 'ru';
        }
        this.render();

        break;
      }

      case 'ArrowUp': {
        updateText(keyData.general);
        break;
      }
      case 'ArrowDown': {
        updateText(keyData.general);
        break;
      }
      case 'ArrowLeft': {
        updateText(keyData.general);
        break;
      }
      case 'ArrowRight': {
        updateText(keyData.general);
        break;
      }

      case 'ShiftLeft': {
        break;
      }
      case 'ShiftRight': {
        break;
      }
      case 'Tab': {
        updateText('  ');
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
        updateText(keyData[this.isShift === true ? 'shift' : 'common'][this.lang]);

        break;
    }
  }

  addListener() {
    this.keyboardElement.addEventListener('click', (event) => {
      if (event.target.classList.contains('key')) {
        const keyData = this.keys.get(event.target);
        this.activateKeyFunction(keyData, event.target);
      }
    });

    this.textArea.onkeydown = () => false;

    const pressedKeys = new Map();

    document.addEventListener('keydown', (event) => {
      if (!pressedKeys.has(event.code)) {
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          this.isShift = !this.isShift;
          this.render();
        }

        this.keys.forEach((value, key) => {
          if (value.keyCode === event.code) {
            key.classList.add('active_key');
            pressedKeys.set(event.code, [key, value]);
          }
        });
      }
    });

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

        const entry = pressedKeys.get(event.code);
        entry[0].classList.remove('active_key');
        this.activateKeyFunction(entry[1], entry[0]);
        pressedKeys.delete(event.code);
      }
    });
  }

  createKey(value) {
    const generalKey = ['Tab', 'CapsLock', 'ShiftLeft', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'Delete', 'Enter', 'Backspace'];
    let keyValue;

    if (value.general) {
      keyValue = value.general;
    } else if (this.isShift) {
      keyValue = value.shift[this.lang];
    } else {
      keyValue = value.common[this.lang];
    }

    const key = document.createElement('div');
    key.classList.add('key');

    if (value.keyCode === 'ShiftLeft' || value.keyCode === 'ShiftRight') {
      key.addEventListener('mousedown', () => {
        this.isShift = !this.isShift;
        this.render();

        const func = () => {
          this.isShift = !this.isShift;
          this.render();
          document.removeEventListener('mouseup', func);
        };

        document.addEventListener('mouseup', func);
      });
    }

    if (generalKey.includes(value.keyCode)) {
      key.classList.add('general_key');
      if (value.keyCode === 'Space') {
        key.classList.add('space');
      }
    }

    key.textContent = keyValue;
    this.keys.set(key, value);
    return key;
  }

  addKeys() {
    function createRow() {
      const row = document.createElement('div');
      row.classList.add('keyboard_row');
      return row;
    }

    this.keysData.forEach((row) => {
      const newRow = createRow();

      row.forEach((key) => {
        const newKey = this.createKey(key);
        newRow.append(newKey);
      });

      this.keyboardElement.append(newRow);
    });
  }

  render() {
    this.keys.forEach((value, key) => {
      const currentKey = key;
      let newText;
      if (value.general) {
        newText = value.general;
      } else {
        newText = value[this.isShift ? 'shift' : 'common'][this.lang];
      }
      currentKey.textContent = newText;
    });
  }
}

export default Keyboard;
