import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { keycloakHttpInterceptor } from './utils/httpInterceptor.service';
import { KeycloakService } from './utils/keycloakService.service';

export function kcFactory(kcService: KeycloakService) {
  return () => kcService.init();
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([keycloakHttpInterceptor])
    ),
     provideAppInitializer(() => {
      const initFn = ((key: KeycloakService) => {
        return () => key.init()
      })(inject(KeycloakService));
      return initFn();
    })
  ]
};
