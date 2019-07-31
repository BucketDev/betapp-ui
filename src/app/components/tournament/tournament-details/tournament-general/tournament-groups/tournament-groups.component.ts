import { Component, OnInit, ViewChild } from '@angular/core';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Group } from '../../../../../interfaces/group.interface';
import { User } from '../../../../../interfaces/user.interface';
import { GroupParticipant } from '../../../../../interfaces/group-participant.interface';
import { GroupService } from '../../../../../providers/group.service';
import { GroupParticipantService } from '../../../../../providers/group-participant.service';
import { TournamentDetailsService } from '../../../../../providers/tournament-details.service';
import { ParticipantModalComponent } from './participant-modal/participant-modal.component';

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
              private groupParticipantService: GroupParticipantService,
              public tournamentDetailsService: TournamentDetailsService) {
    if(this.tournamentDetailsService.tournament.tournamentGroups)
      this.groupService.findByTournamentUid(this.tournamentDetailsService.tournament.uid)
        .subscribe((groups: Group[]) => {
          this.groups = groups;
        });
  }

  ngOnInit() {
  }

  showPendingGroupParticipants = (group: Group) => {
    this.group = group;
    this.participantModal.open(group.tournamentId);
  }

  saveParticipant = (user: User) => {
    let groupParticipant: GroupParticipant = {
      groupId: this.group.id,
      tournamentId: this.group.tournamentId,
      user: user,
      gamesPlayed: 0,
      gamesWon: 0,
      gamesTied: 0,
      gamesLost: 0,
      points: 0
    };
    this.groupParticipantService.saveParticipant(groupParticipant)
      .subscribe((groupParticipant: GroupParticipant) => {
        this.group.groupParticipants.push(groupParticipant);
      });
  }

}
