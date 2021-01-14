import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
// we declare that this service should be created
// by the root application injector. new with v6
  providedIn: 'root',
})
export class FirebaseService {
  constructor(public db: AngularFireDatabase) {
  } // constructor

  /**
   * Retrieves the json, pass back to a subscriber
   */
  findAll(table) {
    return this.db.list(table).valueChanges();
  } // load

  /**
   * update an entity
   */
  update(url: string, entity: any) {
    const itemRef = this.db.object(url);
    itemRef.update(entity);
  } // update

  /**
   * send an entity on the server
   */
  add(url: string, entity: any) {
    const itemRef = this.db.object(url);
    itemRef.set(entity);
  } // add

  /**
   * delete an entity
   */
  delete(url: string) {
    const itemRef = this.db.object(url);
    itemRef.remove();
  } // delete
} // RestfulService
