import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../../../providers/shared/fire-auth.service';
import { UserService } from '../../../providers/user/user.service';
import { TournamentService } from '../../../providers/tournament/tournament.service';
import { TournamentDetailsService } from '../../../providers/tournament/tournament-details.service';

import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../../interfaces/user/user.interface';
import { TournamentDetails } from '../../../interfaces/tournament/tournament-details.interface';

@Component({
  selector: 'app-tournament-participants',
  templateUrl: './tournament-participants.component.html',
  styleUrls: ['./tournament-participants.component.css']
})
export class TournamentParticipantsComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  faTimesCircle = faTimesCircle;
  addingParticipant: boolean = false;
  loading: boolean = false;
  participants: User[];
  newParticipants: User[];
  tournament: TournamentDetails;

  constructor(private userService: UserService,
              public tournamentDetailsService: TournamentDetailsService,
              private tournamentService: TournamentService) {
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

}
