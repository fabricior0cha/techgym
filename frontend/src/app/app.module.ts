import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MemberformComponent } from './memberform/memberform.component';
import { PersonalformComponent } from './personalform/personalform.component';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { PersonalloginComponent } from './personallogin/personallogin.component';
import { MemberscheduleComponent } from './memberschedule/memberschedule.component';
import { PersonalschedulesComponent } from './personalschedules/personalschedules.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MemberformComponent,
    PersonalformComponent,
    MemberloginComponent,
    PersonalloginComponent,
    MemberscheduleComponent,
    PersonalschedulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
