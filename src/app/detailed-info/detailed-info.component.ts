import { MovieServiceService } from './../movie-service.service';
import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {to_js} from '../search/insert';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-more',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.css']
})
export class DetailedInfoComponent implements OnInit {
in:string;
res:any={
};
  constructor(private M:MovieServiceService, private D:DataServiceService,private route: ActivatedRoute,private http1:HttpClient) { }

  ngOnInit() {
    console.log("asdfsdfsdsdfsdf");
   
    this.route.params.subscribe(params=>{this.in=params.title
      this.D.get_specific(this.in).subscribe((input1)=>{console.log(input1) 
        this.res=input1
       // console.log(this.res.original_title);
        })
    });
  }
  addtowishlist(res)
  {

    var m={
      "id":res.id,
      "movieTitle":res.movieTitle,
      "posterUrl":res.postedUrl,
      "rating":res.rating,
      "yearOfRelease":res.yearOfRelease,
      "omment":res.omment
    }
    this.M.addMovie(m).subscribe(p =>
      {
        console.log("added")
      })

  }

}