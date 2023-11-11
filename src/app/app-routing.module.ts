import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatCardComponent } from './components/cat-card/cat-card.component';
import { CatPageComponent } from './components/cat-page/cat-page.component';

const routes: Routes = [
  {path:'', component: CatCardComponent},
  {path:'details/:id',component:CatPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
