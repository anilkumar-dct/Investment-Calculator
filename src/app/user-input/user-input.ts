import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputs } from '../../app.module';
import { InvestmentService } from '../investment';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  //@Output() calculate = new EventEmitter<UserInputs>(); //previous method use of decorator
  // userInputs: UserInputs =  {
  //   initailInvestment: 0,
  //   anualContribution: 0,
  //   expectedReturn: 0,
  //   duration: 0,
  // };
  // Use of signal
  userInputs = signal<UserInputs>({
    initailInvestment: 0,
    anualContribution: 0,
    expectedReturn: 0,
    duration: 0,
  });
  // calculate = output<UserInputs>();
  constructor(private investmentService: InvestmentService) {}
  onSubmit() {
    this.investmentService.calculateInvestmentResults(this.userInputs());
    // this.calculate.emit(this.userInputs);//decorator use
    // this.calculate.emit(this.userInputs);
    console.log(this.userInputs());
    // this.calculate.emit(this.userInputs());
  }
}
