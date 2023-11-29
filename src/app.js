'use strict';

import './app.scss';

import { MainView } from './views/main/main';
import { Router } from './router';
import { State } from './state';


class App {
  constructor() {
    this.store = new State().bootstrap();

    new Router(
      [
        { path: "", view: MainView, params: { store: this.store } }
      ]
    ).bootstrap();
  }
}

new App();
