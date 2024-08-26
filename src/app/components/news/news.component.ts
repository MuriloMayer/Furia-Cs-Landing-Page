import { BaseService, news } from 'src/app/services/base.service';
import { Component, OnInit, AfterViewInit  } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewInit {

  news : news[] = [];

  constructor(private BaseService : BaseService ) { }

  ngOnInit(): void {
    this.news = this.BaseService.getNews();
    console.log(this.news)
  }

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
  }

}
