import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.css'
})
export class ProviderComponent {

  nameData = ''
  @Output('nameChanged') nameReceieved = new EventEmitter<string>()

  receiveName(nameValue: string) {
    this.nameData = nameValue
    this.nameReceieved.emit(this.nameData)
  }
}
