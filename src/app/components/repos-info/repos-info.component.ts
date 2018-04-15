import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {HttpService} from '../../service/http.service';

@Component({
  selector: 'gh-repos-info',
  templateUrl: './repos-info.component.html',
  styleUrls: ['./repos-info.component.scss']
})
export class ReposInfoComponent implements OnInit {
  repos;
  username;
  private sub;
  key = `forks_count`;
  reserve = true;

  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.username = params[`username`];
    });
    this.getRepos();
  }

  /**
   * Method get array of repos information
   */
  getRepos() {
    this._httpService.getUserRepos(this.username)
      .subscribe((data) => {
        this.repos = data;
      }, (error) => {
        console.log(error);
      });
  }

  /**
   * Method which select key for sorting data in table
   * @param key
   */
  sortOnClick(key) {
    this.key = key;
    this.reserve = !this.reserve;
  }

}
