import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { faEllipsisV, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';

import { TournamentDetailsService } from '../../../../../providers/tournament/tournament-details.service';
import { MatchParticipantsService } from '../../../../../providers/match/match-participants.service';
import { MatchParticipants } from '../../../../../interfaces/match/match-participants.interface';
import { TournamentDetails } from '../../../../../interfaces/tournament/tournament-details.interface';
import { PlayoffStage } from '../../../../../interfaces/types/playoff-stage.enum';
import { SavingButtonComponent } from '../../../../shared/saving-button/saving-button.component';
import { MatchParticipantsUpdateComponent } from './match-participants-update/match-participants-update.component';
import { MatchParticipantsDateComponent } from './match-participants-date/match-participants-date.component';

@Component({
  selector: 'app-match-participants',
  templateUrl: './match-participants.component.html',
  styleUrls: []
})
export class MatchParticipantsComponent implements OnInit {
  
  faEllipsisV = faEllipsisV;
  faChevronCircleLeft = faChevronCircleLeft;
  faChevronCircleRight = faChevronCircleRight;
  tournament: TournamentDetails;
  rounds: any;
  round: MatchParticipants[];
  pages = [];
  pageNumber: number = 0;
  loading: boolean = true;
  @Input() playoffStage: PlayoffStage;
  @ViewChild(SavingButtonComponent, { static: true }) savingButton: SavingButtonComponent;

  constructor(public tournamentDetailsService: TournamentDetailsService,
              private matchParticipantsService: MatchParticipantsService,
              private snackBar: MatSnackBar,
              private bottomSheet: MatBottomSheet,
              public dialog: MatDialog) {
      this.tournament = this.tournamentDetailsService.tournament;
  }

  ngOnInit() {
    if (!this.playoffStage)
      this.matchParticipantsService.findAllByTournamentId(this.tournament.id)
        .subscribe(this.initializeRounds);
    else
      this.matchParticipantsService.findAllPlayoffsByTournamentId(this.tournament.id)
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
    

  showUpdateMatch = (match: MatchParticipants) => {
    if (this.tournamentDetailsService.isCreator() && match.registeredTime === null) {
      let ref = this.bottomSheet.open(MatchParticipantsUpdateComponent, { data: { match } });
      ref.afterDismissed().subscribe(this.updatedMatch);
    }
  }

  showUpdateDate = (match: MatchParticipants) => {
    if (this.tournamentDetailsService.isCreator() && match.registeredTime === null) {
      let ref = this.dialog.open(MatchParticipantsDateComponent, { data: { match } });
      ref.afterClosed().subscribe(this.updatedMatch);
    }
  }

  updatedMatch  = (match: MatchParticipants) => {
    if (match !== undefined) {
      this.round = this.rounds[this.pages[this.pageNumber]]
        .map((_match: MatchParticipants) => (_match.id === match.id) ? match : _match);
      this.rounds[this.pages[this.pageNumber]] = this.round;
      this.snackBar.open('The match has been saved correctly', 'Okay!', {
          duration: 2000,
          horizontalPosition: 'right'
        });
    }
  }

}
