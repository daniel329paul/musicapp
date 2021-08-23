import { AppRoutingModule } from './app-routing.module';
import { AlbumService } from './album.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    HomeComponent,
    HeaderComponent  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    NoopAnimationsModule,
    AppRoutingModule

  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
