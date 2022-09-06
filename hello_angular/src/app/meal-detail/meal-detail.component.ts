import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.scss']
})
export class MealDetailComponent implements OnInit {

  @Input() meal!: Meal;  // meal is an Input property bound to the selectedMeal in the Meals component. There's no presentation logic. This component simply receives a meal object through its hero property and displays it. See @ https://v5.angular.io/guide/template-syntax#inputs-outputs
  constructor() { }

  ngOnInit(): void {
  }

}
