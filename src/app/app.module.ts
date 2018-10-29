import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { LatestMoviesComponent } from './latest-movies/latest-movies.component';
import { SearchComponent } from './search/search.component';
import { FullComponent } from './full/full.component';
import { DetailedInfoComponent } from './detailed-info/detailed-info.component';
import { ExistingComponent } from './existing/existing.component';
import { ForDeleteComponent } from './for-delete/for-delete.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MovieServiceService } from './movie-service.service';
import { DataServiceService } from './data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LatestMoviesComponent,
    SearchComponent,
    FullComponent,
    DetailedInfoComponent,
    ExistingComponent,
    ForDeleteComponent,
    WishlistComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieServiceService, DataServiceService],
  exports: [ RouterModule ],
  bootstrap: [AppComponent] 
})
export class AppModule { }