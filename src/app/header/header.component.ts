import { FavouriteComponent } from './../favourite/favourite.component';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public Search(){
    const regex = /[A-Z]/g;
    let songs = [];
    if(this.router.url === '/favourites'){
        songs = JSON.parse(localStorage.getItem('favourite')||'[]');
    }
    else
    {
      songs = JSON.parse(localStorage.getItem('song_list')||'[]');
    }
    
    songs = songs.filter((e:any)=> e.title.match(regex).length> 0 )||[];
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
