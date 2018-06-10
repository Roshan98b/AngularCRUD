import { Component, OnInit, Input } from '@angular/core';

import { MessageService } from '../../service/message/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  @Input() responseInsert:Boolean;
  @Input() responseUpdate:Boolean;
  insertMessage: string = '';
  updateMessage: string = '';

  checkInsert() {
    if(this.responseInsert){
      this.getInsertMessage();
      return true;
    }  
    else return false;
  }

  checkUpdate() {
    if(this.responseUpdate){
      this.getUpdateMessage();
      return true;
    } 
    else return false;
  }

  getInsertMessage() {
    this.insertMessage = this.messageService.getInsertMessage();
  }

  getUpdateMessage() {
    this.updateMessage = this.messageService.getUpdateMessage();
  }

  ngOnInit() {
  }

  setFalseInsert() {
  	this.responseInsert = false;
  }

  setFalseUpdate() {
    this.responseUpdate = false;
  }

}
