import {Component, OnInit} from '@angular/core';
import {layOutDay} from '../event-helper';
import {EventInput, EventOutput} from '../event';

const sampleInput: EventInput[] = [ {start: 30, end: 150}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670} ];


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: EventOutput[] = layOutDay(sampleInput);
  time: string[] = [];
  halfTime: string[] = [];
  Math = Math;
  calculateLeft = (i, event) => {
    if (i === 0) {
      return 130;
    }
    return (130) + ((500 / event.length ) * i);
  };

  constructor() {

    for (let i = 0, hour = 9; i < 13; i++) {
      hour = hour > 12 ? 1 : hour;
      this.time.push(`${hour}:00 ${i < 3 ? 'AM' : 'PM'}`);
      if(i < 12) {
      this.halfTime.push(`${hour}:30 ${i < 3 ? 'AM' : 'PM'}`);
      }
      hour++;
    }
  }

  ngOnInit(): void {
  }

}
