'use strict';

import './app.css';

import { MainView } from './views/main/main';
import { Router } from './router';

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
