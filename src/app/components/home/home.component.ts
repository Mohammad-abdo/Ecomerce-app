import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/Services/get-products.service';
import { House } from './../../Models/house';
import { environment } from 'src/environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: false,
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
    navText: ['<button class="owl-prev"><i class="fa fa-angle-left"></i> </button>', '<button class="owl-next"> <i class="fa fa-angle-right"></i></button>']
  };


  Houses:House[]=[]
  url=environment.BaseApiURL
  isLoder: boolean = false;

constructor(private _GetProductsService:GetProductsService){


}

ngOnInit():void{
  this.isLoder= true;
setTimeout(()=>{
  this._GetProductsService.getAllProducts().subscribe({
    next:(res)=>{
      this.Houses=res
      this.isLoder= false;
      console.log(  this.Houses);

    },
    error:(err)=>{
      this.isLoder= true;
    }
  })
},2000)
}
getStars(rate: any): any[] {
  // Assuming rate is a number between 1 and 5
  return Array.from({ length: rate }, (_, index) => index + 1);
}
}
