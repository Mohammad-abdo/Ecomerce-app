import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { House } from './../../Models/house';
import { GetProductsService } from 'src/app/Services/get-products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';
import { CategoreService } from 'src/app/Services/categore.service';

@Component({
  selector: 'app-housedetails',
  templateUrl: './housedetails.component.html',
  styleUrls: ['./housedetails.component.scss'],
})
export class HousedetailsComponent implements OnInit {
  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
    navText: [
      '<button class="owl-prev"><i class="fa fa-angle-left"></i> </button>', '<button class="owl-next"> <i class="fa fa-angle-right"></i></button>'
    ],
  };

  myHouse: House = {
    _id: '',
    name: '',
    address: '',
    region: '',
    price: 0,
    currencySymbol: '',
    numberOfRooms: 0,
    numberOfBedrooms: 0,
    guestNumber: 0,
    rate: 0,
    description: '',
    reviews: '',
    images: [],
    category: '',
    userId: '',
    lat: 0,
    lng: 0,
    updatedAt: new Date(),
  };
  RelatedHouse: House[] = [];
  PRID: string = '';
  CatName: string = '';
  imgIndex: number = 0;
  url = environment.BaseApiURL;
  owlCar: any;
  ImgBorderStyle = {
    border: '1px solid red',
    obcity: 0.8,
    trnsform: 'trnslatY(1)',
  };
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _GetProductsService: GetProductsService,
    private _CategoreService: CategoreService
  ) {}
  displayStyle :string= 'none';
  openPopup() {
    this.displayStyle = 'block';
    document.body.classList.add('body-no-scroll');
  }

  closePopup() {
    this.displayStyle = 'none';
    document.body.classList.remove('body-no-scroll');
  }
  ngOnInit(): void {
    this.PRID = this._ActivatedRoute.snapshot.paramMap.get('id') ?? '';
    console.log(this.PRID);

    this._GetProductsService.getProduct(this.PRID).subscribe({
      next: (res) => {
        this.myHouse = res;
        console.log('product =>', this.myHouse);
        console.log(res);
        // get All related huses
        this._GetProductsService
          .getHouseByCategoryId(this.myHouse.category)
          .subscribe({
            next: (res) => {
              this.RelatedHouse = res;
              console.log('related houses', res);
            },
          });
        // get categorey name
        this._CategoreService.getCategory(this.myHouse.category).subscribe({
          next: (res) => {
            console.log('category', res.name);
            this.CatName = res.name;
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
    setTimeout(() => {
      console.log(this.myHouse);
    }, 3000);
  }

  navigateImages(direction: 'prev' | 'next'): void {
    if (direction === 'prev') {
      this.imgIndex =
        (this.imgIndex - 1 + this.myHouse.images.length) %
        this.myHouse.images.length;
    } else {
      this.imgIndex = (this.imgIndex + 1) % this.myHouse.images.length;
    }
  }

  getImgIndex(index: any): void {
    this.imgIndex = index;
  }
  getStars(rate: any): any[] {
    // Assuming rate is a number between 1 and 5
    return Array.from({ length: rate }, (_, index) => index + 1);
  }
  openDetails() {
    window.location.reload();
  }
}
