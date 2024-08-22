import { Component, OnInit } from '@angular/core';

interface Profile {
  name: string;
  nickname: string;
  username: string;
  photo: string;
  role: string;
}


@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {

  profiles: Profile[] = [];
  currentLine: string = 'masc';

  mascPlayers : Profile[] = [
    { name: 'Gabriel Toledo', nickname: '"Fallen"', username: '@fallen', photo: 'assets/fallen.webp', role: 'AWPer | IGL' },
    { name: 'Marcelo Cespedes', nickname: '"chelo"', username: '@cheloking', photo: 'assets/chelo.webp', role: 'Entry Fragger' },
    { name: 'Yuri Santos', nickname: '"yuurih"', username: '@yuurih', photo: 'assets/yuurih.webp', role: 'Rifler' },
    { name: 'Kaike Cerato', nickname: '"KSCERATO"', username: '@kscerato', photo: 'assets/kscerato.webp', role: 'Rifler' },
    { name: 'Felipe Medeiros', nickname: '"skullz"', username: '@skullzcs', photo: 'assets/skullz.webp', role: 'Rifler' },
  ]

  mascCoachs : Profile[] = [
    { name: 'Sid Macedo', nickname: '"sidde"', username: '@siddecs', photo: '', role: 'Coach' },
    { name: 'Viacheslav Britvin', nickname: '"innersh1ne"', username: '@innersh1necsgo', photo: '', role: 'Assitant Coach' },
  ]

  femPlayers : Profile[] = [
    { name: 'Gabriela Freindorfer', nickname: '"gabs"', username: '@gabsfreindorfer', photo: 'assets/gabs.webp', role: 'Rifler' },
    { name: 'Izabella Bieberbach', nickname: '"izaa"', username: '@izaa_galle', photo: 'assets/izaa.webp', role: 'Rifler | IGL' },
    { name: 'Karina Takahashi', nickname: '"kaahSENSEI"', username: '@kaahtak', photo: 'assets/kaahSENSEI.webp', role: 'AWPer' },
    { name: 'Bruna Marvila', nickname: '"bizinha"', username: '@bizinhafps', photo: 'assets/bizinha.webp', role: 'Rifler' },
    { name: 'Lucia Dubra', nickname: '"lulitenz"', username: '@ludubra', photo: 'assets/lulitenz.webp', role: 'Entry Fragger' },
  ]

  femCoachs : Profile[] = [
    { name: 'Jhonatan Moura', nickname: '"jnt"', username: '@fpsjnt', photo: '', role: 'Coach' },
  ]

  acadPlayers : Profile[] = [
    { name: 'Gustavo Ribeiro', nickname: '"GYZER"', username: '@gugyzer', photo: 'assets/GYZER.webp', role: 'Rifler | IGL' },
    { name: 'Leonardo Melo', nickname: '"mello"', username: '@mellocs_', photo: 'assets/mello.webp', role: 'AWPer' },
    { name: 'Max Borges', nickname: '"jotag3"', username: '@maxinfive', photo: 'assets/Jotag3.webp', role: 'Rifler' },
    { name: 'João Gabriel', nickname: '"max"', username: '@j0t4g3', photo: 'assets/max.webp', role: 'Rifler' },
    { name: 'Luiz de Souza', nickname: '"souz4h"', username: '@souz4h_', photo: 'assets/souz4h.webp', role: 'Rifler' },
  ]

  acadCoachs : Profile[] = [
  { name: 'Leonardo Ferreira', nickname: '"msr"', username: '@leonardomsrfps', photo: '', role: 'Coach' },
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
