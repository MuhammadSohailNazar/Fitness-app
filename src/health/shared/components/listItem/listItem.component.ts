import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './listItem.component.html',
  styleUrls: ['./listItem.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit() {
  }

}
