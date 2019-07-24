import { Component, OnInit } from '@angular/core';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Group } from '../../../../interfaces/group.interface';
import { GroupService } from '../../../../providers/group.service';
import { TournamentDetailsService } from '../../../../providers/tournament-details.service';


@Component({
  selector: 'app-tournament-general',
  templateUrl: './tournament-general.component.html',
  styleUrls: ['./tournament-general.component.css']
})
export class TournamentGeneralComponent implements OnInit {

  groups: Group[];
  faPlusCircle = faPlusCircle;

  constructor(private groupService: GroupService,
              public tournamentDetailsService: TournamentDetailsService) {
    if(this.tournamentDetailsService.tournament.tournamentGroups)
      this.groupService.findByTournamentUid(this.tournamentDetailsService.tournament.uid)
        .subscribe((groups: Group[]) => {
          this.groups = groups;
        });
  }

  ngOnInit() {
  }

}