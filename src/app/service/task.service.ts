import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';

export interface Task {
  id?: string
  parentId?: string,
  title: string,
  description?: string,
};

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BaseHttpService<Task> {
  constructor(http: HttpClient) {
    super('/api/v1/task', http);
  }

  getRootNode(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url + "/node/root");
  }
}
