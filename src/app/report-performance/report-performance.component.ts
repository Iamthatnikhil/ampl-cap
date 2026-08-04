import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-report-performance',
  templateUrl: './report-performance.component.html',
  styleUrls: ['./report-performance.component.css']
})
export class ReportPerformanceComponent {
  constructor(private http: HttpClient, private router: Router) { }

  filterCategoty:any;
  imageUrls: string = `${environment.LocalFilePath}`

  ngOnInit(): void {
    this.uploadPdfs();
    }

   uploadPdfs(){
    this.http.get(`${environment.PdfUpload}`).subscribe((response:any) => {
      this.filterCategoty = response.filter(category=>category.uploads_category==='Report of performance')
      console.log(this.filterCategoty);
    })
  }
}
