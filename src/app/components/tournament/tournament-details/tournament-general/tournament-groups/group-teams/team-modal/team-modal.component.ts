import { Component, OnInit, Inject, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { SavingButtonComponent } from '../../../../../../../components/shared/saving-button/saving-button.component';
import { TeamService } from '../../../../../../../providers/team.service';
import { GroupTeamService } from '../../../../../../../providers/group-team.service';
import { GroupTeam } from '../../../../../../../interfaces/group-team.interface';
import { Team } from '../../../../../../../interfaces/team.interface';
import { Group } from '../../../../../../../interfaces/group.interface';

@Component({
  selector: 'app-team-modal',
  templateUrl: './team-modal.component.html',
  styleUrls: []
})
export class TeamModalComponent implements OnInit {

  group: Group;
  existingTeam: boolean = true;
  confederations: {id: string, name: string}[];
  countries: {id: string, name: string}[];
  leagues: {id: string, name: string}[];
  teams: {id: string, name: string, photoUrl: string}[];
  confederationId: string;
  countryId: string;
  leagueId: string;
  teamId: string;
  @ViewChild(SavingButtonComponent, { static: false }) savingButton: SavingButtonComponent;

  constructor(private bottomSheetRef: MatBottomSheetRef<TeamModalComponent>,
              private teamService: TeamService,
              private changeDetectorRef: ChangeDetectorRef,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: {group: Group},
              private groupTeamService: GroupTeamService) {
    this.group = data.group;
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
    let team = this.teams.find((team: any) => team.id === this.teamId)
    let groupTeam: GroupTeam = {
      groupId: this.group.id,
      tournamentId: this.group.tournamentId,
      team: {
        name: team.name,
        photoUrl: team.photoUrl
      }
    }
    this.groupTeamService.addTeam(groupTeam)
      .subscribe((groupTeam: GroupTeam) => {
        this.savingButton.setSaved();
        this.bottomSheetRef.dismiss(groupTeam);
      })
  }

  ngOnInit() {
  }

}
