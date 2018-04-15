import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {SortPipe} from '../../pipes/sort.pipe';
import {HttpService} from '../../service/http.service';
import {Repo} from '../../model/repo';

@Component({
  selector: 'gh-repos-info',
  templateUrl: './repos-info.component.html',
  styleUrls: ['./repos-info.component.scss']
})
export class ReposInfoComponent implements OnInit, OnDestroy {
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
      this.username = params['username'];
    });
    this._httpService.getUserRepos(this.username)
      .subscribe((data) => {
        this.repos = data;
      }, (error) => {
        console.log(error);
      });
  }

  sortOnClick(key) {
    this.key = key;
    this.reserve = !this.reserve;
  }

  ngOnDestroy() {
  }

}
