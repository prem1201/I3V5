import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { ForecastPage } from '../forecast/forecast';
// import { ReportsPage } from './../reports/reports';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    HomePage,
    ListPage,
    ForecastPage
    // ReportsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(HomePage),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    ListPage,
    ForecastPage
    // ReportsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
