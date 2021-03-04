import Aurelia, {RouterConfiguration} from 'aurelia';
import { App } from './app';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@popperjs/core';

Aurelia
    .register(RouterConfiguration)
    .app(App)
    .start();
