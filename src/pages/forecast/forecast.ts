import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ForecastService } from './../forecast/forecast.service';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html'
})

export class ForecastPage {
  selectedItem: any;
  icons: string[];
  data:string[];
  locationsData:string[];
  WagonTypeData:string[];
  
  getForecastMadeOverReport: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(public navCtrl: NavController, public ForecastService: ForecastService) {
    // If we navigated to this page, we will have an item available as a nav param


    // forecastReport(event, item) {
    //   // That's right, we're pushing to ourselves!
    //   this.navCtrl.setRoot(ReportsPage);

    
    
    this.ForecastService.getForecastMadeOverReport()
      .subscribe(hero => {
        console.log(hero);
        this.data=hero.response;
        this.locationsData=hero.locations;
        this.WagonTypeData=hero.wagonType;
        console.log(this.data);
      });
  }
  filterLocationData(IC_LOC: string): void {
alert(IC_LOC);
  }
}
