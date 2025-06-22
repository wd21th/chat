import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  messages: Array<string> = [];
  @ViewChild('inputEl', { static: true })
  inputElement?: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.inputElement?.nativeElement.focus();
  }

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
