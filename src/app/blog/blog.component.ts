import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  constructor(private http: HttpClient, private router: Router, private apiService:ApiService) { }

  blog: any;
  mediaUrl!:string;


  
  imageUrls: string = `${environment.LocalFilePath}`

  ngOnInit(): void {
    //this.blogList();
    this.fetchBlogList();
  }

  blogView(id: any) {
    this.router.navigate(['/blog-details', id]);
  }
  blogList() {
    this.http.get(`${environment.BlogAPI}`).subscribe((response) => {
      console.log(response);
      this.blog = response;
    });
  }

    fetchBlogList() {
    this.apiService.setHeaderToken(false);
    this.apiService.blogList('User','User','Active',0).subscribe({
      next:(response: any) => {
        console.log(response)
        let error = response['error'];
        if (!error) {
          this.blog = response['blog_list'];
          this.mediaUrl= response['media_url'];
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
