import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/api/covid.service';
import { NavController } from '@ionic/angular';
import { Page } from '../Page';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.page.html',
  styleUrls: ['./paises.page.scss'],
  providers:[
    CovidService
  ]
})
export class PaisesPage extends Page implements OnInit {
  public paises = new Array<object>();
  public recuperados:Number = 0;
  public casos:Number = 0;
  public mortes:Number = 0;

  constructor(
    private covid:CovidService,
    private nav:NavController
  ) { 
    super();
  }

  ngOnInit() {
    this.carregar();
  }

  carregar(){
    this.covid.paises()
    .then(retorno => {
      this.paises = retorno.data;
      this.paises.forEach((pais:any) => {
        this.recuperados += pais.recovered; 
        this.casos += pais.cases;
        this.mortes += pais.deaths;
      });
    });
  }

  detalhes(pais:string){
    this.nav.navigateForward([`/pais/${pais}`]);
  }


}
