import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HousedetailsComponent } from './components/housedetails/housedetails.component';
import { HousesComponent } from './components/houses/houses.component';
import { TrindingComponent } from './components/trinding/trinding.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AuthGuard } from './Guards/auth.guard';
import { HousectegoryComponent } from './components/housectegory/housectegory.component';
import { TravhomeComponent } from './components/travhome/travhome.component';


const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:"houseCategory/:id",canActivate:[AuthGuard],component:HousectegoryComponent},
  {path:'details/:id',canActivate:[AuthGuard],component:HousedetailsComponent},
  {path:'houses',canActivate:[AuthGuard],component:HousesComponent},
  {path:'trind',canActivate:[AuthGuard],component:TrindingComponent},
  {path:'trav',canActivate:[AuthGuard],component:TravhomeComponent},
  {path:'login',component:SigninComponent},
  {path:'register',component:SignupComponent},
  {path:'wishlist',canActivate:[AuthGuard],component:WishlistComponent},
  {path:'**',component:NotfoundComponent},
];


// const routes: Routes = [
//   {path:'', redirectTo:'home',pathMatch:'full'},
//   {path:'home',component:HomeComponent},
//   {path:'details/:id',component:HousedetailsComponent},
//   {path:'houses',component:HousesComponent},
//   {path:'trind',component:TrindingComponent},
//   {path:'login',component:SigninComponent},
//   {path:'register',component:SignupComponent},
//   {path:'wishlist',component:WishlistComponent},
//   {path:'**',component:NotfoundComponent},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
