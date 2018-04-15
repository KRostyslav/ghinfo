import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpService} from './service/http.service';
import {SortPipe} from './pipes/sort.pipe';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {ReposInfoComponent} from './components/repos-info/repos-info.component';
import {NotFoundComponent} from './components/not-found/not-found.component';


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
