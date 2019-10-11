import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../../../providers/shared/fire-auth.service';


@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: FireAuthService) {
  }

  ngOnInit() { }

}
