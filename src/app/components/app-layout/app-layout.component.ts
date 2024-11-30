import { Component } from '@angular/core';
import { MenuPositionExample } from "../menu-position-example/menu-position-example.component";

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [MenuPositionExample],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

}
