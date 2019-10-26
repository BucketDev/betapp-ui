import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { faSave, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-saving-button',
  templateUrl: './saving-button.component.html',
  styleUrls: []
})
export class SavingButtonComponent implements OnInit {

  faSave = faSave;
  faCheck = faCheck;
  saving: boolean = false;
  saved: boolean = false;
  @Output() clicked = new EventEmitter<void>();
  @Input() disabled: boolean;
  @Input() small: boolean;

  constructor() { }

  ngOnInit() { }

  getColor = () => this.saving ? 'accent' : 'primary';

  onClick = () => {
    if (!this.saving && !this.saved) {
      this.saving = true;
      this.clicked.emit();
    }
  }

  setSaved = () => {
    this.saved = true;
    setTimeout(() => {
      this.saved = false;
      this.saving = false;
    }, 2000);
  }

}
