import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoolSettings } from '../interfaces/pool-settings.interface';

@Injectable({
  providedIn: 'root'
})
export class PoolSettingsService {

  private url: string = 'http://localhost:8080/poolSettings'

  constructor(private http: HttpClient) { }

  upsert = (poolSettings: PoolSettings) => this.http.post(this.url, poolSettings);

}
