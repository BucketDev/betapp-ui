import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireAuthService } from '../../../../providers/fire-auth.service';
import { UserService } from '../../../../providers/user.service';

import { User } from '../../../../interfaces/user.interface';

import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-general',
  templateUrl: './profile-general.component.html',
  styleUrls: ['./profile-general.component.css']
})
export class ProfileGeneralComponent implements OnInit {

  faCameraRetro = faCameraRetro;
  uploadingPhoto: boolean = false;
  uploadPath: string;
  user: User;

  constructor(private activatedRoute: ActivatedRoute,
              public auth: FireAuthService,
              private router: Router,
              private userService: UserService) {
    this.activatedRoute.parent.params.subscribe((params => {
      let uid = params['uid'];
      if (uid !== this.auth.user.uid)
        this.router.navigate(["/dashboard"]);
      this.uploadPath = `profile/${uid}`;
    }));
  }

  ngOnInit() { }

  saveProfile = (form: NgForm) => console.log(form);

  showUploadPhoto = () => this.uploadingPhoto = true;

  updatePhotoURL = (photoUrl: string) => {
    this.uploadingPhoto = false;
    this.user.photoUrl = photoUrl;
    this._saveProfile();
  }

  _saveProfile = () => {}//this.userService.save(this.user);

}
