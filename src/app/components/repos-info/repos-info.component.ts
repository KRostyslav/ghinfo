import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../service/http.service';

@Component({
  selector: 'gh-repos-info',
  templateUrl: './repos-info.component.html',
  styleUrls: ['./repos-info.component.scss']
})
export class ReposInfoComponent implements OnInit {

  constructor(private _httpService: HttpService) {
    this._httpService.getUserRepos('krostyslav')
      .subscribe((data) => {
        console.info(data);
      }, (error) => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

}
