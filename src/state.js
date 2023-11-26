
import onChange from 'on-change';


export class State {
  state$ = undefined;

  constructor() {
    this.state = {
      list: [],
      loading: false,
      searchQuery: undefined,
      offset: 0
    }
  }

  bootstrap() {
    this.state$ = onChange(this.state, this.onStateChange.bind(this));
    // this.state$ = new MutationObserver(this.state)
    return this.state$;
  }

  onStateChange = (path, value, previousValue, applyData) => {
    console.log('onStateChange inside')
  }
}