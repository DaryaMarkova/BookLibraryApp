'use strict';

import './app.css';

import { MainView } from './views/main/main';

class App {
  constructor() {
    this.routes = [
      { path: "", view: MainView }
    ];

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

new App();
