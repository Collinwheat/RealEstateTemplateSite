// auth.service.ts
import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  user,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$ = user(this.auth);

  constructor(private auth: Auth) {}

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

  isAdmin$(): Observable<boolean> {
    return this.user$.pipe(
      map((u) => !!u && environment.adminEmails.includes(u.email ?? ''))
    );
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }

  getCurrentUserIsAdmin() {
    if (this.auth.currentUser) {
      console.log(this.auth.currentUser.email);
      let email = this.auth.currentUser.email;
      if (email == 'collinwheat@gmail.com') {
        console.log(email);
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}
