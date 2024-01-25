import { Component } from '@angular/core';
import { FormControl, FormGroup,Validator,Validators } from '@angular/forms';
import {Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private _AuthService:AuthService,private _Route:Router){}
  registerForm:FormGroup =new FormGroup({
    name:new FormControl(null,[Validators.min(3),Validators.max(30),Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.min(3),Validators.required]),
    confirmPassword:new FormControl(null,[Validators.min(3),Validators.required]),
  })
get name(){
 return this.registerForm.get("name")
}
get email(){
 return this.registerForm.get("email")
}
get password(){
 return this.registerForm.get("password")
}
get confirmPassword(){
 return this.registerForm.get("confirmPassword")
}
isLoder:boolean=false

ApiError:String=''

  handelRegister(register:FormGroup){
    this.isLoder=true
    console.log(register.value);
    if(register.valid){

      this._AuthService.register(register.value).subscribe({
        next:(response)=>{
          console.log(response);
          this.isLoder=false
          if(response.message == "success"){

            this.isLoder=false
            this._Route.navigate(['/login'])

          }
        },
        error:(err)=>{
          this.isLoder=false
          console.log(err);

          this.ApiError=err.error.message
        }
      })
    }
  }


}
