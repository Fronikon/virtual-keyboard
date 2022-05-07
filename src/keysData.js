const keysData = [
  [
    {
      keyCode: 'Backquote',
      common: {
        en: '`',
        ru: 'ё',
      },
      shift: {
        en: '~',
        ru: 'Ё',
      }
    },
    {
      keyCode: 'Digit1',
      common: {
        en: '1',
        ru: '1',
      },
      shift: {
        en: '!',
        ru: '!',
      }
    },
    {
      keyCode: 'Digit2',
      common: {
        en: '2',
        ru: '2',
      },
      shift: {
        en: '@',
        ru: '"',
      }
    },
    {
      keyCode: 'Digit3',
      common: {
        en: '3',
        ru: '3',
      },
      shift: {
        en: '#',
        ru: '№',
      }
    },
    {
      keyCode: 'Digit4',
      common: {
        en: '4',
        ru: '4',
      },
      shift: {
        en: '$',
        ru: ';',
      }
    },
    {
      keyCode: 'Digit5',
      common: {
        en: '5',
        ru: '5',
      },
      shift: {
        en: '%',
        ru: '%',
      }
    },
    {
      keyCode: 'Digit6',
      common: {
        en: '6',
        ru: '6',
      },
      shift: {
        en: '^',
        ru: ':',
      }
    },
    {
      keyCode: 'Digit7',
      common: {
        en: '7',
        ru: '7',
      },
      shift: {
        en: '&',
        ru: '?',
      }
    },
    {
      keyCode: 'Digit8',
      common: {
        en: '8',
        ru: '8',
      },
      shift: {
        en: '*',
        ru: '*',
      }
    },
    {
      keyCode: 'Digit9',
      common: {
        en: '9',
        ru: '9',
      },
      shift: {
        en: '(',
        ru: '(',
      }
    },
    {
      keyCode: 'Digit0',
      common: {
        en: '0',
        ru: '0',
      },
      shift: {
        en: ')',
        ru: ')',
      }
    },
    {
      keyCode: 'Minus',
      common: {
        en: '-',
        ru: '-',
      },
      shift: {
        en: '_',
        ru: '_',
      }
    },
    {
      keyCode: 'Equal',
      common: {
        en: '=',
        ru: '=',
      },
      shift: {
        en: '+',
        ru: '+',
      }
    },
    {
      keyCode: 'Backspace',
      general: '⌫'
    },
  ],
  [
    {
      keyCode: 'Tab',
      general: '↹'
    },
    {
      keyCode: 'KeyQ',
      common: {
        en: 'q',
        ru: 'й',
      },
      shift: {
        en: 'Q',
        ru: 'Й',
      }
    },
    {
      keyCode: 'KeyW',
      common: {
        en: 'w',
        ru: 'ц',
      },
      shift: {
        en: 'W',
        ru: 'Ц',
      }
    },
    {
      keyCode: 'KeyE',
      common: {
        en: 'e',
        ru: 'у',
      },
      shift: {
        en: 'E',
        ru: 'У',
      }
    },
    {
      keyCode: 'KeyR',
      common: {
        en: 'r',
        ru: 'к',
      },
      shift: {
        en: 'R',
        ru: 'К',
      }
    },
    {
      keyCode: 'KeyT',
      common: {
        en: 't',
        ru: 'е',
      },
      shift: {
        en: 'T',
        ru: 'Е',
      }
    },
    {
      keyCode: 'KeyY',
      common: {
        en: 'y',
        ru: 'н',
      },
      shift: {
        en: 'Y',
        ru: 'Н',
      }
    },
    {
      keyCode: 'KeyU',
      common: {
        en: 'u',
        ru: 'г',
      },
      shift: {
        en: 'U',
        ru: 'Г',
      }
    },
    {
      keyCode: 'KeyI',
      common: {
        en: 'i',
        ru: 'ш',
      },
      shift: {
        en: 'I',
        ru: 'Ш',
      }
    },
    {
      keyCode: 'KeyO',
      common: {
        en: 'o',
        ru: 'щ',
      },
      shift: {
        en: 'O',
        ru: 'Щ',
      }
    },
    {
      keyCode: 'KeyP',
      common: {
        en: 'p',
        ru: 'з',
      },
      shift: {
        en: 'P',
        ru: 'З',
      }
    },
    {
      keyCode: 'BracketLeft',
      common: {
        en: '[',
        ru: 'х',
      },
      shift: {
        en: '{',
        ru: 'Х',
      }
    },
    {
      keyCode: 'BracketRight',
      common: {
        en: ']',
        ru: 'ъ',
      },
      shift: {
        en: '}',
        ru: 'Ъ',
      }
    },
    {
      keyCode: 'Delete',
      general: 'Del'
    },
  ],
  [
    {
      keyCode: 'CapsLock',
      general: '⇪'
    },
    {
      keyCode: 'KeyA',
      common: {
        en: 'a',
        ru: 'ф',
      },
      shift: {
        en: 'A',
        ru: 'Ф',
      }
    },
    {
      keyCode: 'KeyS',
      common: {
        en: 's',
        ru: 'ы',
      },
      shift: {
        en: 'S',
        ru: 'Ы',
      }
    },
    {
      keyCode: 'KeyD',
      common: {
        en: 'd',
        ru: 'в',
      },
      shift: {
        en: 'D',
        ru: 'В',
      }
    },
    {
      keyCode: 'KeyF',
      common: {
        en: 'f',
        ru: 'а',
      },
      shift: {
        en: 'F',
        ru: 'А',
      }
    },
    {
      keyCode: 'KeyG',
      common: {
        en: 'g',
        ru: 'п',
      },
      shift: {
        en: 'G',
        ru: 'П',
      }
    },
    {
      keyCode: 'KeyH',
      common: {
        en: 'h',
        ru: 'р',
      },
      shift: {
        en: 'H',
        ru: 'Р',
      }
    },
    {
      keyCode: 'KeyJ',
      common: {
        en: 'j',
        ru: 'о',
      },
      shift: {
        en: 'J',
        ru: 'О',
      }
    },
    {
      keyCode: 'KeyK',
      common: {
        en: 'k',
        ru: 'л',
      },
      shift: {
        en: 'K',
        ru: 'Л',
      }
    },
    {
      keyCode: 'KeyL',
      common: {
        en: 'l',
        ru: 'д',
      },
      shift: {
        en: 'L',
        ru: 'Д',
      }
    },
    {
      keyCode: 'Semicolon',
      common: {
        en: ';',
        ru: 'ж',
      },
      shift: {
        en: ':',
        ru: 'Ж',
      }
    },
    {
      keyCode: 'Quote',
      common: {
        en: '\'',
        ru: 'э',
      },
      shift: {
        en: '"',
        ru: 'Э',
      }
    },
    {
      keyCode: 'Enter',
      general: 'Enter'
    },
  ],
  [
    {
      keyCode: 'ShiftLeft',
      general: '⇧'
    },
    {
      keyCode: 'KeyZ',
      common: {
        en: 'z',
        ru: 'я',
      },
      shift: {
        en: 'Z',
        ru: 'Я',
      }
    },
    {
      keyCode: 'KeyX',
      common: {
        en: 'x',
        ru: 'ч',
      },
      shift: {
        en: 'X',
        ru: 'Ч',
      }
    },
    {
      keyCode: 'KeyC',
      common: {
        en: 'c',
        ru: 'с',
      },
      shift: {
        en: 'C',
        ru: 'С',
      }
    },
    {
      keyCode: 'KeyV',
      common: {
        en: 'v',
        ru: 'м',
      },
      shift: {
        en: 'V',
        ru: 'М',
      }
    },
    {
      keyCode: 'KeyB',
      common: {
        en: 'b',
        ru: 'и',
      },
      shift: {
        en: 'B',
        ru: 'И',
      }
    },
    {
      keyCode: 'KeyN',
      common: {
        en: 'n',
        ru: 'т',
      },
      shift: {
        en: 'N',
        ru: 'Т',
      }
    },
    {
      keyCode: 'KeyM',
      common: {
        en: 'm',
        ru: 'ь',
      },
      shift: {
        en: 'M',
        ru: 'Ь',
      }
    },
    {
      keyCode: 'Comma',
      common: {
        en: ',',
        ru: 'б',
      },
      shift: {
        en: '<',
        ru: 'Б',
      }
    },
    {
      keyCode: 'Period',
      common: {
        en: '.',
        ru: 'ю',
      },
      shift: {
        en: '>',
        ru: 'Ю',
      }
    },
    {
      keyCode: 'Slash',
      common: {
        en: '/',
        ru: '.',
      },
      shift: {
        en: '?',
        ru: ',',
      }
    },
    {
      keyCode: 'Backslash',
      common: {
        en: '\\',
        ru: '\\',
      },
      shift: {
        en: '|',
        ru: '/',
      }
    },
    {
      keyCode: 'ArrowUp',
      general: '↑'
    },
    {
      keyCode: 'ShiftRight',
      general: '⇧'
    },
  ],
  [
    {
      keyCode: 'ControlLeft',
      general: 'CtrlL'
    },
    {
      keyCode: 'AltLeft',
      general: 'AltL'
    },
    {
      keyCode: 'switchLang',
      common: {
        en: 'en',
        ru: 'ru',
      },
      shift: {
        en: 'en',
        ru: 'ru',
      }
    },
    {
      keyCode: 'Space',
      common: {
        en: ' ',
        ru: ' ',
      },
      shift: {
        en: ' ',
        ru: ' ',
      }
    },
    {
      keyCode: 'AltRight',
      general: 'AltR'
    },
    {
      keyCode: 'ControlRight',
      general: 'CtrlR'
    },
    {
      keyCode: 'ArrowLeft',
      general: '←'
    },
    {
      keyCode: 'ArrowDown',
      general: '↓'
    },
    {
      keyCode: 'ArrowRight',
      general: '→'
    },
  ]
]

export default keysData;