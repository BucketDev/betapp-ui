import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserNotificationService {

  private url: string = `${environment.endpointURL}/userNotifications`

  constructor(private http: HttpClient) { }

  findByUid = (uid: string) => this.http.get(`${this.url}/uid/${uid}`);
}
