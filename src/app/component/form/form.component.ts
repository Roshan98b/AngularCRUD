import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Model } from '../../service/model/model';
import { ModelService } from '../../service/model/model.service';
import { MessageService } from '../../service/message/message.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private modelService: ModelService, private messageService: MessageService) { }
  response: Boolean;

  ngOnInit() {
  	this.response = false;
  }

  onSubmit(selform: NgForm) {
  	this.messageService.setInsertMessage('Insert Successfull');
  	this.response = this.modelService.postData(selform.value);
  }

  // setFalse() {
  // 	this.response = false;
  // }

}
