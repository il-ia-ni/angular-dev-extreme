import { Component, OnInit } from '@angular/core';
import { Meal } from '../../services/in-memory-data-service/meal';
import { MealService } from '../../services/meal-service/meal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  meals: Meal[] = [];

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.getAnyMeals();
  }

  getAnyMeals(): void {
    this.mealService.getMeals()
      .subscribe(meals => this.meals = meals.slice(1, 5));
  }

}
