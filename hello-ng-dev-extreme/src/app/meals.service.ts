import { Injectable } from '@angular/core';

export class Meal {
  ID!: Number
  Name!: String
  Description!: String
  Price!: Number
  Ingredients!: String
  Energy!: String
  Vegan!: boolean

}

const meals: Meal[] = [
  { ID: 1, Name: 'Salat', Description: 'Mit Öl oder Joghurt', Price: 10.50, Ingredients: "Zuchhini, Tomaten, Gurke, Basilikum", Energy: "A", Vegan: true },
  { ID: 2, Name: 'Schnitzel', Description: 'Mit pommes', Price: 15.85, Ingredients: "Rindfleisch, Kräuter, Knoblauch", Energy: "D", Vegan: false },
  { ID: 3, Name: 'Capuccino', Description: '', Price: 4.50, Ingredients: "Columbianische Bohnen", Energy: "A", Vegan: true }
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
