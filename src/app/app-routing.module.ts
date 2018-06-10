import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './component/form/form.component';
import { DetailComponent } from './component/detail/detail.component';

const routes: Routes = [
	{
		path: '',
		component: FormComponent
	},
	{
		path: 'detail',
		component: DetailComponent
	}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
  	RouterModule.forRoot(routes) 
  ]
})
export class AppRoutingModule { }
