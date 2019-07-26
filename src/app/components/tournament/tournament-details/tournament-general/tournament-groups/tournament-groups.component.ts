import { Component, OnInit, ViewChild } from '@angular/core';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Group } from '../../../../../interfaces/group.interface';
import { GroupService } from '../../../../../providers/group.service';
import { TournamentDetailsService } from '../../../../../providers/tournament-details.service';
import { ParticipantModalComponent } from './participant-modal/participant-modal.component';

@Component({
  selector: 'app-tournament-groups',
  templateUrl: './tournament-groups.component.html',
  styleUrls: ['./tournament-groups.component.css']
})
export class TournamentGroupsComponent implements OnInit {

  groups: Group[];
  faPlusCircle = faPlusCircle;
  @ViewChild(ParticipantModalComponent, { static: false }) participantModal: ParticipantModalComponent;

  constructor(private groupService: GroupService,
              public tournamentDetailsService: TournamentDetailsService) {
    if(this.tournamentDetailsService.tournament.tournamentGroups)
      this.groupService.findByTournamentUid(this.tournamentDetailsService.tournament.uid)
        .subscribe((groups: Group[]) => {
          this.groups = groups;
        });
  }

  ngOnInit() {
  }

  showPendingGroupParticipants = (tournamentId: number) => this.participantModal.open(tournamentId);

}
