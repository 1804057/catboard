import { Component } from '@angular/core';
import {CatDataService} from './services/cat-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leaderboard';
  cats:any;
  constructor(private catData:CatDataService){
    catData.cats().subscribe((data)=>{
      this.cats=data;
      console.warn(this.cats);
    })
  };
}
