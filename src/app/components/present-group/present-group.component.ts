import { Component, Input, OnInit } from '@angular/core';
import { IPresentGroup } from '../../models/present-group.model';

@Component({
  selector: 'app-present-group',
  templateUrl: './present-group.component.html',
  styleUrls: ['./present-group.component.css']
})
export class PresentGroupComponent implements OnInit {

  @Input() presentGroup:IPresentGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
