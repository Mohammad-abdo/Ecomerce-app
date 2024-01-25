import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { House } from './../../Models/house';
import { GetProductsService } from 'src/app/Services/get-products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-housedetails',
  templateUrl: './housedetails.component.html',
  styleUrls: ['./housedetails.component.scss']
})
export class HousedetailsComponent implements OnInit {
  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true,
    navText: [
      '<button class="btn btn-primary custom-prev-button"><i class="fas fa-chevron-left"></i> </button>',
      '<button class="btn btn-primary custom-next-button"> <i class="fas fa-chevron-right"></i></button>'
    ]  };
  myHouse :House= {
    _id: "",
    name: "",
    address: "",
    region: "",
    price: 0,
    currencySymbol: "",
    numberOfRooms: 0,
    numberOfBedrooms: 0,
    guestNumber: 0,
    rate: 0,
    description: "",
    reviews: "",
    images: [],
    category: "",
    userId: "",
    lat: 0,
    lng: 0,
    updatedAt: new Date(),

    }
  ;
  PRID: string = "";
  url=environment.BaseApiURL
owlCar: any;
  constructor(private _ActivatedRoute: ActivatedRoute, private _GetProductsService: GetProductsService) {}

  ngOnInit(): void {
    this.PRID = this._ActivatedRoute.snapshot.paramMap.get("id") ?? "";;
    console.log(this.PRID);

    this._GetProductsService.getProduct(this.PRID).subscribe({
      next: (res) => {
        this.myHouse = res;
        console.log('product =>', this.myHouse);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
setTimeout(()=>{    console.log( this.myHouse);},3000)
  }
}
