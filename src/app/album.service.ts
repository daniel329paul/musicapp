import { IAlbum } from './album';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// https://jsonplaceholder.typicode.com/albums
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _url: string = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private http: HttpClient) { }

  getAlbum(): Observable<IAlbum[]>{
    console.log(this.http.get<IAlbum[]>(this._url))
    return this.http.get<IAlbum[]>(this._url);
  }
}
