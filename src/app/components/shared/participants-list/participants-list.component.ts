import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../../interfaces/user/user.interface';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.css']
})
export class ParticipantsListComponent implements OnInit {

  @Input() participants: User[];
  @Input() viewProfile: boolean = false;
  @Input() emptyLabel: string = "There are no participants";
  @Input() selectable: boolean = false;
  @Output() participantEvent = new EventEmitter<User>();
  @Output() participantsEvent = new EventEmitter<User[]>();
  selectedParticipants: User[] = [];
  
  constructor() { }

  ngOnInit() { }

  participantSelected = (participant: User, itemParticipant: HTMLElement) => {
    if(this.selectable) {
      itemParticipant.classList.toggle('active')
      let selected = itemParticipant.classList.contains('active');
      if (selected)
        this.selectedParticipants.push(participant)
      else
        this.selectedParticipants = this.selectedParticipants.filter((_participant) => _participant.id != participant.id);
      this.participantsEvent.emit(this.selectedParticipants);
    } else
      this.participantEvent.emit(participant);
  }

}
