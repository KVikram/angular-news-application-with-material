import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './services/news-api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { httpInterceptorProviders } from "./interceptors";

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
  ],
  providers: [NewsApiService,httpInterceptorProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
//
