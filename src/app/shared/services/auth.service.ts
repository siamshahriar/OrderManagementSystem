import { User } from './../../app.store';
import { inject, Injectable, signal } from '@angular/core';
import { FirebaseService } from './firebase.service';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import type { User as FirebaseUser } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseService = inject(FirebaseService);

  user = signal<User | null>(null);

  constructor() {
    onAuthStateChanged(this.firebaseService.auth, async (authUser) => {
      if (!authUser) {
        this.user.set(null);
        return;
      }
      const user = await this.getUserInfo(authUser.uid);
      // console.log('user', user);

      this.user.set({
        email: authUser.email ?? '',
        name: 'test',
      });
      // this.user.set(user);
    });
  }

  async getAuthState(): Promise<FirebaseUser | null> {
    await this.firebaseService.auth.authStateReady();
    return Promise.resolve(this.firebaseService.auth.currentUser);
  }

  async getUserInfo(uid: string): Promise<User | null> {
    const userRef = doc(this.firebaseService.db, 'user', uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      return null;
    }
    return userDoc.data() as User;
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(
      this.firebaseService.auth,
      email,
      password
    );
  }

  logout() {
    return signOut(this.firebaseService.auth);
  }

  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(
      this.firebaseService.auth,
      email,
      password
    );
  }
}
