import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { NotificationComment } from '../../interfaces/notification/notification-comment.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationCommentsService {

  private url: string = `${environment.endpointURL}/notificationComments`

  constructor(private http: HttpClient) { }

  findAllByNotificationId = (notificationId: number) => this.http.get(`${this.url}/notification/${notificationId}`);

  save = (comment: NotificationComment) => this.http.post(`${this.url}`, comment);

}
