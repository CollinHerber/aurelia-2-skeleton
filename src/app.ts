import {inject, route, Router} from 'aurelia';

@route({
  routes: [
    { id: 'home', path: '', component: import('./pages/home/home'), title: 'Home' },
    { id: 'testpage', path: 'testpage', component: import('./pages/testpage/testpage'), title: 'Test Page' },
    { id: '', path: ':404', component: import('./pages/home/home'), title: 'Home' },
  ]
})

@inject()
export class App {
  constructor(private router: Router) {
    this.router = router;
  }
  public message: string = 'Hello World!';
}
