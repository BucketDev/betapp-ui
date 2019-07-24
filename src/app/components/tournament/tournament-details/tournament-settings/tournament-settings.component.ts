import { Component, OnInit, ViewChild } from '@angular/core';

import { TournamentDetailsService } from '../../../../providers/tournament-details.service';
import { TournamentSettingsService } from '../../../../providers/tournament-settings.service';

import { TournamentDetails } from '../../../../interfaces/tournament-details.interface';
import { TournamentSettings } from '../../../../interfaces/tournament-settings.interface';
import { PlayoffStage } from '../../../../interfaces/playoff-stage.enum';

import { SavingButtonComponent } from '../../../../components/shared/saving-button/saving-button.component';

@Component({
  selector: 'app-tournament-settings',
  templateUrl: './tournament-settings.component.html',
  styleUrls: ['./tournament-settings.component.css']
})
export class TournamentSettingsComponent {

  tournament: TournamentDetails;
  tournamentSettings: TournamentSettings;
  @ViewChild(SavingButtonComponent, { static: false }) savingButton: SavingButtonComponent;

  playoffStages = PlayoffStage;
  keys = Object.keys;
  showSemifinals: boolean = true;
  showQuarterFinals: boolean = true;
  showEighthFinals: boolean = true;

  constructor(private tournamentDetailsService: TournamentDetailsService,
              private tournamentSettingsService: TournamentSettingsService) {
    this.tournament = this.tournamentDetailsService.tournament;
    this.tournamentSettings = this.tournament.tournamentSettings;
    this.showStages(PlayoffStage[this.tournamentSettings.playoffStage])
  }

  stageSelected = (value: string) => this.showStages(PlayoffStage[value]);

  showStages = (stage: string) => {
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

  saveSettings = () => {
    this.tournamentSettingsService.upsert(this.tournamentSettings)
    .subscribe((data: TournamentSettings) => {
      this.tournamentSettings = data;
      this.savingButton.setSaved();
    });
  }

}
