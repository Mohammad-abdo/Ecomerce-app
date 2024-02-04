import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  partners=[
    {
      part:"",
      src:"",
      id:1
    }
  ]
  FooterLinks=[
    {
      h2:'Connect with us',
      li:["+966 92 00 31132",'Client area']
    },
    {
      h2:'About Dimofinf',
      li:["get to know us",'Dimofinf management','Demofinf clients','Payment methods','Dimofinf jobs','Explanations library','privacy policy','Service Agreement'],

    },
    {
      h2:'Shared hosting',
      li:["Linux hosting",'Windows hosting'],
      sec2:[
        {
          h2:'Vps servers',
          li:[' best servers',' hosting features']
        }
      ]
    }
    ,
    {
      h2:'Private servers',
      li:["The best servers",'Management levels','Why our servers?'],
      sec2:[
        {
          h2:'Content managing ',
          li:['Demofinf 5 managn']
        }
      ]
    }
    ,
    {
      h2:'Cloud servers',
      li:["Fastest servers",'Management levels','Features of the new generation'],
      sec2:[
        {
          h2:'Our services',
          li:['Ranges','Website design and programming','Back-up services']
        }
      ]
    },
  ]

}
