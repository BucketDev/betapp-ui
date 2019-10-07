import { Component, ViewChild, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MatchTeamsService } from '../../../../../../providers/match-teams.service';
import { SavingButtonComponent } from '../../../../../shared/saving-button/saving-button.component';
import { MatchTeams } from '../../../../../../interfaces/match-teams.interface';

@Component({
  selector: 'app-match-teams-date',
  templateUrl: './match-teams-date.component.html',
  styleUrls: []
})
export class MatchTeamsDateComponent {

  match: MatchTeams;
  @ViewChild(SavingButtonComponent, { static: false }) savingButton: SavingButtonComponent;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { match: MatchTeams },
              private matchService: MatchTeamsService,
              private dialogRef: MatDialogRef<MatchTeamsDateComponent>) {
    this.match = Object.assign({}, data.match);
    this.match.scoreAway = null;
    this.match.scoreHome = null;
  }

  saveDate = (match: MatchTeams) => {
    this.matchService.update(match)
      .subscribe((data: MatchTeams) => {
        this.savingButton.setSaved();
        this.dialogRef.close(data);
      });
  }

}
