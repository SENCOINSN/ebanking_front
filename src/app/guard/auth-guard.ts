import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
} from '@angular/router';

import { KeycloakService } from '../utils/keycloakService.service';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(KeycloakService)
  const router = inject(Router);
  if(tokenService.isTokenExpired){
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  return true;
};
