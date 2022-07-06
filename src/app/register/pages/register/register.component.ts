import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FormFactoryService } from '../../services/form-factory.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    `
    .form-container {
      padding: 15px;
      border-radius: 10px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      margin-top: 20px;
    }
    `
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({});

  confirmPage: boolean = false;

  constructor(
    private fb: FormBuilder,
    private formFactory: FormFactoryService
  ) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = this.formFactory.newRegisterForm();
    this.addPassengerForm();
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
    this.actualPassengers();
  }

  removePassengerForm(index: number) {
    this.passengersArray.removeAt(index);
    this.actualPassengers();
  }

  register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.confirmPage = true;
    this.registerForm.markAsUntouched();
    this.registerForm.markAsPristine();
  }

  confirmRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    } else if (this.unsavedChanges()) {
      alert('Hay cambios por guardar');
      return;
    }

    this.initRegisterForm();
    this.confirmPage = false;
  }

  back() {
    this.confirmPage = false;
    this.actualPassengers();
    this.registerForm.markAsUntouched();
  }

  private actualPassengers() {
    this.registerForm.get('passengers')?.setValue(this.passengersArray.length);
  }

  private unsavedChanges() {
    return this.registerForm.dirty;
  }
}
