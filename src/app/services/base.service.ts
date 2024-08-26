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
  content: string;
  tweetHTML: string;
}

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  news: news[] = [
    {
      title:
        '<h2><span class="furia" style="color: #bc9b40;">FURIA</span> fecha parceria com a Fallen Gear e anuncia entrada no setor de periféricos</h2>',
      content: '<p>O Mouse Wireless Pantera <span class="furia" style="color: #bc9b40;">FURIA</span> e os Mousepads <span class="furia">FURIA</span> são os primeiros produtos do projeto de licenciamento e desenvolvimento em conjunto com a Fallen Gear, empresa fundada por Gabriel "FalleN" Toledo, capitão da equipe de Counter-Strike da <span class="furia">FURIA</span>. De acordo com a organização, os equipamentos foram projetados para "atender às necessidades dos gamers mais exigentes" e foram desenvolvidos com "a mais alta tecnologia e precisão, garantindo uma performance superior em todas as partidas". Os novos produtos estão disponíveis exclusivamente na Fallen Store, com preços que variam entre R$179 e R$599.</p>',
      date: new Date(2024, 7, 21),
      subTitle:
        '<p>Nesta quarta-feira (21), a <span class="furia">FURIA</span> anunciou sua entrada no setor de periféricos. A organização fechou parceria com a Fallen Gear, marca brasileira de equipamentos gamer, para para produzir seus próprios produtos.</p>',
      tweetHTML:
        '<blockquote class="twitter-tweet" data-theme="dark" ><p lang="pt" dir="ltr">Cansou de pinar e passar vergonha no lobby?<br>O mouse ta prejudicando a gameplay?<br><br>Seus problemas acabaram!<br>Chegou o Kit mouse + mousepad FURIA &amp; <a href="https://twitter.com/fallengearbr?ref_src=twsrc%5Etfw">@fallengearbr</a>! 🔥<br><br>Garanta o seu agora na <a href="https://twitter.com/fallenstore?ref_src=twsrc%5Etfw">@fallenstore</a>! <a href="https://t.co/Lw0zaOpZnj">pic.twitter.com/Lw0zaOpZnj</a></p>&mdash; FURIA (@FURIA) <a href="https://twitter.com/FURIA/status/1826348744792834492?ref_src=twsrc%5Etfw">August 21, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    },
  ];

  mascGames: game[] = [
    {
      team1: 'FURIA',
      team2: '9Pandas',
      date: new Date(2024, 7, 25, 16, 30, 0),
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
    return this.news;
  }
}
