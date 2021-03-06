import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faSave, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { InputType } from '../../../interfaces/shared/input-type.interface';

@Component({
  selector: 'app-save-input',
  templateUrl: './save-input.component.html',
  styleUrls: ['./save-input.component.css']
})
export class SaveInputComponent implements OnInit {

  @Input() inputType: InputType;
  faSave = faSave;
  faTimesCircle = faTimesCircle;
  @Input() value: string;
  @Input() label: string;
  @Input() prefix: string;
  @Output() save = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }

  cancelValue = () => this.cancel.emit();

  saveValue = () => this.save.emit(this.value);

}
