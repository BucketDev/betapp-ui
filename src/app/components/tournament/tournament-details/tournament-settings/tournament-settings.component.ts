import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { TournamentDetailsService } from '../../../../providers/tournament-details.service';
import { TournamentSettingsService } from '../../../../providers/tournament-settings.service';
import { TournamentService } from '../../../../providers/tournament.service';

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
  faTrashAlt = faTrashAlt;
  deleteClicked: boolean = false;

  constructor(private tournamentDetailsService: TournamentDetailsService,
              private tournamentSettingsService: TournamentSettingsService,
              private router: Router,
              private tournamentService: TournamentService) {
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

  deleteTournament = () => {
    if(this.deleteClicked)
      this.tournamentService.delete(this.tournament.uid).
        subscribe(() => this.router.navigate(["/dashboard"]));
    else {
      this.deleteClicked = true;
      setTimeout(() => this.deleteClicked = false, 2000);
    }
  }

}
