import { Component, OnInit, Input } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TournamentDetailsService } from '../../../../../../../providers/tournament/tournament-details.service';

import { Group } from '../../../../../../../interfaces/group/group.interface';
import { GroupParticipant } from '../../../../../../../interfaces/group/group-participant.interface';
import { PlayoffStage } from '../../../../../../../interfaces/types/playoff-stage.enum';
import { ParticipantModalComponent } from '../../../tournament-groups/group-participants/participant-modal/participant-modal.component';

@Component({
  selector: 'app-participants-brackets',
  templateUrl: './participants-brackets.component.html',
  styleUrls: ['./participants-brackets.component.css']
})
export class ParticipantsBracketsComponent implements OnInit {

  @Input() group: Group;
  @Input() playoffStage: PlayoffStage;
  groupParticipants: GroupParticipant[];
  tournamentPlayoffStage: PlayoffStage;
  faPlusCircle = faPlusCircle;

  constructor(private tournamentDetailsService: TournamentDetailsService,
              private bottomSheet: MatBottomSheet,
              private snackBar: MatSnackBar) {
    this.tournamentPlayoffStage = this.tournamentDetailsService.tournament.tournamentSettings.playoffStage;
  }

  ngOnInit() {
    this.groupParticipants = this.group.groupParticipants;
  }

  getAwayParticipant = () =>
    this.groupParticipants.find((groupParticipant: GroupParticipant) => groupParticipant.points === 1);

  getHomeParticipant = () =>
    this.groupParticipants.find((groupParticipant: GroupParticipant) => groupParticipant.points === 0);

  canAddParticipant = () => this.playoffStage === this.tournamentPlayoffStage
    && !this.tournamentDetailsService.tournament.tournamentGroups
    && this.tournamentDetailsService.isCreator();

  addParticipant = (homeParticipant: boolean = true) => {
    let ref = this.bottomSheet.open(ParticipantModalComponent, {
      data: { group: this.group, homeParticipant, selectable: false }
    });
    ref.afterDismissed().subscribe((groupParticipant: GroupParticipant) => {
      if(groupParticipant !== undefined) {
        this.groupParticipants.push(groupParticipant);
        this.snackBar.open(`${groupParticipant.user.displayName} has been added!`, 'Okay!', {
          horizontalPosition: 'right',
          duration: 2000
        });
      }
    });
  }

}
