import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { MetricDetails } from '../../model/metric-details';


@Component({
  selector: 'app-metric-dialog',
  templateUrl: './metric-dialog.component.html',
  styleUrls: ['./metric-dialog.component.css']
})
export class MetricDialogComponent implements OnInit {

  metricDetails:MetricDetails;

  constructor(private http:HttpClient, public dialogRef: MatDialogRef<MetricDialogComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) { }

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.http.get('http://localhost:8081/actuator/metrics/' + this.data.name).subscribe(metricDetails => this.metricDetails = metricDetails);
  }

}
