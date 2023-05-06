import { Component, OnInit } from '@angular/core';
import { FormBuilder, ɵNgNoValidate } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.formBuilder.group ({
    email: ['ejemplo@mail.com'],
    contraseña: [''],
  })

  constructor (private formBuilder:FormBuilder) {}

    ngOnInit(): void {
  }

}
