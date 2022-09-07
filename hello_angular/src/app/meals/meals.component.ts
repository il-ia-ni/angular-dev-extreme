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

  constructor(private mealService: MealService) { }  // Injecting a service as a private cls prop in its constructor. See @ https://v5.angular.io/tutorial/toh-pt4#inject-the-heroservice

  ngOnInit(): void {
    /* A lifecycle hook Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic. See @ https://v5.angular.io/guide/lifecycle-hooks#oninit */

    this.getMeals();  // calls the class method on initializing the component
  }

  getMeals(): void {
    /* subscribes to an Observale returned by calling the injected service from the cls prop. See @ https://v5.angular.io/tutorial/toh-pt4#subscribe-in-heroescomponent */
    this.mealService.getMeals()
      .subscribe(meals => this.meals = meals);  // When the request is ready, .subscribe() passes the emitted Meal-array to the callback, which sets the component's heroes property
  }

  add(name: string): void {
    /* Handler function for the button in the template to push a new meal to the server
    When addMeal saves successfully, the subscribe callback receives the new meal and pushes it into the meals list for display. */
    name = name.trim();
    if (!name) { return; };

    this.mealService.addMeal({ name } as Meal)
      .subscribe((meal: Meal) => {
        this.meals.push(meal);
      });
  }

  delete(meal: Meal): void {
    /* Handler function for the button to delete a meal in the template
    Although the component delegates meal deletion to the MealService, it remains responsible for updating its own list of meals!!! It immediately removes the meal-to-delete from that list, anticipating that the MealService will succeed on the server.

    There's nothing for the component to do with the Observable returned by mealService.delete(). HOWEVER it must be subscribed to anyway!!! If you neglect a subscribe(), the service will not send the delete request to the server! As a rule, an Observable does nothing until something subscribes!

    See @ https://v5.angular.io/tutorial/toh-pt6#delete-a-hero*/

    this.meals = this.meals.filter(m => m !== meal);
    this.mealService.deleteMeal(meal).subscribe();
  }
}
