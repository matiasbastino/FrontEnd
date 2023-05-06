import { Component, OnInit } from '@angular/core';
import { FormBuilder, ɵNgNoValidate, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.formBuilder.group ({
    email: ['ejemplo@mail.com',[Validators.required, Validators.email]],
    contraseña: ['', Validators.required],
  })

  constructor (private formBuilder:FormBuilder, private router:Router) {}

    ngOnInit(): void {
  }

  login() {
    if(this.loginForm.valid){
      console.log("Llamar al servicio de login");
      this.router.navigateByUrl('/educación');
      this.loginForm.reset();
    }
      else {
        alert("Error al ingresar los datos")
      }
    }
  }
