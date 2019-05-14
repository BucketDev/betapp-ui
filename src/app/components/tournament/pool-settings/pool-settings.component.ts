import { Component, OnInit, Input } from '@angular/core';

import { faPenAlt } from '@fortawesome/free-solid-svg-icons';

import { PoolSettingsService } from '../../../providers/pool-settings.service';
import { FireAuthService } from '../../../providers/fire-auth.service';

import { PoolSettings } from '../../../interfaces/pool-settings.interface';
import { TournamentDetails } from '../../../interfaces/tournament-details.interface';

@Component({
  selector: 'app-pool-settings',
  templateUrl: './pool-settings.component.html',
  styleUrls: ['./pool-settings.component.css']
})
export class PoolSettingsComponent implements OnInit {

  @Input() tournament: TournamentDetails;
  poolSettings: PoolSettings;
  faPenAlt = faPenAlt;
  editingDescription: boolean = false;
  editingAmount: boolean = false;
  editingGoal: boolean = false;
  editingLimit: boolean = false;

  constructor(private auth: FireAuthService,
              private poolSettingsService: PoolSettingsService) { }

  ngOnInit() {
    if(this.tournament.poolSettings === null)
      this.poolSettings = {
        tournamentId: this.tournament.id,
        balance: 0,
        description: '',
        amount: 0,
        goal: 0,
        limitDate: null
      }
    else
      this.poolSettings = this.tournament.poolSettings;
  }

  isCreator = () => this.auth.user.id === this.tournament.userCreationId;

  editDescription = () => this.editingDescription = true;
  cancelDescription = () => this.editingDescription = false;
  saveDescription = (description: string) => {
    this.poolSettings.description = description;
    this.updatePoolSettings();
    this.editingDescription = false;
  }

  editAmount = () => this.editingAmount = true;
  cancelAmount = () => this.editingAmount = false;
  saveAmount = (amount: string) => {
    this.poolSettings.amount = parseInt(amount);
    this.updatePoolSettings();
    this.editingAmount = false;
  }

  editGoal = () => this.editingGoal = true;
  cancelGoal = () => this.editingGoal = false;
  saveGoal = (goal: string) => {
    this.poolSettings.goal = parseInt(goal);
    this.updatePoolSettings();
    this.editingGoal = false;
  }

  editLimit = () => this.editingLimit = true;
  cancelLimit = () => this.editingLimit = false;
  saveLimit = (limit: string) => {
    this.poolSettings.limitDate = new Date(limit);
    this.updatePoolSettings();
    this.editingLimit = false;
  }

  updatePoolSettings = () => this.poolSettingsService.upsert(this.poolSettings)
    .subscribe((data: PoolSettings) => {
      this.poolSettings = data
    });

}
