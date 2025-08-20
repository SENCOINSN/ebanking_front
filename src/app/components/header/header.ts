import {
  Component,
  OnInit,
} from '@angular/core';

import { KeycloakService } from '../../utils/keycloakService.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  username:string | undefined;
  name:string | undefined;

  constructor(private ks: KeycloakService) {
    // Initialization logic can go here
  }

  ngOnInit(): void {
    // Component initialization logic can go here
    this.username = this.ks.userName;
    this.name = this.ks.fullName;
  }

  // Add any methods or properties needed for the header component

}
