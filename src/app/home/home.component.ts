import { SongService } from './../song.service';
import { AlbumService } from './../album.service';
import { Component, OnInit } from '@angular/core';
import { IAlbum } from '../album';
import { ISong } from '../song';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public albums :IAlbum[] = [];
  public songs :ISong[] = [];
  constructor(private _ablumService: AlbumService, private _songService: SongService) { }
  public getAlbumtitle(albumId:number){
    return this.albums.filter(e =>e.id == albumId)[0].title;
  }
  public isFavourite(songId:number){
    let favourites = [];
    favourites = JSON.parse(localStorage.getItem('favourite')||'[]');
    if (favourites.filter((e:any) => e.id == songId).length > 0)
      return true;
    return false;
  }
  public addFavourite(songId:number)
  {
    let favourites = JSON.parse(localStorage.getItem('favourite')||'[]');
    let song_list = [];
    song_list = JSON.parse(localStorage.getItem('song_list')||'[]');

    let song = song_list.find((e:any)=>e.id == songId)
    if (favourites.filter((e:any) => e.id == songId).length == 0){
      favourites.push(song)
    }
    localStorage.setItem('favourite', JSON.stringify(favourites));
    this.ngOnInit();
  }
  public removeFavourite(songId:number)
  {
    let favourites = JSON.parse(localStorage.getItem('favourite')||'[]');
    let songIndex = favourites.findIndex((e:any)=>e.id == songId)
    favourites.splice(songIndex,1);
    localStorage.setItem('favourite', JSON.stringify(favourites));
    this.ngOnInit();
  }
  ngOnInit(): void {
    if (localStorage.getItem('album_list') === null){
      this._ablumService.getAlbum()
      .subscribe(data => 
      {
        localStorage.setItem('album_list', JSON.stringify(data)||'[]');
        this.albums = data;
      }); 
    }
    else{
      this.albums = JSON.parse(localStorage.getItem('album_list')||'[]');
    }

    if (localStorage.getItem('song_list') === null){
      this._songService.getSongs()
      .subscribe(data => 
      {
        localStorage.setItem('song_list', JSON.stringify(data)||'[]');
        this.songs = data;
      });      
    }
    else{
      this.songs = JSON.parse(localStorage.getItem('song_list')||'[]');
    }
    
  }

}
