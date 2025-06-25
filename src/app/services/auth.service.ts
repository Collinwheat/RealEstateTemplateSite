import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  user,
  browserLocalPersistence,
  setPersistence,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$ = user(this.auth);
  currentUserIsAdmin: boolean = false;

  constructor(private auth: Auth) {
    setPersistence(this.auth, browserLocalPersistence).catch((err) =>
      console.error('Persistence error:', err)
    );
  }

  async loginWithGoogle() {
    const result = signInWithPopup(this.auth, new GoogleAuthProvider());
    const email = (await result).user?.email;
    this.currentUserIsAdmin = environment.adminEmails.includes(email ?? '');
  }

  logout() {
    this.currentUserIsAdmin = false;
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
}
