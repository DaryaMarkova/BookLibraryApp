'use strict';

import './app.css';

import { MainView } from './views/main/main';
import { Router } from './router';
import { State } from './state';


class App {
  constructor() {
    this.state$ = new State().bootstrap();

    new Router(
      [
        { path: "", view: MainView, params: { state: this.state$ } }
      ]
    ).bootstrap();
  }
}

new App();
