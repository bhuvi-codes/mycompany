import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css']
})

export class EmployeeinfoComponent implements OnInit {

  // Variables
  employeelist: any[];
  chartview:boolean = false;

  // Bar chart variables
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          userCallback: function (label, index, labels) {
            // when the floored value is the same as the value we have a whole number
            if (Math.floor(label) === label) {
              return label;
            }
          },
        }
      }],
    },
  };
  barChartColors = [
    { backgroundColor:"#2ED5FE" }
  ];
  barChartLabels = ['Development', 'Testing', 'System Admin', 'Finance'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    { data: [0, 0, 0, 0], label: 'No. of Employees per Department' }
  ];

  constructor(private httpobj: HttpClient) { }

  // on-init, load employees
  ngOnInit(): void {
    this.loademployees();
  }

  // loademployees function loads the employees from backend and counts the number in each department
  loademployees() {
    var url = "http://localhost:3000/employees";
    this.httpobj.get(url).subscribe(response => {
      this.employeelist = response as string[];
      // initialize counters
      var dev: number = 0
      var test: number = 0
      var sys: number = 0
      var fin: number = 0;
      // count employees per department
      for (var i = 0; i < this.employeelist.length; i++) {
        switch (this.employeelist[i].dept) {
          case "Development":
            dev++;
            break;
          case "Testing":
            test++;
            break;
          case "System Admin":
            sys++;
            break;
          case "Finance":
            fin++;
            break;
        }
      }
      // update chart data
      this.barChartData = [
        { data: [dev, test, sys, fin], label: 'No of Employees' }
      ];
    });
  }
}
