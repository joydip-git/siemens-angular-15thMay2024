import { NgModule } from '@angular/core';

import { CalculatorComponent } from './calculator/calculator.component';
import { CalculationResultComponent } from './calculation-result/calculation-result.component';

@NgModule({
    imports: [],
    exports: [CalculationResultComponent, CalculatorComponent],
    declarations: [CalculatorComponent, CalculationResultComponent],
    providers: [],
})
export class SampleModule { }
