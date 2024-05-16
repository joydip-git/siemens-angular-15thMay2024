import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  first = 0
  second = 0
  result = 0
  choice = 0
  @Output() resultCalculated = new EventEmitter<number>()

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
    this.resultCalculated.emit(this.result)
  }
}
