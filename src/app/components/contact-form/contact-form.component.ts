import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SuccessToastComponent } from "../success-toast/success-toast.component";
import { SuccessToastService } from '../../services/success-toast.service';
import { emailValidator } from '../../validators/email.validator';

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
  @ViewChildren('firstNameInput, lastNameInput, emailAddressInput, queryTypeInput, messageTextarea, consentCheckbox') inputs!: QueryList<ElementRef>;

  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2,
    public successToastService: SuccessToastService
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, emailValidator()]],
      queryType: ['', Validators.required],
      message: ['', Validators.required],
      consent: [false, Validators.requiredTrue]
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
    } else {
      setTimeout(() => {
        this.setFocusOnFirstInvalidInput();
      }, 0);
    }
  }

  resetForm() {
    this.contactForm?.reset();
    setTimeout(() => {
      this.successToastService!.isFormValid = false;
    }, 4500);
  }

  setFocusOnFirstInvalidInput() {
    for (const input of this.inputs.toArray()) {
      if (input.nativeElement.getAttribute('aria-invalid') === 'true') {
        this.renderer.selectRootElement(input.nativeElement).focus();
        break;
      }
    }
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
