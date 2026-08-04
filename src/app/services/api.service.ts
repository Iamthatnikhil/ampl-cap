import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  currentRoute!: string;
  //apiURL: string = 'http://localhost/cgfe-project/api/veroneep/Ep_api_calls.php';
  apiURL: string = 'https://apiv1.credentglobal.com/veroneep/Ep_api_calls.php';
  headers: any = {};


  constructor(private HttpClientRequest: HttpClient, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show progress spinner or progress bar
        //console.log('Route change detected');
      }

      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url;
        //alert(this.currentRoute);
        // if(event.url=='/dashboard/project-edit'){
        // } else{

        // }
      }

      if (event instanceof NavigationError) {
        // Hide progress spinner or progress bar
        // Present error to user
        console.log(event.error);
      }
    });

  }

  setHeaderToken(emptyToken: boolean) {
    let token = '';
    switch (emptyToken) {
      //keep token empty ehere no authentication is required
      case false:
        token = '';
        break;
      case true:
        token = ''
        break;
    }

    this.headers = {
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + token
      // 'Content-Type': 'application/json' 
    };
  }
  docsList(authReqBy:string, authReqFor:string, status:string, trash: number, page:string) {
    let postParams = new HttpParams()
      .append('authReqSource', 'Web')
      .append('authReqCat', 'Docs')
      .append('authReqType', 'docList')
      .append('authReqBy', authReqBy)
      .append('authReqFor', authReqFor)
      .append('docStatus', status)
      .append('docTrash', trash.toString())
      .append('docPage', page);
    return this.HttpClientRequest.post(this.apiURL, postParams, { headers: this.headers });
  }

  //blog related functions
  blogList(authReqBy:string, authReqFor:string, status:string, trash: number) {
    let postParams = new HttpParams()
      .append('authReqSource', 'Web')
      .append('authReqCat', 'Blog')
      .append('authReqType', 'bList')
      .append('authReqBy', authReqBy)
      .append('authReqFor', authReqFor)
      .append('bStatus', status)
      .append('bTrash', trash.toString());
    return this.HttpClientRequest.post(this.apiURL, postParams, { headers: this.headers });
  }
  blogDetail(authReqBy:string, authReqFor:string, bId:number,) {
    let postParams = new HttpParams()
      .append('authReqSource', 'Web')
      .append('authReqCat', 'Blog')
      .append('authReqType', 'bDetail')
      .append('authReqBy', authReqBy)
      .append('authReqFor', authReqFor)
      .append('bID', bId.toString());
    return this.HttpClientRequest.post(this.apiURL, postParams, { headers: this.headers });
  }

    //article related functions
  articleList(authReqBy:string, authReqFor:string, status:string, trash: number) {
    let postParams = new HttpParams()
      .append('authReqSource', 'Web')
      .append('authReqCat', 'Article')
      .append('authReqType', 'aList')
      .append('authReqBy', authReqBy)
      .append('authReqFor', authReqFor)
      .append('aStatus', status)
      .append('aTrash', trash.toString());
    return this.HttpClientRequest.post(this.apiURL, postParams, { headers: this.headers });
  }

    //videos related functions
  videoList(authReqBy:string, authReqFor:string, status:string, trash: number) {
    let postParams = new HttpParams()
      .append('authReqSource', 'Web')
      .append('authReqCat', 'Video')
      .append('authReqType', 'vList')
      .append('authReqBy', authReqBy)
      .append('authReqFor', authReqFor)
      .append('bStatus', status)
      .append('bTrash', trash.toString());
    return this.HttpClientRequest.post(this.apiURL, postParams, { headers: this.headers });
  }

      //brochure related functions
  brochureList(authReqBy:string, authReqFor:string, status:string, trash: number) {
    let postParams = new HttpParams()
      .append('authReqSource', 'Web')
      .append('authReqCat', 'Brochure')
      .append('authReqType', 'bList')
      .append('authReqBy', authReqBy)
      .append('authReqFor', authReqFor)
      .append('bStatus', status)
      .append('bTrash', trash.toString());
    return this.HttpClientRequest.post(this.apiURL, postParams, { headers: this.headers });
  }


}
