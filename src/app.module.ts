export interface InvestmentResults {
  year: number;
  valueEndOfYear: number;
  interest: number;
  totalInterest: number;
  totalAmountInvested: number;
}
export interface UserInputs {
  initailInvestment: number;
  anualContribution: number;
  expectedReturn: number;
  duration: number;
}
