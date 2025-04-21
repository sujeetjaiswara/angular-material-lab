import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private _snackBar = inject(MatSnackBar);

  enquiryForm!: FormGroup;
  enquiryTypes: string[] = [
    'General',
    'Product Inquiry',
    'Support',
    'Feedback',
  ];

  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;

  constructor(private fb: FormBuilder) {
    this.enquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      enquiryType: ['', Validators.required],
      message: [''],
    });
  }

  onSubmit() {
    if (this.enquiryForm.valid) {
      console.log('Form Submitted:', this.enquiryForm.value);
      // TODO: Send to backend API
    } else {
      console.log('Form is invalid');
    }
  }

  openSnackBar() {
    this._snackBar.open('Message successfully sent!', 'Dismiss', {
      duration: 3000, // Optional: Auto close after 3 seconds
      horizontalPosition: 'center', // Optional: Positioning
      verticalPosition: 'bottom', // Optional: Positioning
    });
  }
}
