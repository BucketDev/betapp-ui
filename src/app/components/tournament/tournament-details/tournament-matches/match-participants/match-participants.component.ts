import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { faEllipsisV, faClock, faPenAlt, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';

import { TournamentDetailsService } from '../../../../../providers/tournament-details.service';
import { MatchParticipantsService } from '../../../../../providers/match-participants.service';
import { MatchParticipants } from '../../../../../interfaces/match-participants.interface';
import { TournamentDetails } from '../../../../../interfaces/tournament-details.interface';
import { PlayoffStage } from '../../../../../interfaces/playoff-stage.enum';
import { SavingButtonComponent } from '../../../../shared/saving-button/saving-button.component';
import { MatchParticipantsUpdateComponent } from './match-participants-update/match-participants-update.component';
import { MatchParticipantsDateComponent } from './match-participants-date/match-participants-date.component';

@Component({
  selector: 'app-match-participants',
  templateUrl: './match-participants.component.html',
  styleUrls: ['./match-participants.component.css']
})
export class MatchParticipantsComponent implements OnInit {
  
  faEllipsisV = faEllipsisV;
  faClock = faClock;
  faPenAlt = faPenAlt;
  faMoneyBillAlt = faMoneyBillAlt;
  tournament: TournamentDetails;
  rounds = [];
  matches: MatchParticipants[];
  loading: boolean = true;
  roundNumber: number = 0;
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
        .subscribe((data: any) => this.initializeRounds(data));
    else
      this.matchParticipantsService.findAllPlayoffsByTournamentId(this.tournament.id)
          .subscribe((data: any) => this.initializeRounds(data));
  }

  initializeRounds = (rounds: any) => {
    if (this.playoffStage) {
      for (let i = 0; i < Object.keys(rounds).length; i++)
        this.rounds.push(rounds[Object.keys(rounds)[i]]);
    } else {
      for (let i = 1; i <= Object.keys(rounds).length; i++)
        this.rounds.push(rounds[i]);
    }
    this.matches = this.rounds[this.roundNumber];
    this.loading = false;
}

  showRound = (roundNumber: number) => {
    this.roundNumber = roundNumber;
    this.matches = this.rounds[roundNumber];
  }

  showUpdateMatch = (match: MatchParticipants) => {
    if (this.tournamentDetailsService.isCreator() && match.registeredTime === null) {
      let ref = this.bottomSheet.open(MatchParticipantsUpdateComponent, { data: { match } });
      ref.afterDismissed().subscribe(this.updatedMatch);
    }
  }

  showUpdateDate = (match: MatchParticipants) => {
    console.log(match);
    
    if (this.tournamentDetailsService.isCreator() && match.registeredTime === null) {
      let ref = this.dialog.open(MatchParticipantsDateComponent, { data: { match } });
      ref.afterClosed().subscribe(this.updatedMatch);
    }
  }

  updatedMatch  = (match: MatchParticipants) => {
    if (match !== undefined) {
      this.matches = this.matches.map((_match: MatchParticipants) => (_match.id === match.id) ? match : _match);
      this.snackBar.open('The match has been saved correctly', 'Okay!', {
          duration: 2000,
          horizontalPosition: 'right'
        });
    }
  }

}
