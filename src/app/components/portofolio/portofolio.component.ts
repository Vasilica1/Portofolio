import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/shared/about.service';
import { Portofolio } from 'src/app/shared/portofolio';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.scss']
})
export class PortofolioComponent implements OnInit{
  portofolioImg: Portofolio[];

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    const images = this.aboutService.getPortofolioImges();
    this.portofolioImg = images;
  }

}
