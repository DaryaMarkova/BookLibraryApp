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
      <div class="menu">
        <a class="menu-item" href='#'>
          <img src="/static/search.svg" alt="Поиск иконка" />
          Поиск книг
        </a>
        <a class="menu-item" href='#'>
          <img src="/static/favorites.svg" alt="Избранное иконка" />
          Избранное
        </a>
      </div>
    `;

    return this.elem;
  }
}