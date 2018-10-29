import { MovieServiceService } from './../movie-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private nnn : MovieServiceService) { }

  ngOnInit() {
  }

}
