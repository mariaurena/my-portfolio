import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  name:string = 'María Ureña Legaza';
  urlImg:string = 'https://i.pinimg.com/564x/d6/ab/42/d6ab42ad116ec40718e91edcf56a21e3.jpg';
  photo:string = `url('${this.urlImg}')`;
}
