import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {path:'favourites', component:FavouriteComponent},
    {path:'', component:HomeComponent},
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FavouriteComponent, HomeComponent]