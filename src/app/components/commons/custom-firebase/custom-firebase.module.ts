import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../../../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;

import { CustomFirebaseService } from './custom-firebase.service';
@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule],
  providers: [
    CustomFirebaseService
  ],
  declarations: []
})
export class CustomFirebaseModule { }
