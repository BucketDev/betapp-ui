import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.css']
})
export class ParticipantsListComponent implements OnInit {

  @Input() participants: User[];
  @Input() emptyLabel: string = "There are no participants";
  @Output() participantEvent = new EventEmitter<User>();

  constructor() { }

  ngOnInit() { }

  participantSelected = (participant: User) => this.participantEvent.emit(participant);

}
