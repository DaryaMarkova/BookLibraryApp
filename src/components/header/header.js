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
          <img src="/static/search.png" alt="Поиск иконка" />
          <input type="text" placeholder="Поиск книг" />
        </a>
        <a class="menu-item" href='#'>
          <img src="/static/favourite.png" alt="Избранное иконка" />
          Избранное (${this.appState.state$.favourite})
        </a>
      </div>
    `;

    return this.elem;
  }
}