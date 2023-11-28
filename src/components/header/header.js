import { DivComponent } from "../../common/div-component";

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.elem.classList.add('header');

    this.elem.innerHTML = `
      <div>
        <img src="/static/logo.png" alt="Логотип" />
      </div>
    `;

    return this.elem;
  }
}