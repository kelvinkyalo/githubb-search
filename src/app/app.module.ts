import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BioService } from './services/bio.service'
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './components/bio/bio.component';


@NgModule({
  declarations: [
    AppComponent,
    BioComponent   
  ],
  imports: [
    BrowserModule,
    HttpModule
    // AppRoutingModule
  ],
  providers: [BioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
