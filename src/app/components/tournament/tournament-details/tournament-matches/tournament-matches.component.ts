import { Component, OnInit } from '@angular/core';
import { TournamentDetailsService } from '../../../../providers/tournament-details.service';
import { TournamentDetails } from '../../../../interfaces/tournament-details.interface';
import { TournamentSettings } from '../../../../interfaces/tournament-settings.interface';
import { PlayoffStage } from '../../../../interfaces/playoff-stage.enum';

@Component({
  selector: 'app-tournament-matches',
  templateUrl: './tournament-matches.component.html',
  styleUrls: ['./tournament-matches.component.css']
})
export class TournamentMatchesComponent implements OnInit {

  tournament: TournamentDetails;
  tournamentSettings: TournamentSettings;
  playoffStage: PlayoffStage;
  playoffStages = PlayoffStage;
  keys = Object.keys;

  constructor(public tournamentDetailsService: TournamentDetailsService) {
    this.tournament = this.tournamentDetailsService.tournament;
    this.tournamentSettings = this.tournament.tournamentSettings;
    this.playoffStage = PlayoffStage[this.tournamentSettings.playoffStage];
  }

  ngOnInit() {
  }

  showStage = (stage: any) => {
    let _stage = PlayoffStage[stage]
    if (this.playoffStage === _stage)
      return true;
    switch(_stage) {
      case PlayoffStage.QUARTER_FINALS:
        if (this.playoffStage === PlayoffStage['EIGHTH_FINALS'])
          return true;
      break;
      case PlayoffStage.SEMIFINALS:
        if (this.playoffStage === PlayoffStage['EIGHTH_FINALS'] ||
            this.playoffStage === PlayoffStage['QUARTER_FINALS'])
          return true;
      break;
      case PlayoffStage.FINALS:
          return true;
      return false;
    }
  }

}
