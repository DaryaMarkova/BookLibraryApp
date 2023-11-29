import { AbstractView } from '../../common/view.js';
import { HeaderComponent } from '../../components/header/header.js';

export class MainView extends AbstractView {
    constructor(params) {
      super(params);
      this.setTitle('Поиск книг');

      // setTimeout( () => {
      //   super.store.state$.list.push({surname: 'Darya Markova'});
      // }, 3000);
    }

    render() {
      const main = document.createElement('div');
      // main.innerHTML = 'MainView is rendered' + JSON.stringify(super.store.state$);

      this.app.innerHTML = '';
      this.app.append(main);


      this.renderHeader();
    }

    renderHeader() {
      const header = new HeaderComponent(super.store).render();
      this.app.prepend(header);
    }
}