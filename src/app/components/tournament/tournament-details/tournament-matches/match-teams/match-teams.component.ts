import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { faEllipsisV, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';

import { TournamentDetailsService } from '../../../../../providers/tournament/tournament-details.service';
import { MatchTeamsService } from '../../../../../providers/match/match-teams.service';
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
  faChevronCircleLeft = faChevronCircleLeft;
  faChevronCircleRight = faChevronCircleRight;
  tournament: TournamentDetails;
  rounds: any;
  round: MatchTeams[];
  pages = [];
  pageNumber: number = 0;
  loading: boolean = true;
  matchTeamId: number;
  @Input() playoffStage: PlayoffStage;
  @ViewChild(SavingButtonComponent, { static: true }) savingButton: SavingButtonComponent;

  constructor(public tournamentDetailsService: TournamentDetailsService,
              private matchTeamsService: MatchTeamsService,
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
    this.rounds = rounds;
    for (let i = 0; i < Object.keys(rounds).length; i++) {
      this.pages.push(Object.keys(rounds)[i]);
    }
    this.showRound(0);
    this.loading = false;
  }

  showRound = (pageNumber: number) => {
    this.pageNumber = pageNumber;
    this.round = this.rounds[this.pages[this.pageNumber]];
  }

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
      this.round = this.rounds[this.pages[this.pageNumber]]
        .map((_match: MatchTeams) => (_match.id === match.id) ? match : _match);
      this.snackBar.open('The match has been saved correctly', 'Okay!', {
          duration: 2000,
          horizontalPosition: 'right'
        });
    }
  }

}
