import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BloggComponent } from './components/blogg/blogg.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:':postId', component:BloggComponent},
   
 
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'**',redirectTo:'error404', pathMatch:'full'},

];