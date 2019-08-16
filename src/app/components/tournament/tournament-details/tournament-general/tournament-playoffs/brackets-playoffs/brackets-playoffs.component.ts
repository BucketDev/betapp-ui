import { Component, OnInit, Input } from '@angular/core';

import { GroupParticipant } from '../../../../../../interfaces/group-participant.interface';

@Component({
  selector: 'app-brackets-playoffs',
  templateUrl: './brackets-playoffs.component.html',
  styleUrls: ['./brackets-playoffs.component.css']
})
export class BracketsPlayoffsComponent implements OnInit {

  @Input() groupParticipants: GroupParticipant[];

  constructor() { }

  ngOnInit() { }

  showAwayParticipant = () => this.groupParticipants[0];

  showHomeParticipant = () => this.groupParticipants[1];

}
