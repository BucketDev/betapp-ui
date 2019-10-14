import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../../../../interfaces/user/user.interface';

@Component({
  selector: 'app-following-list',
  templateUrl: './following-list.component.html',
  styles: []
})
export class FollowingListComponent implements OnInit {

  @Input() users: User[];
  @Output() userSelectedEvent = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {}

  userSelected = (user: User) => this.userSelectedEvent.emit(user);

}
