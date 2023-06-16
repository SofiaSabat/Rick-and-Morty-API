import { Component,OnInit } from '@angular/core';
import { CharactersService, IPersonage } from '../characters.service';
// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})

export class CharacterInfoComponent {
  public allCharacters: IPersonage[] = [];
  public characterId!: number;
  public characterName!: string;
  public characterGender!: string;
  public characterStatus!: string;
  public characterSpecies!: string;
  public characterOrigin!: string;
  public characterImage!: string;
  public characterType!: string;
  constructor(private charactersService: CharactersService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.charactersService.getAllCharacters().subscribe(characters => {
      this.allCharacters = Object.values(characters);
      console.log(this.allCharacters);
    });
  
    this.route.queryParams.subscribe(params => {
      this.characterId = params['id'];
      this.characterName = params['name'];
      this.characterGender = params['gender'];
      this.characterStatus = params['status'];
      this.characterSpecies = params['species'];
      this.characterOrigin = params['origin'];
      this.characterImage = params['image'];
      this.characterType = params['type'];
      console.log(this.characterId);    
    });
  }
  

}

