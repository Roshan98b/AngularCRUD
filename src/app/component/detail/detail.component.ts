import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MessageService } from '../../service/message/message.service';
import { ModelService } from '../../service/model/model.service';
import { Model } from '../../service/model/model';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private modelService: ModelService, private messageService: MessageService) { }
  model: Model[] = [];
  response: Boolean;
  responseEdit: Boolean;

  getModel() {
  	this.modelService.getAllData().subscribe((model) => this.model = model);
  }

  ngOnInit() {
    this.response = false;
  	this.getModel();
  }

  onEdit(i: Model) {
    this.responseEdit = true;
    for( let attr in i) this.modelService.selectedInsert[attr] = i[attr]; 
  }

  onDelete(i: Model) {
    this.messageService.setUpdateMessage('Delete Successfull');
    this.response = this.modelService.deleteData(i.id);
  }

  onSubmit(selform: NgForm) {
    this.messageService.setUpdateMessage('Update Successfull');
    this.response = this.modelService.putData(selform.form.value, this.modelService.selectedInsert.id);
    this.responseEdit = false;
  }


  // setFalse() {
  //   this.response = false;
  // }


}
