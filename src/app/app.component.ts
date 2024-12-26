import { Component } from '@angular/core';
import { lorem } from "faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText: string = lorem.sentence()

  onChangeInput(text: Event) {
    console.log((text.target as HTMLInputElement).value)
  }
}

