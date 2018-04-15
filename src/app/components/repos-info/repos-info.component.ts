import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {SortPipe} from '../pipes/sort.pipe';

@Component({
  selector: 'gh-repos-info',
  templateUrl: './repos-info.component.html',
  styleUrls: ['./repos-info.component.scss'],
  pipes: [ SortPipe ]
})
export class ReposInfoComponent implements OnInit, OnDestroy {
  repos;
  username;
  private sub;

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
        console.info(data);
      }, (error) => {
        console.log(error);
      });
  }

  sortOnClick(name) {
    console.log('sort by ', name);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
