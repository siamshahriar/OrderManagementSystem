import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAvbKeFFqqcKAVieELxf80zY87bjanTrSY',
  authDomain: 'task-assign-interview.firebaseapp.com',
  projectId: 'task-assign-interview',
  storageBucket: 'task-assign-interview.firebasestorage.app',
  messagingSenderId: '953127336870',
  appId: '1:953127336870:web:d394b6850043ec5cff2d67',
};

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private _app = initializeApp(firebaseConfig);
  get app() {
    return this._app;
  }

  private _auth = getAuth(this._app);
  get auth() {
    return this._auth;
  }

  private _db = getFirestore(this._app);
  get db() {
    return this._db;
  }
}
