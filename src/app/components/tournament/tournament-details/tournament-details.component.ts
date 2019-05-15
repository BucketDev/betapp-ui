import { Component, OnInit, Input } from '@angular/core';

import { TournamentDetails } from '../../../interfaces/tournament-details.interface';

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent implements OnInit {

  @Input() tournament: TournamentDetails;

  constructor() { }

  ngOnInit() {
  }

}
