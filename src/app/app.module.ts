import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Form, FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitSearchService } from './git-search.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
