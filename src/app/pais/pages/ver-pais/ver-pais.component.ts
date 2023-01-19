import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  `
  .mr-1{
    margin-right: 5px;
  }


  .map-container{
  overflow:hidden;
  padding-bottom:56.25%;
  position:relative;
  height:0;
}
.map-container iframe{
  left:0;
  top:0;
  height:100%;
  width:100%;
  position:absolute;
}
  
  `
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country[];

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService   : PaisService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getDescription( id ) ),
        tap(console.log)
      )
      .subscribe( pais => this.pais = pais);
  }

}
