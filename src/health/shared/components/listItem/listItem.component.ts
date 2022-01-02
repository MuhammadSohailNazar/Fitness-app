import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "list-item",
  templateUrl: "./listItem.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./listItem.component.scss"],
})
export class ListItemComponent implements OnInit {
  @Input() item: any;
  @Output() remove = new EventEmitter();
  toggled: boolean = false;
  constructor() {}

  ngOnInit() {}

  toggle() {
    this.toggled = !this.toggled;
  }

  removeItem(){
     this.remove.emit(this.item);
  }
  getRoute() {
    return [`../meals`, this.item.$key];
  }
}
