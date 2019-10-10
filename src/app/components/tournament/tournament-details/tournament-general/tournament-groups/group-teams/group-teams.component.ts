import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { GroupService } from '../../../../../../providers/group.service';
import { TournamentDetailsService } from '../../../../../../providers/tournament-details.service';

import { Group } from '../../../../../../interfaces/group.interface';
import { TeamModalComponent } from './team-modal/team-modal.component';
import { GroupTeam } from '../../../../../../interfaces/group-team.interface';

@Component({
  selector: 'app-group-teams',
  templateUrl: './group-teams.component.html',
  styleUrls: []
})
export class GroupTeamsComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  groups: Group[];

  constructor(private groupService: GroupService,
              public tournamentDetailsService: TournamentDetailsService,
              private snackBar: MatSnackBar,
              private bottomSheet: MatBottomSheet) {
    this.groupService.findAllByTournamentUid(this.tournamentDetailsService.tournament.uid)
      .subscribe((groups: Group[]) => this.groups = groups);
  }

  ngOnInit() {
  }

  showAssignTeam = (group: Group) => {
    let ref = this.bottomSheet.open(TeamModalComponent, {
      data: {group}
    });
    ref.afterDismissed().subscribe((data: GroupTeam) => {
      if(data !== undefined) {
        this.groups.forEach((group: Group) => {
          if (group.id === data.groupId)
          group.groupTeams.push(data);
        });
        this.snackBar.open(`${data.team.name} has been added!`, 'Okay!', {
          horizontalPosition: 'right',
          duration: 2000
        });
      }
    });
  }

}
