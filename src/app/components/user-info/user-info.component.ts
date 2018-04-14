import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {HttpService} from '../../service/http.service';

@Component({
  selector: 'gh-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: User;
  notFound = true;
  username = `torvalds`;

  constructor(private _httpService: HttpService) {
    this._httpService.getUserInfo(this.username)
      .subscribe(user => {
        this.user = user;
        this.notFound = false;
      }, (error) => {
        this.notFound = true;
      });
  }

  ngOnInit() {}

  searchUser(  ) {
    this._httpService.updateUser(this.username);
    this._httpService.getUserInfo(this.username)
      .subscribe(user => {
        this.user = user;
        this.notFound = false;
      }, (error) => {
        this.notFound = true;
      });
  }

}
