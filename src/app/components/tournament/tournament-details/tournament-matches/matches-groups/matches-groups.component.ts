import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { faEllipsisV, faClock, faPenAlt, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { TournamentDetailsService } from '../../../../../providers/tournament-details.service';
import { MatchParticipantsService } from '../../../../../providers/match-participants.service';
import { MatchParticipants } from '../../../../../interfaces/match-participants.interface';
import { TournamentDetails } from '../../../../../interfaces/tournament-details.interface';
import { PlayoffStage } from '../../../../../interfaces/playoff-stage.enum';
import { MatchUpdateComponent } from './match-update/match-update.component';
import { SavingButtonComponent } from '../../../../../components/shared/saving-button/saving-button.component';
import { MatDialog } from '@angular/material/dialog';
import { MatchDateComponent } from './match-date/match-date.component';

@Component({
  selector: 'app-matches-groups',
  templateUrl: './matches-groups.component.html',
  styleUrls: ['./matches-groups.component.css']
})
export class MatchesGroupsComponent implements OnInit {
  
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
      let ref = this.bottomSheet.open(MatchUpdateComponent, { data: { match } });
      ref.afterDismissed().subscribe(this.updatedMatch);
    }
  }

  showUpdateDate = (match: MatchParticipants) => {
    console.log(match);
    
    if (this.tournamentDetailsService.isCreator() && match.registeredTime === null) {
      let ref = this.dialog.open(MatchDateComponent, { data: { match } });
      ref.afterClosed().subscribe(this.updatedMatch);
    }
  }

  updatedMatch  = (match: MatchParticipants) => {
    console.log(match);
    
    if (match !== undefined) {
      this.matches = this.matches.map((_match: MatchParticipants) => (_match.id === match.id) ? match : _match);
      this.snackBar.open('The match has been saved correctly', 'Okay!', {
          duration: 2000,
          horizontalPosition: 'right'
        });
    }
  }

}
