import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { Meal } from "../../../shared/services/meals/meals.service";

@Component({
  selector: "Meal-Form",
  templateUrl: "./MealForm.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./MealForm.component.scss"],
})
export class MealFormComponent implements OnInit {
  @Output() create = new EventEmitter<Meal>();
  form = this.fb.group({
    name: ["", Validators.required],
    ingredients: this.fb.array([""]),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get required() {
    return (
      this.form.get("name").hasError("required") &&
      this.form.get("name").touched
    );
  }
  get ingredients() {
    return this.form.get("ingredients") as FormArray;
  }

  createMeal() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  addIngredient() {
    this.ingredients.push(new FormControl(""));
  }
  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }
}
