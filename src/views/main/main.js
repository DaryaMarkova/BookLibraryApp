import { AbstractView } from '../../common/view.js';

export class MainView extends AbstractView {
    constructor() {
      super();
      this.setTitle('Поиск книгг');
    }

    render() {
      const main = document.createElement('div');
      main.innerHTML = 'Тест';


      this.app.innerHTML = '';
      this.app.append(main);
    }
}