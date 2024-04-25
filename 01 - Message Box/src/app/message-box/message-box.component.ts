import { Component } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.css',
})
export class MessageBoxComponent {
  messageBox = '';

  onUpdateMessageBox(event: Event) {
    this.messageBox = (<HTMLInputElement>event.target).value;
  }
}
