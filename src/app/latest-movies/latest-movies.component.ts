import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.css']
})
export class LatestMoviesComponent implements OnInit {
  response:any={};
  constructor(private D:DataServiceService) { }

  ngOnInit() {
    this.D.get_latest_movies().subscribe(input => {
      this.response = input;
      // .results.map(e => {
      //  e.poster_path = "https://image.tmdb.org/t/p/w300/" + e.poster_path 
      // return e 
      // });
      console.log(this.response);
    })  
  
  }

}