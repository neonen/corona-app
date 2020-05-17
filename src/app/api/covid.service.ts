import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private url:string = "https://covid19-brazil-api.now.sh/api/report/v1";

  constructor() { }

  init(){
    return fetch(this.url,{method:"get"})
    .then((response)=>{
      return response.json()
      .then((data) => 
        data
      );
    })
    .catch(function(err) { console.error(err); });
  }

  estado(estado:string){
    let url = `${this.url}/brazil/uf/${estado}`;
    return fetch(url,{method:"get"})
    .then((response)=>{
      return response.json()
      .then((data) => 
        data
      );
    })
    .catch(function(err) { console.error(err); });
  }

  listaPorData(data:string){
    let url = `${this.url}/brazil/${data}`;
    return fetch(url,{method:"get"})
    .then((response)=>{
      return response.json()
      .then((data) => 
        data
      );
    })
    .catch(function(err) { console.error(err); });
  }

  pais(pais:string){
    let url = `${this.url}/${pais}`;
    return fetch(url,{method:"get"})
    .then((response)=>{
      return response.json()
      .then((data) => 
        data
      );
    })
    .catch(function(err) { console.error(err); });
  }

  paises(){
    let url = `${this.url}/countries`;
    return fetch(url,{method:"get"})
    .then((response)=>{
      return response.json()
      .then((data) => 
        data
      );
    })
    .catch(function(err) { console.error(err); });
  }

  status(){
    let url = "https://covid19-brazil-api.now.sh/api/status/v1"
    fetch(url,{method:"get"})
    .then((response)=>{
      response.json()
      .then((data) => 
        console.log(data)
      );
    })
    .catch(function(err) { console.error(err); });
  }
}
