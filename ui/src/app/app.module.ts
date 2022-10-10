import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgBusyModule } from 'ng-busy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadVideoComponent } from './components/download-video/download-video.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadVideoComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgBusyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
