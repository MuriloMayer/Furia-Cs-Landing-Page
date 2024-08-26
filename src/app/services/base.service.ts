import { Injectable } from '@angular/core';

export interface game {
  team1: string;
  team2: string;
  date: Date;
  event: string;
  team1Logo?: string;
  team2Logo?: string;
}


@Injectable({
  providedIn: 'root'
})

export class BaseService {

  mascGames: game[] = [
    {team1: 'FURIA', team2: '9Pandas', date: new Date(2024, 7, 25, 16, 30, 0), event: 'BetBoom Dacha', team1Logo: 'assets/logoFuria-400x400.png', team2Logo: 'assets/9pandas.png'},
    {team1: 'FURIA', team2: 'A Definir', date: new Date(2024, 8, 3), event: 'ESL Pro League'},
    {team1: 'FURIA', team2: 'A Definir', date: new Date(2024, 9, 7), event: 'IEM Rio'}
  ]
  femGames: game[] = [
    {team1: 'FURIA', team2: 'A Definir', date: new Date(2024), event: 'Upcoming', team1Logo: 'assets/logoFuria-400x400.png', team2Logo: 'assets/questionmark.png'},
    {team1: 'FURIA', team2: 'A Definir', date: new Date(2024), event: 'Upcoming', team1Logo: 'assets/logoFuria-400x400.png', team2Logo: 'assets/questionmark.png'},
  ]
  acadGames: game[] = [
    {team1: 'FURIA', team2: 'A Definir', date: new Date(2024), event: 'Upcoming', team1Logo: 'assets/logoFuria-400x400.png', team2Logo: 'assets/questionmark.png'},
    {team1: 'FURIA', team2: 'A Definir', date: new Date(2024), event: 'Upcoming', team1Logo: 'assets/logoFuria-400x400.png', team2Logo: 'assets/questionmark.png'},
  ]


  constructor() {

  }
  getGames(line : string) : game[] {
    if (line == 'masc') {
      return this.mascGames;
    } else if (line == 'fem') {
      return this.femGames;
    } else if (line == 'acad') {
      return this.acadGames;
    } else {
      window.alert('Internal error');
      return [];
    }
  }
}
