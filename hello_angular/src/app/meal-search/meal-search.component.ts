import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Meal } from '../meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-search',
  templateUrl: './meal-search.component.html',
  styleUrls: [ './meal-search.component.scss' ]
})
export class MealSearchComponent implements OnInit {

  meals$!: Observable<Meal[]>;

  private searchTerms = new Subject<string>();  // A Subject is both a source of observable values and an Observable itself. You can subscribe to a Subject as you would any Observable. New values can be pushed into that Observable by calling .next(value). See @ https://v5.angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject

  constructor(private mealService: MealService) {}

  search(term: string): void {
    /* A callback function for the search input'S keyup-event in the template. Pushes a search term into the observable stream.
    Every time the user types in the textbox, the binding calls search() with the textbox value, a "search term". The searchTerms becomes an Observable emitting a steady stream of search terms.
    */
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

    this.meals$ = this.searchTerms.pipe(
      /* Chaining of RxJS operators through piping the Subject observable through a sequence of RxJS operators to optimize the usage of networking bandwith and cut the amout of HTTP requests.
      Ultimately returns an observable of timely meals search results (each a Meal[])
      See @ https://v5.angular.io/tutorial/toh-pt6#chaining-rxjs-operators */

      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.mealService.searchMeals(term)),  // Even with a 300ms pause between requests, you could have multiple HTTP requests in flight and they may not return in the order sent. switchMap() preserves the original request order while returning only the observable from the most recent HTTP method call. Results from prior calls are canceled and discarded. Note that canceling a previous searchHeroes() Observable doesn't actually abort a pending HTTP request. Unwanted results are simply discarded before they reach your application code.
    );
    // Remember: the component class does not subscribe to the heroes$ observable. That's the job of the AsyncPipe in the template!
  }
}
