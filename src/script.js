import CreateElement from './js/create/createElement';
import arrLanguages from './js/languages/lang';

class VirtualKeyboard {
  constructor(arrLang) {
    this.arrLanguages = arrLang;
    this.currentLang = localStorage.getItem('lang') || 0;

    this.flagCaps = false;
    this.flagShif = false;

    this.flagControlLef = false;
    this.flagAltLeft = false;
  }

  init() {
    const wrapper = new CreateElement('div', 'wrapper').create();
    document.body.append(wrapper);

    const title = new CreateElement('h1', 'title', 'RSS Virtual Keyboard').create();
    this.textarea = new CreateElement('textarea', 'textarea').create();
    this.textarea.rows = 10;
    this.textarea.cols = 80;
    this.textarea.focus();
    const keyboard = this.createKeyboard();
    const about = new CreateElement('p', 'about', 'The keyboard was created in the Windows operating system.').create();
    const languageChange = new CreateElement('p', 'languageChange', 'To switch the language, the combination is: left ctrl + alt.').create();
    wrapper.append(title, this.textarea, keyboard, about, languageChange);
    this.keys = document.querySelectorAll('.key');

    keyboard.addEventListener('mousedown', (e) => {
      e.preventDefault();
      if (e.target.closest('.key')) {
        e.target.classList.add('active');
        this.characterOutput(e.target.innerHTML);
      }
    });

    keyboard.addEventListener('mouseup', (e) => {
      if (e.target.closest('.key')) {
        this.removeMouseListener(e.target);
      }
    });

    keyboard.onmouseout = (e) => {
      if (e.target.closest('.key')) {
        this.removeMouseListener(e.target);
      }
    };

    document.addEventListener('keydown', (e) => {
      this.addListener(e);
    });

    document.addEventListener('keyup', (e) => {
      this.removeListener(e);
    });
  }

  createKeyboard() {
    const i = this.currentLang;
    const keyboard = new CreateElement('div', 'keyboard').create();
    const row = new CreateElement('div', 'row').create();
    const row1 = new CreateElement('div', 'row').create();
    const row2 = new CreateElement('div', 'row').create();
    const row3 = new CreateElement('div', 'row').create();
    const row4 = new CreateElement('div', 'row').create();

    this.arrLanguages[i].forEach((item, index) => {
      const button = new CreateElement('div', `key ${item.code.toLowerCase()}`, item.key).create();
      button.setAttribute('keyname', item.code);
      switch (true) {
        case index < 14:
          row.append(button);
          break;
        case index <= 28:
          row1.append(button);
          break;
        case index <= 41:
          row2.append(button);
          break;
        case index <= 54:
          row3.append(button);
          break;
        default:
          row4.append(button);
          break;
      }
    });
    keyboard.append(row, row1, row2, row3, row4);

    return keyboard;
  }

  addListener(event) {
    // console.log(event)
    event.preventDefault();
    this.keys.forEach((key) => {
      if (key.getAttribute('keyname') === event.code) {
        key.classList.add('active');
        this.characterOutput(key.innerHTML);
      }
    });
    if (event.code === 'ControlLeft') {
      this.flagControlLef = true;
    }
    if (event.code === 'AltLeft') {
      this.flagAltLeft = true;
    }
    if (event.code === 'ShiftLeft') {
      this.flagShif = true;
    }
    if (this.flagAltLeft && this.flagControlLef) {
      this.switchLanguage();
    }
    if (this.flagShif && !this.flagCaps) {
      this.keyShift('shift');
    } else if (this.flagShif && this.flagCaps) {
      this.keyShift('capsShift');
    }
  }

