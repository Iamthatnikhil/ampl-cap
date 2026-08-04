import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ApiService } from '../services/api.service';
 
 

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {

  getKey: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router,  private apiService:ApiService) { 
    
  }
  blog:any;
  mediaUrl!:string;
  blogId:any;
  urlId:any;
  ipAddress:any;
  ipAddr:any;
  likes: number = 0;
  dislikes: number = 0; 

  
  likeCount: number = 0;
  dislikeCount: number = 0;
  isLiked: boolean = false;
  isDisliked: boolean = false; 

  statusClass = 'not-active';
  imageUrls: string = `${environment.LocalFilePath}`

   ngOnInit(): void {
    this.blogId = this.route.snapshot.paramMap.get('id');
   //this.blogListId(this.blogId);
   this.fetchBlogDetail();
   console.log(this.blogId);  
   this.getIpAddress();
   this.getLikes();
  }

  
  shareUrl() {
    const currentUrl = window.location.href;
    console.log("currentUrl", currentUrl);
     //this.clipboard.copy(currentUrl);
     navigator.clipboard.writeText(currentUrl)
      .then(() => {
        // Success
       
          Swal.fire('Link Copied');
      })
      .catch((error) => {
        // Error
        console.error('Failed to copy URL to clipboard:', error);
      });
   }


  
  getIpAddress(){
   console.log(this.ipAddress,'srinu');
    this.http.get('http://api.ipify.org/?format=json').subscribe((response) => {
       console.log(response);
       this.ipAddress = response
       console.log(this.ipAddress)
       this.ipAddr = this.ipAddress.ip
       console.log(this.ipAddr)
       this.getYourLike()
     
    });
 
  }

 

  getLikes(){
    this.http.get(`${environment.likesAPI}`).subscribe((response:any) => {
      console.log(response, "Likes count");
       console.log(response.length,"likes size")
      });
  }


  getYourLike(){
    this.http.get(`${environment.likesAPI}`).subscribe((response:any) => {
      console.log(response, "getYourLike");
      this.isLiked = response.like;
      this.isDisliked = response.dislike;
      });
  }
 

   like() {
        this.http.post(`${environment.likesAPI}`, null).subscribe((response:any)=>{
             console.log(response)
             if(response.statusCode=200){
                localStorage.setItem(this.getKey(this.postId), 'like');
             }
       })
       this.statusClass = 'active';
  }
  postId(postId: any): string {
    throw new Error('Method not implemented.');
  }

  // dislike(id:any) {
  //   var obj={
  //     "ip_address":this.ipAddress.ip,
  //     "blog":id,
  //     "like":false,
  //     "dislike":true,
  //   }

  //   this.http.post(`${environment.likesAPI}` , obj).subscribe((response)=>{
  //   })
  
  // }
 

 blogListId(id:any){
  this.http.get(`${environment.BlogAPI}`+ id).subscribe((response) => {
   console.log(response);
   console.log(id);
   this.blog=response;
 });
}
 


    fetchBlogDetail() {
    this.apiService.setHeaderToken(false);
    this.apiService.blogDetail('User','User',this.blogId).subscribe({
      next:(response: any) => {
        console.log(response)
        let error = response['error'];
        if (!error) {
          this.blog = response['blog_detail'];
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
