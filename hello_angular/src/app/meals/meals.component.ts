import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal'

@Component({  // decorator function that specifies the Angular metadata for the component
  selector: 'app-meals',  // the component's CSS element selector, matches the name of the HTML element that identifies this component within a parent component's html-template (see app.component.html)
  templateUrl: './meals.component.html',  // the location of the component's template file
  styleUrls: ['./meals.component.scss']  // the location of the component's private CSS styles
})
export class MealsComponent implements OnInit {  // always declare a comp cls with EXPORT to be able to use it in the App module

  constructor() { }

  ngOnInit(): void {
    /* A lifecycle hook Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic. See @ https://v5.angular.io/guide/lifecycle-hooks#oninit */
  }

  meal: Meal = {
    id: 1,
    name: "Mac'n'cheese"
  };

}
