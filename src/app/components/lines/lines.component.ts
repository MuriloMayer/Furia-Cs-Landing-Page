import { Component, OnInit } from '@angular/core';

interface Profile {
  firstName: string;
  lastName: string;
  nickname: string;
  username: string;
  photo?: string;
  role: string;
}


@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {

  players: Profile[] = [];
  coachs: Profile[] = [];
  currentLine: string = 'masc';

  masc : {players : Profile[], coachs : Profile[] } = {
    players : [
    { firstName: 'Gabriel', lastName: 'Toledo',nickname : '"fallen"' , username: 'fallen', photo: 'assets/images/line-masc/fallen.webp', role: 'AWPer | IGL' },
    { firstName: 'Marcelo', lastName: 'Cespedes', nickname: '"chelo"', username: 'chelok1ng', photo: 'assets/images/line-masc/chello.webp', role: 'Entry Fragger' },
    { firstName: 'Yuri', lastName : 'Santos', nickname: '"yuurih"', username: 'yuurihfps', photo: 'assets/images/line-masc/yuurih.webp', role: 'Rifler' },
    { firstName: 'Kaike', lastName: 'Cerato', nickname: '"KSCERATO"', username: 'kscerato', photo: 'assets/images/line-masc/kscerato.webp', role: 'Rifler' },
    { firstName: 'Felipe',lastName: 'Medeiros', nickname: '"skullz"', username: 'skullzcs', photo: 'assets/images/line-masc/skullz.webp', role: 'Rifler' },
    ],
    coachs : [
      { firstName: 'Sid', lastName: 'Macedo', nickname: '"sidde"', username: 'siddecs', role: 'Coach' },
      { firstName: 'Viacheslav', lastName: 'Britvin', nickname: '"innersh1ne"', username: 'innersh1necsgo', role: 'Assitant Coach' },
    ]
  }

  fem : {players : Profile[], coachs : Profile[] } = {
    players : [
    { firstName: 'Gabriela', lastName: 'Freindorfer', nickname: '"gabs"', username: 'gabsfreindorfer', photo: 'assets/images/line-fem/gabs.webp', role: 'Rifler' },
    { firstName: 'Izabella', lastName: 'Bieberbach', nickname: '"izaa"', username: 'izaa_galle', photo: 'assets/images/line-fem/izaa.webp', role: 'Rifler | IGL' },
    { firstName: 'Karina', lastName: 'Takahashi', nickname: '"kaahSENSEI"', username: 'kaahtak', photo: 'assets/images/line-fem/kaahSENSEI.webp', role: 'AWPer' },
    { firstName: 'Bruna', lastName: 'Marvila', nickname: '"bizinha"', username: 'bizinhafps', photo: 'assets/images/line-fem/bizinha.webp', role: 'Rifler' },
    { firstName: 'Lucia', lastName: 'Dubra', nickname: '"lulitenz"', username: 'ludubra', photo: 'assets/images/line-fem/lulitenz.webp', role: 'Entry Fragger' },
  ],
  coachs : [
    { firstName: 'Jhonatan', lastName: 'Moura', nickname: '"jnt"', username: 'fpsjnt', role: 'Coach' },
  ]
  }


  acad : {players : Profile[], coachs : Profile[] } = {
    players : [
    { firstName: 'Gustavo', lastName: 'Ribeiro', nickname: '"GYZER"', username: 'gugyzer', photo: 'assets/images/line-acad/GYZER.webp', role: 'Rifler | IGL' },
    { firstName: 'Leonardo', lastName: 'Melo', nickname: '"mello"', username: 'mellocs_', photo: 'assets/images/line-acad/mello.webp', role: 'AWPer' },
    { firstName: 'Max', lastName: 'Borges', nickname: '"jotag3"', username: 'maxinfive', photo: 'assets/images/line-acad/Jotag3.webp', role: 'Rifler' },
    { firstName: 'João', lastName: 'Gabriel', nickname: '"max"', username: 'j0t4g3', photo: 'assets/images/line-acad/max.webp', role: 'Rifler' },
    { firstName: 'Luiz', lastName: 'de Souza', nickname: '"souz4h"', username: 'souz4h_', photo: 'assets/images/line-acad/souz4h.webp', role: 'Rifler' },
  ],
  coachs : [
    { firstName: 'Leonardo', lastName: 'Ferreira', nickname: '"msr"', username: 'leonardomsrfps', role: 'Coach' },
  ]
  }


  constructor() {


  }

  ngOnInit(): void {
    this.changeLine('masc');
  }

  changeLine(line: string) {
    this.currentLine = line;
    this.players = this[line].players;
    this.coachs = this[line].coachs;
  }

}
