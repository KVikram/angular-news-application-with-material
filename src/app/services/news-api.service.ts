import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = environment.API_KEY;


  constructor(private http:HttpService) { 
    console.log('Prod: '+environment.production);
  }


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
