import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {HttpService} from './service/http.service';
import {AppComponent} from './app.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {ReposInfoComponent} from './components/repos-info/repos-info.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    ReposInfoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
