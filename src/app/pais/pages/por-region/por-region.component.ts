import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [

    `
    button{
      
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  //regiones      : string[] = ['EU', 'EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActive  : string = '';
  paises        : Country[] = [];
  hayError      : boolean = false;

  constructor( private paisService : PaisService) { }

  //GET TIPO DE NOMBRE DE REGION PARA CLASS DE CSS (ACTIVE O NO)   
  getClaseCss( region : string ){
    return (region === this.regionActive )
                  ? 'btn btn-primary' 
                  : 'btn btn-outline-primary';
  }

  activarRegion( region : string ){

    if ( region === this.regionActive ) return;
    this.regionActive = region;
    this.paises = [];
   // console.log(region);
   
    //TODO: HACER LLADO AL SERVICIO

    this.paisService.buscarRegion( region )
    .subscribe( paises => this.paises = paises)
  }



}
