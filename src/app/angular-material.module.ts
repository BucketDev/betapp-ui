import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
  imports: [
    MatSnackBarModule,
    MatRippleModule,
    MatBottomSheetModule
  ],
  exports: [
    MatRippleModule,
    MatBottomSheetModule
  ]
})
export class AngularMaterialModule { }
