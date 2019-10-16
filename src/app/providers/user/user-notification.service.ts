import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationUsersService {

  private url: string = `${environment.endpointURL}/notificationUsers`

  constructor(private http: HttpClient) { }

  findByUserUid = (uid: string) => this.http.get(`${this.url}/uid/${uid}`);
}
