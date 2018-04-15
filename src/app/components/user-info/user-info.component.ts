import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/Rx';

import {HttpService} from '../../service/http.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'gh-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy {

  user;
  notFound = true;
  username = `torvalds`;

  // searchUser$ = new Subject<string>();

  constructor(private _httpService: HttpService) {
    // this._httpService.getUser(this.searchUser$)
    this._httpService.getUserInfo(this.username)
      .subscribe(user => {
        this.user = user;
        this.notFound = false;
      }, (error) => {
        console.log('error');
        this.notFound = true;
        this.user = '';
      });
  }

  ngOnInit() {
  }

  searchUser() {
    this._httpService.getUserInfo(this.username)
      .subscribe(user => {
        this.user = user;
        this.notFound = false;
      }, (error) => {
        this.notFound = true;
      });
  }

  ngOnDestroy() {
  }

}
