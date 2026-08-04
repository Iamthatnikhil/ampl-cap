import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import jquery from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  response: any;
  renderer: any;
  hasOpened: any;
  constructor(private http: HttpClient, private router: Router) { }
  @ViewChild('ourVision') ourVision!: ElementRef;
  @ViewChild('ourMission') ourMission!: ElementRef;
  @ViewChild('ourValues') ourValues!: ElementRef;

  vision() {
    this.ourVision.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  mission() {
    this.ourMission.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  values() {
    this.ourValues.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  article: any;
  imageUrls: string = `${environment.LocalFilePath}`
  showModal: boolean = false;
  
  


  ngOnInit(): void {
    jquery(".webinarPopup").addClass("show")
    jquery("body").addClass("overlay")
    this.autoOpenModal();

    this.articleList(); //calling articleList method
  }
  


  toggleModal() {
    jquery(".webinarPopup").removeClass("show")
  }
  articleList() {
    this.http.get(`${environment.ArticleAPI}`).subscribe((response) => {
      console.log(response);
      this.article = response;
    });
  }
  autoOpenModal() {
    // Automatically open the modal once after 3 seconds
    setTimeout(() => {
      if (!this.hasOpened) {
        this.openModal();
        this.hasOpened = true;
      }
    }, 3000);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
