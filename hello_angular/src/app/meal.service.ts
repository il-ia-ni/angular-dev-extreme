import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  // Observables are 1 of ways for asyn data fetch in Angular services. See @ https://v5.angular.io/tutorial/toh-pt4#observable-data
import { of } from 'rxjs';

import { Meal } from './meal';
import { MEALS } from './meals-fake-data'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  /* A service globally available to any components that all need to get Meals data but don't need to know anything about each other. Is used by Angular dependency injection to implement the service into normal components. See @ https://v5.angular.io/guide/dependency-injection.
  Injectable decorator means other dependencies might also be injected into the service. The good practice is to always keep it */

  constructor(private messageService: MessageService) { }  // Injecting another Service into the Meal Service (service-in-service)

  getMeals(): Observable<Meal[]> {
    /* A cls method with the asynchronous signature for an asynchronious fetch of the fake data. */
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('MealService reports: fetched meals data');
    return of(MEALS);  // A returned Observable must be subscribed to in the using components!
    // of() returns an Observable that emits a single value, the array of mock meals. == HttpClient.get<Meal[]>() from a latter tutorial, returns the same array from a body of a HTTP respond
  }
}
