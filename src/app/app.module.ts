import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { AuthModule } from "../auth/auth.module";

import { Store } from "store";

// feature modules

// containers
import { AppComponent } from "./containers/app/app.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavComponent } from "./components/nav/nav.component";

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [BrowserModule, AuthModule, RouterModule.forRoot(ROUTES)],
  declarations: [AppComponent, HeaderComponent, NavComponent],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
