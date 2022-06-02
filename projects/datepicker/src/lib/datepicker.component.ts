import { Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-datepicker',
  template: './datepicker.component.html',
  styleUrls: ['./datepicker.component.sass'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: DatepickerComponent, multi: true }]
})
export class DatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
