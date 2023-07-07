import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/auth/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

constructor(private router:Router){ }

ngOnInit(): void {
    }

login(){
this.router.navigate(['login'])
  }
}