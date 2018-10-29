import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-for-delete',
  templateUrl: './for-delete.component.html',
  styleUrls: ['./for-delete.component.css']
})
export class ForDeleteComponent implements OnInit {
in:any;
q:string;
res:any;
  constructor(private D:DataServiceService,private route: ActivatedRoute,private http1:HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{this.in=params.value
      this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.q = params.q;
        console.log(this.q); // popular
      });

      if(this.q=="movies")
      {
        console.log("movies");
        this.D.delete(this.in).subscribe((input)=> {console.log("deleted_m")
        this.D.getdb_data().subscribe((input)=> {this.res=input
        })});
         
      }
      else if(this.q=="exist")
      {
      console.log("exist");
      this.D.delete_ex(this.in).subscribe((input)=> {console.log("deleted_e")
      this.D.getdb_data_ex().subscribe((input)=> this.res=input
      );})
    }
    });
    } 
}