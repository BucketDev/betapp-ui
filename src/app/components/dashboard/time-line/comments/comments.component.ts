import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

import { FireAuthService } from '../../../../providers/shared/fire-auth.service';
import { NotificationCommentsService } from '../../../../providers/notification/notification-comments.service';
import { NotificationComment } from '../../../../interfaces/notification/notification-comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  faCommentAlt = faCommentAlt;
  @Input() notificationId: number;
  commenting: boolean = false
  loading: boolean = false;
  comments: NotificationComment[];
  comment: NotificationComment;
  @ViewChild('inputComment', {static: true}) inputComment: ElementRef;

  constructor(private notificationCommentsService: NotificationCommentsService,
              private auth: FireAuthService) {
  }

  ngOnInit() {
    this.comment = {
      notificationId: this.notificationId,
      user: this.auth.user,
      comment: ''
    }
  }

  afterExpand = () => {
    this.loading = true;
    this.notificationCommentsService.findAllByNotificationId(this.notificationId)
      .subscribe((data: NotificationComment[]) => {
        this.comments = data;
        this.loading = false;
        if (this.commenting)
          setTimeout(() => {
            (<HTMLElement> this.inputComment.nativeElement).focus();
            (<HTMLElement> this.inputComment.nativeElement).scrollIntoView();
          }, 200);
      });
  }

  addComment = () => {
    this.loading = true;
    this.notificationCommentsService.save(this.comment)
      .subscribe((data: NotificationComment) => {
        this.comment.comment = '';
        this.comments.push(data);
        this.loading = false;
      })
  }

  startCommenting = () => this.commenting = true

}
