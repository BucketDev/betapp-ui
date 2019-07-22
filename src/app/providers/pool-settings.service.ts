import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoolSettings } from '../interfaces/pool-settings.interface';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PoolSettingsService {

  private url: string = `${environment.endpointURL}/poolSettings`

  constructor(private http: HttpClient) { }

  upsert = (poolSettings: PoolSettings) => this.http.post(this.url, poolSettings);

}
