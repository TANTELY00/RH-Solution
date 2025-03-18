import { HttpClient ,HttpClientModule,HttpDownloadProgressEvent,HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-analyse-ia',
  standalone:true,
  imports: [
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './analyse-ia.component.html',
  styleUrl: './analyse-ia.component.css'
})
export class AnalyseIaComponent {

  question : any;
  reponse : any;

  constructor(private http:HttpClient) { }

  askAgent() {
    this.reponse="";
     this.http.get("http://localhost:8091/askAgent?request="+this.question,
       {responseType : 'text', observe : 'events', reportProgress :true})
       .subscribe({
         next : evt => {
           if(evt.type ===HttpEventType.DownloadProgress){
             this.reponse = (evt as HttpDownloadProgressEvent).partialText
           }
         },
         error : err => {
           console.log(err);
           console.log(err);
         },
         complete :() => {

         }
       })
  }

}
