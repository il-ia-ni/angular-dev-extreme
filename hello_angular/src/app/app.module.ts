import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';  // See setting it up in importd [] per manual @ @https://v5.angular.io/tutorial/toh-pt6#simulate-a-data-server
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealsComponent } from './meals/meals.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { MealService } from './meal.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [  // Declarables are components, directives and pipes
    AppComponent, MealsComponent, MealDetailComponent, MessagesComponent, DashboardComponent  // Meals comp got automatically declared by Angular CLI https://v5.angular.io/tutorial/toh-pt1#declare-heroescomponent
  ],
  imports: [  // other NgModules that this particular module needs to function properly
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  // !!! has to be imported BEFORE HttpClientInMemoryWebApiModule
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [MealService, MessageService, InMemoryDataService],  // list of the services the app needs. This is only 1 of 3 possible places to provide a service! See @ https://v5.angular.io/tutorial/toh-pt4#provide-the-heroservice
  bootstrap: [AppComponent]  // entry components of the app, the app is started with it
})
export class AppModule { }
