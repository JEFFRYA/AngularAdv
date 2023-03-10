import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    RouterModule,
    FormsModule
  ],
  imports: [
    CommonModule
  ]
})

export class AuthModule { }
