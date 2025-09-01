import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config.server';

export default function bootstrap() {
  return bootstrapApplication(App, appConfig);
}
