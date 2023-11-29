import { DivComponent } from "../../common/div-component";

export class SearchComponent extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  search() {
    const value = this.elem.querySelector('input').value;
    this.appState.state$.searchQuery = value;
  }

  render() {
    this.elem.classList.add('search');

    this.elem.innerHTML = `
      <a class="menu-item" href="#">
        <img src="/static/search.png" alt="Поиск иконка" />
        
        <input 
          type="text" 
          placeholder="Поиск..."
          aria-label="Искать"
          class="search-input"
          value="${this.appState.state$.searchQuery}" 
        />
      </a> 
    `
    this.elem.querySelector('input').addEventListener('change', this.search.bind(this))
    return this.elem;
  }
}