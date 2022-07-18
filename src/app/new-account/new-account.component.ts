// prettier-ignore
import { Component, EventEmitter, Output } from '@angular/core';
// prettier-ignore
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent {
  // prettier-ignore
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(private loggingService: LoggingService) {}
  onCreateAccount(accountName: string, accountStatus: string) {
    // prettier-ignore
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });
    // prettier-ignore
    this.loggingService.logStatusChange(accountStatus);
  }
}
