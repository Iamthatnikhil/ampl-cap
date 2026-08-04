import { Component,OnInit,ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
declare var jQuery:any;
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent  implements OnInit  {

  @ViewChild('applyJob') applyJob: ElementRef | undefined;

 
  selectedFiles: FileList | undefined;
  progressInfos = []
  fileSource: any;
  formData: any;
   jobs:any;
   pathUrl: any;
 

   selectedJobList:any; 
   honeypot: FormControl = new FormControl(""); 
   submitted: boolean = false; 
   responseMessage!: string; 
   isClicked: boolean = false;
   constructor(private http: HttpClient, private router: Router) { }


   form = {
    candidate_name : "",
    userPhone: "",
    candidate_email: "",
    position_applied : "",
    candidate_cv : "",
    message : ""
    }
   
  ngOnInit(): void {
    this.jobList(); 
   } 

   selectedJob(items){
    this.selectedJobList = items.title;
     this.form = {
       candidate_name : "",
      userPhone: "",
      candidate_email: "",
      position_applied : items.title,
      candidate_cv : "",
      message : ""
      }
      console.log(this.form)
   // this.form.position_applied=items.title;
  }
 
  upload($event: any){
    this.candidate_cv = $event.target.files[0];
    // console.log(files, "Phani")
   // this.uploadAndProgress(files);
  }
  // Get API
  jobList(){
    this.http.get(`${environment.CareerAPI}`).subscribe((response) => {
      console.log(response);
      this.jobs=response;
    });
  }
 // Post API

   addApplyJobInfo(form:NgForm,cvPath){ 
   
    // var formData: any = new FormData();
    //  formData.append('file', this.candidate_cv);
 
     var formVal = {
      from_email: "info@credentglobal.com",
      to_email: "sm@theassay.co.uk",
      subject: "Apply for the " + this.selectedJobList,
       body: "<b>Name:</b> " + "<span style='font-size:18px; color:#28639d;'>" + form.value.candidate_name + "</span>" + 
       "<br>" + "<b>Phone Number:</b> " + "<span style='font-size:18px; color:#28639d;'>" + form.value.userPhone + "</span>" +
         "<br>" + "<b>Email Id:</b> " + "<span style='font-size:18px; color:#28639d;'>" + form.value.candidate_email + "</span>" +
         "<br>" + "<b>Designation :</b> " + "<span style='font-size:18px; color:#28639d;'>" + this.selectedJobList + "</span>" +
          "<br>" + "<b>Resume :</b> " + "<a style='font-size:18px; color:#28639d;' href='"+cvPath+"' target='_blank'> Candidate CV</a>" +
          "<br>" + "<b>Message:</b> " + "<br>" + "<span style='font-size:18px; color:#28639d;'>" + form.value.message + "</span>",
    }

      console.log(form.value)
       this.http.post("https://wcadmin.theassay.co.uk/send/send_email/" , formVal).subscribe
       ((response:any) => 
       {
        
       this.autoReplay(form);
      
        //this.jobPost(form);
      
        // if (response["result"] == "success") {
        //    this.responseMessage = "Congratulations! Your Job Application was Successful.";
        //  } 
        //  else {
        //   this.responseMessage = "Congratulations! Your Job Application was Successful.";
        //  }
         
        this.submitted = true;  
      
      },
        // (error) => {
        //   this.responseMessage = "Please check the values";
        //     this.submitted = true; 
        // }
      );
        
      } 


  candidate_cv(arg0: string, candidate_cv: any) {
    throw new Error('Method not implemented.');
  }

      jobPost(form:NgForm){
        var formData: any = new FormData();
        formData.append('candidate_cv', this.candidate_cv);
        formData.append("candidate_name", this.form.candidate_name);
        formData.append("userPhone", this.form.userPhone);
        formData.append("candidate_email", this.form.candidate_email);
        formData.append("position_applied", this.selectedJobList);
        formData.append("message", this.form.message);
        console.log(formData, "updateForm");
           this.http.post(`${environment.JobPosting}`, formData).subscribe((response:any) => {
          console.log(response,"Response data");
          var cvPath="https://api.theassay.co.uk" + response.candidate_cv
          this.jobs=response;
          this.addApplyJobInfo(form,cvPath);  
          //  this.applyJob.nativeElement.dismiss();
        //   $("#applyJob").modal("hide");
            jQuery("#applyJob").modal("hide");
           Swal.fire('Your job application successfully sent.');

          
        },
        
        
        );
      }


      autoReplay(form:NgForm) {   
       
        var formData: any = new FormData();
        var formVal = {
        
          from_email: "info@credentglobal.com",
          to_email: form.value.candidate_email,
          subject: "Acknowledgement of Application - Credent Global Finance ",
          body: " Hello " + form.value.candidate_name  + "," +    
    
            "<br>"  + "<p style='font-size:14px; color:#333;'>"  + 'Thank you for submitting your application to Credent Global Finance. We appreciate your interest in joining our team and taking the time to share your qualifications with us.' + "</p>" +
              "<span style='font-size:14px; color:#333;'>" + "We have received your application and would like to inform you that we are currently in the process of reviewing it. Our hiring team carefully evaluates each candidate's credentials and experience to ensure a thorough and fair assessment."+ "</span>" +
           "<p style='font-size:14px; color:#333;'>" + "We understand the importance of your application and are committed to conducting a comprehensive evaluation. Please be aware that this process may take some time as we receive a significant number of applications. However, please rest assured that we will thoroughly review your qualifications and get back to you as soon as possible." + "</p>" +
            "<p style='font-size:14px; color:#333;'>" + "While reviewing your application, we encourage you to learn more about our values, and our work. Our website credentglobal.com provides comprehensive information about our company culture, mission, and services." + "</p>" +
    
            "<p style='font-size:14px; color:#333;'>" + "We appreciate your interest, and we look forward to the possibility of working with you. We will be in touch with you soon regarding the status of your application." + "</p>" +
            "<br>" + "<br>"  + 
            "<p style='font-size:14px; color:#333; margin-bottom:0px; margin-top:0px;'>" +"Best regards, " +  "</p>"  +
            "<p style='font-size:14px; color:#333; margin-bottom:0px; margin-top:0px;'>" + "Credent Global Finance" + "</p>"
    
        }
       
    
        console.log(formVal)
        this.http.post("https://wcadmin.theassay.co.uk/send/send_email/", formVal).subscribe(
          (response) => { 
          },
          
        );
      //}
    }




}
