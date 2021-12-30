import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../../shared/services/auth/auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  error: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  async loginUser(event: FormGroup) {
    try {
      await this.authService.loginUser(event.value.email, event.value.password);
      this.router.navigate(["/"]);
    } catch (err) {
      this.error = err.message;
    }
  }
}
