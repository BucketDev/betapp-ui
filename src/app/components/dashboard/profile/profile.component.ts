import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User as FireBaseUser } from 'firebase/app';

import { UserService } from '../../../providers/user.service';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private afAuth: AngularFireAuth,
              private userService: UserService) {
    this.afAuth.authState.subscribe((user: FireBaseUser) => {
      if(user)
      this.userService.findByUid(user.uid)
        .subscribe((user: User) => this.user = user);
    });
  }

  ngOnInit() { }

}
