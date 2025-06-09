import { Component, input, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentResults } from '../../app.module';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css',
})
export class InvestmentResult {
  //previous Method
  //@Input() result!: InvestmentResults[];
  result = input<InvestmentResults[]>();
}
