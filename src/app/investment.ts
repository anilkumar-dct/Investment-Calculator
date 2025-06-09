// Use the below code as a help
// e.g., integrate it into a service or component

import { Injectable, signal } from '@angular/core';
import { InvestmentResults, UserInputs } from '../app.module';

// You may need to tweak it, depending on where and how you use it
@Injectable({ providedIn: 'root' })
export class InvestmentService {
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
