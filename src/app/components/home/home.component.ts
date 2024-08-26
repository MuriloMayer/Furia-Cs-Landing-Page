import { Component, OnInit } from '@angular/core';
import { BaseService, game } from 'src/app/services/base.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games : game[] = [];
  nextGame : game;
  counter: string;

  constructor(private BaseService : BaseService) { }

  ngOnInit(): void {
    this.games = this.BaseService.getGames('masc');
    this.nextGame = this.getNextGame();

    if(this.nextGame) {
      this.updateCounter();
      setInterval(() => {
        this.updateCounter();
      } , 1000);
    }
  }


  getNextGame() : game {
    let now = new Date();
    let nextGame = this.games[0];
    for (let game of this.games) {
      if (game.date > now) {
        nextGame = game;
        break;
      }
    }
    return nextGame;
  }

  calcCounter(date : Date) : string {
    const now = new Date().getTime();
    const diff = date.getTime() - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days > 0 ? days + 'd ' : ''}${hours > 0 ? hours + 'h ' : ''}${minutes}m ${seconds}s`;
  }
  updateCounter(): void {
    if(this.nextGame) {
      const date = new Date(this.nextGame.date);
      this.counter = this.calcCounter(date);
    }
  }
}
