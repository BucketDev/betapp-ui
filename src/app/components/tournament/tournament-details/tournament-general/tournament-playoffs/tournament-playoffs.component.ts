import { Component, OnInit } from '@angular/core';

import { TournamentDetailsService } from '../../../../../providers/tournament-details.service';
import { GroupService } from '../../../../../providers/group.service';
import { PlayoffStage } from '../../../../../interfaces/playoff-stage.enum';
import { TournamentDetails } from '../../../../../interfaces/tournament-details.interface';
import { TournamentSettings } from '../../../../../interfaces/tournament-settings.interface';
import { Group } from '../../../../../interfaces/group.interface';

@Component({
  selector: 'app-tournament-playoffs',
  templateUrl: './tournament-playoffs.component.html',
  styleUrls: ['./tournament-playoffs.component.css']
})
export class TournamentPlayoffsComponent implements OnInit {

  playoffStages = PlayoffStage;
  tournament: TournamentDetails;
  tournamentSettings: TournamentSettings;
  playoffStage: PlayoffStage;
  groups = {};

  constructor(private tournamentDetailsService: TournamentDetailsService,
              private groupService: GroupService) {
    this.tournament = this.tournamentDetailsService.tournament;
    this.tournamentSettings = this.tournament.tournamentSettings;
    this.playoffStage = PlayoffStage[this.tournamentSettings.playoffStage];
    this.groupService.findAllPlayoffsByTournamentUid(this.tournamentDetailsService.tournament.uid)
      .subscribe((groups: Group[]) => groups.forEach((group: Group) => {
          if(!this.groups[group.playoffStage])
            this.groups[group.playoffStage] = [];
          this.groups[group.playoffStage].push(group);
        }));
  }

  ngOnInit() { }

  showEightFinals = () => this.playoffStage === PlayoffStage.EIGHTH_FINALS;

  showQuarterFinals = () =>
    this.playoffStage === PlayoffStage.EIGHTH_FINALS ||
    this.playoffStage === PlayoffStage.QUARTER_FINALS;

  showSemiFinals = () =>
    this.playoffStage === PlayoffStage.EIGHTH_FINALS ||
    this.playoffStage === PlayoffStage.QUARTER_FINALS ||
    this.playoffStage === PlayoffStage.SEMIFINALS;

}
