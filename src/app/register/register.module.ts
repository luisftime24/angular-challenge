import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { PassengerFormComponent } from './component/passenger-form/passenger-form.component';
import { PassengerComponent } from './component/passenger/passenger.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


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
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }