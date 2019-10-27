import { Component, OnInit, Inject, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import 'hammerjs';

import { TeamService } from '../../../../../../../providers/match/team.service';
import { GroupTeamService } from '../../../../../../../providers/group/group-team.service';
import { TournamentDetailsService } from '../../../../../../../providers/tournament/tournament-details.service';
import { SavingButtonComponent } from '../../../../../../../components/shared/saving-button/saving-button.component';
import { GroupTeam } from '../../../../../../../interfaces/group/group-team.interface';
import { Team } from '../../../../../../../interfaces/match/team.interface';
import { Group } from '../../../../../../../interfaces/group/group.interface';

@Component({
  selector: 'app-team-modal',
  templateUrl: './team-modal.component.html',
  styleUrls: ['./team-modal.component.css']
})
export class TeamModalComponent implements OnInit {

  group: Group;
  existingTeam: boolean = false;
  confederations: {id: string, name: string}[];
  countries: {id: string, name: string}[];
  leagues: {id: string, name: string}[];
  teams: {id: string, name: string, photoUrl: string}[];
  confederationId: string;
  countryId: string;
  leagueId: string;
  teamId: string;
  team: Team;
  @ViewChild(SavingButtonComponent, { static: false }) savingButton: SavingButtonComponent;

  constructor(private bottomSheetRef: MatBottomSheetRef<TeamModalComponent>,
              public tournamentDetaiilsService: TournamentDetailsService,
              private teamService: TeamService,
              private changeDetectorRef: ChangeDetectorRef,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: {group: Group, homeTeam: boolean},
              private groupTeamService: GroupTeamService) {
    this.group = data.group;
    this.team = {
      name: '',
      photoUrl: ''
    }
    this.teamService.getConfederations().subscribe(data => 
      {this.confederations = data; this.changeDetectorRef.detectChanges()});
  }

  selectConfederation = (event: MatSelectChange) => {
    this.confederationId = event.value;
    this.countries = [];
    this.countryId = null;
    this.leagues = [];
    this.leagueId = null;
    this.teams = [];
    this.teamId = null;
    this.teamService.getCountries(event.value)
      .subscribe(data => {this.countries = data; this.changeDetectorRef.detectChanges()})
  }

  selectCountry = (event: MatSelectChange) => {
    this.leagues = [];
    this.leagueId = null;
    this.teams = [];
    this.teamId = null;
    this.countryId = event.value;
    this.teamService.getLeagues(this.confederationId, event.value)
      .subscribe(data => {this.leagues = data; this.changeDetectorRef.detectChanges()})
  }

  selectLeague = (event: MatSelectChange) => {
    this.teams = [];
    this.teamId = null;
    this.leagueId = event.value;
    this.teamService.getTeams(this.confederationId, this.countryId, event.value)
      .subscribe(data => {this.teams = data; this.changeDetectorRef.detectChanges()})
  }

  selectTeam = (event: MatSelectChange) => {
    this.teamId = event.value;
  }

  addTeam = () => {
    if (this.existingTeam)
      this.team = this.teams.find((team: any) => team.id === this.teamId)
    let groupTeam: GroupTeam = {
      groupId: this.group.id,
      tournamentId: this.group.tournamentId,
      team: {
        name: this.team.name,
        photoUrl: this.team.photoUrl
      },
      points: this.data.homeTeam ? 0 : 1
    }
    this.groupTeamService.insert(groupTeam)
      .subscribe((groupTeam: GroupTeam) => {
        this.savingButton.setSaved();
        this.bottomSheetRef.dismiss(groupTeam);
      })
  }

  photoUploaded = (photoUrl: string) => this.team.photoUrl = photoUrl;

  ngOnInit() {
  }

}
