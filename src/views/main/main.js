import { AbstractView } from '../../common/view.js';

export class MainView extends AbstractView {
    constructor(params) {
      super(params);
      this.setTitle('Поиск книг');

    }

    render() {
      const main = document.createElement('div');
      main.innerHTML = 'Тест';


      this.app.innerHTML = '';
      this.app.append(main);

      super.state.list.push({surname: 'Darya Markova'})
    }
}