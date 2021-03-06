import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authSerice : AuthService , 
    private toaster: ToastrService,
    private router: Router ,
  ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    this.authSerice.login(loginForm.value).subscribe(
      (response) => {
        this.toaster.success('Bienvenu cher utilisateur');
        localStorage.setItem('token', response.id);
        this.router.navigate(['/']);
      },
      (erreur) => {
        this.toaster.error('Veuillez vérifier vos credentials');
      }
    );
  }

}
