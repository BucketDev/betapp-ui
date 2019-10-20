import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';

import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { pipe } from 'rxjs';

import { ParticipantService } from '../../../../../../../providers/match/participant.service';
import { GroupParticipantService } from '../../../../../../../providers/group/group-participant.service';
import { Participant } from '../../../../../../../interfaces/match/participant.interface';
import { User } from '../../../../../../../interfaces/user/user.interface';
import { Group } from '../../../../../../../interfaces/group/group.interface';
import { GroupParticipant } from '../../../../../../../interfaces/group/group-participant.interface';

@Component({
  selector: 'app-participant-modal',
  templateUrl: './participant-modal.component.html',
  styleUrls: ['./participant-modal.component.css']
})
export class ParticipantModalComponent implements OnInit {

  faTimesCircle = faTimesCircle;
  participants: User[];
  selectedParticipants: User[] = [];
  group: Group;
  loading: boolean = false;

  constructor(private bottomSheetRef: MatBottomSheetRef<ParticipantModalComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: {group: Group},
              private _changeDetectorRef: ChangeDetectorRef,
              private participantService: ParticipantService,
              private groupParticipantService: GroupParticipantService) {
    this.group = data.group;
    this.participants = null;
  }

  ngOnInit() {
    this.participantService.pendingGroupByTournamentId(this.group.tournamentId)
      .subscribe((participants: Participant[]) => {
        this.participants = participants.map(pipe((participant: Participant) =>
          participant.user
        ))
        this._changeDetectorRef.markForCheck();
      });
  }

  dismiss = () => this.bottomSheetRef.dismiss();

  participantsSelected = (participants :User[]) => {
    this.selectedParticipants = participants;
  }

  saveParticipants = () => {this.loading = true;
    this.groupParticipantService.saveByGroupId(this.group.id, this.selectedParticipants)
      .subscribe((groupParticipants: GroupParticipant[]) => {
        this.loading = false;
        this.bottomSheetRef.dismiss(groupParticipants);
      });
  }

}
