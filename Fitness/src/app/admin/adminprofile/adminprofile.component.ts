import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  constructor(public profileS:ProfileService) { }

  ngOnInit(): void {
    this.profileS.GetUserInfoByID()
    this.profileS.GetStatistics()
  }

}
