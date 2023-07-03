import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Allows two-way binding in templates of components with [(ngModel)]="var...."  syntax
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';  // See setting it up in importd [] per manual @ @https://v5.angular.io/tutorial/toh-pt6#simulate-a-data-server
import { InMemoryDataService } from './services/in-memory-data-service/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealsComponent } from './components/meals/meals.component';
import { MealDetailComponent } from './components/meal-detail/meal-detail.component';
import { MealService } from './services/meal-service/meal.service';
import { MessageService } from './services/message-service/message.service';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MealSearchComponent } from './components/meal-search/meal-search.component';

@NgModule({
  declarations: [  // Declarables are components, directives and pipes
    AppComponent, MealsComponent, MealDetailComponent, MessagesComponent, DashboardComponent, MealSearchComponent  // Meals comp got automatically declared by Angular CLI https://v5.angular.io/tutorial/toh-pt1#declare-heroescomponent
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
  // Providers tell the injector framework how to create the service. Without a provider, the injector would not know that it is responsible for injecting the service nor be able to create the service. See @ https://v5.angular.io/guide/dependency-injection
  // See also @ https://v5.angular.io/guide/dependency-injection#ngmodule-providers and @ https://v5.angular.io/tutorial/toh-pt4#provide-the-heroservice
  providers: [MealService, MessageService, InMemoryDataService],  // list of the services the app globally uses. Registering providers in @NgModule is only 1 of 3 possible places to provide a service! Another option would be to add it in each component's personal injector through @Component({... providers: [ MealService, ... ] ...}). The choise where to register a provider affects service's scope and lifetime! See @ https://v5.angular.io/guide/dependency-injection#ngmodule-or-component

  bootstrap: [AppComponent]  // entry components of the app, the app is started with it
})
export class AppModule { }
