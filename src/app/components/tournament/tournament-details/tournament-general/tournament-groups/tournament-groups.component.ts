import { Component, OnInit, ViewChild } from '@angular/core';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Group } from '../../../../../interfaces/group.interface';
import { GroupParticipant } from '../../../../../interfaces/group-participant.interface';
import { GroupService } from '../../../../../providers/group.service';
import { TournamentDetailsService } from '../../../../../providers/tournament-details.service';
import { ParticipantModalComponent } from './participant-modal/participant-modal.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tournament-groups',
  templateUrl: './tournament-groups.component.html',
  styleUrls: ['./tournament-groups.component.css']
})
export class TournamentGroupsComponent implements OnInit {

  groups: Group[];
  group: Group;
  faPlusCircle = faPlusCircle;
  @ViewChild(ParticipantModalComponent, { static: false }) participantModal: ParticipantModalComponent;

  constructor(private groupService: GroupService,
              public tournamentDetailsService: TournamentDetailsService,
              private snackBar: MatSnackBar,
              private bottomSheet: MatBottomSheet) {
    if(this.tournamentDetailsService.tournament.tournamentGroups)
      this.groupService.findAllByTournamentUid(this.tournamentDetailsService.tournament.uid)
        .subscribe((groups: Group[]) => {
          this.groups = groups;
        });
  }

  ngOnInit() {
  }

  showPendingGroupParticipants = (group: Group) => {
    let ref = this.bottomSheet.open(ParticipantModalComponent, {
      data: {group}
    });
    ref.afterDismissed().subscribe((data: GroupParticipant) => {
      if(data !== undefined) {
        this.groups.forEach((group: Group) => {
          if (group.id === data.groupId)
          group.groupParticipants.push(data);
        });
        this.snackBar.open(`${data.user.displayName} has been added!`, 'Okay!', {
          horizontalPosition: 'right',
          duration: 2000
        });
      }
    });
  }

}
