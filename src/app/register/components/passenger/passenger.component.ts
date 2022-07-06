import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html'
})
export class PassengerComponent implements OnInit {
  @Input() passengerInfo: FormGroup = new FormGroup({})

  constructor() { }

  ngOnInit(): void {
  }

  getDocumentType() {
    const documentType = this.passengerInfo.get('document_type')?.value;
    switch (documentType) {
      case '1':
        return 'Carnet de Extranjeria';
      case '2':
        return 'DNI';
      case '3':
        return 'Pasaporte';
      default:
        return 'No definido';
    }
  }
}
