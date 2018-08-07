import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Health} from '../model/health'

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  health:Health;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.fetchHealthMetrics();
  }

  fetchHealthMetrics() {
    this.http.get('http://localhost:8081/actuator/health').subscribe(health => this.health = health);
  }
}
