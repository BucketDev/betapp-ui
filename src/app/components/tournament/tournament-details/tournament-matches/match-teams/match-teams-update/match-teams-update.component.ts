import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { FireAuthService } from '../../../../../../providers/fire-auth.service';
import { MatchTeamsService } from '../../../../../../providers/match-teams.service';
import { MatchResultsService } from '../../../../../../providers/match-results.service';
import { MatchTeams } from '../../../../../../interfaces/match-teams.interface';
import { MatchResult } from '../../../../../../interfaces/match-result.interface';

@Component({
  selector: 'app-match-teams-update',
  templateUrl: './match-teams-update.component.html',
  styleUrls: []
})
export class MatchTeamsUpdateComponent implements OnInit {

  match: MatchTeams;
  isABet: boolean = false;
  title: string;

  constructor(private bottomSheetRef: MatBottomSheetRef<MatchTeamsUpdateComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: {match: MatchTeams, isABet: boolean},
              private matchTeamsService: MatchTeamsService,
              private matchResultsService: MatchResultsService,
              private auth: FireAuthService) {
    this.isABet = data.isABet;
    this.title = this.isABet ? 'Make a Bet': 'Input Result';
    this.match = Object.assign({}, data.match);
    if(this.isABet) {
      this.match.scoreAway = data.match.matchResult ? this.match.matchResult.scoreAway : null;
      this.match.scoreHome = data.match.matchResult ? this.match.matchResult.scoreHome : null;
    } else {
      this.match.scoreAway = null;
      this.match.scoreHome = null;
    }
  }

  ngOnInit() {
  }

  saveMatch = (form: NgForm) => {
    if (this.isABet) {
      let matchResult: MatchResult = {
        id: this.match.matchResult ? this.match.matchResult.id : 0,
        userId: this.auth.user.id,
        matchTeamsId: this.match.id,
        scoreAway: this.match.scoreAway,
        scoreHome: this.match.scoreHome,
        tournamentId: this.match.tournamentId,
        points: 0
      }
      this.matchResultsService.update(matchResult)
        .subscribe((data: MatchResult) => {
          this.data.match.matchResult = matchResult;
          this.bottomSheetRef.dismiss(data)
        })
    }
    else
      this.matchTeamsService.update(this.match)
        .subscribe((data: MatchTeams) =>  this.bottomSheetRef.dismiss(data))
  }

}
