// Import necessary Angular modules and dependencies
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Component decorator with metadata
@Component({
  selector: 'app-init', // Selector for the component
  templateUrl: './init.component.html', // Template file for the component
  styleUrls: ['./init.component.css'], // Stylesheet file for the component
  standalone: true, // Indicates that this component can be used as a standalone component
  imports: [
    CommonModule // Import CommonModule for common Angular directives (ngIf, ngFor, etc.)
  ],
})
export class InitComponent implements OnInit {
  // Default values for age, weight, height, and gender
  age = 30;
  weight = 70;
  height = 170;
  gender = 'male';

  // Constructor for the component, injecting the Router service
  constructor(private router: Router) { }

  // Lifecycle hook - ngOnInit is called after the component has been initialized
  ngOnInit(): void {
    // Initialization logic, if needed
  }

  // Event handler for height change
  changeHeight(event: any): void {
    this.height = event.target.value;
  }

  // Event handler for setting gender to male
  setMale(): void {
    this.gender = 'male';
  }

  // Event handler for setting gender to female
  setFemale(): void {
    this.gender = 'female';
  }

  // Event handler for BMI calculation
  calculateBMI(): void {
    // Calculate BMI using weight and height
    const BMI = this.weight / Math.pow(this.height / 100, 2);
    
    // Navigate to the result route with the calculated BMI as a parameter
    this.router.navigate(['/results', BMI.toFixed(1)]);
  }
}
