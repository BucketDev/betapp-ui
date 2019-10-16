import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User as FireBaseUser} from 'firebase/app';

import { NotificationUsersService } from '../../../providers/user/user-notification.service';
import { NoificationUser } from '../../../interfaces/notification/notification-user.interface';
import { Notification } from '../../../interfaces/notification/notification.interface';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit, OnDestroy {
  
  userSubscription: Subscription;
  notifications: NoificationUser[];

  constructor(private userNotificationService: NotificationUsersService,
              private afAuth: AngularFireAuth) {
      this.userSubscription = this.afAuth.authState.subscribe((user: FireBaseUser) => 
        user && this.userNotificationService.findByUserUid(user.uid)
            .subscribe((notifications: NoificationUser[]) => this.notifications = notifications)
      );
    }
    
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit() {
  }

}
