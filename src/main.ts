import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
//import { provideRouter } from '@angular/router';
//import { routes } from './app/app.routes';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
// bootstrapApplication(App, {
//   providers: [provideRouter(routes)]
// })
//   .catch((err) => console.error(err));
