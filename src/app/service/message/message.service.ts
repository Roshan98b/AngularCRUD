import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  insertMessage: string;
  updateMessage: string;

  getInsertMessage(): string {
  	return this.insertMessage;
  }

  getUpdateMessage(): string {
  	return this.updateMessage;
  }

  setInsertMessage(message: string) {
  	this.insertMessage = message;
  }

  setUpdateMessage(message: string) {
  	this.updateMessage = message;
  }
}
