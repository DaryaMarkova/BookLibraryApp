export class AbstractView {
    constructor(params) {
      this.app = document.getElementById('root');
      this.params = params;
      
      // TODO
      // this.params.state.subscribe;
    }

    setTitle(title) {
      document.title = title;
    }

    get state() {
      return (this.params || {}).state;
    }

    render() {
      return;
    }

    destroy() {
      return;
    }
}