import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }

  modelData: Model[] = [];
  selectedInsert: Model = new Model();

  getAllData(): Observable<Model[]> {
  	return of(this.modelData);
  }

  getData(id: number): Observable<Model> {
  	for(let i of this.modelData)
  		if(i.id == id)
  			return of(i);
  	return of({
  		id: null,
  		username: '',
  		password: ''
  	});
  }

  postData(model: Model): Boolean {
    model.id = this.modelData.length+1;
  	this.modelData.push(model);
  	return true;
  }

  putData(model: Model, id: number): Boolean {
  	for(let i of this.modelData)
  		if(i.id == id){
  			let index = this.modelData.indexOf(i);
  			this.modelData[index].username = model.username;
  			this.modelData[index].password = model.password;
  			return true;
  		}
  	return false;
  }

  deleteData(id: number):Boolean {
  	for(let i of this.modelData)
  		if(i.id == id) {
  			let index = this.modelData.indexOf(i);
  			this.modelData.splice(index,1);
  			return true;
  		}
  	return false;
  }

}
