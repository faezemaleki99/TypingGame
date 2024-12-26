import { Component } from '@angular/core';
import { lorem } from "faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText: string = lorem.sentence()

  inputText: string = ''

  onChangeInput(text: Event) {
    // console.log((text.target as HTMLInputElement).value)
    const value = (text.target as HTMLInputElement).value

    this.inputText = value
  }

  compare(letterRandom: string, letterEnter: string): string {
    if (!letterEnter) {
      return 'pending'
    }
    return letterRandom === letterEnter ? 'correct' : 'incorrect'
  }
}

