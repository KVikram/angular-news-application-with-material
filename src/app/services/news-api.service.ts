import { Injectable } from '@angular/core';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'f2d4b98bd82f4028a80631396e042558';


  constructor(private http:HttpService) { }


  initSources(){
	 return this.http.getAPI('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }


  initArticles(){
   return this.http.getAPI('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }

  getArticlesByID(source: String){
   return this.http.getAPI('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }



}
