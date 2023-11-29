
import onChange from 'on-change';


export class State {
  state$ = undefined;
  __handlers = [];

  constructor() {
    this.state = {
      list: [],
      loading: false,
      searchQuery: '',
      offset: 0,
      favourite: 5
    }
  }

  bootstrap() {
    this.state$ = onChange(this.state, this.__onStateChange.bind(this))
    return this;
  }

  subscribe(stateChangeHandler) {
    this.__handlers.push(stateChangeHandler);
  }

  __onStateChange = (path, value, previousValue, applyData) => {
    switch(path) {
      case 'searchQuery':
        // fetch list from query 
        // https://openlibrary.org/search.json?q=%D0%B3%D0%B0%D1%80%D1%80%D0%B8
        console.log("reducer: searchQuery", value)
      break;
    }

    // подписка на обновление стейта
    this.__handlers.forEach(handler => {
      handler.call(this, this.state)
    });
  }
}