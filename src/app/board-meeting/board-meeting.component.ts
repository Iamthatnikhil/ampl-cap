import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-board-meeting',
  templateUrl: './board-meeting.component.html',
  styleUrls: ['./board-meeting.component.css']
})
export class BoardMeetingComponent {

    docs:any;
  mediaUrlDocs!:string;


  docs1:any;
  mediaUrlDocs1!:string;

  constructor(private http: HttpClient, private router: Router, private apiService:ApiService) { }

  filterCategoty:any;
  filterCaregoryPrior:any;
  imageUrls: string = `${environment.LocalFilePath}`

  ngOnInit(): void {
    this.uploadPdfs();
        this.fetchDocsList();
    }
  fetchDocsList() {
     
    this.apiService.setHeaderToken(false);
    this.apiService.docsList('User','User','Active',0, 'bm_outcome').subscribe({
      next:(response: any) => {
        //console.log(response)

        let error = response['error'];
        if (!error) {
          this.docs = response['docs'];
          this.mediaUrlDocs= response['media_url_docs'];
        } else {
          //display error message
          alert(response['message']);
        }
         this.fetchDocsList1();
      },
      error:(error:any) =>{
        console.log(error);
         alert(error);
      }
    });
  }

         fetchDocsList1() {
     
    this.apiService.setHeaderToken(false);
    this.apiService.docsList('User','User','Active',0, 'bm_prior_intimations').subscribe({
      next:(response: any) => {
        //console.log(response)

        let error = response['error'];
        if (!error) {
          this.docs1 = response['docs'];
          this.mediaUrlDocs1= response['media_url_docs'];
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
    getFileIconFromName(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase() || '';

  const map: any = {
    pdf:  'icon-pdf.png',

    doc:  'icon-word.png',
    docx: 'icon-word.png',

    xls:  'icon-excel.png',
    xlsx: 'icon-excel.png',

    ppt:  'icon-ppt.png',
    pptx: 'icon-ppt.png',

    html: 'icon-html.png'
  };

  return 'assets/img/'+map[ext] || 'icon-file.png';   // default icon
}
   uploadPdfs(){
    this.http.get(`${environment.PdfUpload}`).subscribe((response:any) => {
      this.filterCategoty = response.filter(category=>category.uploads_category==='Outcome of BM');
      this.filterCaregoryPrior = response.filter(category=>category.uploads_category==='Prior Intimations')
      console.log(this.filterCategoty);
    });
  }
}
