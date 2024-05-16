import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrl: './consumer.component.css'
})
export class ConsumerComponent implements OnChanges, OnInit {

  @Input('personName') inputData = ''

  message = ''
  constructor() {
    console.log('Consumer created...');
  }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.message = 'welcome ' + this.inputData
  }
}
