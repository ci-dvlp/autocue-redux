import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SheetContainerComponent} from "./core/sheet-container/sheet-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SheetContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'autocue-redux';
}
