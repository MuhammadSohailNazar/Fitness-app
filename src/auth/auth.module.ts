import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

// shared modules
import { SharedModule } from "./shared/shared.module";

export const ROUTES: Routes = [
  {
    path: "auth",
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
      },
      {
        path: "login",
        loadChildren: "./login/login.module#LoginModule",
      },
      {
        path: "register",
        loadChildren: "./register/register.module#RigsterModule",
      },
    ],
  },
];

export const firebaseConfig:FirebaseAppConfig = {
  apiKey: "AIzaSyBRL6ZnS3A7ovSHhN-OPsJ5gBKMtrLeq4w",
  authDomain: "fitness-app-9e108.firebaseapp.com",
  databaseURL: "https://fitness-app-9e108-default-rtdb.firebaseio.com",
  projectId: "fitness-app-9e108",
  storageBucket: "fitness-app-9e108.appspot.com",
  messagingSenderId: "653194490818",
  //appId: "1:653194490818:web:2755be3a1c250316dc9c5b",
  //measurementId: "G-6HMXVXKZ1D",
};
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot(),
  ],
})
export class AuthModule {}
