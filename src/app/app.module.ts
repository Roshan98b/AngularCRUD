import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { DetailComponent } from './component/detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import { MessageComponent } from './component/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
