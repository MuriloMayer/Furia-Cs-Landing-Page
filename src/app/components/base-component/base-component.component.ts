import { Component, Injectable, OnInit } from '@angular/core';

interface game {
  team1 : string;
  team2 : string;
  date: Date;
  event: string;
  team1Logo?: string;
  team2Logo?: string;
}

@Injectable({
  providedIn: 'root',
})

export class BaseComponentComponent implements OnInit {

  mascGames: game[] = [
    {team1: 'FURIA', team2: '9Pandas', date: new Date(2024, 8, 24, 16, 30, 0), event: 'BetBoom Dacha', team1Logo: 'assets/logoFuria-400x400.png', team2Logo: 'assets/9pandas.png'},
    {team1: 'FURIA', team2: 'A Definir', date: new Date(2024, 9, 3), event: 'ESL Pro League'},
    {team1: 'FURIA', team2: 'A Definir', date: new Date(2024, 10, 7), event: 'IEM Rio'}
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
