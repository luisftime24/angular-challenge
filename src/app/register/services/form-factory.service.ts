import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

import { FormValidatorsService } from './form-validators.service';

@Injectable({
  providedIn: 'root'
})
export class FormFactoryService {

  private initPassengerForm = {
    "passengers": 1,
    "passengersArray": [
      {
        "names": "",
        "last_names": "",
        "document_type": "",
        "document": "",
        "nationality": "",
        "edit_mode": false
      }
    ]
  }

  constructor(
    private fb: FormBuilder,
    private formValidators: FormValidatorsService
  ) { }

  getPassengerForm() {
    return this.fb.group({
      names: ['', [Validators.required, Validators.pattern(this.formValidators.namesPattern)]],
      last_names: ['', [Validators.required, Validators.pattern(this.formValidators.lastNamesPattern)]],
      document_type: ['', [Validators.required]],
      document: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      edit_mode: false
    }, {
      validators: [
        this.formValidators.documentValidator('document_type', 'document')
      ]
    })
  }

  newRegisterForm() {
    return this.fb.group({
      passengers: [1, Validators.required],
      passengersArray: new FormArray([])
    });
  };

  get passengerInitForm () {
    return this.initPassengerForm;
  }
}
