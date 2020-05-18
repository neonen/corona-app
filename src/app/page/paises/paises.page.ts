import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/api/covid.service';
import { NavController, LoadingController } from '@ionic/angular';
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
  private dados = new Array<object>();
  public recuperados:Number = 0;
  public casos:Number = 0;
  public mortes:Number = 0;

  constructor(
    private covid:CovidService,
    private nav:NavController,
    public loadingController: LoadingController

  ) { 
    super(loadingController);
  }

  ngOnInit() {
    this.carregar();
  }

  carregar(){
    super.presentLoading();
    this.covid.paises()
    .then(retorno => {
      this.dados = this.paises = retorno.data;
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

  buscar(event){
    let valor:string = event.detail.value;
    let resultado = new Array();
    this.dados.forEach((pais:any) => {
      if(pais.country.toLowerCase().includes(valor.toLowerCase())){
        resultado.push(pais);
      }
    }) 
    this.paises = resultado;
  }

}
