import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor( private http:HttpClient,private spiner :NgxSpinnerService,public msgS:MessagesService, private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

@Input () contactId:number|undefined;
@Input () name:string | undefined;
@Input () email:number| undefined;
@Input () subject:string|undefined;
@Input () message:string|undefined;

Delete(){
  if(this.contactId){
    debugger
    this.msgS.DeletebyID(this.contactId);
  }
  else {
    this.toastr.warning('This item cannot be deleted')
  }
}

Read(){

}



}
