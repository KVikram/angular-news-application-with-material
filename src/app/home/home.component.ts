import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mArticles: Array<any>;
  mSources: Array<any>;
  messages = [
    {
      id: 11214544,
      text: "Message 11214544"
    },
    {
      id: 11214545,
      text: "Message 11214545"
    },
    {
      id: 11214546,
      text: "Message 11214546"
    },
    {
      id: 11214547,
      text: "Message 11214547"
    }

  ];



  constructor(private newsapi: NewsApiService) {
    console.log('app component  called');
  }

  ngOnInit() {
    //load articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }
  // logMessageId(el){
  //
  //     let messageId = el.getAttribute('id');
  //     //let messageId = el.dataset.messageId;
  //     console.log("Message Id: ", messageId);
  //
  //   }

  searchArticles(source) {
    console.log("selected source is: " + source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}
