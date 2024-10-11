import { Component, OnDestroy, OnInit } from '@angular/core';
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

    constructor(private base:BaseService){}
    ngOnInit():void{
      this.feliratkozas = this.base.getAllMessage().subscribe(
        (res)=>this.message=res
    )}

    ngOnDestroy(): void {
        if (this.feliratkozas) this.feliratkozas.unsubscribe()
    }

    pageDown(){
      document.getElementById("pageEnd")
    }
}


