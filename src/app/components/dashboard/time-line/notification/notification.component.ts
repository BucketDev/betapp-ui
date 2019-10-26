import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { NotificationLikesService } from '../../../../providers/notification/notification-likes.service';

import { NoitficationUser } from '../../../../interfaces/notification/notification-user.interface';

import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  faHeart = faHeart;
  @Input() notificationUser: NoitficationUser
  @ViewChild(CommentsComponent, {static: false}) expansionComment: CommentsComponent;

  constructor(private notificationLikesService: NotificationLikesService) { }

  ngOnInit() {
  }

  comment = () => 
    this.expansionComment.startCommenting();

  like = () => {
    this.notificationUser.liked = !this.notificationUser.liked;
    this.notificationUser.likes += this.notificationUser.liked ? 1 : -1;
    if(this.notificationUser.liked)
      this.notificationLikesService.create(this.notificationUser.notification.id).subscribe();
    else
      this.notificationLikesService.delete(this.notificationUser.notification.id).subscribe();
  }

}
