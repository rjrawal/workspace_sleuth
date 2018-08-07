import { Component, OnInit } from '@angular/core';
//import { Http,RequestOptionsArgs, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MetricNames } from '../model/metric-names';
import { MatDialog } from '@angular/material';
import { MetricDialogComponent } from '../dialog/metric-dialog/metric-dialog.component';


@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  metricList:MetricNames;
  /*
  private requestOptionsArgs:RequestOptionsArgs = {
    headers: new Headers({
      Authorization: 'Basic c3U6cGFzc3dvcmQ='
    }),
  };
  */
  constructor(private http:HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    this.fetchMetricList();
  }

  fetchMetricList() {
    this.http.get('http://localhost:8081/actuator/metrics').subscribe(metricList => this.metricList = metricList);
  }

  fetchMetricDetails(item:String){
    let dialogRef = this.dialog.open(MetricDialogComponent, {
      width: '400px',
      data: { name : item }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

