import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealsComponent } from './meals/meals.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';

@NgModule({
  declarations: [  // Declarables are components, directives and pipes
    AppComponent, MealsComponent, MealDetailComponent  // Meals comp got automatically declared by Angular CLI https://v5.angular.io/tutorial/toh-pt1#declare-heroescomponent
  ],
  imports: [  // other NgModules that this particular module needs to function properly
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],  // list of the services the app needs
  bootstrap: [AppComponent]  // entry components of the app, the app is started with it
})
export class AppModule { }
