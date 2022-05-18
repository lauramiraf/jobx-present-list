import { Component, Input, OnInit } from '@angular/core';
import { IPresentGroup } from '../../models/present-group.model';

@Component({
  selector: 'app-informative-message',
  templateUrl: './informative-message.component.html',
  styleUrls: ['./informative-message.component.css']
})
export class InformativeMessageComponent implements OnInit {

  @Input() title:string;
  @Input() description:string;

  constructor() { }

  ngOnInit(): void {
  }

}
