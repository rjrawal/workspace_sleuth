import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HealthComponent } from './health/health.component';
import { InfoComponent } from './info/info.component';
import { LoggerComponent } from './logger/logger.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MetricsComponent } from './metrics/metrics.component';
import { MatDialogModule } from '@angular/material';
import { MetricDialogComponent } from './dialog/metric-dialog/metric-dialog.component';
import { AuthHttpInterceptor } from './auth/auth-http-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    InfoComponent,
    LoggerComponent,
    MetricsComponent,
    MetricDialogComponent
  ],
  imports: [
    BrowserModule, MatDialogModule,BrowserAnimationsModule,HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [MetricDialogComponent]
})
export class AppModule { }
