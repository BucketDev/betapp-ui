import { Component, OnInit, ViewChild, TemplateRef, EventEmitter, Output } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { ParticipantService } from '../../../../../../providers/participant.service';
import { Participant } from '../../../../../../interfaces/participant.interface';
import { User } from '../../../../../../interfaces/user.interface';

@Component({
  selector: 'app-participant-modal',
  templateUrl: './participant-modal.component.html',
  styleUrls: ['./participant-modal.component.css']
})
export class ParticipantModalComponent implements OnInit {

  faTimesCircle = faTimesCircle;
  participants: Participant[];
  @ViewChild('content', {static: false}) private content: TemplateRef<any>;
  @Output() saveParticipant = new EventEmitter<User>();

  constructor(private modal: NgbModal,
              private participantService: ParticipantService) { }

  ngOnInit() {
  }

  open = (tournamentId: number) => {
    this.participants = [];
    this.modal.open(this.content, {backdrop: 'static', keyboard: false});
    this.participantService.pendingGroupByTournamentId(tournamentId)
      .subscribe((participants: Participant[]) => this.participants = participants);
  }

  selectParticipant = (participant :Participant) => {
    this.modal.dismissAll();
    this.saveParticipant.emit(participant.user);
  }

}
