import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // <-- CORRIGIDO
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config); // <-- CORRIGIDO

export default bootstrap;
