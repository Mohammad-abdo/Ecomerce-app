import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page-card',
  templateUrl: './landing-page-card.component.html',
  styleUrls: ['./landing-page-card.component.scss']
})
export class LandingPageCardComponent {
  constructor(){}

  @Input() title:string=''
  @Input() image:string=''
  @Input() price:number=0
  @Input() _id?:string=''

  url=environment.BaseApiURL
  displayStyle :string= 'none';
  openPopup() {
    this.displayStyle = 'block';
    document.body.classList.add('body-no-scroll');
  }
  closePopup() {
    this.displayStyle = 'none';
    document.body.classList.remove('body-no-scroll');
  }
}
