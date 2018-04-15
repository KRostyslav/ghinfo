import {Component} from '@angular/core';

import {HttpService} from '../../service/http.service';

@Component({
  selector: 'gh-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent  {

  user;
  notFound = true;
  username = `torvalds`;

  constructor(private _httpService: HttpService) {
    this.searchUser();
  }

  /**
   * Method for search user informations
   */
  searchUser() {
    this._httpService.getUserInfo(this.username)
      .subscribe(user => {
        this.user = user;
        this.notFound = false;
      }, (error) => {
        this.notFound = true;
      });
  }

}
