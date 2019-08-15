import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { TournamentDetailsService } from '../../../../../providers/tournament-details.service';
import { MatchParticipantsService } from '../../../../../providers/match-participants.service';
import { MatchParticipants } from '../../../../../interfaces/match-participants.interface';
import { TournamentDetails } from '../../../../../interfaces/tournament-details.interface';
import { MatchUpdateComponent } from './match-update/match-update.component';
import { SavingButtonComponent } from '../../../../../components/shared/saving-button/saving-button.component';

@Component({
  selector: 'app-matches-groups',
  templateUrl: './matches-groups.component.html',
  styleUrls: ['./matches-groups.component.css']
})
export class MatchesGroupsComponent implements OnInit {

  tournament: TournamentDetails;
  matches: MatchParticipants[];
  loading: boolean = true;
  @Input() playoffStage: boolean = false;
  @ViewChild(SavingButtonComponent, { static: true }) savingButton: SavingButtonComponent;

  constructor(public tournamentDetailsService: TournamentDetailsService,
              private matchParticipantsService: MatchParticipantsService,
              private snackBar: MatSnackBar,
              private bottomSheet: MatBottomSheet) {
      this.tournament = this.tournamentDetailsService.tournament;
  }

  ngOnInit() {
    if (!this.playoffStage)
      this.matchParticipantsService.findAllByTournamentId(this.tournament.id)
        .subscribe((data: MatchParticipants[]) => {
          this.matches = data;
          this.loading = false;
      });
    else
      this.matchParticipantsService.findAllPlayoffsByTournamentId(this.tournament.id)
        .subscribe((data: MatchParticipants[]) => {
          this.matches = data;
          this.loading = false;
      });
  }

  showUpdateMatch = (match: MatchParticipants) => {
    if (this.tournamentDetailsService.isCreator() && match.registeredTime === null) {
      let ref = this.bottomSheet.open(MatchUpdateComponent, {
        data: {match}
      });
      ref.afterDismissed().subscribe((data: MatchParticipants) => {
        this.matches = this.matches
          .map((_match: MatchParticipants) => (_match.id === data.id) ? data : _match);
        this.snackBar.open('The match has been saved correctly', 'Okay!');
      });
    }
  }

}
