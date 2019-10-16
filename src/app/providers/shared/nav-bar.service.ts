import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  
  showSideNav: boolean = false;
  showNavBar: boolean = true;
  
  constructor() { }

}
