import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";

import "rxjs/add/operator/map";

import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.authState.map((user) => {
      if (!user) {
        this.router.navigate(["/auth/login"]);
        return false;
      }
      return !!user;
    });
  }
}
