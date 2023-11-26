
export class Router {
  constructor(routes) {
    this.routes = routes || [];
  }

  bootstrap() {
    window.addEventListener('hashchange', this.route.bind(this));
    window.addEventListener('load', this.route.bind(this));
  }
  
  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }

    const currentRoute = this.routes.find(r => r.path == location.hash);

    if (currentRoute) {
      this.currentView = new currentRoute.view(currentRoute.params);
      this.currentView.render();
    }
  }
}