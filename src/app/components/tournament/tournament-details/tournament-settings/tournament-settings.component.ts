import { Component, OnInit } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import { TournamentDetailsService } from '../../../../providers/tournament-details.service';
import { TournamentSettingsService } from '../../../../providers/tournament-settings.service';

import { TournamentDetails } from '../../../../interfaces/tournament-details.interface';
import { TournamentSettings } from '../../../../interfaces/tournament-settings.interface';
import { PlayoffStage } from '../../../../interfaces/playoff-stage.enum';

@Component({
  selector: 'app-tournament-settings',
  templateUrl: './tournament-settings.component.html',
  styleUrls: ['./tournament-settings.component.css']
})
export class TournamentSettingsComponent implements OnInit {

  faSave = faSave;
  tournament: TournamentDetails;
  tournamentSettings: TournamentSettings;

  playoffStages = PlayoffStage;
  keys = Object.keys;
  showSemifinals: boolean = true;
  showQuarterFinals: boolean = true;
  showEighthFinals: boolean = true;

  constructor(private tournamentDetailsService: TournamentDetailsService,
              private tournamentSettingsService: TournamentSettingsService) {
    this.tournament = this.tournamentDetailsService.tournament;
  }

  ngOnInit() {
    if(this.tournament.tournamentSettings === null)
      this.tournamentSettings = {
        tournamentId: this.tournament.id,
        groupRoundTrip: false,
        groupNumber: 1,
        first: 1
      }
    else
      this.tournamentSettings = this.tournament.tournamentSettings;
  }

  stageSelected = (value: string) => {
    let stage = PlayoffStage[value];
    this.tournamentSettings.playoffStage = stage;
    switch(stage) {
      case PlayoffStage.EIGHTH_FINALS:
        this.showEighthFinals = true;
        this.showQuarterFinals = true;
        this.showSemifinals = true;
      break;
      case PlayoffStage.QUARTER_FINALS:
        this.showEighthFinals = false;
        this.showQuarterFinals = true;
        this.showSemifinals = true;
      break;
      case PlayoffStage.SEMIFINALS:
        this.showEighthFinals = false;
        this.showQuarterFinals = false;
        this.showSemifinals = true;
      break;
      case PlayoffStage.FINALS:
        this.showEighthFinals = false;
        this.showQuarterFinals = false;
        this.showSemifinals = false;
      break;
    }
  }

  saveSettings = () => this.tournamentSettingsService.upsert(this.tournamentSettings)
    .subscribe((data: TournamentSettings) => {
      this.tournamentSettings = data
    });

}
