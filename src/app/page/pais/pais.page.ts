import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidService } from 'src/app/api/covid.service';
import { Page } from '../Page';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
  providers:[
    CovidService
  ]
})
export class PaisPage extends Page implements OnInit {

  public pais:object;

  constructor(
    private navPar:ActivatedRoute,
    private covid:CovidService,
    public loadingController: LoadingController
  ) { 
    super(loadingController);
  }

  ngOnInit() {
    let pais = this.navPar.snapshot.paramMap.get('pais');
    this.carregar(pais.toLowerCase());
  }

  private carregar(pais:string){
    super.presentLoading();
    this.covid.pais(pais)
    .then(data => this.pais = data.data);
  }

}
