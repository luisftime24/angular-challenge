import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormFactoryService } from '../../services/form-factory.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private formFactory: FormFactoryService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      passengers: [1, Validators.required],
      passengersArray: this.fb.array([])
    });

    
  }

  get passengersArray() {
    return this.registerForm.get('passengersArray') as FormArray;
  }

  addPassengerForm() {
    if (this.passengersArray.length == 4) {
      alert('El número maximo de pasajeros es 4');
      return;
    }

    const passengerForms = this.formFactory.getPassengerForm();
    this.passengersArray.push(passengerForms);
  }

  removePassengerForm(index: number) {
    this.passengersArray.removeAt(index);
    this.registerForm.get('passengers')?.setValue(this.passengersArray.length);
  }

  register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    console.log(this.registerForm.value);
  }
}
