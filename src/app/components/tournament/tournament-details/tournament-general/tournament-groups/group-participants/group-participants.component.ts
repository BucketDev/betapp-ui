import { Component, OnInit, ViewChild } from '@angular/core';

import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Group } from '../../../../../../interfaces/group/group.interface';
import { GroupParticipant } from '../../../../../../interfaces/group/group-participant.interface';
import { GroupService } from '../../../../../../providers/group/group.service';
import { TournamentDetailsService } from '../../../../../../providers/tournament/tournament-details.service';
import { ParticipantModalComponent } from './participant-modal/participant-modal.component';

@Component({
  selector: 'app-group-participants',
  templateUrl: './group-participants.component.html',
  styleUrls: ['./group-participants.component.css']
})
export class GroupParticipantsComponent implements OnInit {

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
      data: {group, homeParticipant: false, selectable: true}
    });
    ref.afterDismissed().subscribe((data: GroupParticipant[]) => {
      if(data !== undefined) {
        this.groups.forEach((_group: Group) => {
          if (group.id === _group.id)
            _group.groupParticipants.push(...data);
        });
        this.snackBar.open(`${data.length} participants were added!`, 'Okay!', {
          horizontalPosition: 'right',
          duration: 2000
        });
      }
    });
  }

}
