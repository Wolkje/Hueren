import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterbarComponent } from './components/filterbar/filterbar.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OfferListComponent } from './components/offer-list/offer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterbarComponent,
    JobListComponent,
    OfferListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
