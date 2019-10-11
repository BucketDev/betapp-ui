import { Component, OnInit, Input } from '@angular/core';

import { GroupParticipant } from '../../../../../../../interfaces/group/group-participant.interface';

@Component({
  selector: 'app-participants-brackets',
  templateUrl: './participants-brackets.component.html',
  styleUrls: ['./participants-brackets.component.css']
})
export class ParticipantsBracketsComponent implements OnInit {

  @Input() groupParticipants: GroupParticipant[];

  constructor() { }

  ngOnInit() { }

  showAwayParticipant = () => this.groupParticipants[0];

  showHomeParticipant = () => this.groupParticipants[1];

}
