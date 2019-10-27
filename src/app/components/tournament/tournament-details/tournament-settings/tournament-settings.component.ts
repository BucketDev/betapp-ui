import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { TournamentDetailsService } from '../../../../providers/tournament/tournament-details.service';
import { TournamentSettingsService } from '../../../../providers/tournament/tournament-settings.service';
import { TournamentService } from '../../../../providers/tournament/tournament.service';

import { TournamentDetails } from '../../../../interfaces/tournament/tournament-details.interface';
import { TournamentSettings } from '../../../../interfaces/tournament/tournament-settings.interface';
import { PlayoffStage } from '../../../../interfaces/types/playoff-stage.enum';
import { TournamentStage } from '../../../../interfaces/types/tournament-stage.enum';

import { SavingButtonComponent } from '../../../../components/shared/saving-button/saving-button.component';

@Component({
  selector: 'app-tournament-settings',
  templateUrl: './tournament-settings.component.html',
  styleUrls: ['./tournament-settings.component.css']
})
export class TournamentSettingsComponent {

  faTrashAlt = faTrashAlt;
  tournament: TournamentDetails;
  tournamentSettings: TournamentSettings;
  playoffStages = PlayoffStage;
  tournamentStage = TournamentStage;
  showSemifinals: boolean = true;
  showQuarterFinals: boolean = true;
  showEighthFinals: boolean = true;
  deleteClicked: boolean = false;
  formSettings: FormGroup;
  keys = Object.keys;
  @ViewChild(SavingButtonComponent, { static: false }) savingButton: SavingButtonComponent;

  constructor(private tournamentDetailsService: TournamentDetailsService,
              private tournamentSettingsService: TournamentSettingsService,
              private router: Router,
              private tournamentService: TournamentService) {
    this.tournament = this.tournamentDetailsService.tournament;
    this.tournamentSettings = this.tournament.tournamentSettings;
    this.showStages(PlayoffStage[this.tournamentSettings.playoffStage]);
    this.formSettings = new FormGroup({
      'groupRoundTrip': new FormControl({
        value: this.tournamentSettings.groupRoundTrip,
        disabled: this.disableGroupStage()
      }, [
        Validators.required
      ]),
      'groupNumber': new FormControl({
        value: this.tournamentSettings.groupNumber,
        disabled: this.disableGroupStage()
      }, [
        Validators.required,
        Validators.min(1),
        Validators.max(8)
      ]),
      'first': new FormControl({
        value: this.tournamentSettings.first,
        disabled: this.disableGroupStage()
      }, [
        Validators.required,
        Validators.min(1)
      ]),
      'playoffStage': new FormControl({
        value: this.tournamentSettings.playoffStage,
        disabled: this.disablePlayoffStage()
      }),
      'eightFinalsRoundTrip': new FormControl({
        value: this.tournamentSettings.eightFinalsRoundTrip,
        disabled: this.disablePlayoffStage()
      }, [
        Validators.required
      ]),
      'quarterFinalsRoundTrip': new FormControl({
        value: this.tournamentSettings.quarterFinalsRoundTrip,
        disabled: this.disablePlayoffStage()
      }, [
        Validators.required
      ]),
      'semiFinalsRoundTrip': new FormControl({
        value: this.tournamentSettings.semiFinalsRoundTrip,
        disabled: this.disablePlayoffStage()
      }, [
        Validators.required
      ]),
      'finalRoundTrip': new FormControl({
        value: this.tournamentSettings.finalRoundTrip,
        disabled: this.disablePlayoffStage()
      }, [
        Validators.required
      ])
    });
    let playoffStageValidators: ValidatorFn[] = [Validators.required];
    if (this.tournament.tournamentGroups)
      playoffStageValidators.push(this.notEnoughParticipants)
    this.formSettings.controls['playoffStage'].setValidators(playoffStageValidators);
    this.formSettings.controls['playoffStage'].markAsTouched();
  }

  getGroupsErrorMessage = () => {
    let errors: ValidationErrors = this.formSettings.get('groupNumber').errors;
    if (errors['required'])
      return 'This field is required';
    if (errors['min'])
      return `Minimum value is ${errors['min']['min']}`;
    if (errors['max'])
      return `Maximum value is ${errors['max']['max']}`;
  }

  getFirstOfGroupErrorMessage = () => {
    let errors: ValidationErrors = this.formSettings.get('first').errors;
    if (errors['required'])
      return 'This field is required';
    if (errors['min'])
      return `Minimum value is ${errors['min']['min']}`;
  }

  getPlayoffStageErrorMessage = () => {
    let errors: ValidationErrors = this.formSettings.get('playoffStage').errors;    
    if (errors['required'])
      return 'This field is required';
    if (errors['notenough'])
      return `Participants required ${errors['notenough']['required']} actual ${errors['notenough']['actual']}`;
  }

  notEnoughParticipants = (control: FormControl): {[key: string]: any} | null => {    
    let groupNumber = this.formSettings.controls['groupNumber'].value;
    let first = this.formSettings.controls['first'].value;
    let participants = parseInt(groupNumber) * parseInt(first);
    switch(PlayoffStage[control.value]) {
      case PlayoffStage.EIGHTH_FINALS:
        return participants === 16 ? null : { notenough: { required: 16, actual: participants } };
      case PlayoffStage.QUARTER_FINALS:
          return participants === 8 ? null : { notenough: { required: 8, actual: participants } };
      case PlayoffStage.SEMIFINALS:
          return participants === 4 ? null : { notenough: { required: 4, actual: participants } };
      case PlayoffStage.FINALS:
          return participants === 2 ? null : { notenough: { required: 2, actual: participants } };
    }
  };

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
    this.formSettings.value['tournamentId'] = this.tournamentSettings.tournamentId;
    this.tournamentSettingsService.upsert(this.formSettings.value)
    .subscribe((data: TournamentSettings) => {
      this.tournamentDetailsService.tournament.tournamentSettings = data;
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

  disableGroupStage = () => {
    return TournamentStage[this.tournament.tournamentStage] !== TournamentStage.NEW_TOURNAMENT;
  }

  disablePlayoffStage = () => {
    return TournamentStage[this.tournament.tournamentStage] === TournamentStage.PLAYOFF_STAGE ||
      TournamentStage[this.tournament.tournamentStage] === TournamentStage.FINISHED_TOURNAMENT;
  }

  validateStage = () => this.formSettings.controls['playoffStage'].updateValueAndValidity()

}
