import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatchResultsService } from '../../../../../../providers/match/match-results.service';
import { TournamentDetailsService } from '../../../../../../providers/tournament/tournament-details.service';
import { ParticipantResults } from '../../../../../../interfaces/match/participant-results.interface';
import { MatchTeams } from '../../../../../../interfaces/match/match-teams.interface';

@Component({
  selector: 'app-match-teams-bets',
  templateUrl: './match-teams-bets.component.html',
  styleUrls: []
})
export class MatchTeamsBetsComponent implements OnInit, OnDestroy {

  matchTeamSubscription: Subscription;
  loading: boolean = false;
  participantResults: ParticipantResults[];
  panelOpenState: boolean = false;
  @Input() matchTeams: MatchTeams;

  constructor(public tournamentDetailsService: TournamentDetailsService,
              private matchResultsService: MatchResultsService) { }

  ngOnDestroy(): void {
    this.matchTeamSubscription.unsubscribe();
  }
  
  ngOnInit(): void {
    this.matchTeamSubscription = this.matchResultsService.matchTeamSelected$
      .subscribe(value => {
        if(this.matchTeams.id === value) {
          this.loading = true;
          this.participantResults = null;
          this.matchResultsService.getParticipantResults(value)
            .subscribe((participants: ParticipantResults[]) => {
              this.loading = false;
              this.participantResults = participants;
            });
        }
      });
  }

  afterExpand = (matchTeamId: number) => {
    this.matchResultsService.selectMatchTeamId(matchTeamId);
    this.panelOpenState = true
  }

}
