import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}


// const firebaseConfig = {
//   apiKey: "AIzaSyBRL6ZnS3A7ovSHhN-OPsJ5gBKMtrLeq4w",
//   authDomain: "fitness-app-9e108.firebaseapp.com",
//   projectId: "fitness-app-9e108",
//   storageBucket: "fitness-app-9e108.appspot.com",
//   messagingSenderId: "653194490818",
//   appId: "1:653194490818:web:2755be3a1c250316dc9c5b",
//   measurementId: "G-6HMXVXKZ1D"
// };
