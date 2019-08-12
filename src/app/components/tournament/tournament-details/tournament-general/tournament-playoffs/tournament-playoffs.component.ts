import { Component, OnInit } from '@angular/core';

import { TournamentDetails } from '../../../../../interfaces/tournament-details.interface';
import { TournamentSettings } from '../../../../../interfaces/tournament-settings.interface';
import { PlayoffStage } from '../../../../../interfaces/playoff-stage.enum';
import { TournamentDetailsService } from '../../../../../providers/tournament-details.service';

@Component({
  selector: 'app-tournament-playoffs',
  templateUrl: './tournament-playoffs.component.html',
  styleUrls: ['./tournament-playoffs.component.css']
})
export class TournamentPlayoffsComponent implements OnInit {

  tournament: TournamentDetails;
  tournamentSettings: TournamentSettings;
  playoffStage: PlayoffStage;

  constructor(private tournamentDetailsService: TournamentDetailsService) {
    this.tournament = this.tournamentDetailsService.tournament;
    this.tournamentSettings = this.tournament.tournamentSettings;
    this.playoffStage = PlayoffStage[this.tournamentSettings.playoffStage];
  }

  ngOnInit() { }

  showEightFinals = () => this.playoffStage === PlayoffStage.EIGHTH_FINALS;

  showQuarterFinals = () =>
    this.playoffStage === PlayoffStage.EIGHTH_FINALS ||
    this.playoffStage === PlayoffStage.QUARTER_FINALS;

  showSemiFinals = () =>
    this.playoffStage === PlayoffStage.EIGHTH_FINALS ||
    this.playoffStage === PlayoffStage.QUARTER_FINALS ||
    this.playoffStage === PlayoffStage.SEMIFINALS;

}
