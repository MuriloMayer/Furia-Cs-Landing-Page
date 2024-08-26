import { Component, OnInit } from '@angular/core';
import { BaseService, game } from 'src/app/services/base.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  mascGames: game[] = [];
  femGames: game[] = [];
  acadGames: game[] = [];
  lines: { name: string; games: any }[] = [];

  constructor(private BaseService: BaseService) {}

  ngOnInit(): void {
    this.loadGames();
    this.lines = [
      { name: 'Masculino', games: this.mascGames },
      { name: 'Feminino', games: this.femGames },
      { name: 'Academy', games: this.acadGames },
    ];
  }

  loadGames() {
    this.mascGames = this.BaseService.getGames('masc')
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(0, 2);
    this.femGames = this.BaseService.getGames('fem')
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(0, 2);
    this.acadGames = this.BaseService.getGames('acad')
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(0, 2);
  }
}
