import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {
  docs: any;
  mediaUrlDocs!: string;
  filterCategoty: any;
  imageUrls: string = `${environment.LocalFilePath}`;
  
  // Set default active tab to the first PMS option
  activeTab: string = 'disclosures-pms'; 

  // Configuration for ONLY the 3 requested tabs
  tabs = [
    { id: 'disclosures-pms', label: 'Disclosure - PMS' },
    { id: 'charter-pms', label: 'Investor Charter - PMS' },
    { id: 'complaints-pms', label: 'Complaints - PMS' },
    { id: 'documents-pms', label: 'CGFL NBFC Policies' },
    { id: 'anti-money-laundering', label: 'Anti Money Laundering' },
    { id: 'sebi-ai', label: 'SEBI Accredited Investor Framework' },
    { id: 'aif-policies', label: 'AIF Policies' },
    { id: 'ria-policies', label: 'RIA Policies' },
      { id: 'pms-policies', label: 'PMS Policies' }
  ];

  constructor(private http: HttpClient, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.uploadPdfs();
    this.fetchDocsList();
  }

  // Function to handle tab switching
  switchTab(tabId: string) {
    this.activeTab = tabId;
  }

  fetchDocsList() {
    this.apiService.setHeaderToken(false);
    this.apiService.docsList('User', 'User', 'Active', 0, 'policies').subscribe({
      next: (response: any) => {
        let error = response['error'];
        if (!error) {
          this.docs = response['docs'];
          this.mediaUrlDocs = response['media_url_docs'];
        } else {
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
    return 'assets/img/' + map[ext] || 'icon-file.png';
  }

  uploadPdfs() {
    this.http.get(`${environment.PdfUpload}`).subscribe((response: any) => {
      this.filterCategoty = response.filter((category: any) => category.uploads_category === 'Policies');
    });
  }
}