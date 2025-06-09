import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentResult } from './investment-result/investment-result';
import { InvestmentResults, UserInputs } from '../app.module';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResult],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-angular-app';
  //previous method
  //results: any = [];
  //Use Of Signals
  results = signal<InvestmentResults[] | undefined>(undefined);
  calculateInvestmentResults(data: UserInputs) {
    console.log(data);
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
    //previous method
    //this.results = annualData;
    //Use Of Signals
    this.results.set(annualData);
  }
}
