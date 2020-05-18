import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidService } from 'src/app/api/covid.service';
import { Page } from '../Page';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.page.html',
  styleUrls: ['./estado.page.scss'],
  providers:[
    CovidService
  ]
})
export class EstadoPage extends Page implements OnInit {

  public estado:object;

  constructor(
    private navPar:ActivatedRoute,
    private covid:CovidService,
    public loadingController: LoadingController
  ) {
    super(loadingController);
   }

  ngOnInit() {
    let estado = this.navPar.snapshot.paramMap.get('estado');
    this.carregar(estado);
  }

  private carregar(estado:string){
    super.presentLoading();
    this.covid.estado(estado)
    .then(data => this.estado = data);
  }

}
