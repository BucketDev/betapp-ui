import { Component, OnInit, Input } from '@angular/core';
import { FireAuthService } from '../../../providers/fire-auth.service';
import { UserService } from '../../../providers/user.service';
import { TournamentService } from '../../../providers/tournament.service';

import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../../interfaces/user.interface';
import { TournamentDetails } from '../../../interfaces/tournament-details.interface';

@Component({
  selector: 'app-tournament-participants',
  templateUrl: './tournament-participants.component.html',
  styleUrls: ['./tournament-participants.component.css']
})
export class TournamentParticipantsComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  faTimesCircle = faTimesCircle;
  addingParticipant: boolean = false;
  newParticipants: User[];
  @Input() tournament: TournamentDetails;
  participants: User[];

  constructor(private auth: FireAuthService,
              private userService: UserService,
              private tournamentService: TournamentService) { }

  ngOnInit() {
    this.participants = this.tournament.participants;
  }

  isCreator = () => this.auth.user.id === this.tournament.userCreationId;

  addParticipant = () => this.addingParticipant = true;

  cancelParticipant = () => {
    this.addingParticipant = false;
    this.newParticipants = null;
  }

  searchParticipant = (participant: HTMLInputElement) => {
    if(participant.value.length > 3) {
      this.userService.findByDisplayName(participant.value)
        .subscribe((data: User[]) => this.newParticipants = data);
    } else if(participant.value.length === 0) {
      this.newParticipants = null;
    }
  }

  saveParticipant = (participant: User) => {
    this.tournamentService.addParticipant(this.tournament.id, participant)
      .subscribe((data: User) => this.participants.push(data));
    this.addingParticipant = false;
  }

}
