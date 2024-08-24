import { Component, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerVisible : boolean = true;
  lastScroll = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.scrollY > this.lastScroll) {
      this.headerVisible = false;
    } else {
      this.headerVisible = true;
    }
    this.lastScroll = window.scrollY;
  }

}
