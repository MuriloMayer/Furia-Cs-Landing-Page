import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentCategory : string = 'home';
  headerVisible : boolean = true;
  lastScroll  = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.scrollY > this.lastScroll) {
      this.headerVisible = false;
    } else {
      this.headerVisible = true;
    }
    this.lastScroll = window.scrollY;
  }

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(Getelement: string): void {
    const element = document.querySelector(`#${Getelement}`);

    element?.scrollIntoView({ behavior: 'smooth' });
    this.currentCategory = Getelement;
  }
}
