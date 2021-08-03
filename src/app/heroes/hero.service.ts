import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/dist/types';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    let heroes = of(HEROES);
    return heroes;
  }
}
