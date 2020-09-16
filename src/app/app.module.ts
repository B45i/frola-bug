import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SendEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(), NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
