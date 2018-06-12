import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }

  selectedInsert: Model = new Model();
  url: string = "http://localhost:3000/users/view";

  // Create
  postData(model: Model): Observable<Model> {
    return this.http.post<Model>(this.url, model);
  }

  // Read
  getAllData(): Observable<Model[]> {
    return this.http.get<Model[]>(this.url);
  }

  putData(model: Model, username: string): Observable<Model> {
    let url = this.url + '/' + username;
    return this.http.put<Model>(url, model);

  }

  deleteData(username: string): Observable<Model> {
    let url = this.url + '/' + username;
    return this.http.delete<Model>(url);
  }

}
