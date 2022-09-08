import { Injectable } from '@angular/core';

export class Meal {
  ID!: Number
  Name!: String
  Description!: String
  Price!: Number
}

const meals: Meal[] = [
  { ID: 1, Name: 'Salat', Description: 'Mit Öl oder Joghurt', Price: 10.50 },
  { ID: 2, Name: 'Schnitzel', Description: 'Mit pommes', Price: 15.85 },
  { ID: 3, Name: 'Capuccino', Description: '', Price: 4.50 }
];

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor() { }

  getMeals(): Meal[] {
    return meals;
}
}
