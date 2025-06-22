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
  @ViewChild('messageListEl')
  messageListElement?: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.inputElement?.nativeElement.focus();
  }

  keydown(keyboardEvent: KeyboardEvent): void {
    if (keyboardEvent.code === 'Enter') {
      if (keyboardEvent.target) {
        const inputEl = keyboardEvent.target as HTMLInputElement
        if (inputEl.value.length > 0) {
          this.messages.unshift(inputEl.value)
          inputEl.value = '';
        }
      }
      this.resetScroll();
    }
  }

  sendMessage(): void {
    const value = this.inputElement?.nativeElement.value;

    if (value?.length && value?.length > 0) {
      this.messages.unshift(value)
      this.inputElement!.nativeElement.value = '';
      this.resetScroll();
    }
  }

  resetScroll() {
    const scrollTop = this.messageListElement?.nativeElement.scrollTop;

    if (scrollTop !== 0) {
      if (this.messageListElement?.nativeElement.scrollTop) {
        this.messageListElement.nativeElement.scrollTop = 0;
      }
    }
  }
}
