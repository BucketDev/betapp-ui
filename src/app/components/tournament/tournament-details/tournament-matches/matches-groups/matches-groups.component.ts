import { Component, OnInit } from '@angular/core';

import { TournamentDetailsService } from '../../../../../providers/tournament-details.service';
import { MatchParticipantsService } from '../../../../../providers/match-participants.service';

import { MatchParticipants } from '../../../../../interfaces/match-participants.interface';
import { TournamentDetails } from '../../../../../interfaces/tournament-details.interface';

@Component({
  selector: 'app-matches-groups',
  templateUrl: './matches-groups.component.html',
  styleUrls: ['./matches-groups.component.css']
})
export class MatchesGroupsComponent implements OnInit {

  tournament: TournamentDetails;
  matches: MatchParticipants[];
  loading: boolean = true;

  constructor(public tournamentDetailsService: TournamentDetailsService,
              private matchParticipantsService: MatchParticipantsService) {
      this.tournament = this.tournamentDetailsService.tournament;
      this.matchParticipantsService.findAllByTournamentId(this.tournament.id)
        .subscribe((data: MatchParticipants[]) => {
          console.log(data);
          this.matches = data;
          this.loading = false;
      });
  }

  ngOnInit() {
  }

}
