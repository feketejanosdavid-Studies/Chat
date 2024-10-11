import { afterRender, Component, OnDestroy, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})

export class MessagesComponent implements OnInit, OnDestroy {
    message:any=[]
    feliratkozas!:Subscription

    constructor(private base:BaseService){
    ath.getUsername().subscribe((res)=>this.userName=res)

      afterRender(()=>document.getElementById("pageEnd")?.scrollIntoView({behavior:"smooth"}))
    }


    ngOnInit():void{
      this.feliratkozas = this.base.getAllMessage().subscribe(
        (res:any)=>{
          this.message=[]
        for (const key in res) {
          console.log(res[key].uzi)
          this.message.push(res[key])
        }
      
      }
    )}

    ngOnDestroy(): void {
        if (this.feliratkozas) this.feliratkozas.unsubscribe()
    }

    pageDown(){
      document.getElementById("pageEnd")?.scrollIntoView({behavior:"smooth"})
      
    }
}


