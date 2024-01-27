import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

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

}
