import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrl: './calculation-result.component.css'
})
export class CalculationResultComponent {
  @Input() result = 0
}
