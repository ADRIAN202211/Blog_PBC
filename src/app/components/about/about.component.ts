import { Component } from '@angular/core';
import { HeaderService, HeaderData } from '../../services/header.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public uiData: HeaderData = {
    title: 'INFORMACIÓN',
    subtitle: 'Estos somos nosotros!',
    thumbnail: 'https://media.vogue.es/photos/5ff05e472361f90ef2d5d967/4:3/w_2160,h_1620,c_limit/HP_TOTORO_Registration_2880x1620.jpg'
  }

  constructor(private headerService: HeaderService) {
    this.headerService.uiData.set(this.uiData); 
  }
}
