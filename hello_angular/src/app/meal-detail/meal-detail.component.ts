import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MealService } from '../meal.service';
import { Meal } from '../meal';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.scss']
})
export class MealDetailComponent implements OnInit {

  @Input() meal!: Meal;  // meal is an Input property bound to the selectedMeal in the Meals component. There's no presentation logic. This component simply receives a meal object through its hero property and displays it. See @ https://v5.angular.io/guide/template-syntax#inputs-outputs

  constructor(
    private route: ActivatedRoute,  // holds information about the route to this instance of the MealDetailComponent. This component is interested in the route's bag of parameters extracted from the URL, like the "id" parameter
    private mealService: MealService,
    private location: Location  // The location is an Angular service for interacting with the browser. Will be used later to navigate back to the view that navigated here.
  ) { }

  ngOnInit(): void {
    this.getSelectedMeal();
  }

  getSelectedMeal(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;  // route.snapshot is a static image of the route information shortly after the component was created. The paramMap is a dictionary of route parameter values (always STR!) extracted from the URL. The "id" key returns the id of the meal to fetch. The JavaScript (+) operator converts the string to a number, which is what a meal id should be
    this.mealService.getMeal(id)
      .subscribe(meal => this.meal = meal);
  }

  goBack(): void {
    this.location.back();
  }

}
