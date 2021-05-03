import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ContactI } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactCollection: AngularFirestoreCollection<ContactI>;

  constructor(
    private db: AngularFirestore,
  ) { }

  postContact(data: ContactI) {
    const id = this.db.createId();
    data.id = id;
    data.time = Date.now();
    this.contactCollection = this.db.collection<ContactI>('contacts');
    return this.contactCollection.doc(id).set({ ...data });
  }

  

}
