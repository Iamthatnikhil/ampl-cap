import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactusComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';
  recaptchaToken: string | null = null;


    constructor(
      private fb: FormBuilder,
      private http: HttpClient
    ) {
        this.contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        inquiry: ['', [Validators.required]],
        message: ['', [Validators.required, Validators.minLength(10)]],

      });
    }




  sendEmail() {

  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    this.errorMessage = 'Please complete all required fields.';
    return;
  }

  this.successMessage = '';
  this.errorMessage = '';
  this.isSubmitting = true;

  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbx_KpfSrYujiGrty8OG-fiSj-h3zkrmFJUa-IYFb4UZ3Afu4vn7JsbdzHEPmFq6F4I/exec';

  const formData = {
    name: this.contactForm.value.name || '',
    email: this.contactForm.value.email || '',
    phone: this.contactForm.value.phone || '',
    organisation: '',
    query: this.contactForm.value.inquiry || '',
    message: this.contactForm.value.message || '',
    website: ''
  };

  const body = new URLSearchParams();

  Object.entries(formData).forEach(([key, value]) => {
    body.set(key, value as string);
  });

  fetch(scriptUrl, {
    method: 'POST',
    body: body.toString(),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  })
  .then(async response => {

    const text = await response.text();

    console.log('Apps Script response:', text);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${text}`);
    }

    return JSON.parse(text);
  })
  .then(result => {

    if (result.success) {

      this.successMessage = 'Message sent successfully!';
      this.contactForm.reset();

    } else {

      this.errorMessage =
        result.error || 'Unable to send your message.';
    }

    this.isSubmitting = false;
  })
  .catch(error => {

    console.error('Contact form error:', error);

    this.errorMessage =
      error.message || 'Unable to submit the form.';

    this.isSubmitting = false;
  });
}

}

