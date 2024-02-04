import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { HousedetailsComponent } from './components/housedetails/housedetails.component';
import { HomeComponent } from './components/home/home.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AccountComponent } from './components/account/account.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TravhomeComponent } from './components/travhome/travhome.component';
import { MyhousesComponent } from './components/myhouses/myhouses.component';
import { TrindingComponent } from './components/trinding/trinding.component';
import { HousesComponent } from './components/houses/houses.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MinSliderComponent } from './components/home/min-slider/min-slider.component';
import { HousectegoryComponent } from './components/housectegory/housectegory.component';

import { TopnavComponent } from './components/navbar/topnav/topnav.component';
import { MiddlenavComponent } from './components/navbar/middlenav/middlenav.component';
import { CardsStylesComponent } from './components/cards-styles/cards-styles.component';
import { LandingPageCardComponent } from './components/cards-styles/landing-page-card/landing-page-card.component';
import { MainCardComponent } from './components/cards-styles/main-card/main-card.component';
import { CategoryDetailsComponent } from './components/housectegory/category-details/category-details.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    HousedetailsComponent,
    HomeComponent,
    WishlistComponent,
    AccountComponent,
    ReservationComponent,
    TravhomeComponent,
    MyhousesComponent,
    TrindingComponent,
    HousesComponent,
    NotfoundComponent,
    MinSliderComponent,
    HousectegoryComponent,
    TopnavComponent,
    MiddlenavComponent,
    CardsStylesComponent,
    LandingPageCardComponent,
    MainCardComponent,
    CategoryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    // NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
