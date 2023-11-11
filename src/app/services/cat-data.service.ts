import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CatDataService {

  url = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME";
  constructor(private http:HttpClient) { }
  cats(){
    return this.http.get(this.url);
  }
}
