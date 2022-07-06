import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import Swat from 'sweetalert2';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [
    `
    .passenger-container {
      padding: 15px;
      border-radius: 10px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      margin-top: 20px;
    }
    `
  ]
})
export class ConfirmComponent implements OnInit {
  @Input() passengersInfo: FormGroup = new FormGroup({});

  constructor(
  ) { }

  ngOnInit(): void {
  }

  get passengersArray() : FormArray {
    return this.passengersInfo.get('passengersArray') as FormArray;
  }

  passengerById(id : number) {
    return this.passengersArray.controls[id];
  }

  isEditMode(passenger: any) {
    return passenger.controls['edit_mode'].value;
  }

  editInfo(id : number) {
    const passenger = this.passengerById(id);
    passenger.get('edit_mode')?.setValue(true);
    passenger.markAsDirty();
  }

  saveInfo(id : number) {
    const passenger = this.passengerById(id);
    if (passenger.invalid) {
      passenger.markAllAsTouched();
      return;
    }

    passenger.get('edit_mode')?.setValue(false);
    passenger.markAsUntouched();
    passenger.markAsPristine();
  }

  deleteInfo(id : number) {
    Swat.fire({
      title: 'Tekton Airlines',
      text: '¿Está seguro de eliminar este pasajero?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2972fa',
      cancelButtonColor: '#fb4143',
      confirmButtonText: 'Si, eliminarlo!',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.value) {
        this.passengersArray.removeAt(id);
      }
    })
  }
}
