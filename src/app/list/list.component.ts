import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: any;
  constructor(private api: ApiService) {

  }
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.api.getAllUsers().subscribe(
      {
        next: result => {
          console.log(result);
          this.users = result;
        }, error: err => {
          console.error(err);
          alert(err);
        }
      }
    )
  }
}
