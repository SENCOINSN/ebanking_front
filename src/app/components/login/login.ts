import {
  Component,
  OnInit,
} from '@angular/core';

import { KeycloakService } from '../../utils/keycloakService.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {

  constructor(private ks: KeycloakService) {
    // Initialization logic can go here
  }
  async ngOnInit():Promise<void> {
    await this.ks.init();
    await this.ks.login();
  }

}
