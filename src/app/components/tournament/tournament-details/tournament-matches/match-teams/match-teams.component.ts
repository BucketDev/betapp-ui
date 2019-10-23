import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faEllipsisV, faClock, faPenAlt, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';

import { TournamentDetailsService } from '../../../../../providers/tournament/tournament-details.service';
import { MatchTeamsService } from '../../../../../providers/match/match-teams.service';
import { MatchResultsService } from '../../../../../providers/match/match-results.service';
import { MatchTeams } from '../../../../../interfaces/match/match-teams.interface';
import { TournamentDetails } from '../../../../../interfaces/tournament/tournament-details.interface';
import { PlayoffStage } from '../../../../../interfaces/types/playoff-stage.enum';
import { SavingButtonComponent } from '../../../../shared/saving-button/saving-button.component';
import { MatchTeamsUpdateComponent } from './match-teams-update/match-teams-update.component';
import { MatchTeamsDateComponent } from './match-teams-date/match-teams-date.component';

@Component({
  selector: 'app-match-teams',
  templateUrl: './match-teams.component.html',
  styleUrls: []
})
export class MatchTeamsComponent implements OnInit {
  
  faEllipsisV = faEllipsisV;
  faClock = faClock;
  faPenAlt = faPenAlt;
  faMoneyBillAlt = faMoneyBillAlt;
  tournament: TournamentDetails;
  rounds = [];
  loading: boolean = true;
  roundNumber: number = 0;
  matchTeamId: number;
  @Input() playoffStage: PlayoffStage;
  @ViewChild(SavingButtonComponent, { static: true }) savingButton: SavingButtonComponent;

  constructor(public tournamentDetailsService: TournamentDetailsService,
              private matchTeamsService: MatchTeamsService,
              private matchResultsService: MatchResultsService,
              private snackBar: MatSnackBar,
              private bottomSheet: MatBottomSheet,
              public dialog: MatDialog) {
      this.tournament = this.tournamentDetailsService.tournament;
  }

  ngOnInit() {
    if (!this.playoffStage)
      this.matchTeamsService.findAllByTournamentId(this.tournament.id)
        .subscribe(this.initializeRounds);
    else
      this.matchTeamsService.findAllPlayoffsByTournamentId(this.tournament.id)
          .subscribe(this.initializeRounds);
  }

  initializeRounds = (rounds: any) => {
    if (this.playoffStage) {
      for (let i = 0; i < Object.keys(rounds).length; i++)
        this.rounds.push(rounds[Object.keys(rounds)[i]]);
    } else {
      for (let i = 1; i <= Object.keys(rounds).length; i++)
        this.rounds.push(rounds[i]);
    }
    this.loading = false;
  }

  showRound = (roundNumber: number) => this.roundNumber = roundNumber;

  showUpdateMatch = (match: MatchTeams, isABet: boolean = false) => {
    if (isABet || this.tournamentDetailsService.isCreator() && match.registeredTime === null) {
      this.bottomSheet.open(MatchTeamsUpdateComponent, { data: { match, isABet } })
        .afterDismissed().subscribe(this.updatedMatch);
    }
  }

  showUpdateDate = (match: MatchTeams, isABet: boolean = false) => {
    if (this.tournamentDetailsService.isCreator() && match.registeredTime === null) {
      this.dialog.open(MatchTeamsDateComponent, { data: { match } })
        .afterClosed().subscribe(this.updatedMatch);
    }
  }

  updatedMatch  = (match: MatchTeams) => {
    if (match !== undefined) {
      this.rounds[this.roundNumber] = this.rounds[this.roundNumber]
        .map((_match: MatchTeams) => (_match.id === match.id) ? match : _match);
      this.snackBar.open('The match has been saved correctly', 'Okay!', {
          duration: 2000,
          horizontalPosition: 'right'
        });
    }
  }

}
