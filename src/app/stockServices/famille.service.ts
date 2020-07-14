import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Famille } from '../modelsInt/famille';


const httpOptions = { 
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

 

@Injectable({
    providedIn:'root'
})
export class FamilleService {
     UrlGL1=" http://localhost:8080/api/v1/familles";
     UrlGL2=" http://localhost:8080/api/v1/famillefamille/{id}";
    
     
    constructor(private http : HttpClient){}

    getFamilleAll():Observable<Famille[]>{
        return this.http.get<Famille[]>(this.UrlGL1);
      }

     
}