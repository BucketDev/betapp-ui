import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../../providers/fire-auth.service';

import { TournamentDetailsService } from '../../providers/tournament-details.service';

import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

import { TournamentDetails } from '../../interfaces/tournament-details.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  faCameraRetro = faCameraRetro;
  loading: boolean = true;
  tournament: TournamentDetails;

  constructor(private activatedRoute: ActivatedRoute,
              public auth: FireAuthService,
              private tournamentDetailsService: TournamentDetailsService) {
    this.activatedRoute.params.subscribe((params => {
      this.tournamentDetailsService.findByUid(params['uid'])
        .subscribe((data: TournamentDetails) => {
          this.tournamentDetailsService.tournament = data;
          this.tournament = this.tournamentDetailsService.tournament;
          this.loading = false;
        });
    }));
  }

  ngOnInit() {
  }

  isCreator = () => this.auth.user.id === this.tournament.userCreationId;

}
