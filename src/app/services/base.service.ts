import { Injectable } from '@angular/core';

export interface game {
  team1: string;
  team2: string;
  date: Date;
  event: string;
  team1Logo?: string;
  team2Logo?: string;
}
export interface news {
  title: string;
  subTitle : string;
  date: Date;
  img: string;
}

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  news: news[] = [
    {
      title:
        'FURIA fecha parceria com a Fallen Gear e anuncia entrada no setor de periféricos',
      date: new Date(2024, 7, 21),
      subTitle:
        'Nesta quarta-feira (21), a FURIA no setor de periféricos. A organização fechou parceria com a Fallen Gear, marca brasileira de equipamentos gamer, para para produzir seus próprios produtos.',
      img: 'assets/images/news/furia-fallengear.webp',   },
      {
        title:
          'FURIA vira sobre Aurora para se manter viva na BetBoom Dacha Belgrade S2',
        date: new Date(2024, 7, 26),
        subTitle:
          'Brasileiros aguardam por 9 Pandas ou Eternal Fire para duelarem por vaga nos playoffs do torneio',
        img: 'assets/images/news/fallen-wins.jpg'  },
  ];

  mascGames: game[] = [
    {
      team1: 'FURIA',
      team2: '9Pandas',
      date: new Date(2024, 7, 27, 7, 30, 0),
      event: 'BetBoom Dacha',
      team1Logo: 'assets/images/logoFuria-400x400.png',
      team2Logo: 'assets/images/9pandas.png',
    },
    {
      team1: 'FURIA',
      team2: 'A Definir',
      date: new Date(2024, 8, 3),
      event: 'ESL Pro League',
      team1Logo: 'assets/images/logoFuria-400x400.png',
      team2Logo: 'assets/images/questionmark.png',
    },
    {
      team1: 'FURIA',
      team2: 'A Definir',
      date: new Date(2024, 9, 7),
      event: 'IEM Rio',
      team1Logo: 'assets/images/logoFuria-400x400.png',
      team2Logo: 'assets/images/questionmark.png',
    },
  ];
  femGames: game[] = [
    {
      team1: 'FURIA',
      team2: 'thekillaz fe',
      date: new Date(2024, 7, 28, 17, 30),
      event: 'Upcoming',
      team1Logo: 'assets/images/logoFuria-400x400.png',
      team2Logo: 'assets/images/questionmark.png',
    },
    {
      team1: 'FURIA',
      team2: 'A Definir',
      date: new Date(2024, 8, 1),
      event: 'Upcoming',
      team1Logo: 'assets/images/logoFuria-400x400.png',
      team2Logo: 'assets/images/questionmark.png',
    },
  ];
  acadGames: game[] = [
    {
      team1: 'FURIA',
      team2: 'A Definir',
      date: new Date(2024, 8, 1),
      event: 'Upcoming',
      team1Logo: 'assets/images/logoFuria-400x400.png',
      team2Logo: 'assets/images/questionmark.png',
    },
    {
      team1: 'FURIA',
      team2: 'A Definir',
      date: new Date(2024, 8, 1),
      event: 'Upcoming',
      team1Logo: 'assets/images/logoFuria-400x400.png',
      team2Logo: 'assets/images/questionmark.png',
    },
  ];

  constructor() {}
  getGames(line: string): game[] {
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

  getNews(): news[] {
    return this.news.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}
