import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-annual-general-meetings',
  templateUrl: './annual-general-meetings.component.html',
  styleUrls: ['./annual-general-meetings.component.css']
})
export class AnnualGeneralMeetingsComponent {

  docs1: any;
  mediaUrlDocs1!: string;

  docs2: any;
  mediaUrlDocs2!: string;

  docs3: any;
  mediaUrlDocs3!: string;

  docs4: any;
  mediaUrlDocs4!: string;

  constructor(private http: HttpClient, private router: Router, private apiService:ApiService) { }

  filterCategoty:any;
  filterCategotyVoting:any;
  filterCategotyOutcomes:any;
  imageUrls: string = `${environment.LocalFilePath}`

  ngOnInit(): void {
    this.uploadPdfs();
    this.fetchDocsList1();
   }
  fetchDocsList1() {

    this.apiService.setHeaderToken(false);
    this.apiService.docsList('User', 'User', 'Active', 0, 'agm_notices').subscribe({
      next: (response: any) => {
        //console.log(response)

        let error = response['error'];
        if (!error) {
          this.docs1 = response['docs'];
          this.mediaUrlDocs1 = response['media_url_docs'];
        } else {
          //display error message
          //alert(response['message']);
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
    this.apiService.docsList('User', 'User', 'Active', 0, 'egm_notices').subscribe({
      next: (response: any) => {
        //console.log(response)

        let error = response['error'];
        if (!error) {
          this.docs2 = response['docs'];
          this.mediaUrlDocs2 = response['media_url_docs'];
        } else {
          //display error message
          //alert(response['message']);
        }
         this.fetchDocsList3();
      },
      error: (error: any) => {
        console.log(error);
        alert(error);
      }
    });
  }
    fetchDocsList3() {

    this.apiService.setHeaderToken(false);
    this.apiService.docsList('User', 'User', 'Active', 0, 'agm_egm_voting_results').subscribe({
      next: (response: any) => {
        //console.log(response)

        let error = response['error'];
        if (!error) {
          this.docs3 = response['docs'];
          this.mediaUrlDocs3 = response['media_url_docs'];
        } else {
          //display error message
          //alert(response['message']);
        }
          this.fetchDocsList4();
         //this.fetchDocsList2();
      },
      error: (error: any) => {
        console.log(error);
        alert(error);
      }
    });
  }

    fetchDocsList4() {

    this.apiService.setHeaderToken(false);
    this.apiService.docsList('User', 'User', 'Active', 0, 'agm_egm_outcomes').subscribe({
      next: (response: any) => {
        //console.log(response)

        let error = response['error'];
        if (!error) {
          this.docs4 = response['docs'];
          this.mediaUrlDocs4 = response['media_url_docs'];
        } else {
          //display error message
          //alert(response['message']);
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
      this.filterCategoty = response.filter(category=>category.uploads_category==='Notices of AGM');
      this.filterCategotyVoting = response.filter(category=>category.uploads_category==='Voting Results');
      this.filterCategotyOutcomes = response.filter(category=>category.uploads_category==='Outcomes');
      console.log(this.filterCategoty);
    });
  }

}
