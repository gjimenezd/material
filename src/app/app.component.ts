import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuPositionExample } from "./components/menu-position-example/menu-position-example.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuPositionExample],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'material';
}
