import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-return',
  templateUrl: './btn-return.component.html',
  styleUrls: ['./btn-return.component.css']
})
export class BtnReturnComponent implements OnInit {
  @Input() url_return = '';

  constructor() {}

  ngOnInit() {}

}
