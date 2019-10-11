import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { MatchParticipants } from '../../../../../../interfaces/match/match-participants.interface';
import { MatchParticipantsService } from '../../../../../../providers/match/match-participants.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-match-participants-update',
  templateUrl: './match-participants-update.component.html',
  styleUrls: []
})
export class MatchParticipantsUpdateComponent implements OnInit {

  match: MatchParticipants;

  constructor(private bottomSheetRef: MatBottomSheetRef<MatchParticipantsUpdateComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: {match: MatchParticipants},
              private matchParticipantsService: MatchParticipantsService) {
    this.match = Object.assign({}, data.match);
    this.match.scoreAway = null;
    this.match.scoreHome = null;
  }

  ngOnInit() {
  }

  saveMatch = (form: NgForm) => {
    if (!form.controls['scoreAway'].dirty && !form.controls['scoreHome'].dirty) {
      this.match.scoreAway = null;
      this.match.scoreHome = null;
    }
    this.matchParticipantsService.update(this.match)
      .subscribe((data: MatchParticipants) =>  this.bottomSheetRef.dismiss(data))
  }

}
