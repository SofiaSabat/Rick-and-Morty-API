import { Component } from '@angular/core';
import { CharactersService, IPersonage } from '../characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharactersListComponent {

  public allCharacters: IPersonage[] = [];
  public p:number = 1;
  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getAllCharacters().subscribe(characters => {
      this.allCharacters = Object.values(characters);
    });
  }

}