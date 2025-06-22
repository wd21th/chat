import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  messages: Array<string> = [];

  keydown(keyboardEvent: KeyboardEvent) {
    if (keyboardEvent.code === 'Enter') {
      if (keyboardEvent.target) {
        const inputEl = keyboardEvent.target as HTMLInputElement
        if (inputEl.value.length > 0) {
          this.messages.unshift(inputEl.value)
          inputEl.value = '';
        }
      }
      console.log('keyboardEvent.target :', keyboardEvent.target);
    }
  }
}
