import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  url= "http://172.16.16.148:7178/api/Messages/";

  private messageSubject= new Subject()

  constructor(private http:HttpClient) {
    this.downloadAllMessages()

    setInterval(
    ()=>
    this.http.get(this.url).forEach(
      (res)=>this.messageSubject.next(res)), 5000
    )

   }

  addMessage(message:string) {
    let body:any= {}
    body.userName="W3Schools"
    body.uzi = message


    console.log("Body: ",body)
    this.http.post(this.url, body).forEach(
      (res)=>console.log("Sikeres üzi küldés", res)
    )
  }

  getAllMessage() {
    return this.messageSubject
  }

  private downloadAllMessages() {
    this.http.get(this.url).subscribe(
      (res)=>this.messageSubject.next(res)
    )
  }
}
