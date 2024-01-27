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

  categories: category[] = [];
  isLogin: boolean = false;

  constructor(
    private _AuthService: AuthService,
    private _CategoreService: CategoreService
  ) {
    _AuthService.userData.subscribe({
      next: () => {
        _AuthService.userData.getValue() !== null
          ? (this.isLogin = true)
          : (this.isLogin = false);
      },
    });
  }

  ngOnInit(): void {
    this.showCategory(this.currentIndex);

    setTimeout(() => {
      this._CategoreService.getAllCategories().subscribe({
        next: (res: any) => {
          this.categories = res;
          console.log('respose ', this.categories);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }, 2000);
  }
  currentIndex = 0;

  // carosule
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 4,
      },
      400: {
        items: 4,
      },
      740: {
        items: 6,
      },
      940: {
        items: 10,
      },
    },
    nav: false,
  };
  showCategory(index: number) {
    this.currentIndex = index;
  }

  prev() {
    this.currentIndex = Math.max(0, this.currentIndex - 10);
  }

  next() {
    this.currentIndex = Math.min(
      this.categories.length - 10,
      this.currentIndex + 10
    );
  }

  pageReload() {
    window.location.reload();
  }
}
