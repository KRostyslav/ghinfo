import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {HttpService} from '../../service/http.service';

@Component({
  selector: 'gh-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: User;

  constructor(private _httpService: HttpService) {
    this._httpService.getUserInfo('krostyslav')
      .subscribe((data) => {
        console.info(data);
        this.user = data
      }, (error) => {
        console.log(error);
      });
  }

  ngOnInit() {}

}
