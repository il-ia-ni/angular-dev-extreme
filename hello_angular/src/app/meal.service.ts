import { Injectable } from '@angular/core';
import { Meal } from './meal';
import { MEALS } from './meals-fake-data'

@Injectable({
  providedIn: 'root'
})
export class MealService {
  /* A service globally available to any components that all need to get Meals data but don't need to know anything about each other. Is used by Angular dependency injection to implement the service into normal components. See @ https://v5.angular.io/guide/dependency-injection.
  Injectable decorator means other dependencies might also be injected into the service. The good practice is to always keep it */

  constructor() { }

  getMeals(): Meal[] {
    /* A cls method with the synchronous signature for a synchronious fetch of the fake data. See @ https://v5.angular.io/tutorial/toh-pt4#observable-data */
    return MEALS;
  }
}
