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

}
