import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  /**
   * Http request for get user informations
   * @param {string} username
   * @returns {Observable<any>}
   */
  getUserInfo(username: string) {
    return this._http.get(environment.baseURL + username + '?client_id=' + environment.client_id + '&client_secret=' + environment.client_secret)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

  /**
   * Http request for get repos informations
   * @param {string} username
   * @returns {Observable<any>}
   */
  getUserRepos(username: string): Observable<any> {
    return this._http.get(environment.baseURL + username + '/repos?client_id=' + environment.client_id + '&client_secret=' + environment.client_secret + '&page=1&per_page=100');
  }

  errorHandler(error: any): void {
    console.log(error);
  }
}
