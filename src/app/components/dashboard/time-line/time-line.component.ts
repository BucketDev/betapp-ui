import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User as FireBaseUser} from 'firebase/app';

import { UserNotificationService } from '../../../providers/user/user-notification.service';
import { UserNotification } from '../../../interfaces/user/user-notification.interface';
import { Notification } from '../../../interfaces/notification/notification.interface';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit, OnDestroy {
  
  userSubscription: Subscription;
  notifications: Notification[];

  constructor(private userNotificationService: UserNotificationService,
    private afAuth: AngularFireAuth) {
      this.userSubscription = this.afAuth.authState.subscribe((user: FireBaseUser) => 
        user && this.userNotificationService.findByUid(user.uid)
            .subscribe((user: UserNotification) => this.notifications = user.notifications)
      );
    }
    
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit() {
  }

}
