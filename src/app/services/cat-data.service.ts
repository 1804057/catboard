import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; '@anguler/common/http';
@Injectable({
  providedIn: 'root'
})
export class CatDataService {
  
  url = "https://api.thecatapi.com/v1/images/";
  cat!:any;
  constructor(private http:HttpClient) {}
  getCat(id: string){
    return this.http.get(this.url+id);
  }
}
