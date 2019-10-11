import { Component, OnInit } from '@angular/core';

import { TournamentDetailsService } from '../../../../providers/tournament/tournament-details.service';
import { LeaderboardService } from '../../../../providers/leaderboard/leaderboard.service';

import { Leaderboard } from '../../../../interfaces/leaderboard/leaderboard.interface';

@Component({
  selector: 'app-tournament-leaderboard',
  templateUrl: './tournament-leaderboard.component.html',
  styles: []
})
export class TournamentLeaderboardComponent implements OnInit {

  leaderboard: Leaderboard[];

  constructor(private tournamentDetailsService: TournamentDetailsService,
              private leaderboardService: LeaderboardService) {
    this.leaderboardService.findAllByTournamentId(this.tournamentDetailsService.tournament.id)
      .subscribe((leadetboard: Leaderboard[]) => this.leaderboard = leadetboard);
  }

  ngOnInit() {
  }

}
