import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CatsDataService {

  url = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME";
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(this.url);
  }
}
