import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../../shared/services/auth/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  error: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  async registerUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this.authService.createUser(email, password);
      this.router.navigate(["/"]);
    } catch (err) {
      this.error = err.message;
    }
  }
}
