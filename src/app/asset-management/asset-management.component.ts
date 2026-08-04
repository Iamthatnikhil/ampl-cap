import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset-management',
  templateUrl: './asset-management.component.html',
  styleUrls: ['./asset-management.component.css']
})
export class AssetManagementComponent {
  constructor(private http: HttpClient, private router: Router) { }
  brouchers: any;

  imageUrls: string = `${environment.LocalFilePath}`

  showModal = false;
  private hasOpened = false;

  ngOnInit(): void {
    this.brouchersList();
    this.autoOpenModal();
  }

  brouchersList() {
    this.http.get(`${environment.BrouchersUpload}`).subscribe((response) => {
      console.log(response);
      this.brouchers = response;
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