  removeListener(event) {
    event.preventDefault();
    this.keys.forEach((key) => {
      if (key.getAttribute('keyname') === event.code) {
        key.classList.remove('active');
      }
    });
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (this.flagCaps) {
        this.keyShift('');
      } else {
        this.keyShift('removeShift');
      }
    }
    if (event.code === 'ControlLeft') {
      this.flagControlLef = false;
    }
    if (event.code === 'AltLeft') {
      this.flagAltLeft = false;
    }
    if (event.code === 'ShiftLeft') {
      this.flagShif = false;
    }
  }

  removeMouseListener(element) {
    element.classList.remove('active');
    if (!this.flagCaps) {
      if (element.getAttribute('keyname') === 'ShiftLeft' || element.getAttribute('keyname') === 'ShiftRight') {
        this.keyShift('removeShift');
      }
    } else {
      this.keyShift();
    }
  }

  keyShift(param) {
    const i = this.currentLang;
    this.keys.forEach((key, index) => {
      if (!key.getAttribute('keyname').includes('CapsLock')
      && !key.getAttribute('keyname').includes('Tab')
      && !key.getAttribute('keyname').includes('Shif')
      && !key.getAttribute('keyname').includes('Control')
      && !key.getAttribute('keyname').includes('Alt')
      && !key.getAttribute('keyname').includes('Backspace')
      && !key.getAttribute('keyname').includes('Delete')
      && !key.getAttribute('keyname').includes('Enter')) {
        const content = key;
        content.innerHTML = '';
        if (param === 'shift') {
          content.innerHTML = this.arrLanguages[i][index].keyShift;
        } else if (param === 'removeShift') {
          content.innerHTML = this.arrLanguages[i][index].key;
        } else if (param === 'capsShift') {
          switch (true) {
            case index === 0:
              content.innerHTML = this.arrLanguages[i][index].keyShift.toLowerCase();
              break;
            case index < 14:
              content.innerHTML = this.arrLanguages[i][index].keyShift;
              break;
            default:
              content.innerHTML = this.arrLanguages[i][index].keyShift.toLowerCase();
              break;
          }
        } else {
          switch (true) {
            case index === 0:
              content.innerHTML = this.arrLanguages[i][index].key.toUpperCase();
              break;
            case index < 14:
              content.innerHTML = this.arrLanguages[i][index].key;
              break;
            default:
              content.innerHTML = this.arrLanguages[i][index].key.toUpperCase();
              break;
          }
        }
      }
    });
  }

  capsLock() {
    const i = this.currentLang;
    const arr = [];
    this.caps = document.querySelector('.capslock');
    this.caps.classList.toggle('active__caps');
    this.flagCaps = this.caps.className.includes('active__caps') ? !0 : !1;
    this.keys.forEach((key, index) => {
      if (key.getAttribute('keyname').includes('Key')
      || key.getAttribute('keyname').includes('Bracket')
      || key.getAttribute('keyname').includes('Semicolon')
      || key.getAttribute('keyname').includes('Quote')
      || key.getAttribute('keyname').includes('Period')
      || key.getAttribute('keyname').includes('Backquote')
      || key.getAttribute('keyname').includes('Comma')) {
        arr.push(index);
        const content = key;
        content.innerHTML = '';
        if (this.flagCaps) {
          content.innerHTML = this.arrLanguages[i][index].key.toUpperCase();
        } else {
          content.innerHTML = this.arrLanguages[i][index].key;
        }
      }
    });
  }

  switchLanguage() {
    this.currentLang = this.currentLang === 0 ? 1 : 0;
    localStorage.setItem('lang', this.currentLang);
    if (this.flagCaps) {
      this.caps.classList.remove('active__caps');
      this.capsLock();
    } else {
      this.keyShift('removeShift');
    }
  }

  characterOutput(symbol) {
    this.textarea.focus();
    const inputCharacter = (character) => this.textarea.setRangeText(character, this.textarea.selectionStart, this.textarea.selectionEnd, 'end');

    const deleteCharacter = (param) => {
      const valueText = this.textarea.value;
      if (param === 'Backspace') {
        if (this.textarea.selectionStart >= 1) {
          this.textarea.selectionStart -= 1;
          inputCharacter('');
        } else {
          inputCharacter('');
        }
      } else if (param === 'Del') {
        if (this.textarea.selectionStart !== valueText.length) {
          this.textarea.selectionEnd += 1;
          inputCharacter('');
        } else {
          inputCharacter('');
        }
      }
    };

    if (symbol === 'Enter') {
      inputCharacter('\n');
    } else if (symbol === 'Tab') {
      inputCharacter('\t');
    } else if (symbol === 'CapsLock') {
      this.capsLock();
    } else if (symbol === 'Shift') {
      const param = this.flagCaps ? 'capsShift' : 'shift';
      this.keyShift(param);
    } else if (symbol === 'Alt' || symbol === 'Ctrl' || symbol === '⊞') {
      inputCharacter('');
    } else if (symbol === 'Backspace') {
      deleteCharacter('Backspace');
    } else if (symbol === 'Del') {
      deleteCharacter('Del');
    } else if (symbol === '&lt;') {
      inputCharacter('<');
    } else if (symbol === '&gt;') {
      inputCharacter('>');
    } else if (symbol === '&amp;') {
      inputCharacter('&');
    } else {
      inputCharacter(symbol);
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new VirtualKeyboard(arrLanguages).init();
});
