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
    thumbnail: 'assets/HP_TOTORO_Registration_2880x1620.webp'
  }

  constructor(private headerService: HeaderService) {
    this.headerService.uiData.set(this.uiData); 
  }
}
