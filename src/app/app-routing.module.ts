import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './character-list/character-list.component';
import { CharacterInfoComponent } from './character-info/character-info.component';

const routes: Routes = [
  { path: 'characters-list', component: CharactersListComponent },
  { path: 'character-info', component: CharacterInfoComponent },
  {path: '',  pathMatch: 'full',  redirectTo: 'characters-list' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
