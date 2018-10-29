import { DataServiceService } from '../data-service.service';
import { HttpClient} from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';
import { getBootstrapListener } from '@angular/router/src/router_module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latest_movies:any={};
  latest:string = "Latest_movies";
  collapse=false;
  search_page:string="search_page";
  constructor(private url:HttpClient, private pris:DataServiceService) { }
  
  ngOnInit() {
    this.pris.get_latest_movies().subscribe((input)=>{this.latest_movies=input
      console.log(this.latest_movies.results);
    }) 
  }

  func(){
    this.collapse=!this.collapse;
}
}