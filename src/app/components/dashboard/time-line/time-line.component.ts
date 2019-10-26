import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User as FireBaseUser} from 'firebase/app';

import { NotificationUsersService } from '../../../providers/user/user-notification.service';
import { NoitficationUser } from '../../../interfaces/notification/notification-user.interface';
import { Notification } from '../../../interfaces/notification/notification.interface';
import { NotificationType } from '../../../interfaces/notification/notification-type.interface';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit, OnDestroy {
  
  userSubscription: Subscription;
  notifications: NoitficationUser[];

  constructor(private userNotificationService: NotificationUsersService,
              private afAuth: AngularFireAuth,
              private router: Router) {
      this.userSubscription = this.afAuth.authState.subscribe((user: FireBaseUser) => 
        user && this.userNotificationService.findByUserUid(user.uid)
            .subscribe((notifications: NoitficationUser[]) => this.notifications = notifications)
      );
    }
    
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit() {
  }

  goToDestiny = (notification: Notification) => {
    switch(NotificationType[notification.notificationType]) {
      case NotificationType.NEW_TOURNAMENT:
        this.router.navigate(['/tournament', notification.destinyUid]);
        break;
    }
  }
}
