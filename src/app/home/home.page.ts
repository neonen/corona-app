import { Component } from '@angular/core';
import { CovidService } from '../api/covid.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[
    CovidService
  ]
})
export class HomePage {

  constructor(
    apiCovid:CovidService
  ) {
    apiCovid.init()
    .then(data => console.log(data));

    apiCovid.estado("sp")
    .then(data => console.log(data));

    apiCovid.listaPorData("20200430")
    .then(data => console.log(data));

    apiCovid.pais("canada")
    .then(data => console.log(data));

    apiCovid.paises()
    .then(data => console.log(data));

    apiCovid.status();
  }

}
