import { Movie } from './../movies';
import { MovieServiceService } from './../movie-service.service';
import { Component, OnInit,Input } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {to_js} from '../search/insert';
import { delay } from 'rxjs/operators';
import { ArrayType } from '@angular/compiler';


@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {
in:string;
ch:number;
data:any;
id:any;
val:boolean=false;
db_data:any;
toggle:boolean=false;
//i:number;
  constructor(private _movieService: MovieServiceService,  private D:DataServiceService,private route: ActivatedRoute,private http1:HttpClient) {
  //   this.D.getdb_data().subscribe((input)=> {this.id=input
  //    // console.log(this.id.length);
  //     this.route.params.subscribe(params=>this.in=params.title); 
  //   for (let i=0;i<this.id.length;i++)
  //   {
  //     // console.log(typeof this.id[i].id.toString());
  //     // console.log(this.id[i].title);
  //     // console.log(typeof this.in);
  //    if((this.id[i].id).toString() == this.in)
  //    {
  //     // console.log("present");
  //     this.val=true;
  //    }
  //   }
  // }
  //  )
  }
   
    
//@Input('name')a:object;
  ngOnInit() {
    

    // if(this.val==true)
    //  {console.log("data already present")}
    //  else{
  // console.log("dsdsdsdsdsdsd");
  this.route.params.subscribe(params=>this.in=params.title);
     this.D.get_specific(this.in).subscribe((input)=>{
      //console.log(input)
      
      this.http1.post("http://localhost:8081/api/v1/movie/",input).subscribe((resp)=>{
         console.log(resp+"asasasasasas"); 
        //this.val=false;
      },
      error => {
          console.log("Data already inserted",error);
          //this.val=true;
      })
    }); 
 // }
  }
  deleteMovies(a){
    
    this._movieService.deleteMovies(a).subscribe(p =>
      console.log("dell mov full... ",a));

  }
  getMovies()
  {
    this.D.getdb_data().subscribe((input)=> {this.db_data=input
     this.toggle=!this.toggle;
     console.log("movie movie   ",this.db_data);
  })};
  
}
