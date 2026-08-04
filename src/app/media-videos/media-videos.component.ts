import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-media-videos',
  templateUrl: './media-videos.component.html',
  styleUrls: ['./media-videos.component.css']
})
export class MediaVideosComponent {
  constructor(private http: HttpClient, private router: Router, private sanitizer: DomSanitizer, private apiService:ApiService) { }
    media:string='';
    videos : any;
    imageUrls: string = `${environment.LocalFilePath}`
    videoUrl: string[] = []; 


    generateSafeUrl(url: string): SafeResourceUrl {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    ngOnInit(): void {
      //this.videosList();
    this.fetchVideoList();
   }


   videosList(){
    this.http.get<any[]>(`${environment.videoAPI}`).subscribe((response) => {
      console.log(response);
        this.videos=response;
        this.videoUrl= response.map((video: any) => video.url);
    });
 }

    fetchVideoList() {
    this.apiService.setHeaderToken(false);
    this.apiService.videoList('User', 'User', 'Active', 0).subscribe({
      next: (response: any) => {
        console.log(response)
        let error = response['error'];
        if (!error) {
          this.videos = response['videos'];

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


getYouTubeVideoId(url: string): string | null {
  const regex = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

getYouTubeVideoIdFromEmbedURL(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:embed|watch).*?(?:\?|&)v=|youtube\.com\/embed\/|youtu\.be\/)([^?&]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
}
