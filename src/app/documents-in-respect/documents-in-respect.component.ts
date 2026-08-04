import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-documents-in-respect',
  templateUrl: './documents-in-respect.component.html',
  styleUrls: ['./documents-in-respect.component.css']
})
export class DocumentsInRespectComponent {

  constructor(private http: HttpClient, private router: Router) { }

  filterCategoty:any;
  imageUrls: string = `${environment.LocalFilePath}`

  ngOnInit(): void {
    this.uploadPdfs();

   }

   uploadPdfs(){
    this.http.get(`${environment.PdfUpload}`).subscribe((response:any) => {
      this.filterCategoty = response.filter(category=>category.uploads_category==='Document in respect to proposed right issue')
      console.log(this.filterCategoty);
    });
  }


}
