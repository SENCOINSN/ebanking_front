import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Aside } from '../components/aside/aside';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-layout',
  imports: [Aside, Header, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
