import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {

  constructor(private http: HttpClient, private router: Router, private apiService:ApiService) { }
  // items: any[] = [];
  article: any;

  articles: any;
  mediaUrl!: string;

  imageUrls: string = `${environment.LocalFilePath}`

  ngOnInit(): void {
    //this.articleList();
    this.fetchArticleList();
  }

  articleList() {
    this.http.get(`${environment.ArticleAPI}`).subscribe((response) => {
      console.log(response);
      this.article = response;
    });
  }

  fetchArticleList() {
    this.apiService.setHeaderToken(false);
    this.apiService.articleList('User', 'User', 'Active', 0).subscribe({
      next: (response: any) => {
        console.log(response)
        let error = response['error'];
        if (!error) {
          this.articles = response['articles'];
          this.mediaUrl = response['media_url'];
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

}
