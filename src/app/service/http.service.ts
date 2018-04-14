import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class HttpService {

  username;

  constructor(private _http: HttpClient) {
  }

  getUserInfo(username: string): Observable<any> {
    return this._http.get(environment.baseURL + username + '?client_id=' + environment.client_id + '&client_secret=' + environment.client_secret);
  }

  getUserRepos(username: string): Observable<any> {
    return this._http.get(environment.baseURL + username + '/repos?client_id=' + environment.client_id + '&client_secret=' + environment.client_secret + '&page=1&per_page=100');
  }

  updateUser(username: string) {
    this.username = username;
  }
}
