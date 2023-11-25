
export class Router {
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