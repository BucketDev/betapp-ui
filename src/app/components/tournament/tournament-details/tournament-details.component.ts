import { Component, OnInit } from '@angular/core';

import { TournamentDetailsService } from '../../../providers/tournament-details.service';

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent implements OnInit {

  constructor(public tournamentDetailsService: TournamentDetailsService) { }

  ngOnInit() { }

}
