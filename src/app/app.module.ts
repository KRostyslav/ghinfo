import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {HttpService} from './service/http.service';
import {AppComponent} from './app.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {ReposInfoComponent} from './components/repos-info/repos-info.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SortPipe } from './components/pipes/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    ReposInfoComponent,
    NotFoundComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
