import { Component } from '@angular/core';
import { Header } from './header/header';
import { UserInput, UserInputs } from './user-input/user-input';
import { InvestmentResult } from './investment-result/investment-result';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResult],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-angular-app';
  results: any = [];
  calculateInvestmentResults(data: UserInputs) {
    const annualData = [];
    let investmentValue = data.initailInvestment;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.anualContribution;
      const totalInterest =
        investmentValue -
        data.anualContribution * year -
        data.anualContribution;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.anualContribution,
        totalInterest: totalInterest,
        totalAmountInvested:
          data.initailInvestment + data.anualContribution * year,
      });
    }
    console.log(annualData);
    this.results = annualData;
    return annualData;
  }
}
