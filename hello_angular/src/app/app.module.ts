import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [  // Declarables are components, directives and pipes
    AppComponent
  ],
  imports: [  // other NgModules that this particular module needs to function properly
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],  // list of the services the app needs
  bootstrap: [AppComponent]  // entry components of the app, the app is started with it
})
export class AppModule { }
