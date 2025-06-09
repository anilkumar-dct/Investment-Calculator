import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
export interface UserInputs {
  initailInvestment: number;
  anualContribution: number;
  expectedReturn: number;
  duration: number;
}
@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  @Output() calculate = new EventEmitter<UserInputs>();
  userInputs: UserInputs = {
    initailInvestment: 0,
    anualContribution: 0,
    expectedReturn: 0,
    duration: 0,
  };
  onSubmit() {
    this.calculate.emit(this.userInputs);
    console.log(this.userInputs);
  }
}
