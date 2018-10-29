import { DataServiceService } from './data-service.service';
import { Component,OnInit,Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';
// import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  latest_movies:any={};

  constructor( private url:HttpClient, private harsha:DataServiceService){

  }
  ngOnInit(){
//  this.harsha.get_latest_movies().subscribe((input)=>{this.latest_movies=input
//   console.log(this.latest_movies.results);
// })
            }
}