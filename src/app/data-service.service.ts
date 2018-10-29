import { Injectable } from '@angular/core';
// import 'rxjs/Rx';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { concat } from 'rxjs';
import {to_js} from './search/insert';
import {  RequestOptions } from '@angular/http';
import { Observable,throwError,of } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';
// import { map} from 'rxjs/operators';
 import { catchError,map,tap} from 'rxjs/operators';

 const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
response:Object;
max:string;
id:string;
global_value:any;
movie:to_js=new to_js();
str1:String = new String( "http://api.themoviedb.org/3/search/movie?api_key=e0568ac678600fc13916648fbcefa5a4&query=" );  
constructor(private http1:HttpClient) { }
    getall(movie:string):Observable<any>{
      console.log("in data service");
      this.max=this.str1+movie;
      console.log(this.max);
       return this.http1.get(this.max);
    }

    get_latest_movies(){
      return this.http1.get("http://api.themoviedb.org/3/movie/upcoming?api_key=e0568ac678600fc13916648fbcefa5a4");
    }

    getdb_data(){
      return this.http1.get("http://localhost:8081/api/v1/movie/")
      //return this.http1.get("https://movie-heroku-responsive.herokuapp.com/movies/");
    }
    
    getdb_data_ex(){
      return this.http1.get("http://localhost:8081/api/v1/movie/");
    }


    get_specific(a:string){
     // this.id= a.toString();
      this.global_value ="http://api.themoviedb.org/3/movie/";
      this.global_value = this.global_value.concat(a);
      this.global_value=this.global_value.concat("?api_key=e0568ac678600fc13916648fbcefa5a4")

      return this.http1.get(this.global_value);
    }

    delete(movie){
      this.id="http://localhost:8081/api/v1/movie"
      
      return this.http1.patch(this.id,movie,httpOptions);
    }
    delete_ex(a:string){
      this.id="http://localhost:8081/api/v1/movie/"
      this.id=this.id.concat(a);
      return this.http1.delete(this.id);
    }

    addcol(a:string){
      this.id = "http://api.themoviedb.org/3/movie/";
      this.id=this.id.concat(a);
      this.id=this.id.concat("?api_key=e0568ac678600fc13916648fbcefa5a4")
      return this.http1.post(this.id,this.movie);
    }

}
