import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { category } from 'src/app/Models/category';
import { AuthService } from 'src/app/Services/auth.service';
import { CategoreService } from 'src/app/Services/categore.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLogin: boolean = false;
  categories:category[]=[]

  constructor(private _AuthService: AuthService ,private _CategoreService:CategoreService) {
    _AuthService.userData.subscribe({
      next: () => {
        _AuthService.userData.getValue() !== null
          ? (this.isLogin = true)
          : (this.isLogin = false);
      },
    });
  }
  logOut() {
    this._AuthService.logOut();
  }

  ngOnInit():void{
    this.showCategory(this.currentIndex);



  setTimeout(()=>{
    this._CategoreService.getAllCategories().subscribe({
      next:(res:any)=>{
        this.categories=res
      console.log("respose ",this.categories);

      },
      error:(err:any)=>{
        console.log(err);

      }
      })


  },2000)
  }
  currentIndex = 0;

  // carosule
  customOptions:  OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  showCategory(index: number) {
    this.currentIndex = index;
  }

  prev() {
    this.currentIndex = Math.max(0, this.currentIndex - 10);
  }

  next() {
    this.currentIndex = Math.min(this.categories.length - 10, this.currentIndex + 10);
  }

  pageReload(){
    window.location.reload()
  }
}

