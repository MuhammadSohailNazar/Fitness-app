import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// third party modules
import { AngularFireDatabaseModule } from "angularfire2/database";

//components

// services
import { MealsService } from "./services/meals/meals.service";
import { ListItemComponent } from "./components/listItem/listItem.component";
@NgModule({
  imports: [CommonModule, RouterModule, AngularFireDatabaseModule],
  declarations: [ListItemComponent],
  exports: [ListItemComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MealsService],
    };
  }
}
