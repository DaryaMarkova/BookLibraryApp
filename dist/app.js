(function () {
    'use strict';

    class AbstractView {
        constructor() {
          this.app = document.getElementById('root');
        }

        setTitle(title) {
          document.title = title;
        }

        render() {
          return;
        }

        destroy() {
          return;
        }
    }

    class MainView extends AbstractView {
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

    class Router {
      constructor(routes) {
        this.routes = routes || [];

      }

      bootstrap() {
        console.log("bootstrapping routes");
        window.addEventListener('hashchange', this.route.bind(this));
        window.addEventListener('load', this.route.bind(this));
      }
      
      route() {
        if (this.currentView) {
          this.currentView.destroy();
        }

        const view = this.routes.find(r => r.path == location.hash).view;

        this.currentView = new view();
        this.currentView.render();
      }
    }

    class App {
      constructor() {
        new Router(
          [
            { path: "", view: MainView }
          ]
        ).bootstrap();
      }
    }

    new App();

})();
