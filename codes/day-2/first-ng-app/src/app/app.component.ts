import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    calculationResult = 0
    constructor() {
        console.log('App component created');
    }
    receiveResult(res: number) {
        this.calculationResult = res
    }
}