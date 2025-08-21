import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // <-- CORRIGIDO

bootstrapApplication(AppComponent, appConfig) // <-- CORRIGIDO
  .catch((err) => console.error(err));