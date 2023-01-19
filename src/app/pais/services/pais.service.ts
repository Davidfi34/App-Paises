import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/';

  constructor( private http: HttpClient) { }

  //GET PARAMETROS SOLO DE DATOS NECESARIOS
  get httpParams(){
    return new HttpParams()
    .set('fields','name,capital,flags,population,cioc');
  }



  buscarPais( termino : string): Observable<Country[]> {

    const url = `${ this.apiUrl }/v3.1/name/${ termino }`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  
  buscarCapital( termino : string): Observable<Country[]> {

    const url = `${ this.apiUrl }/v3.1/capital/${ termino }`;

    return this.http.get<Country[]>(url, { params: this.httpParams } );
  }

  
  getDescription( id : string): Observable<Country> {

    const url = `${ this.apiUrl }/v3.1/alpha/${ id }`;

    return this.http.get<Country>(url);
  }



  buscarRegion( region: string ): Observable<Country[]>{
   
  //OTRO URL
   // const url = `${ this.apiUrl }/v2/regionalbloc/${ region }`;
    const url = `${ this.apiUrl }/v3.1/region/${ region }`;

    return this.http.get<Country[]>(url,{ params: this.httpParams });

  }

}
