import { ISong } from './song';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private _url: string = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) { }

  getSongs(): Observable<ISong[]>{
    console.log(this.http.get<ISong[]>(this._url))
    return this.http.get<ISong[]>(this._url);
  }
}
