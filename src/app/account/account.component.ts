// prettier-ignore
import { Component,  Input } from '@angular/core';
// prettier-ignore
import { LoggingService } from '../logging.service';
import { AcccountsService } from '../acccounts-service'

// prettier-ignore
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AcccountsService]
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AcccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
    this.loggingService.logStatusChange(status);


  }
}
