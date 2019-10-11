import { Component, OnInit, Input } from '@angular/core';

import { GroupTeam } from '../../../../../../../interfaces/group/group-team.interface';

@Component({
  selector: 'app-teams-brackets',
  templateUrl: './teams-brackets.component.html',
  styleUrls: ['./teams-brackets.component.css']
})
export class TeamsBracketsComponent implements OnInit {

  @Input() groupTeams: GroupTeam[];

  constructor() { }

  ngOnInit() { }

  showAwayTeam = () => this.groupTeams[0];

  showHomeTeam = () => this.groupTeams[1];

}
