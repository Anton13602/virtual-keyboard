export default class CreateElement {
  constructor(el, className, content) {
    this.el = el;
    this.className = className;
    this.content = content;
  }

  create() {
    const element = document.createElement(this.el);
    if (this.className) {
      element.className = this.className;
    }
    if (this.content) {
      element.innerHTML = this.content;
    }

    return element;
  }
}
