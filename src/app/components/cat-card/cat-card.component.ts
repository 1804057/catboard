import { Component } from '@angular/core';
import { CatsDataService } from 'src/app/services/cats-data.service';
import { CatDataService } from 'src/app/services/cat-data.service';
import { Router } from '@angular/router';
import { Cat } from 'src/app/Models/Cat';
@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent {
  catS!: any;
  cats: Cat[]=[];
  catTraverse: any;
  constructor(private catsData:CatsDataService,
    private catData:CatDataService,
    private router: Router
    ){
    catsData.getAll().subscribe((data)=>{
      this.catS=data;

      this.catS.forEach((cat:any) => {
        catData.getCat(cat.id).subscribe((newData)=>{
          this.catTraverse = newData;
          this.cats.push({
            id: this.catTraverse['id'],
            url: this.catTraverse['url'],
            width: this.catTraverse['width'],
            height: this.catTraverse['height'],
            name: this.catTraverse['breeds'][0]['name'],
            cfa_url : this.catTraverse['breeds'][0]['cfa_url'],
            vetstreet_url: this.catTraverse['breeds'][0]['vetstreet_url'],
            temperament: this.catTraverse['breeds'][0]['temperament'].split(', '),
            origin: this.catTraverse['breeds'][0]['origin'],
            country_code: this.catTraverse['breeds'][0]['country_code'],
            description: this.catTraverse['breeds'][0]['description'],
            life_span: this.catTraverse['breeds'][0]['life_span'],
          });
        })
      });
    })
  };

  readMore(id: String){
    this.router.navigate(['details', id]);
    console.log(id);
  }
}
