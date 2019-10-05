import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    MatButtonModule,
    MatSnackBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatSnackBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AngularMaterialModule { }
