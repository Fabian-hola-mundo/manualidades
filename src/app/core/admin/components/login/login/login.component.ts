import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  input = {
    label: "LabelTest",
    placeholder: "Place",
    formControlName: "FormControl",
    matError: 'Materror'
  }

}
