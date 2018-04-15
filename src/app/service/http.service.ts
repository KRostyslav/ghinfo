import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class HttpService {

  username;

  constructor(private _http: HttpClient) {
  }

  // getUser(username: Observable<string>) {
  //   return username.debounceTime(500)
  //     .distinctUntilChanged()
  //     .switchMap(user => this.getUserInfo(user));
  // }

  getUserInfo(username: string) {
    return this._http.get(environment.baseURL + username + '?client_id=' + environment.client_id + '&client_secret=' + environment.client_secret)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

  getUserRepos(username: string): Observable<any> {
    return this._http.get(environment.baseURL + username + '/repos?client_id=' + environment.client_id + '&client_secret=' + environment.client_secret + '&page=1&per_page=100');
  }

  errorHandler(error: any): void {
    console.log(error);
  }
}
