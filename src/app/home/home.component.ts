import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import jquery from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  
  response: any;
  renderer: any;
  hasOpened = false;
  activeSlideIndex = 0;
  sliderIntervalId: number | null = null;

  sliderItems = [
    {
      image: 'assets/img/revolution-slider/nbfc.jpg',
      alt: 'Non-Bank Financing Services',
      title: 'Non-Bank <br /><span>Financing</span> Services',
      text: 'In our vision to become the preferred partner in financial inclusion we are not only providing finances.',
      link: '/nbfc',
      buttonText: 'Read More',
    },
    {
      image: 'assets/img/revolution-slider/asset-management.jpg',
      alt: 'Asset Management',
      title: 'Asset <br /><span>Management</span>',
      text: 'We offers a wide range of carefully curated investment portfolios through our PMS and AIF investment structures',
      link: '/asset-management',
      buttonText: 'Read More',
    },
    {
      image: 'assets/img/revolution-slider/investment-banking-1.jpg',
      alt: 'Wealth Management',
      title: 'Wealth <br /><span>Management</span>',
      text: 'Build personalized financial plans, track portfolios, and grow long-term wealth with strategic guidance.',
      link: '/wealth-management',
      buttonText: 'Know More',
    },
    {
      image: 'assets/img/revolution-slider/investment-banking-1.jpg',
      alt: 'Investment Banking',
      title: 'Investment <br /><span>Banking</span>',
      text: 'Our investment banking division is a holistic partner to businesses of all scales and sectors.',
      link: '/investmentbanking',
      buttonText: 'Read More',
    },
  ];

  constructor(private http: HttpClient, private router: Router) {}

  private navigateAndScroll(fragment: string): void {
    this.router.navigate(['/about-us'], { fragment }).then(() => {
      setTimeout(() => {
        const section = document.querySelector(`#${fragment}`) as HTMLElement | null;
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    });
  }

  vision(): void {
    this.navigateAndScroll('ourVision');
  }

  mission(): void {
    this.navigateAndScroll('ourMission');
  }

  values(): void {
    this.navigateAndScroll('ourValues');
  }

  article: any;
  imageUrls: string = `${environment.LocalFilePath}`;
  showModal = false;

  ngOnInit(): void {
    jquery('.webinarPopup').addClass('show');
    jquery('body').addClass('overlay');
    this.autoOpenModal();
    this.articleList();
    this.startSlider();
  }

  ngOnDestroy(): void {
    if (this.sliderIntervalId !== null) {
      window.clearInterval(this.sliderIntervalId);
      this.sliderIntervalId = null;
    }
  }

  startSlider(): void {
    this.sliderIntervalId = window.setInterval(() => {
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.sliderItems.length;
    }, 5000);
  }

  toggleModal(): void {
    jquery('.webinarPopup').removeClass('show');
  }

  articleList(): void {
    this.http.get(`${environment.ArticleAPI}`).subscribe((response) => {
      console.log(response);
      this.article = response;
    });
  }

  autoOpenModal(): void {
    setTimeout(() => {
      if (!this.hasOpened) {
        this.openModal();
        this.hasOpened = true;
      }
    }, 3000);
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}

