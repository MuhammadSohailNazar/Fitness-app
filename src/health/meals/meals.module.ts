import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

//shared modules
import { SharedModule } from "../shared/shared.module";

//components
import { MealFormComponent } from "./components/MealForm/MealForm.component";

// containers
import { MealsComponent } from "./containers/meals/meals.component";
import { MealComponent } from "./containers/meal/meal.component";

export const ROUTES: Routes = [
  { path: "", component: MealsComponent },
  { path: "new", component: MealComponent },
  { path: ":id", component: MealComponent },
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
  ],
  declarations: [MealsComponent, MealComponent, MealFormComponent],
})
export class MealsModule {}
