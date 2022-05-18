import { Component, Input, OnInit } from '@angular/core';
import { IPresentGroup } from '../../models/present-group.model';

@Component({
  selector: 'app-present-group-list',
  templateUrl: './present-group-list.component.html',
  styleUrls: ['./present-group-list.component.css']
})
export class PresentGroupListComponent implements OnInit {

  @Input() presentGroupList:IPresentGroup[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
