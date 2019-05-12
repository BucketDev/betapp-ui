import { Component, OnInit } from '@angular/core';

import { faSave, faTimesCircle, faLock, faLockOpen, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

import { TournamentService } from '../../../providers/tournament.service';
import { FireAuthService } from '../../../providers/fire-auth.service';

import { Tournament } from '../../../interfaces/tournament.interface';
import { TournamentPrivacy } from '../../../interfaces/tournament-privacy.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-tournament',
  templateUrl: './new-tournament.component.html',
  styleUrls: ['./new-tournament.component.css']
})
export class NewTournamentComponent implements OnInit {

  faSave = faSave;
  faTimesCircle = faTimesCircle;
  faLock = faLock;
  faLockOpen = faLockOpen;
  faGlobeAmericas = faGlobeAmericas;
  tournament: Tournament;
  photoUrl: string;

  constructor(private tournamentService: TournamentService,
              private auth: FireAuthService,
              private router: Router) {
    this.tournament = {
      title: '',
      tournamentPrivacy: TournamentPrivacy.PRIVATE,
      tournamentGroups: true,
      tournamentTeams: false
    }
  }

  ngOnInit() {
  }

  logoUploaded = (photoUrl: string) => this.tournament.photoUrl = photoUrl;

  privacyChanged = (element: HTMLInputElement) => {
    switch(parseInt(element.getAttribute('attr-privacy'))) {
      case 0: this.tournament.tournamentPrivacy = TournamentPrivacy.PUBLIC; break;
      case 1: this.tournament.tournamentPrivacy = TournamentPrivacy.PRIVATE; break;
      case 2: this.tournament.tournamentPrivacy = TournamentPrivacy.SECRET; break;
    }
    element.classList.add('active');
    Array.from(document.getElementsByClassName('list-group-item'))
      .forEach((input: HTMLInputElement) => element !== input && input.classList.remove('active'));
  }

  saveTournament = () => {
    this.tournament.userCreationId = this.auth.user.userId;
    this.tournamentService.save(this.tournament)
    .subscribe((data: Tournament) => {
      this.router.navigate(['tournament/', data.uid]);
      console.log(data);
    });
  }

}
