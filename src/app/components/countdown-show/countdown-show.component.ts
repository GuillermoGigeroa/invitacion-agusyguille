import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-countdown-show',
  templateUrl: './countdown-show.component.html',
  styleUrls: ['./countdown-show.component.scss']
})
export class CountdownShowComponent implements OnInit {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    const targetDate = new Date('2025-02-21T18:00:00');

    this.utilsService.getDaysRemaining(targetDate).subscribe(days => {
      this.days = days;
    });

    this.utilsService.getHoursRemaining(targetDate).subscribe(hours => {
      this.hours = hours;
    });

    this.utilsService.getMinutesRemaining(targetDate).subscribe(minutes => {
      this.minutes = minutes;
    });

    this.utilsService.getSecondsRemaining(targetDate).subscribe(seconds => {
      this.seconds = seconds;
    });
  }
}
