import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../providers/user/user.service';
import { TournamentService } from '../../../providers/tournament/tournament.service';
import { TournamentDetailsService } from '../../../providers/tournament/tournament-details.service';

import { faPlusCircle, faTimesCircle, faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../../interfaces/user/user.interface';
import { TournamentDetails } from '../../../interfaces/tournament/tournament-details.interface';
import { ParticipantsListComponent } from '../../shared/participants-list/participants-list.component';

@Component({
  selector: 'app-tournament-participants',
  templateUrl: './tournament-participants.component.html',
  styleUrls: ['./tournament-participants.component.css']
})
export class TournamentParticipantsComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  faTimesCircle = faTimesCircle;
  faPenAlt = faPenAlt;
  faTrashAlt = faTrashAlt;
  addingParticipant: boolean = false;
  loading: boolean = false;
  edit: boolean = false;
  participants: User[];
  newParticipants: User[];
  selectedParticipants: User[] = [];
  tournament: TournamentDetails;
  @ViewChild(ParticipantsListComponent, { static: true }) participantsListComponent: ParticipantsListComponent;

  constructor(private userService: UserService,
              public tournamentDetailsService: TournamentDetailsService,
              private tournamentService: TournamentService,
              private snackBar: MatSnackBar) {
    this.tournament = this.tournamentDetailsService.tournament;
  }

  ngOnInit() {
    this.participants = this.tournament.participants;
  }

  addParticipant = () => this.addingParticipant = true;

  cancelParticipant = () => {
    this.addingParticipant = false;
    this.newParticipants = null;
  }

  searchParticipant = (participant: HTMLInputElement) => {
    if(participant.value.length > 3) {
      this.userService.findByDisplayName(participant.value)
        .subscribe((data: User[]) => this.newParticipants = data);
    } else {
      this.newParticipants = null;
    }
  }

  saveParticipant = (participant: User) => {
    this.loading = true;
    this.tournamentService.addParticipant(this.tournament.id, participant)
      .subscribe((data: User) => {
        this.participants.push(data);
        this.loading = false;
      });
    this.addingParticipant = false;
    this.newParticipants = null;
  }

  toggleEdit = () => {
    this.edit = !this.edit;
    if (!this.edit) {
      this.participantsListComponent.clearSelections();
      this.selectedParticipants = [];
    }
  }

  participantsEvent = (users: User[]) => {
    this.selectedParticipants = users;
  }

  deleteParticipants = () => {
    if(this.selectedParticipants.find((selectedParticipant: User) =>
      this.tournamentDetailsService.isCreator(selectedParticipant.id))) {
        this.snackBar.open(`Tournament owner cannot be deleted!`, 'Okay!', {
          horizontalPosition: 'right',
          duration: 2000
        });
    } else {
      this.tournamentService.deleteParticipants(this.tournament.id, this.selectedParticipants)
        .subscribe(() => {
          this.participants = this.participants.filter((participant: User) =>
            !this.selectedParticipants.find((selectedParticipant: User) => 
              participant.id === selectedParticipant.id
            ));
          this.snackBar.open(`${this.selectedParticipants.length} participants were deleted!`, 'Okay!', {
            horizontalPosition: 'right',
            duration: 2000
          });
          this.toggleEdit();
        })
    }
  }

}
