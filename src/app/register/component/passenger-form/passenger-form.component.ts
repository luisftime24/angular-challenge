import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountriesService } from 'src/app/shared/services/countries.service';

import { Country } from '../../interfaces/form.interface';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styles: [
    `
      .form-control.ng-invalid.ng-touched {
        border: 1px solid red;
      }
      .form-control.ng-valid.ng-touched {
        border: 1px solid green;
      }
      .form-select.ng-invalid.ng-touched {
        border: 1px solid red;
      }
      .form-select.ng-valid.ng-touched {
        border: 1px solid green;
      }
    `
  ]
})
export class PassengerFormComponent implements OnInit {

  @Input() passengerForm: FormGroup = this.fb.group({});

  documentTypes = [
    { value: '1', viewValue: 'Carnet de extranjeria' },
    { value: '2', viewValue: 'DNI' },
    { value: '3', viewValue: 'Pasaporte' },
  ]

  nationalities: Country[] = []

  get namesErrorsMsg() {
    const errors = this.passengerForm.get('names')?.errors
    if (errors?.['required']) {
      return 'El nombre es requerido'
    } else if (errors?.['pattern']) {
      return 'El formato del nombre es incorrecto'
    }

    return '';
  }

  get lastNamesErrorsMsg() {
    const errors = this.passengerForm.get('lastNames')?.errors
    if (errors?.['required']) {
      return 'El apellido es requerido'
    } else if (errors?.['pattern']) {
      return 'El formato del apellido es incorrecto'
    }

    return '';
  }

  get documentErrorsMsg() {
    const errors = this.passengerForm.get('document')?.errors
    if (errors?.['required']) {
      return 'El numero de documento es requerido'
    } else if (errors?.['pattern']) {
      return 'El formato del numero de documento es incorrecto'
    }
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((countries: Country[]) => {
      this.nationalities = countries;
    })
  }

  invalidField(field: string): boolean {
    return this.passengerForm.get(field)?.invalid
      && this.passengerForm.get(field)?.touched ? true : false
  }

  controlValue(control: string) {
    return this.passengerForm.get(control)?.value;
  }

}
