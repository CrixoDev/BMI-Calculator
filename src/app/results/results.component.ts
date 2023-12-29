import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  bmi: number;
  result: string;
  interpretation: string;

  constructor(private route: ActivatedRoute) {
    this.result = '';
    this.interpretation = '';
    this.bmi = +route.snapshot.paramMap.get('value')!;
  }

  ngOnInit(): void {
    this.getResult();
  }

  getResult(): void {
    if (this.bmi >= 25) {
      this.result = 'Overweight';
      this.interpretation = 'You have a body weight higher than normal. Try to exercise more.';
    } else if (this.bmi >= 18.5) {
      this.result = 'Normal';
      this.interpretation = 'You have a normal body weight. Good job!';
    } else {
      this.result = 'Underweight';
      this.interpretation = 'You have a body weight lower than normal. You can eat a bit more.';
    }
  }
}
