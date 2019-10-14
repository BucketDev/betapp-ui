import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TournamentDetails } from '../../interfaces/tournament/tournament-details.interface';

import { FireAuthService } from '../../providers/shared/fire-auth.service';
import { TournamentDetailsService } from '../../providers/tournament/tournament-details.service';
import { TournamentService } from '../../providers/tournament/tournament.service';

import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  faCameraRetro = faCameraRetro;
  loading: boolean = true;
  tournament: TournamentDetails;
  uploadingPhoto: boolean = false;
  uploadPath: string;

  constructor(private activatedRoute: ActivatedRoute,
              public auth: FireAuthService,
              private tournamentService: TournamentService,
              public tournamentDetailsService: TournamentDetailsService) {
    this.activatedRoute.params.subscribe((params => {
      this.tournamentDetailsService.findByUid(params['uid'])
        .subscribe((data: TournamentDetails) => {
          this.tournamentDetailsService.tournament = data;
          this.tournament = this.tournamentDetailsService.tournament;
          this.uploadPath = `tournaments/${this.tournament.uid}`
          this.loading = false;
        });
    }));
  }

  ngOnInit() { }

  toggleUploadPhoto = () => this.uploadingPhoto = !this.uploadingPhoto;

  updatePhotoURL = (photoUrl: string) => {
    this.uploadingPhoto = false;
    this.tournament.photoUrl = photoUrl;
    this.tournamentService.updatePhoto({id: this.tournament.id, photoUrl: photoUrl})
      .subscribe((data) => console.log(data));
  }

}
