import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { KeycloakService } from '../../utils/keycloakService.service';

@Component({
  selector: 'app-aside',
  imports: [RouterLink],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside {
 constructor(private ks: KeycloakService) {
    // Initialization logic can go here
  }

  async logout(): Promise<void> {
    await this.ks.logout();
  }
  
 }

