import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MatchParticipantsService } from '../../../../../../providers/match-participants.service';
import { MatchParticipants } from '../../../../../../interfaces/match-participants.interface';

import { SavingButtonComponent } from '../../../../../shared/saving-button/saving-button.component';

@Component({
  selector: 'app-match-participants-date',
  templateUrl: './match-participants-date.component.html',
  styles: []
})
export class MatchParticipantsDateComponent {

  match: MatchParticipants;
  @ViewChild(SavingButtonComponent, { static: false }) savingButton: SavingButtonComponent;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { match: MatchParticipants },
              private matchService: MatchParticipantsService,
              private dialogRef: MatDialogRef<MatchParticipantsDateComponent>) {
    this.match = Object.assign({}, data.match);
    this.match.scoreAway = null;
    this.match.scoreHome = null;
  }

  saveDate = (match: MatchParticipants) => {
    this.matchService.update(match)
      .subscribe((data: MatchParticipants) => {
        this.savingButton.setSaved();
        this.dialogRef.close(data);
      });
  }

}
