import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {
  // message = 'This is sample'
  // width = 300

  // changeMessage(newMessage: string) {
  //   this.message = newMessage
  // }

  first = 0
  second = 0
  result = 0
  choice = 0

  updateFirst(value: string) {
    this.first = Number(value)
  }
  updateSecond(value: string) {
    this.second = Number(value)
  }

  updateChoice(val: number) {
    this.choice = val
  }
  calculate() {
    switch (this.choice) {
      case 1:
        this.result = this.first + this.second
        break;

      case 2:
        this.result = this.first - this.second
        break;

      case 3:
        this.result = this.first * this.second
        break;

      case 4:
        this.result = this.first / this.second
        break;

      default:
        this.result = this.first + this.second
        break;
    }
    console.log(this.choice, this.result);
  }
}
