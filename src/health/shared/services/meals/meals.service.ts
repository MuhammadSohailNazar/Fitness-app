import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs";

// services
import { AuthService } from "../../../../auth/shared/services/auth/auth.service";

// store
import { Store } from "store";

export interface Meal {
  name: string;
  ingredients: string[];
  timestamp: number;
  $key: string;
  $exists: () => boolean;
}

@Injectable()
export class MealsService {
  meals$: Observable<Meal[]> = this.db
    .list(`meals/${this.uid}`)
    .do<Meal[]>((next) => {
      this.store.set("meals", next);
    });
  constructor(
    private store: Store,
    private authService: AuthService,
    private db: AngularFireDatabase
  ) {}

  get uid() {
    return this.authService.user.uid;
  }

  addMeal(meal: Meal){
    return this.db.list(`meals/${this.uid}`).push(meal);
  }
}
