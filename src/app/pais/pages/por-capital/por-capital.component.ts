import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {


  termino  : string = '';
  hayError : boolean = false;
  paises   : Country[] = [];
  capitalesSugeridos : Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService) { }

  buscar( termino: string){
    this.hayError = false;
    this.termino  = termino;
    this.mostrarSugerencias = false;

    this.paisService.buscarCapital( termino )
      .subscribe( paises => {
        this.paises = paises;
      }, (err) =>{
        this.hayError = true;
        this.paises = [];
      }
      )
    
  }

  sugerencias( termino : string ){
    this.hayError = false;
    //TODO: CREAR SUGERENCIAS

    this.hayError = false;
    this.termino =  termino;
    this.mostrarSugerencias = true;
    //TODO: CREAR SUGERENCIAS

    this.paisService.buscarCapital( termino )
      .subscribe( pais => this.capitalesSugeridos = pais.slice(0,5)
      ,(err) => this.capitalesSugeridos = []
      );
      

    

  }







}
