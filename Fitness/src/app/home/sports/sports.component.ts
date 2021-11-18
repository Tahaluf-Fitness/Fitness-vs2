import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(public reviewS:ReviewService) { }

  ngOnInit(): void {
    this.reviewS.GetCheckedReview()
  }

}
