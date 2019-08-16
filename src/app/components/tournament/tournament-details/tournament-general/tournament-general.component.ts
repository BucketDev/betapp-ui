import { Component, OnInit } from '@angular/core';

import { faPlusCircle, faRocket } from '@fortawesome/free-solid-svg-icons';

import { FireAuthService } from '../../../../providers/fire-auth.service';
import { TournamentDetailsService } from '../../../../providers/tournament-details.service';
import { TournamentService } from '../../../../providers/tournament.service';
import { TournamentStage } from '../../../../interfaces/tournament-stage.enum';
import { TournamentDetails } from '../../../../interfaces/tournament-details.interface';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-tournament-general',
  templateUrl: './tournament-general.component.html',
  styleUrls: ['./tournament-general.component.css']
})
export class TournamentGeneralComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  faRocket = faRocket;
  tournament: TournamentDetails;

  constructor(private tournamentService: TournamentService,
              private snackBar: MatSnackBar,
              public auth: FireAuthService,
              public tournamentDetailsService: TournamentDetailsService) {
    this.tournament = this.tournamentDetailsService.tournament;
  }

  ngOnInit() {

  }

  startGroupStage = () => this.tournamentService
    .stage({
      id: this.tournament.id,
      uid: this.tournament.uid,
      tournamentStage: "GROUP_STAGE"
    })
    .subscribe(() => this.snackBar.open(`${TournamentStage.GROUP_STAGE} has been initialized`, "Okay!", {
      duration: 2000,
      horizontalPosition: 'end'
    }));

    startFinalsStage = () => this.tournamentService
      .stage({
        id: this.tournament.id,
        uid: this.tournament.uid,
        tournamentStage: "FINALS_STAGE"
      })
      .subscribe(() => this.snackBar.open(`${TournamentStage.FINALS_STAGE} has been initialized`, "Okay!", {
        duration: 2000,
        horizontalPosition: 'end'
      }));

}
