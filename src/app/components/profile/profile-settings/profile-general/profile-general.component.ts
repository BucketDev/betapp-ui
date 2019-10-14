import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireAuthService } from '../../../../providers/shared/fire-auth.service';
import { UserService } from '../../../../providers/user/user.service';

import { User } from '../../../../interfaces/user/user.interface';

import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { SavingButtonComponent } from '../../../../components/shared/saving-button/saving-button.component';

@Component({
  selector: 'app-profile-general',
  templateUrl: './profile-general.component.html',
  styleUrls: []
})
export class ProfileGeneralComponent implements OnInit {

  faCameraRetro = faCameraRetro;
  uploadingPhoto: boolean = false;
  uploadPath: string;
  user: User;
  @ViewChild(SavingButtonComponent, { static: true }) savingButton: SavingButtonComponent;

  constructor(private activatedRoute: ActivatedRoute,
              public auth: FireAuthService,
              private router: Router,
              private userService: UserService) {
    this.activatedRoute.parent.params.subscribe((params => {
      let uid = params['uid'];
      if (uid !== this.auth.user.uid)
        this.router.navigate(["/dashboard"]);
      this.uploadPath = `profile/${uid}`;
      this.user = Object.assign({}, this.auth.user);
    }));
  }

  ngOnInit() { }

  isProvider = () => this.auth.user.provider !== 'password'

  saveProfile = () => this._saveProfile();

  showUploadPhoto = () => this.uploadingPhoto = true;

  updatePhotoURL = (photoUrl: string) => {
    this.user.photoUrl = photoUrl;
    this.uploadingPhoto = false;
    this.savingButton.saving = true;
    this._saveProfile();
  }

  _saveProfile = () => this.userService.update(this.user)
    .subscribe((data: User) => {
      this.auth.user = data;
      this.savingButton.setSaved();
    });

}
