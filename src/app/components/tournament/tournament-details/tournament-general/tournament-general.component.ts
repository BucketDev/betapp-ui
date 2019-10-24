import { Component, OnInit } from '@angular/core';

import { faPlusCircle, faRocket } from '@fortawesome/free-solid-svg-icons';

import { FireAuthService } from '../../../../providers/shared/fire-auth.service';
import { TournamentDetailsService } from '../../../../providers/tournament/tournament-details.service';
import { TournamentService } from '../../../../providers/tournament/tournament.service';
import { TournamentStage } from '../../../../interfaces/types/tournament-stage.enum';
import { TournamentDetails } from '../../../../interfaces/tournament/tournament-details.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tournament-general',
  templateUrl: './tournament-general.component.html',
  styleUrls: ['./tournament-general.component.css']
})
export class TournamentGeneralComponent {

  faPlusCircle = faPlusCircle;
  faRocket = faRocket;
  tournament: TournamentDetails;

  constructor(private tournamentService: TournamentService,
              private snackBar: MatSnackBar,
              public auth: FireAuthService,
              private router: Router,
              public tournamentDetailsService: TournamentDetailsService) {
    this.tournament = this.tournamentDetailsService.tournament;
  }

  startGroupStage = () => this.tournamentService
    .stage({
      id: this.tournament.id,
      uid: this.tournament.uid,
      tournamentStage: "GROUP_STAGE"
    })
    .subscribe(() => {
      this.snackBar.open(`${TournamentStage.GROUP_STAGE} has been initialized`, "Okay!", {
        duration: 2000,
        horizontalPosition: 'end'
      });
      this.router.navigate([`/tournament/${this.tournament.uid}/matches`]);
    }, () => this.snackBar.open(`There was soemthing wrong!`, "", {
      duration: 2000,
      horizontalPosition: 'end'
    }));

    startFinalsStage = () => this.tournamentService
      .stage({
        id: this.tournament.id,
        uid: this.tournament.uid,
        tournamentStage: "PLAYOFF_STAGE"
      })
      .subscribe(() => {
        this.snackBar.open(`${TournamentStage.PLAYOFF_STAGE} has been initialized`, "Okay!", {
          duration: 2000,
          horizontalPosition: 'end'
        });
        this.router.navigate([`/tournament/${this.tournament.uid}/matches`]);
    }, () => this.snackBar.open(`There was soemthing wrong!`, "", {
      duration: 2000,
      horizontalPosition: 'end'
    }));

  hideStartGroup = () => {
    return TournamentStage[this.tournament.tournamentStage] !== TournamentStage.NEW_TOURNAMENT;
  }

  hideStartPlayoff = () => {
    return TournamentStage[this.tournament.tournamentStage] === TournamentStage.PLAYOFF_STAGE ||
      TournamentStage[this.tournament.tournamentStage] === TournamentStage.FINISHED_TOURNAMENT;
  }

}
