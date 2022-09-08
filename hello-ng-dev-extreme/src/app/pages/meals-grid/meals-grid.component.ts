import { Component, OnInit } from '@angular/core';
import { Meal, MealsService } from '../../meals.service';

@Component({
  selector: 'app-meals-grid',
  templateUrl: './meals-grid.component.html',
  styleUrls: ['./meals-grid.component.scss']
})
export class MealsGridComponent implements OnInit {

  meals!: Meal[];

  constructor(service: MealsService) {
    this.meals = service.getMeals();
  }

  getDisplayExpr(item: Meal) {
    return item && item.Name + ' ' + item.Description + ' ' + item.Price + '€';
  }

  ngOnInit(): void {
  }

}
