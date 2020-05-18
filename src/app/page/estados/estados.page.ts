import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/api/covid.service';
import { NavController, LoadingController } from '@ionic/angular';
import { Page } from '../Page';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.page.html',
  styleUrls: ['./estados.page.scss'],
  providers: [
    CovidService
  ]
})
export class EstadosPage extends Page implements OnInit {
  public pais:object;
  public estados = new Array<object>();
  public casos:Number = 0;
  public suspeito:Number = 0;
  public morte:Number = 0;

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
    this.covid.init()
    .then(retorno => {
      this.estados = retorno.data;
      this.estados.forEach((estado:any) => {
        this.casos += estado.cases; 
        this.suspeito += estado.suspects;
        this.morte += estado.deaths;
      });
    });
  }

  detalhes(estado:string){
    this.nav.navigateForward([`/estado/${estado}`]);
  }

  formatar(data:string):string{
    let date = new Date(data).toLocaleDateString();
    return date;
  }

}
