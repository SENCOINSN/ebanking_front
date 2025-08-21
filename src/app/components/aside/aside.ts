import {
  Component,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { KeycloakService } from '../../utils/keycloakService.service';

@Component({
  selector: 'app-aside',
  imports: [RouterLink],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside implements OnInit {

  isAdmin: boolean = false;
 constructor(private ks: KeycloakService) {
    // Initialization logic can go here
  }
  ngOnInit(): void {
    this.isAdmin = this.ks.isAdmin();
    console.log('Is Admin:', this.isAdmin);
  }

  async logout(): Promise<void> {
    await this.ks.logout();
  }
  
 }

