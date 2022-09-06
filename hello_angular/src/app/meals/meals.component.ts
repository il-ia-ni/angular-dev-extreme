import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { MealService } from '../meal.service';

@Component({  // decorator function that specifies the Angular metadata for the component
  selector: 'app-meals',  // the component's CSS element selector, matches the name of the HTML element that identifies this component within a parent component's html-template (see app.component.html)
  templateUrl: './meals.component.html',  // the location of the component's template file
  styleUrls: ['./meals.component.scss']  // the location of the component's private CSS styles
})
export class MealsComponent implements OnInit {  // always declare a comp cls with EXPORT to be able to use it in the App module

  meals!: Meal[];
  selectedMeal!: Meal;

  constructor(private mealService: MealService) { }  // Injecting a service as a private cls prop in its constructor. See @ https://v5.angular.io/tutorial/toh-pt4#inject-the-heroservice

  ngOnInit(): void {
    /* A lifecycle hook Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic. See @ https://v5.angular.io/guide/lifecycle-hooks#oninit */

    this.getMeals();  // calls the class method on initializing the component
  }

  onSelect(meal: Meal): void {
    this.selectedMeal = meal;
  }

  getMeals(): void {
    /* calls the injected service from the cls prop to fetch melas data */
    this.meals = this.mealService.getMeals();
  }
}
