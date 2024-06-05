import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuccessToastComponent } from "../success-toast/success-toast.component";
import { SuccessToastService } from '../../services/success-toast.service';

@Component({
    selector: 'app-contact-form',
    standalone: true,
    templateUrl: './contact-form.component.html',
    styleUrl: './contact-form.component.scss',
    imports: [ReactiveFormsModule, CommonModule, SuccessToastComponent]
})
export class ContactFormComponent {
  contactForm?: any;
  contactFormSubmitted = false;

  constructor(
    private fb: FormBuilder,
    public successToastService: SuccessToastService
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required ,Validators.email]],
      queryType: ['', Validators.required],
      message: ['', Validators.required],
      consent: ['', Validators.required]
    }, {
      updateOn: 'submit'
    });
  }

  validateForm(): void {
    this.contactFormSubmitted = true;
    if (this.contactForm.valid) {
      this.successToastService!.isFormValid = true;
      this.contactFormSubmitted = false;
      this.resetForm();
    }
  }

  resetForm() {
    this.contactForm?.reset();
    setTimeout(() => {
      this.successToastService!.isFormValid = false;
    }, 4500);
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get emailAddress() {
    return this.contactForm.get('emailAddress');
  }

  get queryType() {
    return this.contactForm.get('queryType');
  }

  get message() {
    return this.contactForm.get('message');
  }

  get consent() {
    return this.contactForm.get('consent');
  }
}
