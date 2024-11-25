import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private collectionName = 'tasks';

  constructor(private firestore: AngularFirestore) {}

  getTasks(): Observable<Task[]> {
    return this.firestore.collection<Task>(this.collectionName).valueChanges({ idField: 'id' });
  }

  addTask(task: Task): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(id).set({ ...task, id });
  }

  updateTask(task: Task): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(task.id).update(task);
  }

  deleteTask(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
