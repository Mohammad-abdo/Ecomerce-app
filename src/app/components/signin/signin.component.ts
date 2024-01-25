import { Component } from '@angular/core';
import { FormGroup, Validator, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  isLoder: boolean = false;

  ApiError: String = '';

  constructor(private _AuthService: AuthService,private _Route:Router) {

    if(localStorage.getItem('userToken') !== null){
      _Route.navigate(['/home'])
    }
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  handelLogin(form: FormGroup) {
    this.isLoder = true;
    console.log(form.value);
    if (form.valid) {
      this._AuthService.signin(form.value).subscribe({
        next: (res) => {
          if (res.status == 'success') {
            console.log(res);
            localStorage.setItem('userToken', res.token);
            this._AuthService.DecodeUserData();
            this.isLoder = false;
            this._Route.navigate(['/home'])
          }
        },
        error: (err) => {
          this.isLoder = false;
          console.log(err);

          this.ApiError = err.error.message;
        },
      });
    }
  }
  // localStorage.setItem("userToken",response.data.token)
}
