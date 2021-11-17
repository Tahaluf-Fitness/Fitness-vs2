import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessagesService } from 'src/app/services/messages.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private router:Router,public userS:UsersService,private toastr:ToastrService,public msgS:MessagesService) {}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.msgS.GetAll()
  }

}
