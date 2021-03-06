import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

import "rxjs/add/operator/do";

import { Store } from "store";
export interface User {
  email: string;
  uid: string;
  authenticated: boolean;
}
@Injectable()
export class AuthService {
  auth$ = this.af.authState.do((next) => {
    if (!next) {
      this.store.set("user", null);
      return;
    }
    const user: User = {
      email: next.email,
      uid: next.uid,
      authenticated: !!next,
    };
    this.store.set("user", user);
  });

  get user() {
    return this.af.auth.currentUser;
  }
  
  get authState() {
    return this.af.authState;
  }
  constructor(private af: AngularFireAuth, private store: Store) {}
  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.af.auth.signOut();
  }
}
