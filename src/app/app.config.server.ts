import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideZonelessChangeDetection(), provideRouter(routes)],
};
