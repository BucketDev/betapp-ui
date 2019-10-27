import { Component, OnInit, Input } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { TournamentDetailsService } from '../../../../../../../providers/tournament/tournament-details.service';

import { Group } from '../../../../../../../interfaces/group/group.interface';
import { GroupTeam } from '../../../../../../../interfaces/group/group-team.interface';
import { PlayoffStage } from '../../../../../../../interfaces/types/playoff-stage.enum';
import { TeamModalComponent } from '../../../tournament-groups/group-teams/team-modal/team-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-teams-brackets',
  templateUrl: './teams-brackets.component.html',
  styleUrls: ['./teams-brackets.component.css']
})
export class TeamsBracketsComponent implements OnInit {

  @Input() group: Group;
  @Input() playoffStage: PlayoffStage;
  groupTeams: GroupTeam[];
  tournamentPlayoffStage: PlayoffStage;
  faPlusCircle = faPlusCircle;

  constructor(private tournamentDetailsService: TournamentDetailsService,
              private bottomSheet: MatBottomSheet,
              private snackBar: MatSnackBar) {      
    this.tournamentPlayoffStage = this.tournamentDetailsService.tournament.tournamentSettings.playoffStage;
  }

  ngOnInit() {
    this.groupTeams = this.group.groupTeams;
  }

  getAwayTeam = () =>
    this.groupTeams.find((groupTeam: GroupTeam) => groupTeam.points === 1);

  getHomeTeam = () =>
    this.groupTeams.find((groupTeam: GroupTeam) => groupTeam.points === 0);

  canAddTeam = () => this.playoffStage === this.tournamentPlayoffStage
    && !this.tournamentDetailsService.tournament.tournamentGroups
    && this.tournamentDetailsService.isCreator();

  addTeam = (homeTeam: boolean = true) => {
    let ref = this.bottomSheet.open(TeamModalComponent, {
      data: { group: this.group, homeTeam }
    });
    ref.afterDismissed().subscribe((groupTeam: GroupTeam) => {
      if(groupTeam !== undefined) {
        this.groupTeams.push(groupTeam);
        this.snackBar.open(`${groupTeam.team.name} has been added!`, 'Okay!', {
          horizontalPosition: 'right',
          duration: 2000
        });
      }
    });
  }

}
