import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'passengers',
    component: RegisterComponent
  },
  {
    path: 'confirm',
    component: ConfirmComponent
  },
  {
    path: '**',
    redirectTo: 'passengers'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
