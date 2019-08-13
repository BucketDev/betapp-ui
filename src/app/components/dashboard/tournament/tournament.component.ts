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
  first: boolean = true;
  last: boolean = true;
  pages: number[];
  pageNumber: number;
  user: FireBaseUser;

  constructor(public afAuth:AngularFireAuth,
              private router: Router,
              private tournamentParticipants: TournamentParticipantsService) {
    this.afAuth.authState.subscribe((user: FireBaseUser) => {
      if(user) {
        this.user = user;
        this.findTournaments(0);
      }
    });
  }
  findPrevTournaments = () => this.findTournaments(this.pageNumber - 1);

  findNextTournaments = () => this.findTournaments(this.pageNumber + 1);

  findTournaments = (page: number) => {
    this.tournaments = null;
    this.tournamentParticipants.findByParticipantUid(this.user.uid, page).subscribe((data: any) => {
      this.tournaments = data['content'];
      this.first = data['first'];
      this.last = data['last'];
      this.pageNumber = data['number'];
      this.pages = Array.from(Array(data['totalPages'])).map((x, i) => i )
    })
  };

  ngOnInit() {
  }

  viewTournament = (tournament: TournamentParticipants) => this.router.navigate(['tournament', tournament.uid]);

}
