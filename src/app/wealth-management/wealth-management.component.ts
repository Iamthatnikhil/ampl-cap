import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wealth-management',
  templateUrl: './wealth-management.component.html',
  styleUrls: ['./wealth-management.component.css']
})
export class WealthManagementComponent {
    docs1: any;
  mediaUrlDocs1!: string;

  docs2: any;
  mediaUrlDocs2!: string;

  docs3: any;
  mediaUrlDocs3!: string;
  
  constructor(private http: HttpClient, private router: Router, private apiService: ApiService) { }

  filterCategoty:any;
  imageUrls: string = `${environment.LocalFilePath}`

  ngOnInit(): void {
    
    this.uploadPdfs();
    this.fetchDocsList();
   }
fetchDocsList() {

    this.apiService.setHeaderToken(false);
    this.apiService.docsList('User', 'User', 'Active', 0, 'subsidiaries_financials_credent_asset_management_services_private_limited').subscribe({
      next: (response: any) => {
        //console.log(response)

        let error = response['error'];
        if (!error) {
          this.docs1 = response['docs'];
          this.mediaUrlDocs1 = response['media_url_docs'];
        } else {
          //display error message
          alert(response['message']);
        }
        this.fetchDocsList1();
      },
      error: (error: any) => {
        console.log(error);
        alert(error);
      }
    });
  }
  fetchDocsList1() {

    this.apiService.setHeaderToken(false);
    this.apiService.docsList('User', 'User', 'Active', 0, 'subsidiaries_financials_credent_investment_private_limited').subscribe({
      next: (response: any) => {
        //console.log(response)

        let error = response['error'];
        if (!error) {
          this.docs2 = response['docs'];
          this.mediaUrlDocs2 = response['media_url_docs'];
        } else {
          //display error message
          alert(response['message']);
        }
                this.fetchDocsList2();
      },
      error: (error: any) => {
        console.log(error);
        alert(error);
      }
    });
  }

  fetchDocsList2() {

    this.apiService.setHeaderToken(false);
    this.apiService.docsList('User', 'User', 'Active', 0, 'subsidiaries_financials_credent_property_advisory_private_limited').subscribe({
      next: (response: any) => {
        //console.log(response)

        let error = response['error'];
        if (!error) {
          this.docs3 = response['docs'];
          this.mediaUrlDocs3 = response['media_url_docs'];
        } else {
          //display error message
          alert(response['message']);
        }
      },
      error: (error: any) => {
        console.log(error);
        alert(error);
      }
    });
  }
  getFileIconFromName(filename: string): string {
    const ext = filename.split('.').pop()?.toLowerCase() || '';

    const map: any = {
      pdf: 'icon-pdf.png',

      doc: 'icon-word.png',
      docx: 'icon-word.png',

      xls: 'icon-excel.png',
      xlsx: 'icon-excel.png',

      ppt: 'icon-ppt.png',
      pptx: 'icon-ppt.png',

      html: 'icon-html.png'
    };

    return 'assets/img/' + map[ext] || 'icon-file.png';   // default icon
  }
   uploadPdfs(){
    this.http.get(`${environment.PdfUpload}`).subscribe((response:any) => {
      this.filterCategoty = response.filter(category=>category.uploads_category==='Subsidiaries Financials')
      console.log(this.filterCategoty);
    });
  }
}
