import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-brouchers',
  templateUrl: './brouchers.component.html',
  styleUrls: ['./brouchers.component.css']
})
export class BrouchersComponent {
  constructor(private http: HttpClient, private router: Router, private apiService:ApiService) { }
  // brouchers: string[] = [];
  brouchers:any;

  mediaUrlImgs!:string;
  mediaUrlPdfs!:string;

  imageUrls: string = `${environment.LocalFilePath}`


  ngOnInit(): void {
   //this.brouchersList(); 
   this.fetchBrochureList();
  } 
 
 brouchersList(){
   this.http.get(`${environment.BrouchersUpload}`).subscribe((response) => {
     console.log(response);
     this.brouchers=response;
   });
 }

     fetchBrochureList() {
    this.apiService.setHeaderToken(false);
    this.apiService.brochureList('User','User','Active',0).subscribe({
      next:(response: any) => {
        console.log(response)
        let error = response['error'];
        if (!error) {
          this.brouchers = response['brochures'];
          this.mediaUrlImgs= response['media_url_imgs'];
          this.mediaUrlPdfs= response['media_url_pdfs'];
        } else {
          //display error message
          alert(response['message']);
        }
      },
      error:(error:any) =>{
        console.log(error);
         alert(error);
      }
    });
  }

}
