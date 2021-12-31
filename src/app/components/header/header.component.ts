import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "src/auth/shared/services/auth/auth.service";

@Component({
  selector: "app-header",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Output() logout = new EventEmitter<any>();
  @Input() user: User;

  logoutUser() {
    this.logout.emit();
  }
}
