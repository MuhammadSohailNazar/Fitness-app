import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";

import { Store } from "store";

import { AuthService, User } from "../../../auth/shared/services/auth/auth.service";
@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  subscription: Subscription;
  constructor(private store: Store, private authSerivce: AuthService) {}

  ngOnInit() {
    this.subscription = this.authSerivce.auth$.subscribe();
    this.user$ = this.store.select<User>("user");
  } 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
