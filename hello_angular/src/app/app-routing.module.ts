import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MealsComponent } from './meals/meals.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MealDetailComponent }  from './meal-detail/meal-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // a default route in case of no match / initial load. Forwards to the dashboard
  { path: 'meals', component: MealsComponent },  // links a component to the str of a RouterLink
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MealDetailComponent },  // a parametrized root for dynamic linking of a list of items. The colon (:) in the path indicates that :id is a placeholder for a specific meal id. See @ https://v5.angular.io/tutorial/toh-pt5#navigating-to-hero-details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
  exports: [RouterModule]  // Exporting RouterModule makes router directives available for use in the AppModule components that will need them. F.e., Router-outlet is one of the Router directives that is added in app comp or the routerLink attr for <a>s connecting to the RouterLink directive
})
export class AppRoutingModule { }
