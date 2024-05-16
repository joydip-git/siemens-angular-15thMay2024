import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {
  message = 'This is sample'
  width = 300

  changeMessage(newMessage: string) {
    this.message = newMessage
  }
}
