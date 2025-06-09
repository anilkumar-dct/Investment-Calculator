import { Component, Input } from '@angular/core';

export interface InvestmentResult {
  year: number;
  valueEndOfYear: number;
  interest: number;
  totalInterest: number;
  totalAmountInvested: number;
}
@Component({
  selector: 'app-investment-result',
  imports: [],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css',
})
export class InvestmentResult {
  @Input() result!: InvestmentResult[];
}
