import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemePreviewComponent } from './meme-preview/meme-preview.component';
import { MemeMakerComponent } from './meme-maker/meme-maker.component';

@NgModule({
  declarations: [
    AppComponent,
    MemePreviewComponent,
    MemeMakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
