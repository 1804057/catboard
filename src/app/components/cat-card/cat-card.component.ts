import { Component } from '@angular/core';
import { CatsDataService } from 'src/app/services/cats-data.service';
import { CatDataService } from 'src/app/services/cat-data.service';
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
    catData:CatDataService
    ){
    catsData.getAll().subscribe((data)=>{
      this.catS=data;

      this.catS.forEach((cat:any) => {
        catData.getCat(cat.id).subscribe((newData)=>{
          this.catTraverse = newData;
          this.cats.push({
            id: cat.id,
            url: cat.url,
            weight: cat.weight,
            height: cat.height,
            name: this.catTraverse['breeds'][0]['name'],
            cfa_url : this.catTraverse['breeds'][0]['cfa_url'],
            vetstreet_url: this.catTraverse['breeds'][0]['cfa_url'],
            temperament: this.catTraverse['breeds'][0]['vetstreet_url'],
            origin: this.catTraverse['breeds'][0]['temperament'],
            country_code: this.catTraverse['breeds'][0]['country_code'],
            description: this.catTraverse['breeds'][0]['description'],
            life_span: this.catTraverse['breeds'][0]['life_span'],
          });
          console.log(this.cats[this.cats.length-1])
        })
      });

      this.cats.forEach((cat)=>{
        console.log("cat");
      })
    })

    

    
  };
  
  


}
