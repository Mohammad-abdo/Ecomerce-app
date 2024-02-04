import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})

export class MainCardComponent {
  url=environment.BaseApiURL
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
  getStars(rate: any): any[] {
    // Assuming rate is a number between 1 and 5
    return Array.from({ length: rate }, (_, index) => index + 1);
  }
  @Input() name:string=''
  @Input() images:string[]=[]

  @Input() price:number=0

  @Input() address:string=''

  @Input() _id:number=0
  @Input() rate?:number=0

}
