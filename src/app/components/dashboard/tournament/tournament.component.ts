import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User as FireBaseUser } from 'firebase/app';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { TournamentParticipantsService } from '../../../providers/tournament-participants.service';

import { TournamentParticipants } from '../../../interfaces/tournament-participants.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  tournaments: TournamentParticipants[];

  constructor(public afAuth:AngularFireAuth,
              private router: Router,
              private tournamentParticipants: TournamentParticipantsService) {
    this.afAuth.authState.subscribe((user: FireBaseUser) => {
      if(user) {
        this.tournamentParticipants.findByParticipantUid(user.uid)
          .subscribe((data: TournamentParticipants[]) => this.tournaments = data);
      }
    });
  }

  ngOnInit() {
  }

  viewTournament = (tournament: TournamentParticipants) => this.router.navigate(['tournament', tournament.uid]);

}
