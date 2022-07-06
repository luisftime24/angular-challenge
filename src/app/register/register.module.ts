import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    RegisterComponent,
    ConfirmComponent,
    PassengerFormComponent,
    PassengerComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    SweetAlert2Module.forRoot()
  ],
  schemas: []
})
export class RegisterModule { }
