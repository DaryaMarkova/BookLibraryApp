export class AbstractView {
    constructor(params) {
      this.app = document.getElementById('root');
      this.params = params;

      this.params.store.subscribe(newState => {
        console.log('Subscribing store state', newState);
        this.render();
      })
    }

    setTitle(title) {
      document.title = title;
    }

    get store() {
      return (this.params || {}).store;
    }

    render() {
      return;
    }

    destroy() {
      return;
    }
}