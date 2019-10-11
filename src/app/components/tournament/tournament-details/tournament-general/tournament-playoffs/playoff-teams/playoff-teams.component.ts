import { Component, OnInit } from '@angular/core';

import { TournamentDetailsService } from '../../../../../../providers/tournament/tournament-details.service';
import { GroupService } from '../../../../../../providers/group/group.service';
import { PlayoffStage } from '../../../../../../interfaces/types/playoff-stage.enum';
import { TournamentDetails } from '../../../../../../interfaces/tournament/tournament-details.interface';
import { TournamentSettings } from '../../../../../../interfaces/tournament/tournament-settings.interface';
import { Group } from '../../../../../../interfaces/group/group.interface';

@Component({
  selector: 'app-playoff-teams',
  templateUrl: './playoff-teams.component.html',
  styleUrls: ['./playoff-teams.component.css']
})
export class PlayoffTeamsComponent implements OnInit {

  playoffStages = PlayoffStage;
  tournament: TournamentDetails;
  tournamentSettings: TournamentSettings;
  playoffStage: PlayoffStage;
  groups: any;

  constructor(private tournamentDetailsService: TournamentDetailsService,
              private groupService: GroupService) {
    this.tournament = this.tournamentDetailsService.tournament;
    this.tournamentSettings = this.tournament.tournamentSettings;
    this.playoffStage = PlayoffStage[this.tournamentSettings.playoffStage];
    this.groupService.findAllPlayoffsByTournamentUid(this.tournamentDetailsService.tournament.uid)
      .subscribe((groups: Group[]) => {
        this.groups = {};
        groups.forEach((group: Group) => {
          if(!this.groups[group.playoffStage])
            this.groups[group.playoffStage] = [];
          this.groups[group.playoffStage].push(group);
        });
      });
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
