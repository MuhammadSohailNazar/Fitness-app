import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { Store } from "store";

// feature modules
import { AuthModule } from "../auth/auth.module";
import { HealthModule } from "../health/health.module";

// containers
import { AppComponent } from "./containers/app/app.component";

// components
import { HeaderComponent } from "./components/header/header.component";
import { NavComponent } from "./components/nav/nav.component";

// routes
export const ROUTES: Routes = [
  { path: "", pathMatch: "full", redirectTo: "schedule" },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    HealthModule,
  ],
  declarations: [AppComponent, HeaderComponent, NavComponent],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
