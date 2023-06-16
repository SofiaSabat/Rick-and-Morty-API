import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<IPersonage[]> {
    const requests = [];
    for (let i = 1; i <= 10; i++) {
      requests.push(this.http.get<any>(`https://rickandmortyapi.com/api/character?page=${i}`));
    }
    return forkJoin(requests).pipe(
      map(responses => {
        const characters = [];
        for (const response of responses) {
          characters.push(...response.results);
        }
        return characters;
      })
    );
  }
}

export interface IPersonage {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [
    string,
  ];
  url: string;
  created: string;
}
