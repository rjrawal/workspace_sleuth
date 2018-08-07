import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Loggers } from '../model/loggers';
import { Logger } from '../model/logger';


@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  loggerList:Loggers;
  objectKeys = Object.keys;
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.fetchLoggerList();
  }

  fetchLoggerList() {
    this.http.get('http://localhost:8081/actuator/loggers').subscribe(loggerList => {
      this.loggerList = loggerList;
    });
  }

}
