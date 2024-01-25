import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { House } from 'src/app/Models/house';
import { CategoreService } from 'src/app/Services/categore.service';
import { GetProductsService } from 'src/app/Services/get-products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-housectegory',
  templateUrl: './housectegory.component.html',
  styleUrls: ['./housectegory.component.scss']
})
export class HousectegoryComponent implements OnInit {

  customOptions:  OwlOptions = {
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

constructor(private _CategoreService:CategoreService,private _ActivatedRoute:ActivatedRoute ,private _GetProductsService:GetProductsService ){

}
CATID:string =""
ngOnInit(): void {
this.CATID=this._ActivatedRoute.snapshot.paramMap.get("id") ?? "";
console.log(this.CATID);
this.isLoder= true;

setTimeout(()=>{
  this._GetProductsService.getHouseByCategoryId(this.CATID).subscribe({
    next:(res)=>{
      console.log("response",res);
      this.Houses=res
      this.isLoder= false;
      console.log(  this.Houses);
    },
    error:(err)=>{
      console.log(err);

    }
  })
},2000)


}
getStars(rate: any): any[] {
  // Assuming rate is a number between 1 and 5
  return Array.from({ length: rate }, (_, index) => index + 1);
}
}
