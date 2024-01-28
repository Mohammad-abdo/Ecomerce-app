import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import * as ScrollReveal from 'scrollreveal';


@Component({
  selector: 'app-middlenav',
  templateUrl: './middlenav.component.html',
  styleUrls: ['./middlenav.component.scss']
})
export class MiddlenavComponent {
constructor(    private _AuthService: AuthService,){
  _AuthService.userData.subscribe({
    next: () => {
      _AuthService.userData.getValue() !== null
        ? (this.isLogin = true)
        : (this.isLogin = false);
    },
  });
}
isLogin: boolean = false;
logOut() {
  this._AuthService.logOut();
}
OnInit():void{
  ScrollReveal().reveal('.logo', {
    delay: 200,
    distance: '20px',
    origin: 'left',
    easing: 'ease-in-out',
    // Add more configuration options as needed
  });
}
}
