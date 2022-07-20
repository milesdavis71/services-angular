import { Component, OnInit } from '@angular/core'
import { AcccountsService } from './acccounts-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AcccountsService],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = []

  constructor(private accountsService: AcccountsService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts
  }
}
