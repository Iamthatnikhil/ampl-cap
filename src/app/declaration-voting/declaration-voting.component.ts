import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-declaration-voting',
  templateUrl: './declaration-voting.component.html',
  styleUrls: ['./declaration-voting.component.css']
})
export class DeclarationVotingComponent {
    docs: any;
  mediaUrlDocs!: string;
  constructor(private http: HttpClient, private router: Router, private apiService:ApiService) { }

  filterCategoty:any;
  imageUrls: string = `${environment.LocalFilePath}`

  ngOnInit(): void {
    this.uploadPdfs();
       this.fetchDocsList();
   }
 fetchDocsList() {

    this.apiService.setHeaderToken(false);
    this.apiService.docsList('User', 'User', 'Active', 0, 'postal_ballot_declaration_of_voting').subscribe({
      next: (response: any) => {
        //console.log(response)

        let error = response['error'];
        if (!error) {
          this.docs = response['docs'];
          this.mediaUrlDocs = response['media_url_docs'];
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
      this.filterCategoty = response.filter(category=>category.uploads_category==='Declaration of Voting Results by Chairman')
      console.log(this.filterCategoty);
    });
  }

}
