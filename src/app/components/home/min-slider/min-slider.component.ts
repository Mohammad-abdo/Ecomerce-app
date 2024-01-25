import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { House } from 'src/app/Models/house';
import { CategoreService } from 'src/app/Services/categore.service';
import { GetProductsService } from 'src/app/Services/get-products.service';
import { environment } from 'src/environments/environment';
import { category } from './../../../Models/category';


@Component({
  selector: 'app-min-slider',
  templateUrl: './min-slider.component.html',
  styleUrls: ['./min-slider.component.scss']
})
export class MinSliderComponent {

categores:category[]=[]

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
      items: 1
    }
  },
  nav: true,
  navText: ['<button class="owl-prev"><i class="fa fa-angle-left"></i> </button>', '<button class="owl-next"> <i class="fa fa-angle-right"></i></button>']
};

  Houses:House[]=[]

  url=environment.BaseApiURL
  isLoder: boolean = false;
  CategoreService: any;

constructor(private _GetProductsService:GetProductsService,private _CategoreService:CategoreService){


}

ngOnInit():void{
  this.isLoder= true;

  this._CategoreService.getAllCategories().subscribe({
    next:(res:any)=>{
      this.categores=res
    console.log("respose ",this.categores);

    },
    error:(err:any)=>{
      console.log(err);

    }
    })

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



customOptions2: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  autoplay:true,
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
}


