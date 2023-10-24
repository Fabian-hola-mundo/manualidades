import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  input = [
    {
      label: "Correo Electrónico",
      placeholder: "tucorreo@correo.com",
      formControlName: "email",
      matError: 'Materror'
    },
    {
      label: "Contraseña",
      placeholder: "*******",
      formControlName: "password",
      matError: 'Materror'
    }
  ]

}
