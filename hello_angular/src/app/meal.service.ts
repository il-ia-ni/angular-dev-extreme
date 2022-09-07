import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  // Observables are 1 of ways for asyn data fetch in Angular services. See @ https://v5.angular.io/tutorial/toh-pt4#observable-data
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';  // HTTP symbols for the tutorial https://v5.angular.io/tutorial/toh-pt6
import { catchError, map, tap } from 'rxjs/operators';  // To catch errors, you "pipe" the observable result from http.get() through an RxJS catchError() operator.

import { Meal } from './meal';
import { MEALS } from './meals-fake-data'
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })  // The meals web API expects a special header in HTTP save requests.
};

@Injectable({
  providedIn: 'root'
})
export class MealService {
  /* A service globally available to any components that all need to get Meals data but don't need to know anything about each other. Is used by Angular dependency injection to implement the service into normal components. See @ https://v5.angular.io/guide/dependency-injection.
  Injectable decorator means other dependencies might also be injected into the service. The good practice is to always keep it */

  private mealsUrl = 'api/meals';  // URL to web api imitating client-server- See @ https://github.com/angular/in-memory-web-api#readme

  constructor(
    private http: HttpClient,  // all its methods return an RxJS Observable of something (generally, emit multiple values). An Observable from HttpClient always emits a single value and then completes, never to emit again. See @https://v5.angular.io/tutorial/toh-pt6#http-methods-return-one-value

    private messageService: MessageService) { }  // Injecting another Service into the Meal Service (service-in-service

  getMeals(): Observable<Meal[]> {
    /** GET meals from the server (No more simulation of Observables)
     * returns an an observable of meal arrays Observable<Meal[]>
    */
    this.messageService.add('MealService reports: fetched meals data');
    return this.http.get<Meal[]>(this.mealsUrl)  // HttpClient .get returns the body of the response as an untyped JSON object by default. Applying the optional type specifier, <Meal[]> , gives a typed result object. The shape of the JSON data is determined by the server's data API. The In-memory-data Service API returns the meals data as an array. See @ https://v5.angular.io/tutorial/toh-pt6#httpclientget-returns-response-data
      .pipe(
        // extends the observable result with the .pipe-method with the logic for:
        //- tapping into Observable values for logging. See @ https://v5.angular.io/tutorial/toh-pt6#tap-into-the-observable
        //- common error handling. See @ https://v5.angular.io/tutorial/toh-pt6#error-handling
        tap(meals => this.log(`fetched meals`)),
        catchError(this.handleError('getMeals', []))
      );
  }

  getMeal(id: number): Observable<Meal> {
    /** GET by id request. Will 404 if id not found. Most Wbe API support GetById-requests
     * constructs a request URL with the desired meal's id
     * returns an Observable<Meal> ("an observable of Meal objects") rather than an observable of meal arrays
     */
    const url = `${this.mealsUrl}/${id}`;
    return this.http.get<Meal>(url)  // GetByID req. See @ https://v5.angular.io/tutorial/toh-pt6#get-hero-by-id
      .pipe(
        tap(_ => this.log(`fetched meal id=${id}`)),
        catchError(this.handleError<Meal>(`getMeal id=${id}`))
      );
  }

  updateMeal(meal: Meal): Observable<any> {
    /** PUT: update the meal data on the server
    * HttpClient.put() method takes three parameters: URL, the data to update, options for HTTP header of save requests
    * See @ https://v5.angular.io/tutorial/toh-pt6#add-heroserviceupdatehero
    */
    return this.http.put(this.mealsUrl, meal, httpOptions)
      .pipe(
        tap(_ => this.log(`updated meal with id=${meal.id}`)),
        catchError(this.handleError<any>('updateMeal'))
      );
  }

  addMeal(meal: Meal): Observable<Meal> {
    /** POST: add a new meal to the server
     * expects the server to generate an id for the new meal, which it returns in the Observable<Meal> to the caller
    * HttpClient.post() method takes three parameters: URL, the data to add, options for HTTP header of save requests
    * See @ https://v5.angular.io/tutorial/toh-pt6#add-a-new-hero
    */
    return this.http.post<Meal>(this.mealsUrl, meal, httpOptions)
      .pipe(
        tap((meal: Meal) => this.log(`added meal with id=${meal.id}`)),
        catchError(this.handleError<Meal>('addMeal'))
      );
  }

  deleteMeal(meal: Meal | number): Observable<Meal> {
    /** DELETE: delete the hero from the server
     * HttpClient.delete() method takes two parameters: URL, options for HTTP header of save requests
    */
    const id = typeof meal === 'number' ? meal : meal.id;
    const url = `${this.mealsUrl}/${id}`;

    return this.http.delete<Meal>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted meal with id=${id}`)),
        catchError(this.handleError<Meal>('deleteMeal'))
    );
  }

  /* Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('MealService: ' + message);
  }

  /**
 * A shared method to handle any Http operation that failed.
 * Returns an innocuous result that lets the app keep running
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result.
 * See @ https://v5.angular.io/tutorial/toh-pt6#error-handling
 */
  private handleError<T>(operation = 'operation', result?: T) {  // Because each service method returns a different kind of Observable result, takes a type parameter <T> so it can return the safe value as the type that the app expects.
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error('Error occured:\b', error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
