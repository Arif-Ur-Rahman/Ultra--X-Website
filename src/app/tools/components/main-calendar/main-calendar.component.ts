import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-main-calendar',
  template: '<ejs-schedule [eventSettings]="eventObject" [currentView]="setView"></ejs-schedule>',
  // templateUrl: './main-calendar.component.html',
  styleUrls: ['./main-calendar.component.css']
})
export class MainCalendarComponent implements OnInit {

  public setView: View = 'Month';

  public eventObject: EventSettingsModel = {
    dataSource:[
      {
        Id: 1,
        color: "#ff0000",
        Subject: "Casual Leave(Gopal san)",
        StartTime: new Date(2022,3,24),
        EndTime: new Date(2022,3,26),
        IsAllDay: true
      },

      {
        Id: 2,
        Subject: "Sick Leave(Arif san)",
        StartTime: new Date(2022,3,20),
        EndTime: new Date(2022,3,20),
        IsAllDay: true
      },
      {
        Id: 2,
        Subject: "Covid Leave(Jamal san)",
        StartTime: new Date(2022,3,10),
        EndTime: new Date(2022,3,13),
        IsAllDay: true
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
