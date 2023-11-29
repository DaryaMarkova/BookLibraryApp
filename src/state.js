
import onChange from 'on-change';


export class State {
  state$ = undefined;
  __handlers = [];

  constructor() {
    this.state = {
      list: [],
      loading: false,
      searchQuery: undefined,
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
    // подписка на обновление стейта
    this.__handlers.forEach(handler => {
      handler.call(this, this.state)
    });
  }
}