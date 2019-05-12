import { Component, OnInit } from '@angular/core';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  constructor() { }

  ngOnInit() {
  }

}
