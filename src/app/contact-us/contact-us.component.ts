import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';


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


  constructor(private fb: FormBuilder) {
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
      alert('Please complete the form and verify reCAPTCHA.');
      return;
    }

    this.successMessage = '';
    this.errorMessage = '';
    this.isSubmitting = true;
    const serviceID = 'service_5vcn2w7';
    const templateID = 'template_ilw01vk';
    const publicKey = 'SW72w8Ikpdyg3yZQM';

    const formData = {
      ...this.contactForm.value,
      'g-recaptcha-response': this.recaptchaToken
    };

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        this.successMessage = 'Message sent successfully!';
        //alert('Message sent successfully!');
        this.contactForm.reset();
        this.isSubmitting = false;

      })
      .catch((error) => {
        //console.error('EmailJS Error:', error);
        this.errorMessage = 'Mail Error: ' + error;
        //alert('Failed to send message.');
        this.isSubmitting = false;
      });
  }

}

