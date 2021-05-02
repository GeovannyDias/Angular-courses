import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeI } from '../models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employeesCollection: AngularFirestoreCollection<EmployeeI>;
  private employees: Observable<EmployeeI[]>;

  constructor(
    private db: AngularFirestore
  ) { }

  getEmployees() {
    this.employeesCollection = this.db.collection<EmployeeI>('employees'
      // , ref => ref.where('estado', '==', true)
      //   .where('id_cliente_origen', '==', id_cliente)
      //   .where('id_empresa', '==', id_empresa)
    );

    const employees = this.employeesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return employees;
  }

  postEmployee(data: EmployeeI) {
    const id = this.db.createId();
    data.id = id;
    this.employeesCollection = this.db.collection<EmployeeI>('employees');
    return this.employeesCollection.doc(id).set({ ...data });
  }

  updateEmployee(id: string, data: EmployeeI) {
    this.employeesCollection = this.db.collection<EmployeeI>('employees');
    return this.employeesCollection.doc(id).update(data);
  }

  
  deleteEmployee(id: string) {
    this.employeesCollection = this.db.collection<EmployeeI>('employees');
    return this.employeesCollection.doc(id).delete();
  }






}
