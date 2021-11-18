import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviewtoadm',
  templateUrl: './reviewtoadm.component.html',
  styleUrls: ['./reviewtoadm.component.css']
})
export class ReviewtoadmComponent implements OnInit {

  constructor(public reviewS:ReviewService) { }

  ngOnInit(): void {
    this.reviewS.getUnCheckReview()
  }

}
