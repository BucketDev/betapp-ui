import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { MatchResultsService } from '../../../../../../providers/match/match-results.service';
import { ParticipantResults } from '../../../../../../interfaces/match/participant-results.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-match-teams-bets',
  templateUrl: './match-teams-bets.component.html',
  styleUrls: []
})
export class MatchTeamsBetsComponent implements OnInit, OnDestroy {

  matchTeamSubscription: Subscription;
  loading: boolean = false;
  participantResults: ParticipantResults[];
  @Input() matchTeamId: number;

  constructor(private matchResultsService: MatchResultsService) { }

  ngOnDestroy(): void {
    this.matchTeamSubscription.unsubscribe();
  }
  
  ngOnInit(): void {
    this.matchTeamSubscription = this.matchResultsService.matchTeamSelected$
      .subscribe(value => {
        if(this.matchTeamId === value) {
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

}
